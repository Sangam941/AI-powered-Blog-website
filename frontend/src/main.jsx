import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { BlogContext } from './contextApi/BlogContext.jsx'
import { Toaster } from 'react-hot-toast'
import { CommentContext } from './contextApi/CommentContext.jsx'
import { AuthContext } from './contextApi/AuthContext.jsx'

createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <AuthContext>
      <BlogContext>
        <CommentContext>
          <Toaster />
          <App />
        </CommentContext>
      </BlogContext>
    </AuthContext>
  </BrowserRouter >
 
)
