import BlogModel from "../models/BlogModel.js"
import CommentModel from "../models/CommentModel.js"
import UserModel from "../models/UserModel.js"


// Create comment
export const addComment = async (req,res)=>{
    try {
        const {text, isApproved} = req.body

        if(!text){
            return res.status(400).json({success:false, message:"comment is required"})
        }

        const blog = await BlogModel.findById({_id:req.params.id})

        if(!blog){
            return res.status(404).json({success:false, message: "Blog not found"})
        }

        const comment = await CommentModel.create({
            text,
            user: req.user.id,
            blog: blog._id,
            isApproved: isApproved === true || isApproved === 'true',
        })

        blog.comments.push(comment)

        await blog.save()

        res.status(200).json({success:true, message: "comment added", comment})

    } catch (error) {
        return res.status(500).json({success:false, message: error.message})
    }
}

// fetch all comments
export const getAllComments = async (req, res)=>{
    try {
        const allComment = await CommentModel.find().sort({createdAt:-1}).populate("user", "username").populate("blog", "title")

        return res.status(200).json({success:true, allComment})
    } catch (error) {
        return res.status(500).json({success: false, message:error.message})
    } 
}

// fetch single comments
export const getSingleBlogComments = async (req, res)=>{
    try {
        const {id} = req.params  // get all the comment of particular blog id

        const comments = await CommentModel.find({blog:id}).sort({createdAt:-1})
        .populate("user", "username")
        .populate("blog", "title subtitle")
        .limit(5)

        return res.status(200).json({success:true, comments})
    } catch (error) {
        return res.status(500).json({success: false, message:error.message})
    } 
}

// delete the commment
export const deleteComment = async (req,res)=>{
    try {
        const {id} = req.body

        const comment = await CommentModel.findById(id)

        if(!comment){
            return res.status(404).json({success:false, message:"no comment found"})
        }

        await CommentModel.findByIdAndDelete(id)
        const deleteFromBlog = await BlogModel.findByIdAndUpdate(comment.blog,
            {
                $pull: {comments:id}
            },
            {new:true}
        )

        if(deleteFromBlog.modifiedCount === 0){
            return res.status(404).json({success:false, message:"no comment found"})
        }
        return res.status(200).json({success:true, message:"comment deleted"})
    } catch (error) {
        return res.status(500).json({success:false, message:error.message})
    }
}

// approve the comment
export const approveComment = async (req,res)=>{
    try {
        const {id} = req.body

        const comment = await CommentModel.findByIdAndUpdate(id, {isApproved:true}, {new:true})
        return res.status(200).json({success:true, message:"comment approved"})
    } catch (error) {
        return res.status(500).json({success:false, message:error.message})
    }
}