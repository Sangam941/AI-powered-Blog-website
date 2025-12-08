import React from 'react'
import { Star } from 'lucide-react'

const Header = () => {
  return (
    <div className='flex flex-col items-center mt-14 gap-4 w-full'>
      <button className='flex items-center gap-2 border-[1px] text-blue-700 bg-blue-200 px-4 py-2 rounded-full border-black/30 text-sm'>
        <span>New: AI feature integration</span>
        <span><Star size={14} fill='blue' /></span>
      </button>
 
      <div className="heading flex flex-col font-semibold text-6xl text-center">
        <span>Your own <span className='text-blue-700'>blogging</span></span>
        <span>platform.</span>
      </div>
      <div className="para mx-60 text-center text-gray-500 mt-3">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur suscipit maxime, modi repellat similique totam quasi cum accusantium, aut debitis enim eius nesciunt.
      </div>

      <form className='border-[1px] outline-none border-gray-400 rounded-md px-1 py-1 w-1/2 flex justify-beteween mt-3'>
        <input type="text" placeholder='Search for blogs' className='outline-none w-full px-3' />
        <input type="submit" value="Search" className='text-white bg-blue-700 px-6 py-2 rounded-md hover:scale-105 transition-all cursor-pointer' />
      </form>
    </div>
  )
}

export default Header
