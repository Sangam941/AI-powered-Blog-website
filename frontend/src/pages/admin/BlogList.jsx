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
        <div className='w-full p-8 bg-blue-50 flex-1 max-h-screen max-sm:p-2'>
          <h1 className='font-semibold max-sm:text-sm'>All Blogs</h1>

          {/* blog table  */}
          <div className='max-w-4xl mt-5 bg-white rounded-md shadow-sm h-[430px] overflow-y-scroll max-sm:h-[350px]'>
            <table className='w-full table-auto text-sm max-sm:text-xs max-sm:table-fixed max-sm:whitespace-nowrap'>
              <thead>
                <tr>
                  <th className='w-8 py-4 px-2 max-sm:py-2'>#</th>
                  <td className='py-4 px-2 max-sm:py-2 font-semibold w-32'>BLOG TITLE</td>
                  <td className='py-4 px-2 max-sm:py-2 font-semibold w-32'>DATE</td>
                  <td className='py-4 px-2 max-sm:py-2 font-semibold w-24'>STATUS</td>
                  <td className='py-4 px-2 max-sm:py-2 font-semibold'>ACTIONS</td>
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
