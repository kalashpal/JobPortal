import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import Footer from './Footer'
import About from './About'
// import Contact from './Contact'
import Carousel from './carousel'
import Category from './Category'
import JobDetails from './JobDetail'
import JobList from './JobList'
import Testimonial from './Testimonial'
import Search from './Search'


const Home = () => {
  return (
    <div>
       
   <Navbar/>
   <Carousel/>
   <Search/>

   
   
   <Category/>
    {/* <About/> */}
    <JobList/>
    <JobDetails/>
    <Testimonial/>
    <Footer />
    
    
   
   
    
 
    {/* <Contact/> */}
    
   
    </div>
  )
}

export default Home
