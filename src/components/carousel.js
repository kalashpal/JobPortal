import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="container-fluid p-0">
      <Slider {...settings} className="header-carousel position-relative">
        <div className="owl-carousel-item position-relative">
          <img className="img-fluid" src="img/carousel-1.jpg" alt="" />
          <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: 'rgba(43, 57, 64, .5)' }}>
            <div className="container">
              <div className="row justify-content-start">
                <div className="col-10 col-lg-8">
                  <h1 className="display-3 text-white animated slideInDown mb-4">Find The Perfect Job That You Deserved</h1>
                  <p className="fs-5 fw-medium text-white mb-4 pb-2">Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.</p>
                  <a href="" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Search A Job</a>
                  <a href="" className="btn btn-secondary py-md-3 px-md-5 animated slideInRight">Find A Talent</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="owl-carousel-item position-relative">
          <img className="img-fluid" src="img/carousel-2.jpg" alt="" />
          <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: 'rgba(43, 57, 64, .5)' }}>
            <div className="container">
              <div className="row justify-content-start">
                <div className="col-10 col-lg-8">
                  <h1 className="display-3 text-white animated slideInDown mb-4">Find The Best Startup Job That Fit You</h1>
                  <p className="fs-5 fw-medium text-white mb-4 pb-2">Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.</p>
                  <a href="" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Search A Job</a>
                  <a href="" className="btn btn-secondary py-md-3 px-md-5 animated slideInRight">Find A Talent</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Add more slides as needed */}
      </Slider>
    </div>
  );
};

export default Carousel;
