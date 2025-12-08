import React from 'react'
import { icons } from '../../assets/assets'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {

    return (

        <div className='flex flex-col border-r-2 h-screen min-w-[250px]'>
            <NavLink end={true} to={'/admin'} className={({isActive})=> `flex gap-2 items-center py-4 pl-8 ${isActive ? "bg-blue-100 border-r-4 border-blue-700" : ""}`}>
                <div className='icon'>{icons.dashboard}</div>
                <div className="name ">Dashboard</div>
            </NavLink> 

            <NavLink to={'/admin/addblog'} className={({isActive})=> `flex gap-2 items-center py-4 pl-8 ${isActive ? "bg-blue-100 border-r-4 border-blue-700" : ""}`}>
                <div className='icon'>{icons.add}</div>
                <div className="name">Add Blog</div>
            </NavLink>

            <NavLink to={'/admin/bloglist'} className={({isActive})=> `flex gap-2 items-center py-4 pl-8 ${isActive ? "bg-blue-100 border-r-4 border-blue-700" : ""}`}>
                <div className='icon'>{icons.list}</div>
                <div className="name">Blog List</div>
            </NavLink>

            <NavLink to={'/admin/comments'} className={({isActive})=> `flex gap-2 items-center py-4 pl-8 ${isActive ? "bg-blue-100 border-r-4 border-blue-700" : ""}`}>
                <div className='icon'>{icons.message}</div>
                <div className="name">Comments</div>
            </NavLink>
        </div>
    )
}

export default Sidebar
