import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { createContext } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const CommentProvider = createContext()
axios.defaults.baseURL = import.meta.env.VITE_BASE_URL

export const CommentContext = ({children}) => {

    const [allComments, setAllComments] = useState([])
    const [comment, setComment] = useState([])

    const singleBlogAllComments = async (id)=>{
        try {
            const {data} = await axios.get('/comment/get-all-single-blog-comment/'+id)

            setAllComments(data.comments)
        } catch (error) {
            toast.error(error.response?.data?.message)
        }
    }

    const addComment = async (id, text)=>{
        try {
            const {data} = await axios.post('/comment/add-comment/'+id, {text})

            toast.success(data.message)

            
        } catch (error) {
            toast.error(error.response?.data?.message)
        }
    }

    const fetchAllComment = async ()=>{
        try {
            const {data} = await axios.get('/comment/get-all-comment')

            console.log(data.allComment)

            setComment(data.allComment)

        } catch (error) {
            toast.error(error.response?.data?.message)
        }
    }

    const approvedComment = async (id)=>{
        try {
            const {data} = await axios.put('/comment/approve-comment',{id})
            toast.success(data.message)
            fetchAllComment()
        } catch (error) {
            toast.error(error.response?.data?.message)
        }
    }

    const deleteComment = async (id)=>{
        try {
            const {data} = await axios.post('/comment/delete-comment',{id})
            toast.success(data.message)
            fetchAllComment()
        }   
        catch (error) {
            toast.error(error.response?.data?.message)
        }
    } 


  return (
    <CommentProvider value={{singleBlogAllComments, allComments, addComment, fetchAllComment, comment, approvedComment, deleteComment}}>
        {children}
    </CommentProvider>
  )
}

export const useCommentContext = ()=>{
    return useContext(CommentProvider)
}
