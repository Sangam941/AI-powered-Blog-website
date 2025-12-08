import React, { useEffect, useState } from 'react'
import TableRow from './TableRow'
import { useBlogContext } from '../../contextApi/BlogContext'
import Loading from '../../components/Loading'

const BlogList = () => {

  const { fetchMyBlogs, updateStatus, myBlogsList, loading } = useBlogContext()

  useEffect(() => {
    fetchMyBlogs()
  }, [])

 
  return (
    <>
      {loading ? <Loading /> :
        <div className='w-full p-8 bg-blue-50 flex-1'>
          <h1 className='font-semibold'>All Blogs</h1>

          {/* blog table  */}
          <div className='max-w-4xl mt-5 bg-white rounded-md shadow-sm h-[430px] overflow-y-scroll'>
            <table className='w-full table-auto text-sm'>
              <thead>
                <tr>
                  <th className='py-4 px-2'>#</th>
                  <td className='py-4 px-2 font-semibold'>BLOG TITLE</td>
                  <td className='py-4 px-2 font-semibold'>DATE</td>
                  <td className='py-4 px-2 font-semibold'>STATUS</td>
                  <td className='py-4 px-2 font-semibold'>ACTIONS</td>
                </tr>
              </thead>

              <tbody>
                {myBlogsList?.map((blog, idx) => {
                  return (<TableRow key={idx} blog={blog} index={idx + 1} updateStatus={updateStatus} showActions={true}/>)
                })}
              </tbody>
            </table>
          </div>

        </div>
      }
    </>
  )
}

export default BlogList
