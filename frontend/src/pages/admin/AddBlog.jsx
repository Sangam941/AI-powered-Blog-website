import React, { useEffect, useRef, useState } from 'react'
import Quill from 'quill'
import { useBlogContext } from '../../contextApi/BlogContext'
import BtnLoader from '../../components/BtnLoader'

const AddBlog = () => {

  const upload = useRef(null)
  const quill = useRef(null)
  const editor = useRef(null)
 
  const [image, setImage] = useState('')
  const [title, setTitle] = useState('')
  const [subTitle, setSubtitle] = useState('')
  const [isPublished, setIsPublished] = useState('')
  const [category, setCategory] = useState('')


  const { addBlog, loading, btnLoading } = useBlogContext()
  const { generateDescription } = useBlogContext()

  useEffect(() => {
    if (!quill.current && editor.current) {
      quill.current = new Quill(editor.current, { 
        theme: "snow",
        modules: {
          toolbar: [
            [{ 'header': [1, 2, 3, false] }],
            ['bold', 'italic', 'underline'],
            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
          ]
        }
      })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()

    const formData = new FormData()

    formData.append("title", title)
    formData.append("subtitle", subTitle)
    formData.append("description", quill.current.root.innerHTML)
    formData.append("isPublished", isPublished)
    formData.append("category", category)
    formData.append("image", image)


    addBlog(formData)
    setImage('')
    setTitle('')
    setSubtitle('')
    quill.current.root.innerHTML = ''
    setIsPublished(false)
    setCategory('')
  }

  const generate = (e) => {
    e.preventDefault()
    generateDescription(title, quill)
  }


  return (
    <div className='w-full p-8 bg-blue-50 flex-1 text-sm'>
      <div className="add-blog-container max-w-3xl bg-white rounded-md shadow-sm px-7 py-10">
        <form onSubmit={(e) => handleSubmit(e)} className='flex flex-col gap-4'>
          <div className="upload flex flex-col justify-center gap-3">
            <p>Upload Thumbnail</p>
            <label onClick={() => upload.current.click()} className='border border-dashed border-red-500 overflow-hidden inline-block w-28 rounded-md ml-2 flex items-center justify-center bg-purple-50 cursor-pointer active:scale-95 transition all ease'>
              <img src={!image ? '/images/upload.webp' : URL.createObjectURL(image)} alt="this is upload image" name="file" />
            </label>

            <input
              onChange={(e) => { setImage(e.target.files[0]) }}
              ref={upload} type="file" className='hidden' required />
          </div>

          <div className="title flex flex-col gap-2">
            <label>Blog Title</label>
            <input
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              type="text" className='border px-3 py-2 text-sm outline-none border-gray-300 rounded-md' placeholder='Enter the blog title' />
          </div>

          <div className="title flex flex-col gap-2">
            <label>Sub Title</label>
            <input
              onChange={(e) => setSubtitle(e.target.value)}
              value={subTitle}
              type="text" className='border px-3 py-2 text-sm outline-none border-gray-300 rounded-md' placeholder='Enter the subtitle' />
          </div>

          <div className="title flex flex-col gap-2">
            <label>Blog Description</label>
            <div className='relative border border-gray-300 rounded-md h-96 flex flex-col'>
              {/* Quill Editor Container */}
              <div ref={editor} className='flex-1 overflow-hidden border-none flex flex-col'></div>
              
              {/* Generate Button - Fixed at bottom */}
              <div className='text-end'>
                <button 
                onClick={(e) => generate(e)} 
                className="bg-gray-600 rounded-md m-2 active:scale-95 transition-all generate text-white px-4 py-2">
                Generate with AI
              </button>
              </div>

              {btnLoading && <div className="load absolute bg-black/25 top-0 h-full w-full">
                <div className="loading absolute h-10 w-10 top-1/2 left-1/2 rounded-full border-t-4 border-r-4 animate-spin border-white/40"></div>
              </div>}
            </div>
          </div>

          <div className="category flex flex-col items-start gap-2">
            <label>Blog Category</label>
            <select
              onChange={(e) => setCategory(e.target.value)}
              name="category" className='cursor-pointer outline-none px-3 py-2 text-sm border border-gray-400 text-gray-800'>
              <option value="">Select Category</option>
              {['Technology', 'Startup', 'Lifestyle', 'Finance'].map((item, index) => {
                return <option value={item} key={index}>{item}</option>
              })}
            </select>
          </div>

          <div className="published flex gap-2 items-center">
            <label>Published Now</label>
            <input
              onChange={(e) => setIsPublished(e.target.checked)}
              type="checkbox" checked={isPublished} className='cursor-pointer w-4 h-4 active:scale-105 transition all' />
          </div>

          <div>
            <button className={`submit px-10 font-semibold text-sm active:scale-105 py-2 ${loading && 'pointer-events-none'} rounded-md text-white bg-blue-600`}>
              {loading ? <div className="loading flex gap-2 items-center text-gray-200">
                <BtnLoader /> <span>Add Blog</span>
              </div> : 'Add Blog'}
            </button>
          </div>
        </form>
      </div>

    </div>
  )
}

export default AddBlog