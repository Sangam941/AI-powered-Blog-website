import React from 'react'
import { icons } from '../../assets/assets'
import { useBlogContext } from '../../contextApi/BlogContext'

const TableRow = ({ blog, index, updateStatus, showActions }) => {

  const { title, createdAt, isPublished } = blog

  const { deleteBlog } = useBlogContext()

  const date = new Date(createdAt);

  const handleUpdateStatus = (e) => {
    e.preventDefault()
    updateStatus(blog._id)
  }

  const handleDelete = (e) => {
    e.preventDefault()
    if (window.confirm("Are you sure you want to delete this blog?")) {
      deleteBlog(blog._id)
    }
  }

  return (
    <>
      <tr className='border-y-2 text-sm max-sm:text-xs'>
        <th className='py-4 px-2 max-sm:py-2'>{index}</th>
        <td className='py-4 px-2 max-sm:py-2'>{title}</td>
        <td className='py-4 px-2 max-sm:py-2'>{date.toDateString()}</td>
        <td className='py-4 px-2 max-sm:py-2'>
          <p className={`${isPublished ? "text-green-700" : "text-orange-700"} font-semibold`}>{isPublished ? "Published" : "Unpublished"}</p>
        </td>
        {showActions &&
          <td className='flex items-center gap-4 cursor-pointer max-sm:py-1 max-sm:px-1'>
            <button onClick={(e) => handleUpdateStatus(e)} className='py-2 mt-2 px-2 border px-2 rounded-md border-black active:scale-95 transition-all outline-none shadow-sm bg-gray-200 max-sm:py-1'>{isPublished ? "Unpublished" : "Published"}</button>

            <div onClick={(e) => handleDelete(e)} className="icon" title='delete'>
              {icons.delete}
            </div>
          </td>}
      </tr>
    </>
  )
}

export default TableRow
