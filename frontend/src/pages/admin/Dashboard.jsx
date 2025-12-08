import React, { useEffect, useState } from 'react'
import { icons } from '../../assets/assets'
import TableRow from './TableRow'
import { useBlogContext } from '../../contextApi/BlogContext'
import { useAuthContext } from '../../contextApi/AuthContext'
import Loading from '../../components/Loading'

const Dashboard = () => {

  const { getDashboard, dashboard, loading } = useBlogContext()
  const { token } = useAuthContext()

  useEffect(() => {
    if(token){
      getDashboard()
    }
  }, [token])

  return (
    <>
      {loading ? <Loading /> :
        <div className='w-full p-8 bg-blue-50 flex-1'>
          <div className="dashboard flex gap-4 flex-wrap">
            <div className="card cursor-pointer hover:scale-105 transition-all blogs flex items-center gap-2 border px-2 py-2 w-32 rounded-md bg-white">
              <div className="icon bg-blue-50 p-2">{icons.calender}</div>
              <div className="detail text-sm">
                <div className="number font-semibold">{dashboard.countBlogs}</div>
                <div className="name">Blogs</div>
              </div>
            </div>

            <div className="card cursor-pointer hover:scale-105 transition-all comment flex items-center gap-2 border px-2 py-2 w-32 rounded-md bg-white">
              <div className="icon bg-blue-50 p-2">{icons.comment}</div>
              <div className="detail text-sm">
                <div className="number font-semibold">{dashboard.countComments
                }</div>
                <div className="name">Comments</div>
              </div>
            </div>

            <div className="card cursor-pointer hover:scale-105 transition-all draft flex items-center gap-2 border px-2 py-2 w-32 rounded-md bg-white">
              <div className="icon bg-blue-50 p-2">{icons.draft}</div>
              <div className="detail text-sm">
                <div className="number font-semibold">{dashboard.countDraftBlogs}</div>
                <div className="name">Draft</div>
              </div>
            </div>
          </div>

          {/* table of blogs  */}
          <div className="table w-full">
            <div className="recent-blog flex items-center gap-2 mt-8 mb-4 ml-2">
              <div>{icons.recent}</div>
              <div>latest Blogs</div>
            </div>

            <div className='max-w-4xl bg-white rounded-md shadow-sm '>
              <table className='w-full table-auto text-sm'>
                <thead>
                  <tr>
                    <th className='py-4 px-2'>#</th>
                    <td className='py-4 px-2 font-semibold'>BLOG TITLE</td>
                    <td className='py-4 px-2 font-semibold'>DATE</td>
                    <td className='py-4 px-2 font-semibold'>STATUS</td>
                  </tr>
                </thead>

                <tbody>
                  {dashboard?.recentBlogs?.map((blog, idx) => {
                    return (<TableRow key={idx} blog={blog} index={idx + 1} showActions={false}/>)
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default Dashboard
