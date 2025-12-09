
import React, { useEffect, useState } from 'react'
import CommentTable from './CommentTable'
import { useCommentContext } from '../../contextApi/CommentContext'

const Comments = () => {

  const [approved, setApproved] = useState(true)

  const {fetchAllComment, comment} = useCommentContext()

  useEffect(() => {
    setTimeout(() => {
      fetchAllComment()
    }, 50);
  }, [])
  

  return (
    <div className='w-full p-8 bg-blue-50 flex-1 max-sm:p-2'>

      {/* header  */}
      <div className="header max-w-4xl flex items-center justify-between max-sm:flex-col max-sm:gap-4 max-sm:items-start">
        <h1 className='font-semibold max-sm:text-sm'>Comments</h1>

        <div className="btn flex gap-2 text-sm max-sm:text-xs">
          <div onClick={()=>setApproved(true)} className={`btn border-[1.5px] border-green-700 px-4 py-2 rounded-full bg-white font-semibold text-green-700 cursor-pointer active:scale-95 ${approved && 'bg-green-300'}`}>Approved</div>
          <div onClick={()=>setApproved(false)} className={`btn border-[1.5px] border-orange-700 px-4 py-2 rounded-full bg-white font-semibold text-orange-700 cursor-pointer active:scale-95 ${!approved && 'bg-orange-300'}`}>Not Approved</div>
        </div>
      </div>

      {/* comment table  */}
      <div className='max-w-4xl mt-5 px-5 bg-white rounded-md shadow-sm h-[430px] overflow-y-scroll'>
        <table className='w-full text-sm table-auto max-sm:text-xs max-sm:table-fixed max-sm:whitespace-nowrap'>
          <thead>
            <tr>
              <th className='py-4 px-4 text-justify max-sm:py-2 max-sm:w-60'>BLOG TITLE & COMMENT</th>
              <th className='py-4 px-4 text-justify max-sm:py-2 max-sm:w-40'>DATE</th>
              <th className='py-4 px-4 text-justify max-sm:py-2 max-sm:w-16'>ACTIONS</th>
            </tr>
          </thead>

          <tbody>
           {comment?.filter((item)=>{
            return approved? item.isApproved === true: item.isApproved === false
           }).map((item,i)=>{
            return <CommentTable key={i} commentData = {item} approved = {approved}/>
           })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Comments
