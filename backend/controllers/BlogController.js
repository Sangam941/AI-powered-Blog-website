import UrlGenerator from '../utils/UrlGenerator.js';
import { v2 as cloudinary } from 'cloudinary';
import BlogModel from '../models/BlogModel.js';
import UserModel from '../models/UserModel.js';
import CommentModel from '../models/CommentModel.js';
import { main } from '../utils/generateWithGimini.js';

// add/create blog
export const addBlog = async (req, res) => {
    try {
        const { title, subtitle, description, isPublished, category } = req.body;
        const file = req.file;

        if (!file) {
            return res.status(400).json({ success: false, message: "No file uploaded" });
        }

        if (!title || !subtitle || !description || !category) {
            return res.status(400).json({ success: false, message: "All fields required" });
        }

        const fileUrl = UrlGenerator(file).content;

        const cloud = await cloudinary.uploader.upload(fileUrl, {
            folder: "Blog_images"
        });

        const newBlog = await BlogModel.create({
            title,
            subtitle,
            description,
            category,
            isPublished: isPublished === true || isPublished === 'true',
            image: {
                id: cloud.public_id,
                url: cloud.secure_url
            },
            author: req.user.id
        });

        req.user.blogs.push(newBlog._id)
        await req.user.save()

        return res.status(201).json({ success: true, message: "Blog created successfully", newBlog });

    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
};

// fetch all the blogs
export const getAllBlogs = async (req, res) => {
    try {
        const allBlogs = await BlogModel.find({ isPublished: true }).sort({ createdAt: -1 })
        return res.status(200).json({ success: true, allBlogs })
    } catch (error) {
        return res.status(500).json({ success: false, message: "No blogs are found: " + error.message })
    }
}

// fetch single blog
export const getSingleBlog = async (req, res) => {
    try {
        const singleBlog = await BlogModel.findById({ _id: req.params.id }).populate("author", "username email")

        if (!singleBlog) {
            return res.status(404).json({ success: false, message: "Blog not found" })
        }

        return res.status(200).json({ success: true, singleBlog })
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message })
    }
}

// delete the blog
export const deleteBlog = async (req, res) => {
    try {
        const { id } = req.body

        const blog = await BlogModel.findById(id)

        if (!blog) {
            return res.status(404).json({ success: false, message: "blog not found" })
        }

        await cloudinary.uploader.destroy(blog.image.id)
        await BlogModel.findOneAndDelete({ _id: id })

        await UserModel.findByIdAndUpdate(
            req.user.id,
            { $pull: { blogs: id } },
            { new: true }
        );

        await CommentModel.deleteMany({ blog: id })

        return res.status(200).json({ success: true, message: "Blog deleted successfully" })
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message })
    }
}

// update the status
export const updateStatus = async (req, res) => {
    try {
        const { id } = req.body
        const blog = await BlogModel.findById({ _id: id })

        if (!blog) {
            return res.status(404).json({ success: false, message: "Blog not found" })
        }

        blog.isPublished = !blog.isPublished
        await blog.save()

        return res.status(200).json({ success: true, message: "Blog status updated" })
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message })
    }
}

//  fetch all the user's bloglist
export const fetchMyBlogs = async (req, res) => {
    try {
        const user = await UserModel.findById(req.user.id).populate("blogs")

        if (!user) {
            return res.status(404).json({ success: false, message: "user not found" })
        }

        return res.status(200).json({ success: true, user })
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message })
    }
}

// data for dashboard icons
export const getDashboardData = async (req, res) => {
    try {
        const recentBlogs = await BlogModel.find().sort({ createdAt: -1 }).limit(5)
        const countBlogs = await BlogModel.countDocuments()
        const countComments = await CommentModel.countDocuments()
        const countDraftBlogs = await BlogModel.countDocuments({ isPublished: false })

        const dashboardData = {
            recentBlogs, countBlogs, countComments, countDraftBlogs
        }

        res.status(200).json({ success: true, dashboardData })
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message })
    }
}

export const generateDescription = async (req, res) => {
    try {
        const { title } = req.body;

        if (!title) {
            return res.status(400).json({ success: false, message: "Title is required" });
        }

        // const prompt = `
        //     Generate a blog description in HTML format for the topic: "${title}".
        //     IMPORTANT:
        //     - Return ONLY HTML.
        //     - NO explanation.
        //     - NO markdown.
        //     - NO backticks.
        //     Just pure HTML content. but for now provide me a sample and provide the output of 4-5 lines.
        //     `;

        const prompt = "who are you? provide this answer in single line HTML format.";

        // Call AI correctly
        const generatedDescription = await main(prompt);

        return res.status(200).json({
            success: true,
            generatedDescription
        });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
};

