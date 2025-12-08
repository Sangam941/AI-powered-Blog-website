import { motion } from 'motion/react'
import React, { useState } from 'react'
import BlogCard from './BlogCard'

const category = ["All", "Technology", "Startup", "Lifestyle", "Finance"]

const BlogList = ({ blogs }) => {

    const [selectedCategory, setSelectedCategory] = useState("All")

    return (
 
        <div className='flex flex-col items-center gap-5 mt-8 py-5'>
            {/* category choose */}
            <div className="category flex gap-3">
                {category.map((item, index) => {
                    return <div className='relative' key={index}>
                        <button
                            onClick={() => { setSelectedCategory(item) }}
                            className={`px-4 py-0.5 ${selectedCategory === item ? 'text-white ' : 'text-black'}`}>
                            {item}
                            {selectedCategory === item &&
                                <motion.div
                                    layoutId='underline'
                                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                                    className='bg-blue-700 rounded-full h-7 absolute top-0 left-0 right-0 -z-10'></motion.div>}

                        </button>
                    </div>
                })}
            </div>

            <div className="blog-card grid grid-cols-4 gap-6 px-10 pt-5 max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-3">
                {
                    blogs.length === 0 ? <div>No blogs available</div> :
                        blogs.filter((blog) => {
                            return selectedCategory === "All" ? true : blog.category === selectedCategory
                        }).map((blog) => {
                            return <BlogCard key={blog._id} blog={blog} />
                        })
                }

            </div>
        </div>
    )
}

export default BlogList
