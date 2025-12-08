# Project Overview: AI-Powered Blog Website

## 1. Project Description

This is a **full-stack blog website** designed to make blogging easier and smarter.  
The key feature of this project is **AI-powered blog description generation**, which automatically generates a description for a blog post based on the title.

- Frontend: React.js / Vite (or your choice)
- Backend: Node.js + Express
- Database: MongoDB
- AI API: Google Gemini Flash Lite API

---

## 2. Key Features

1. **User Authentication**  
   - Users can sign up, log in, and manage their blogs.
   - Authentication is handled via JWT or session tokens.

2. **Blog Management**  
   - Create, read, update, and delete blogs.
   - Each blog includes: title, content, description, image, author info, and date.

3. **AI-Powered Description Generation**  
   - When a user enters a blog title, the system generates a blog description automatically.
   - Powered by **Google Gemini Flash Lite API**.
   - Makes content creation faster and more engaging.

4. **Image Upload**  
   - Users can upload blog images.
   - Backend stores images using Cloudinary.

5. **Responsive Design**  
   - Fully responsive and works on mobile, tablet, and desktop.

---

## 3. How It Works

1. User enters a **blog title** in the frontend.
2. Frontend sends a **request to the backend** API (`/generate-description`) with the title.
3. Backend calls the **Gemini Flash Lite API** with the title as input.
4. API returns a **generated description**.
5. Backend sends the description back to the frontend.
6. User can edit or directly save the blog.

---

**Website Link :** `https://ai-powered-blog-website.vercel.app/`

# Environment Variables for This Project

This file lists all environment variables needed for both frontend and backend.  
**Do not store real secrets in GitHub** — use `.env` files locally.

---

## Backend Environment Variables (`backend/.env`)

`PORT`  
`MONGODB_URL`  
`JWT_SECRET`  
`JWT_TOKEN_EXPIRE`  
`CLOUD_NAME`  
`CLOUD_API`  
`CLOUD_SECRET`  
`GEMINI_API_KEY`
---

## Frontend Environment Variables (`frontend/.env`)

`VITE_BASE_URL`

---

### Notes:

- Always add `.env` to `.gitignore`   
- When fetching this project from GitHub:  
  1. Create `.env` in backend and frontend  
  2. Copy keys from this `.md` file and fill your real secrets  
- For production, set environment variables in your hosting provider (Render / Vercel)  
