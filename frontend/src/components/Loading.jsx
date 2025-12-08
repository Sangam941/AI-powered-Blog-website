import React from 'react'

const Loading = () => {
  return (
    <div className='h-screen w-full flex items-center justify-center'>
      <div className="loader h-16 w-16 border-t-4 animate-spin border-red-500 rounded-full"></div>
    </div>
  )
}
 
export default Loading
