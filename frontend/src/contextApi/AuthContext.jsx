import React from 'react'
import { createContext, useContext } from 'react'
import axios from 'axios'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { useEffect } from 'react'

const AuthProvider = createContext()
axios.defaults.baseURL = import.meta.env.VITE_BASE_URL

export const AuthContext = ({children}) => {

    const [user, setUser] = useState('')
    const [token, setToken] = useState(null)

    const registerUser = async (username, email, password, navigate)=>{
        try {
            const {data} = await axios.post('/user/register', {username, email, password})

            console.log(data)

            navigate('/login')
            setUser(data)
            toast.success(data.message)
            
        } catch (error) {
            toast.error(error.response?.data?.message)
        }
    }

    const loginUser = async (email,password, navigate)=>{
        try {
            const {data} = await axios.post('/user/login', {email, password})

            console.log(data)

            localStorage.setItem("token", data.token)
            setToken(data.token)

            setUser(data) 
            toast.success(data.message)
            navigate('/')
            
        } catch (error) {
            toast.error(error.response?.data?.message)
        }
    }

    const logoutUser = (navigate)=>{
        try {
            localStorage.removeItem("token")

            delete axios.defaults.headers.common["Authorization"];

            setUser(null)

            navigate('/login')

            toast.success("Logout successfully!")
            
        } catch (error) {
            toast.error("Something went wrong while loggin out!")
        }
    }

    useEffect(() => {
      const localToken = localStorage.getItem("token")

      if(localToken){
        setToken(localToken)
      }
    }, [])

    useEffect(() => {
      if(token){
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
      }
    }, [token])
    
    
  return (
    <AuthProvider value={{loginUser, user, token, logoutUser, registerUser}}>
        {children}
    </AuthProvider>
  )
}

export const useAuthContext = ()=>{
    return useContext(AuthProvider)
}
