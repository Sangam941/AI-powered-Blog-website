import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const Navbar = ({token}) => {
  return (
    <div className='flex shadow-md items-center justify-between px-10 max-sm:px-4 max-sm:py-2 py-4 font-semibold'>
      <div className="logo text-xl max-sm:text-md">
        <Link to={'/'}>Blog Website</Link>
      </div>
      <Link to={token?'/admin':'/login'}>
        <button className="login flex items-center gap-2 rounded-full px-6 py-2 max-sm:px-4 max-sm:py-1 max-sm:text-xs bg-blue-700 text-white">
            <span>{token?'Dashboard':'Login'}</span>
            <span><ArrowRight size={18}/></span>
        </button>
      </Link>
    </div>
  )
}
 
export default Navbar
