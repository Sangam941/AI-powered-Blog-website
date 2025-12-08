import React, { useState } from 'react'
import { useAuthContext } from '../../contextApi/AuthContext'
import { Link, useNavigate } from 'react-router-dom'

const Register = () => {

    const [username, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { registerUser } = useAuthContext() 
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();

        registerUser(username, email, password, navigate)
        setUserName('');
        setEmail('');
        setPassword('');
    }

    return (
        <div className='h-screen w-full flex justify-center items-center'>
            <div className="card w-[30%] border py-10 px-6 rounded-md shadow-lg flex flex-col gap-6">
                <div className="content text-center">
                    <h1 className='font-semibold text-3xl'><span className='text-blue-800'>Admin</span> Register</h1>
                    <p>Enter your credientials to register</p>
                </div>

                <form onSubmit={(e) => handleSubmit(e)} className="credentials flex flex-col gap-6 mt-6">
                    <div className="input-box flex flex-col">
                        <label className=''>Fullname : </label>
                        <input
                            onChange={(e) => setUserName(e.target.value)}
                            value={username}
                            type="text" className='border-b-2 border-gray-400 outline-none text-gray-700 px-2 py-2' placeholder='Enter your name' required />
                    </div>
                    <div className="input-box flex flex-col">
                        <label className=''>Email : </label>
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            type="email" className='border-b-2 border-gray-400 outline-none text-gray-700 px-2 py-2' placeholder='Enter your email id' required />
                    </div>
                    <div className="password-box flex flex-col">
                        <label className=''>Password : </label>
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            type="password" className='border-b-2 border-gray-400 outline-none text-gray-700 px-2 py-2' placeholder='Enter your password' required />
                    </div>

                    <button className="login bg-blue-800 text-white py-3 font-semibold rounded-md">Register</button>

                    <div className="login-option">
                        <div className="relative or w-full flex items-center justify-center">
                            <div className='relative z-10 bg-white font-semibold px-1'>or</div>
                            <div className="absolute top-1/2 -z-1 line border-t-2 border-gray-400 w-full "></div>
                        </div>

                        <div className="login text-center text-sm font-semibold">
                            <div className="already-register text-center text-gray-600">
                            Already have an account?
                        </div>
                            <Link to={'/login'} className='text-blue-800 text-base hover:text-blue-800 hover:underline'>Login here</Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register
