import React from 'react'

const NewsLetter = () => {
  return (
    <div className='flex flex-col items-center py-32 gap-2 w-full'>
      <h1 className='font-semibold text-2xl'>Never Miss a Blog!</h1>
      <p className='text-sm text-gray-400'>Subscribe to get a latest blog, new tech, and exclusive news.</p>

      <form className='flex gap-3 my-4 border border-gray-400 w-[40%] justify-between text-sm'>
        <input type="text" placeholder='Enter your email id' className='px-2 py-2 w-full outline-none'/>
        <button className="submit text-white bg-blue-500 px-5 py-3 uppercase">Subscribe</button>
      </form>
    </div>
  )
}

export default NewsLetter
 