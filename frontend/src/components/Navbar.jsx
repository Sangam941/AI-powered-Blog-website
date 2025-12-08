import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const Navbar = ({token}) => {
  return (
    <div className='flex shadow-md items-center justify-between px-10 py-4 font-semibold'>
      <div className="logo text-xl">
        <Link to={'/'}>Blog Website</Link>
      </div>
      <Link to={token?'/admin':'/login'}>
        <button className="login flex items-center gap-2 rounded-full px-6 py-2 bg-blue-700 text-white">
            <span>{token?'Dashboard':'Login'}</span>
            <span><ArrowRight size={18}/></span>
        </button>
      </Link>
    </div>
  )
}
 
export default Navbar
