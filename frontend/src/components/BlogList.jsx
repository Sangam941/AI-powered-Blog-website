import { motion } from 'motion/react'
import React, { useState } from 'react'
import BlogCard from './BlogCard'
import { icons } from '../assets/assets'

const category = ["All", "Technology", "Startup", "Lifestyle", "Finance"]

const BlogList = ({ blogs }) => {

    const [selectedCategory, setSelectedCategory] = useState("All")

    const [search, setSearch] = useState('')
    const [filteredBlogs, setFilteredBlogs] = useState([])

    const handleSubmit = (e) => {

        e.preventDefault()

        const filtered = blogs.filter((blog) => {
            return blog.title.toLowerCase().includes(search.toLowerCase()) || blog.subtitle.toLowerCase().includes(search.toLowerCase())
        })

        setFilteredBlogs(filtered)
    }

    const handleChange = (e) => {
        setSearch(e.target.value)

        if(search === ''){
            setFilteredBlogs([])
        }
    }

    return (

        <div className='flex flex-col items-center gap-5 mt-8 py-5 max-sm:px-4 w-full'>

            <form onSubmit={(e)=>handleSubmit(e)} className='border-[1px] outline-none border-gray-400 rounded-md px-1 py-1 w-1/2 flex justify-beteween mb-3 max-sm:w-full max-sm:flex-col max-sm:gap-2 max-sm:text-sm'>
                <div className='w-full flex items-center'>
                    <input
                    value={search}
                    onChange={(e) => handleChange(e)}
                    type="text"
                    placeholder='Search for blogs'
                    className='outline-none w-full px-3' />

                    <div 
                    onClick={()=>setSearch('')}
                    className={`clear px-2 cursor-pointer ${!search? 'hidden': 'block'}`}>
                        {icons.cross}
                    </div>
                </div>

                <input type="submit"
                    value="Search"
                    className='text-white bg-blue-700 px-6 py-2 rounded-md active:scale-95 transition-all cursor-pointer max-sm:py-2' />
            </form>
            {/* category choose */}
            <div className="category flex gap-3 max-sm:overflow-x-auto max-sm:w-full max-sm:px-2">
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

            <div className="blog-card grid grid-cols-4 gap-6 px-10 pt-5 max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-3 max-sm:px-0 w-full">
                {
                    blogs.length === 0 ? <div>No blogs available</div> :
                        (search ?
                            filteredBlogs.length === 0 ? <div>No blogs found</div> :
                                filteredBlogs.filter((blog) => {
                                    return selectedCategory === "All" ? true : blog.category === selectedCategory
                                }).map((blog) => {
                                    return <BlogCard key={blog._id} blog={blog} />
                                })
                            :
                            blogs.filter((blog) => {
                                return selectedCategory === "All" ? true : blog.category === selectedCategory
                            }).map((blog) => {
                                return <BlogCard key={blog._id} blog={blog} />
                            })
                        )
                }

            </div>
        </div>
    )
}

export default BlogList
