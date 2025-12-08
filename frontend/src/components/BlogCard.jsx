import React from 'react'
import { useNavigate } from 'react-router-dom';

const BlogCard = ({blog}) => {

    const navigate = useNavigate();

    const {_id, title, description, category, image} = blog;

    return (
        <div onClick={()=>{navigate(`/blog/${_id}`)}} className='border border-black w-full rounded-lg overflow-hidden hover:scale-105 transition-all duration-300 cursor-pointer shadow-md'>
            <div className="image h-36 overflow-hidden">
                <img src={image.url} className='' alt="this is image" />
            </div> 
            <div className="details flex flex-col gap-2 p-4">
                <button className="category rounded-full px-2 py-0.5 bg-purple-300 outline-none w-fit text-xs">
                    {category}
                </button>
                <div className="title tracking-tight font-semibold">
                    {title}
                </div>
                <p className="desc tracking-tight text-sm text-gray-600 leading-tight" dangerouslySetInnerHTML={{"__html": description.slice(0, 100) + "..."}}>
                    
                </p>
            </div>
        </div>
    )
}

export default BlogCard
