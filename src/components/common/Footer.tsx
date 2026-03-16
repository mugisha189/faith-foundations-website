import React from 'react';

const Footer: React.FC = () => {
  return (
<div>
      <footer className="footer-two">
         <div className="container">
            <div className="row align-items-center gutter-30">
               <div className="col-12 col-lg-7 col-xxl-6">
                  <div className="footer-two__newsletter-content">
                     <h3 className="title-animation">
                        Stay Connected with Faith Foundation
                     </h3>
                     <p>Get updates on our work and learn how you can make a difference</p>
                  </div>
               </div>
               <div className="col-12 col-lg-5 col-xxl-5 offset-xxl-1">
                  <div className="footer-two__newsletter-form">
                     <form action="#" method="post">
                        <input type="email" required name="subscribe-email" id="subscribeEmail"
                           placeholder="Enter Email" />
                        <button type="submit" aria-label="subscribe to our newsletter"
                           title="subscribe to our newsletter" className="btn--primary"> <i
                              className="fa-solid fa-paper-plane"></i>
                        </button>
                     </form>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col-12">
                  <hr className="divider" />
               </div>
            </div>
            <div className="row gutter-60">
               <div className="col-12 col-md-6 col-xl-3">
                  <div className="footer-two__widget" data-aos="fade-up" data-aos-duration="1000">
                     <div className="footer-two__widget-logo">
                        <a href="/">
                           <img src="/images/logo-light.png" alt="Image" />
                        </a>
                     </div>
                     <div className="footer-two__widget-content">
                        <p>Faith Foundation brings hope to vulnerable children and women in Rwanda through education, empowerment, and community support since 2012.</p>
                        <div className="social">
                           <a href="https://www.facebook.com/" target="_blank" aria-label="share us on facebook"
                              title="facebook">
                              <i className="fa-brands fa-facebook-f"></i>
                           </a>
                           <a href="https://vimeo.com/" target="_blank" aria-label="share us on vimeo" title="vimeo">
                              <i className="fa-brands fa-vimeo-v"></i>
                           </a>
                           <a href="https://x.com/" target="_blank" aria-label="share us on twitter" title="twitter">
                              <i className="fa-brands fa-twitter"></i>
                           </a>
                           <a href="https://www.linkedin.com/" target="_blank" aria-label="share us on linkedin"
                              title="linkedin">
                              <i className="fa-brands fa-linkedin-in"></i>
                           </a>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-12 col-md-6 col-xl-2 offset-xl-1">
                  <div className="footer-two__widget" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                     <div className="footer-two__widget-intro">
                        <h5>Quick Links</h5>
                        <div className="line">
                           <span className="large-line"></span>
                           <span className="small-line"></span>
                           <span className="small-line"></span>
                        </div>
                     </div>
                     <div className="footer-two__widget-content">
                        <ul>
                           <li><a href="/about-us"><i className="fa-solid fa-arrow-right"></i>About Us</a>
                           </li>
                           <li><a href="/news"><i className="fa-solid fa-arrow-right"></i>Our
                                 News</a>
                           </li>
                           <li><a href="/causes"><i className="fa-solid fa-arrow-right"></i>Our
                                 Campaign</a>
                           </li>
                           <li><a href="/faq"><i className="fa-solid fa-arrow-right"></i>FAQ</a></li>
                           <li><a href="/contact-us"><i className="fa-solid fa-arrow-right"></i>Get A
                                 Quote</a>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
               <div className="col-12 col-md-6 col-xl-3">
                  <div className="footer-two__widget footer-two__widget--alternate" data-aos="fade-up"
                     data-aos-duration="1000" data-aos-delay="400">
                     <div className="footer-two__widget-intro">
                        <h5>Our Services</h5>
                        <div className="line">
                           <span className="large-line"></span>
                           <span className="small-line"></span>
                           <span className="small-line"></span>
                        </div>
                     </div>
                     <div className="footer-two__widget-content">
                        <ul>
                           <li><a href="/causes"><i className="fa-solid fa-arrow-right"></i>Our Causes</a>
                           </li>
                           <li><a href="/events"><i className="fa-solid fa-arrow-right"></i>Education
                                 Support</a>
                           </li>
                           <li><a href="/causes"><i className="fa-solid fa-arrow-right"></i>Our
                                 Campaign</a>
                           </li>
                           <li><a href="/causes"><i className="fa-solid fa-arrow-right"></i>Food
                                 Support</a>
                           </li>
                           <li><a href="/causes"><i className="fa-solid fa-arrow-right"></i>Health
                                 Support</a>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
               <div className="col-12 col-md-6 col-xl-3">
                  <div className="footer-two__widget footer-two__widget--alternate" data-aos="fade-up"
                     data-aos-duration="1000" data-aos-delay="600">
                     <div className="footer-two__widget-intro">
                        <h5>Get In Touch</h5>
                        <div className="line">
                           <span className="large-line"></span>
                           <span className="small-line"></span>
                           <span className="small-line"></span>
                        </div>
                     </div>
                     <div className="footer-two__widget-content footer-two__widget-content--contact">
                        <ul>
                           <li><a href="https://www.faithfoundation.rw" target="_blank"><i
                                    className="fa-solid fa-location-dot"></i>Kinigi Sector, Rwanda</a>
                           </li>
                           <li><a href="tel:+250786714717"><i className="fa-solid fa-phone"></i>+250 786 714 717</a>
                           </li>
                           <li><a href="mailto:faithfoundation@gmail.com"><i
                                    className="fa-regular fa-envelope"></i>faithfoundation@gmail.com</a></li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="footer-two__copyright">
            <div className="container">
               <div className="row align-items-center gutter-12">
                  <div className="col-12 col-lg-6">
                     <div className="footer-two__copyright-inner text-center text-lg-start">
                        <p>Copyright &copy; <span id="copyrightYear"></span> <a href="/">Faith Foundation</a>.
                           All rights
                           reserved.
                        </p>
                     </div>
                  </div>
                  <div className="col-12 col-lg-6">
                     <div className="footer__bottom-left">
                        <ul className="footer__bottom-list justify-content-center justify-content-lg-end">
                           <li><a href="/terms">Terms & Conditions</a></li>
                           <li><a href="/privacy">Privacy Policy</a></li>
                           <li><a href="/privacy">Cookie Settings</a></li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="sprade" data-aos="zoom-in" data-aos-duration="1000">
            <img src="/images/sprade.png" alt="Image" className="base-img" />
         </div>
         <div className="sprade-light" data-aos="zoom-in" data-aos-duration="1000">
            <img src="/images/sprade-light.png" alt="Image" />
         </div>
      </footer>
</div>
  );
};

export default Footer;
