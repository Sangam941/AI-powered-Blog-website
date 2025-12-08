import express from 'express'
import { addBlog, deleteBlog, fetchMyBlogs, generateDescription, getAllBlogs, getDashboardData, getSingleBlog, updateStatus } from '../controllers/BlogController.js'
import upload from '../middlewares/multer.js'
import isAuthenticated from '../middlewares/isAuthenticated.js'
import { main } from '../utils/generateWithGimini.js'

const router = express.Router()

router.post('/add-blog', isAuthenticated , upload ,addBlog)
router.get('/all-blog', getAllBlogs)
router.get('/single-blog/:id', getSingleBlog)
router.post('/delete-blog', isAuthenticated , deleteBlog)
router.post('/update-status', isAuthenticated , updateStatus)
router.get('/fetch-my-blogs', isAuthenticated , fetchMyBlogs)
router.get('/get-dashboard-data', isAuthenticated , getDashboardData)
router.post('/generate-desc', isAuthenticated , generateDescription)
router.get('/gen', main)

export default router   