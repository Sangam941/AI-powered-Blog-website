import React from 'react'
import Sidebar from '../../components/admin/Sidebar'
import { Outlet } from 'react-router-dom'
import AdminNavbar from "../../components/admin/AdminNavbar"; 


const Layout = ({token}) => {
    return (
        <>
            {token && <div className='h-screen'>
            <AdminNavbar token={token}/>
            <div className='flex relative'>
                <Sidebar />
                <Outlet />
            </div>
        </div>}
        </>
    )
} 

export default Layout
