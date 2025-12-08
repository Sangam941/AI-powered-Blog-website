import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Moment from 'moment'
import Loading from '../components/Loading'
import { useBlogContext } from '../contextApi/BlogContext'
import { useCommentContext } from '../contextApi/CommentContext'

const Blog = () => {
  const {fetchSingleBlog, singleBlog, loading} = useBlogContext()
  const { singleBlogAllComments, allComments, addComment } = useCommentContext()
  
  const { id } = useParams()

  const [comment, setComment] = useState('')

  useEffect(() => {
    fetchSingleBlog(id)
  }, [id])

  useEffect(() => {
    singleBlogAllComments(id)
  }, [addComment])
  

  const handleSubmit = (e) => {
    e.preventDefault();

    addComment(id, comment)
    setComment('')
  }

  return (
    <>
      {loading || !singleBlog || !singleBlog.image ? <Loading /> :
        <div className='w-full'>
          {/* header section  */}
          <div className="header mt-10 flex flex-col justify-center items-center gap-3 py-10 w-1/2 m-auto text-center">
            <p className='text-sm text-blue-600'>Published on {Moment(singleBlog.createdAt).format('Do MMMM YYYY')}</p>
            <h1 className='text-4xl font-semibold'>{singleBlog.title}</h1>
            <p className='text-sm text-gray-400'>{singleBlog.subtitle}</p>
            <button className="author text-sm text-blue-600 border border-blue-300 outline-none px-3 py-1 rounded-full bg-purple-100">{singleBlog.author.username}</button>
          </div>

          {/* blog content  */}
          <div className="blog-content w-2/3 m-auto flex flex-col gap-5 mb-10">
            <img src={singleBlog?.image?.url} alt="blog banner" className='w-full object-cover rounded-xl' />
            <p className='text-gray-600 mx-20 m-auto py-5 blog-content' dangerouslySetInnerHTML={{ __html: singleBlog.description }}></p>
          </div>

          {/* comment section  */}
          <div className="comment-section w-2/3 m-auto px-20">
            <h1 className='font-semibold'>Comment ({allComments?.length || 0})</h1>
            {
              allComments?.map((comment, idx) => {
                return (
                  <div className="comment flex w-full gap-2 text-sm rounded-md bg-purple-50 my-3 py-2 px-3" key={idx}>
                    <img src={comment?.image?.url || '/images/default-profile.webp'} className='rounded-full w-10 h-10' alt="profile picture" />
                    <div className="info flex flex-col gap-2 justify-center w-full">
                      <h1 className='font-semibold'>{comment.user.username}</h1>
                      <div className='flex justify-between items-center w-full'>
                        <p className='mr-10'>{comment.text}</p>
                        <p>{Moment(comment.createdAt).fromNow()}</p>
                      </div>
                    </div>

                  </div>
                )
              })
            }
          </div>

          {/* add comment */}
          <form onSubmit={(e) => handleSubmit(e)} className='w-2/3 px-20 m-auto py-10'>
            <div className="add-comment font-semibold">Add your comment</div>
            <div className='flex flex-col gap-3 py-4'>

              <textarea
                onChange={(e) => setComment(e.target.value)}
                value={comment}
                placeholder='Comment' rows={6} className='outline-none border-[1px] border-gray-300 py-2 px-2 text-sm text-gray-600' required />

            </div>
            <button className="submit rounded-md px-6 py-2 text-white bg-blue-700">Add comment</button>
          </form>

        </div>
      }
    </>
  )
}

export default Blog
