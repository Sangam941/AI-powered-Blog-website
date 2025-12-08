import React from 'react'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Blog from './pages/Blog'
import Footer from './components/Footer'
import Layout from './pages/admin/Layout'
import Dashboard from './pages/admin/Dashboard'
import MainLayout from './components/MainLayout'
import AddBlog from './pages/admin/AddBlog'
import Comments from './pages/admin/Comments'
import BlogList from './pages/admin/BlogList'
import Login from './components/admin/Login'

import 'quill/dist/quill.snow.css';
import { useBlogContext } from './contextApi/BlogContext'
import { useAuthContext } from './contextApi/AuthContext'
import Register from './components/admin/Register'

const App = () => {

  const {token} = useAuthContext()
  const {blogs, loading} = useBlogContext()
  
  return (
    <div className='h-screen w-full'>
      <Routes>
        {/* Mainlayout with navbar and footer */}
        <Route element={<MainLayout token={token}/>} >
          <Route path='/' element={<Home blogs={blogs} loading={loading}/>} />
          <Route path='/blog/:id' element={<Blog blogs={blogs} loading={loading}/>} />
        </Route>
 
        {/* Admin Layout */}
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/admin' element={token?<Layout token = {token} />:<Login />}>
          <Route index element={<Dashboard />} />
          <Route path='addblog' element={<AddBlog />} />
          <Route path='bloglist' element={<BlogList />} />
          <Route path='comments' element={<Comments />} />
        </Route>
      </Routes>

    </div>
  )
}

export default App
