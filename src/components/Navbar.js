
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    // localStorage.removeItem('formData');


    // Redirect to the signup page
    navigate('/signup');
    
  };

  return (
    <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
      <Link to="/" className="navbar-brand d-flex align-items-center text-center py-0 px-4 px-lg-5">
        <h1 className="m-0 text-primary">JobEntry</h1>
      </Link>
      <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto p-4 p-lg-0">
          <Link to="/" className="nav-item nav-link">
            Home
          </Link>
          <Link to="userdetails" className="nav-item nav-link">
            UserDetails
          </Link>
         
          <div className="nav-item dropdown">
            <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
              Jobs
            </Link>
            <div className="dropdown-menu rounded-0 m-0">
              <Link to="/addjob" className="dropdown-item">
                Add job
              </Link>
              <Link to="/joblist" className="dropdown-item">
                Job list
              </Link>
              <Link to="/Edit-job" className="dropdown-item">
                Edit job
              </Link>
            </div>
          </div>
          <div className="navbar-nav ms-auto p-4 p-lg-0">
        <span className="nav-item nav-link" onClick={handleLogoutClick} style={{ cursor: 'pointer' }}>
          Logout
        </span>
      </div>
          
          
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;