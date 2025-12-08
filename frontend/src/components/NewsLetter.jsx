import React from 'react'

const NewsLetter = () => {
  return (
    <div className='flex flex-col items-center py-32 gap-2 w-full max-sm:py-16 max-sm:px-4'>
      <h1 className='font-semibold text-2xl max-sm:text-xl'>Never Miss a Blog!</h1>
      <p className='text-sm text-gray-400 max-sm:text-xs'>Subscribe to get a latest blog, new tech, and exclusive news.</p>

      <form className='flex gap-3 my-4 border border-gray-400 w-[40%] justify-between text-sm max-sm:w-full max-sm:flex-col max-sm:gap-2 px-2 py-2 rounded-md max-sm:text-xs'>
        <input type="text" placeholder='Enter your email id' className='px-2 py-2 w-full outline-none max-sm:py-1'/>
        <button className="submit text-white bg-blue-500 px-5 py-3 uppercase max-sm:py-2">Subscribe</button>
      </form>
    </div>
  )
}

export default NewsLetter
 