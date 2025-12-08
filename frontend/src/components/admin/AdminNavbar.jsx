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
    <div className='flex shadow-md items-center justify-between px-10 py-4 font-semibold'>
      <div className="logo text-xl">
        <Link to={'/'}>Blog Website</Link>
      </div>
        <button onClick={()=>handleLogout()} className="login flex items-center gap-2 rounded-full px-6 py-2 bg-red-700 text-white">
            <span>{token && 'Logout'}</span>
            <span><ArrowRight size={18}/></span>
        </button>
    </div>
  )
}

export default AdminNavbar
