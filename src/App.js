import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { JobProvider } from './components/JobContext'; 
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Category from './components/Category';
import JobDetails from './components/JobDetail';
import JobList from './components/JobList';
import About from './components/About';
import Testimonial from './components/Testimonial';
import Carousel from './components/carousel';
import Search from './components/Search';
import Spinner from './components/Spinner';
import SignUp from './components/SignUp';
import Login from './components/Login';
import UserDetails from './components/UserDetails';
import AddJob from './components/AddJob';


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const onLoginSuccess = () => {
    // Update the authentication state
    setIsAuthenticated(true);
  };

  return (
    <div>
      <Router>
      <JobProvider>
        <Routes>
          <Route path="/" element={isAuthenticated ? <Home /> : <Navigate to="/signup" />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login onLoginSuccess={onLoginSuccess} />} />
          <Route path='/userdetails' element={<UserDetails/>}/>
          <Route path='/addjob' element={<AddJob/>}/>
      
          

          <Route path="/about" element={<About />} />
          <Route path="/category" element={<Category />} />
          <Route path="/joblist" element={<JobList />} />
          <Route path="/jobdetails" element={<JobDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/testimonial" element={<Testimonial />} />
        </Routes>
        </JobProvider>
      </Router>
    </div>
  );
}

export default App;
