import React from 'react'
import { Link } from 'react-router-dom'
import { footer_data } from '../assets/assets'


const Footer = () => {
  return (
    <div className='py-8 px-32 border bg-sky-100'>
      <div className="info grid grid-cols-2 gap10 border">
        <div className="about pr-32">
            <h1 className='font-semibold text-xl'>My Blog</h1>
            <p className='text-gray-500 mt-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum labore reiciendis, numquam ullam voluptas eius.</p>
        </div>
 
        <div className="grid grid-cols-3 gap-24 text-sm">
            {footer_data.map((section, index)=>{
            return (
                <div className="section" key={index}>
                    <h1 className='font-semibold'>{section.title}</h1>
                    <ul>
                        {section.links.map((link, idx)=>{
                            return <Link to={"#"} key={idx}><li className='text-gray-500 hover:underline'>{link}</li></Link>
                        })}
                    </ul>
                </div>
            )
        })}
        </div>
      </div>
      
      <div className="hr-line w-full h-[1px] bg-gray-400 my-6">

      </div>
      <div className="copyright text-sm text-gray-500 text-center">
        Copyright 2025 &copy; My Blog All Right Reserved.
      </div>
    </div>
  )
}

export default Footer
