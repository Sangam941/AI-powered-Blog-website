import React from 'react'
import { icons } from '../../assets/assets'
import Moment from 'moment'
import { useCommentContext } from '../../contextApi/CommentContext'

const CommentTable = ({commentData, approved}) => {

    const {user, blog, createdAt, text} = commentData
    const {approvedComment, deleteComment} = useCommentContext()

    const handleApprove = (e)=>{
        e.preventDefault()
        approvedComment(commentData._id)
    } 

    const handleDelete = (e)=>{
        e.preventDefault()
        if(window.confirm("Are you sure want to delete this comment?")){
            deleteComment(commentData._id)
        }
    }

    const date = Moment(createdAt).format('Do MMMM YYYY')
    return (
        <>
            <tr className='border-y-2 text-sm'>
                <td className='py-4 px-2 flex flex-col items-start'>
                    <h1 className='font-semibold'>Blog : <span className='text-gray-600 font-normal'>{blog.title}</span></h1>
                    <br />
                    <h1 className='font-semibold'>Name : <span className='text-gray-600 font-normal'>{user.username}</span></h1>
                    <h1 className='font-semibold'>Comment : <span className='text-gray-600 font-normal'>{text}</span></h1>
                </td>
                <td className='py-4 px-2'>{date}</td>
                <td className='py-4 px-2'>
                    <div className="flex items-center gap-4">
                        {approved ? <button className="btn border-[1.5px] border-green-600 text-green-600 bg-green-200 font-semibold px-4 py-1 rounded-full bg-white text-gray-700 cursor-pointer">Approved</button> :
                            <div onClick={(e)=>handleApprove(e)} className="tick cursor-pointer active:scale-95">{icons.tick}</div>
                        }
                        <div onClick={(e)=>handleDelete(e)} className='cursor-pointer active:scale-95'>{icons.delete}</div>
                    </div>
                </td>
            </tr>
        </>
    )
}

export default CommentTable
