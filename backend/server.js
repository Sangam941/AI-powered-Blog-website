import express from 'express'
import {config} from 'dotenv'
import cors from 'cors'
import connectDB from './config/db.js'
import UserRouter from './routes/UserRouter.js'
import BlogRouter from './routes/BlogRouter.js'
import CommentRouter from './routes/CommentRouter.js'
import {v2 as cloudinary} from 'cloudinary'

const app = express()
config()  // load the environment variable

connectDB()  // connect db

cloudinary.config({
    cloud_name : process.env.CLOUD_NAME,
    api_key : process.env.CLOUD_API,
    api_secret : process.env.CLOUD_SECRET, 
})

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/api/user', UserRouter)
app.use('/api/blog', BlogRouter)
app.use('/api/comment', CommentRouter)

const port = process.env.PORT || 3000
app.listen(port, ()=>{
    console.log(`server is running on http://localhost:${port}`)
})