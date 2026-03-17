import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div>
      <section className="common-banner">
         <div className="container">
            <div className="row">
               <div className="common-banner__content text-center">
                  <span className="sub-title"><i className="icon-donation"></i>Page Not Found</span>
                  <h2 className="title-animation">404 - Page Not Found</h2>
               </div>
            </div>
         </div>
         <div className="banner-bg">
            <img src="/images/banner/banner-bg.png" alt="Image" />
         </div>
         <div className="shape">
            <img src="/images/shape.png" alt="Image" />
         </div>
         <div className="sprade" data-aos="zoom-in" data-aos-duration="1000">
            <img src="/images/sprade-base.png" alt="Image" className="base-img" />
         </div>
      </section>

      <section className="privacy">
         <div className="container">
            <div className="row">
               <div className="col-12">
                  <div className="privacy-group text-center" data-aos="fade-up" data-aos-duration="1200">
                     <div className="error-404">
                        <h1 className="error-code">404</h1>
                        <h3 className="title-animation">Oops! Page Not Found</h3>
                        <p>We're sorry, but the page you're looking for doesn't exist or has been moved. 
                           But don't worry - you can still make a difference in the lives of vulnerable children and women in Rwanda.</p>
                        
                        <div className="error-404-content">
                           <p>Faith Foundation Rwanda has been empowering hope since 2012, bringing opportunities to vulnerable children and women in Kinigi. While this page may be lost, our mission to break the poverty cycle through education and community development continues.</p>
                           
                           <div className="error-404-actions">
                              <div className="row justify-content-center">
                                 <div className="col-12 col-md-4">
                                    <div className="action-card">
                                       <i className="icon-home"></i>
                                       <h5>Back to Home</h5>
                                       <p>Return to our homepage and discover how we're making a difference</p>
                                       <Link to="/" className="btn--primary">Go Home</Link>
                                    </div>
                                 </div>
                                 <div className="col-12 col-md-4">
                                    <div className="action-card">
                                       <i className="icon-donation"></i>
                                       <h5>Make a Donation</h5>
                                       <p>Your support helps us continue our mission of hope and empowerment</p>
                                       <Link to="/donate" className="btn--secondary">Donate Now</Link>
                                    </div>
                                 </div>
                                 <div className="col-12 col-md-4">
                                    <div className="action-card">
                                       <i className="icon-education"></i>
                                       <h5>Our Causes</h5>
                                       <p>Learn about our programs and the communities we serve</p>
                                       <Link to="/causes" className="btn--tertiary">View Causes</Link>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
};

export default NotFound;
