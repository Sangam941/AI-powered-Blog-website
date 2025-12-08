import express from 'express'
import isAuthenticated from '../middlewares/isAuthenticated.js'
import { addComment, approveComment, deleteComment, getAllComments, getSingleBlogComments } from '../controllers/CommentController.js'

const router = express.Router()

router.post('/add-comment/:id', isAuthenticated, addComment)
router.get('/get-all-comment', isAuthenticated, getAllComments)
router.get('/get-all-single-blog-comment/:id', getSingleBlogComments)
router.post('/delete-comment', isAuthenticated, deleteComment)
router.put('/approve-comment', isAuthenticated, approveComment)

export default router