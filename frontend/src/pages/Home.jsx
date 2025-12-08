import React from 'react'
import Header from '../components/Header'
import BlogList from '../components/BlogList'
import NewsLetter from '../components/NewsLetter'
import Loading from '../components/Loading'

const Home = ({blogs, loading}) => {

  return (
    <>
    {loading? <Loading/>:(<div className=''>
      <Header />
      <BlogList blogs={blogs} />
      <NewsLetter />
      
    </div>)}
    </>
  ) 
}

export default Home
