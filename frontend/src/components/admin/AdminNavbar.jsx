import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useAuthContext } from '../../contextApi/AuthContext'

const AdminNavbar = ({token}) => {

    const {logoutUser} = useAuthContext()
    const navigate = useNavigate() 

    const handleLogout = ()=>{
        if(window.confirm("Are you sure want to logout?")){
            logoutUser(navigate)
        }
    }
  return (
    <div className='flex shadow-md items-center justify-between px-10 py-4 font-semibold max-sm:px-4 max-sm:py-2 max-sm:text-sm'>
      <div className="logo text-xl max-sm:text-lg">
        <Link to={'/'}>Blog Website</Link>
      </div>
        <button onClick={()=>handleLogout()} className="login flex items-center gap-2 rounded-full px-6 py-2 bg-red-700 text-white max-sm:px-5 max-sm:py-1 max-sm:text-sm">
            <span>{token && 'Logout'}</span>
            <span><ArrowRight size={18}/></span>
        </button>
    </div>
  )
}

export default AdminNavbar
