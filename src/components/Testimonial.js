import React from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Navbar from "./Navbar";
import Header from "./Header";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
        
    <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container">
        <h1 className="text-center mb-5">Our Clients Say!!!</h1>
        <Slider {...settings} className="testimonial-carousel">
          <div className="testimonial-item bg-light rounded p-4">
            <i className="fa fa-quote-left fa-2x text-primary mb-3" />
            <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
            <div className="d-flex align-items-center">
              <img className="img-fluid flex-shrink-0 rounded" src="img/testimonial-1.jpg" style={{width: 50, height: 50}} alt="Client Avatar" />
              <div className="ps-3">
                <h5 className="mb-1">Client Name</h5>
                <small>Profession</small>
              </div>
            </div>
          </div>
          <div className="testimonial-item bg-light rounded p-4">
            <i className="fa fa-quote-left fa-2x text-primary mb-3" />
            <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
            <div className="d-flex align-items-center">
              <img className="img-fluid flex-shrink-0 rounded" src="img/testimonial-2.jpg" style={{width: 50, height: 50}} alt="Client Avatar" />
              <div className="ps-3">
                <h5 className="mb-1">Client Name</h5>
                <small>Profession</small>
              </div>
            </div>
          </div>
          <div className="testimonial-item bg-light rounded p-4">
            <i className="fa fa-quote-left fa-2x text-primary mb-3" />
            <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
            <div className="d-flex align-items-center">
              <img className="img-fluid flex-shrink-0 rounded" src="img/testimonial-3.jpg" style={{width: 50, height: 50}} alt="Client Avatar" />
              <div className="ps-3">
                <h5 className="mb-1">Client Name</h5>
                <small>Profession</small>
              </div>
            </div>
          </div>
          <div className="testimonial-item bg-light rounded p-4">
            <i className="fa fa-quote-left fa-2x text-primary mb-3" />
            <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
            <div className="d-flex align-items-center">
              <img className="img-fluid flex-shrink-0 rounded" src="img/testimonial-4.jpg" style={{width: 50, height: 50}} alt="Client Avatar" />
              <div className="ps-3">
                <h5 className="mb-1">Client Name</h5>
                <small>Profession</small>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
    <footer/>
    </div>
  );
}

export default Testimonial;
