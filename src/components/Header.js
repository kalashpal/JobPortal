
import React from 'react';


const Header = () => {
  return (
    <div className="container-xxl py-5 bg-dark page-header mb-5">
      <div className="container-xxl py-5 bg-dark page-header mb-5">
        <div className="container my-5 pt-5 pb-4">
          <h1 className="display-3 text-white mb-3 animated slideInDown">
            Contact
          </h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb text-uppercase">
              <li className="breadcrumb-item">
                <a href="#">Home</a>
              </li>
              <li className="breadcrumb-item">
                <a href="#">Pages</a>
              </li>
              <li className="breadcrumb-item text-white active" aria-current="page">
                Contact
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
