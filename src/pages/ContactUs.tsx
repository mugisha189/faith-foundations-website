import React from 'react';

const ContactUs: React.FC = () => {
  return (
<div>
          <section className="common-banner">
         <div className="container">
            <div className="row">
               <div className="common-banner__content text-center">
                  <span className="sub-title"><i className="icon-donation"></i>Start donating poor people</span>
                  <h2 className="title-animation">Contact Us</h2>
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


      <section className="contact-main volunteer">
         <div className="container">
            <div className="row gutter-40">
               <div className="col-12 col-xl-6">
                  <div className="contact__content">
                     <div className="section__content" data-aos="fade-up" data-aos-duration="1000">
                        <span className="sub-title"><i className="icon-donation"></i> Get In Touch</span>
                        <h2 className="title-animation">Contact Us</h2>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                           doloremque laudantium, totam rem aperiam, eaque inventore
                        </p>
                     </div>
                     <div className="contact-main__inner cta">
                        <div className="contact-main__single">
                           <div className="thumb">
                              <i className="fa-solid fa-location-dot"></i>
                           </div>
                           <div className="content">
                              <h6>Location</h6>
                              <p><a href="https://maps.app.goo.gl/Gr9pTNqz5FRNrjQw8" target="_blank">
                                    55 Main street, 2nd block,
                                    Melbourne, Australia
                                 </a>
                              </p>
                           </div>
                        </div>
                        <div className="contact-main__single">
                           <div className="thumb">
                              <i className="fa-solid fa-phone"></i>
                           </div>
                           <div className="content">
                              <h6>Phone</h6>
                              <p><a href="tel:2305-587-3407">+1 (368) 567 89 54 </a></p>
                              <p><a href="tel:2305-587-3407">+236 (456) 896 22</a></p>
                           </div>
                        </div>
                        <div className="contact-main__single">
                           <div className="thumb">
                              <i className="fa-solid fa-envelope"></i>
                           </div>
                           <div className="content">
                              <h6>Email</h6>
                              <p><a href="mailto:support@example.com">example@email.com</a></p>
                              <p><a href="mailto:support@example.com">charifund@email.com</a></p>
                           </div>
                        </div>
                        <div className="contact-main__single">
                           <div className="thumb">
                              <i className="fa-solid fa-share-nodes"></i>
                           </div>
                           <div className="content">
                              <h6>Social</h6>
                              <div className="social">
                                 <a href="https://www.facebook.com/" target="_blank" aria-label="share us on facebook"
                                    title="facebook">
                                    <i className="fa-brands fa-facebook-f"></i>
                                 </a>
                                 <a href="https://vimeo.com/" target="_blank" aria-label="share us on vimeo"
                                    title="vimeo">
                                    <i className="fa-brands fa-vimeo-v"></i>
                                 </a>
                                 <a href="https://x.com/" target="_blank" aria-label="share us on twitter"
                                    title="twitter">
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
                     <div className="contact-main__thumb cta">
                        <img src="/images/contact-thumb.png" alt="Image" />
                     </div>
                  </div>
               </div>
               <div className="col-12 col-xl-6">
                  <div className="contact__form volunteer__form checkout__form" data-aos="fade-up" data-aos-duration="1000"
                     data-aos-delay="100">
                     <div className="volunteer__form-content">
                        <h4 className="title-animation">Fill Up The Form</h4>
                        <p>Your email address will not be published. Required fields are marked *</p>
                     </div>
                     <form action="#" method="post" className="cta">
                        <div className="input-single">
                           <input type="text" name="full-name" id="fullName" placeholder="Enter Name" required />
                           <i className="fa-solid fa-user"></i>
                        </div>
                        <div className="input-single">
                           <input type="email" name="c-email" id="cEmail" placeholder="Enter Email" required />
                           <i className="fa-solid fa-envelope"></i>
                        </div>
                        <div className="input-single">
                           <input type="text" name="phone-number" id="phoneNumber" placeholder="Phone Number" required />
                           <i className="fa-solid fa-phone"></i>
                        </div>
                        <div className="input-single alter-input">
                           <textarea name="contact-message" id="contactMessage"
                              placeholder="Your Message..."></textarea>
                           <i className="fa-solid fa-comments"></i>
                        </div>
                        <div className="form-cta">
                           <button type="submit" aria-label="submit message" title="submit message"
                              className="btn--primary">Get A Quote <i className="fa-solid fa-arrow-right"></i></button>
                        </div>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </section>
</div>
  );
};

export default ContactUs;
