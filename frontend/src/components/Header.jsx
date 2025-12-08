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

    </div>
  )
}

export default Header
