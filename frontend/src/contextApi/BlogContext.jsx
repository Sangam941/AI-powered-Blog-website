import { useContext } from "react";
import { createContext } from "react";
import axios from 'axios'
import { useState } from "react";
import { toast } from 'react-hot-toast'
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


axios.defaults.baseURL = import.meta.env.VITE_BASE_URL
const BlogProvider = createContext()
 
export const BlogContext = ({ children }) => {

    const [blogs, setBlogs] = useState([])
    const [singleBlog, setSingleBlog] = useState('')
    const [loading, setLoading] = useState(false)
    const [dashboard, setDashboard] = useState({})
    const [btnLoading, setBtnLoading] = useState(false)

    const fetchAllBlogs = async () => {
        setLoading(true)
        try {
            const { data } = await axios.get('/blog/all-blog')

            setBlogs(data.allBlogs)
        } catch (error) {
            toast.error(error.response?.data?.message)
        }
        finally {
            setLoading(false)
        }
    }

    const fetchSingleBlog = async (id) => {
        setLoading(true)
        try {
            const { data } = await axios.get('/blog/single-blog/' + id)

            setSingleBlog(data.singleBlog)
        } catch (error) {
            toast.error(error.response?.data?.message)
        }
        finally {
            setLoading(false)
        }
    }

    const getDashboard = async () => {
        setLoading(true)
        try {
            const { data } = await axios.get('/blog/get-dashboard-data')

            setDashboard(data.dashboardData)
        } catch (error) {
            toast.error(error.response?.data?.message)
        }
        finally {
            setLoading(false)
        }
    }


    const addBlog = async (formData) => {
        setLoading(true)
        try {
            const { data } = await axios.post('/blog/add-blog', formData)

            toast.success(data.message)
            setBlogs(prev => [data.newBlog, ...prev])
            fetchAllBlogs()
        } catch (error) {
            toast.error(error.response?.data?.message)
        }
        finally {
            setLoading(false)
        }
    }

    const [myBlogsList, setMyBlogsList] = useState([])

    const fetchMyBlogs = async () => {
        setLoading(true)
        try {
            const { data } = await axios.get('/blog/fetch-my-blogs')

            setMyBlogsList(data.user.blogs)

        } catch (error) {
            toast.error(error.response?.data?.message)
        }
        finally {
            setLoading(false)
        }
    }

    const updateStatus = async (id) => {
        setBtnLoading(true)
        try {
            const { data } = await axios.post('/blog/update-status', { id })
            toast.success(data.message)
            fetchAllBlogs()
            fetchMyBlogs()
        }
        catch (error) {
            toast.error(error.response?.data?.message)
        }
        finally {
            setBtnLoading(false)
        }
    }

    const deleteBlog = async (id) => {
        setBtnLoading(true)
        try {
            const { data } = await axios.post('/blog/delete-blog', { id })
            toast.success(data.message)
            setBlogs(prev => prev.filter(blog => blog._id !== id));

            setMyBlogsList(prev => prev.filter(blog => blog._id !== id));
        }
        catch (error) {
            toast.error(error.response?.data?.message)
        }
        setBtnLoading(false)
    }

    const generateDescription = async (title, quill) => {
        setBtnLoading(true)    
        try {
            const { data } = await axios.post('/blog/generate-desc', { title })
            
            quill.current.root.innerHTML = data.generatedDescription

            toast.success("Description generated successfully")

        } catch (error) {
            toast.error(error.response?.data?.message)
        }
        finally {
            setBtnLoading(false)
        }
    }

    useEffect(() => {
        fetchAllBlogs()
    }, [])


    return (
        <BlogProvider.Provider value={{ blogs, loading, fetchSingleBlog, singleBlog, getDashboard, dashboard, addBlog, fetchMyBlogs, myBlogsList, updateStatus, deleteBlog, btnLoading , generateDescription}}>
            {children}
        </BlogProvider.Provider>
    )
}

export const useBlogContext = () => {
    return useContext(BlogProvider)
}