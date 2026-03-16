import React from 'react';

const Donate: React.FC = () => {
  return (
<div>
         <section className="common-banner">
         <div className="container">
            <div className="row">
               <div className="common-banner__content text-center">
                  <span className="sub-title"><i className="icon-donation"></i>Support Our Mission</span>
                  <h2 className="title-animation">Donate to Faith Foundation</h2>
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



      <div className="cm-details donate-us community checkout faq">
         <div className="container">
            <div className="row gutter-60">
               <div className="col-12 col-xl-8">
                  <div className="cm-details__content">
                     <div className="cm-details__poster" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
                        <img src="/images/event/poster-two.png" alt="Image" />
                     </div>
                     <div className="donate-inner" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
                        <div className="cm-group">
                           <h3 className="title-animation">Partner With Us to Transform Lives</h3>
                           <p>Your generous donation helps us continue our mission of bringing hope to vulnerable children and women in Rwanda. Together, we can break the poverty cycle and create lasting change in our community.</p>
                        </div>
                        <div className="cta">
                           <div className="community-donation">
                              <div className="community-donation__inner">
                                 <h5>Your Support Makes a Difference</h5>
                                 <div className="warning">
                                    <div className="line"><i className="fa-solid fa-triangle-exclamation"></i></div>
                                    <p><strong>Notice:</strong> Test mode is enabled. While in test mode no
                                       live
                                       donations are processed.
                                    </p>
                                 </div>
                                 <div className="donation-form" data-aos-delay="300">
                                    <div className="donation-form__single">
                                       <h5>Your Donation:</h5>
                                       <div className="input-group-icon">
                                          <div className="thumb">
                                             <i className="fa-solid fa-dollar-sign"></i>
                                          </div>
                                          <input type="text" name="donation-amount" id="donationAmount" />
                                       </div>
                                       <div className="made-amount">
                                          <span className="donation-amount">20</span>
                                          <span className="donation-amount">50</span>
                                          <span className="donation-amount active">100</span>
                                          <span className="donation-amount">200</span>
                                          <span className="donation-amount custom-amount">Custom</span>
                                       </div>
                                    </div>
                                    <div className="donation-form__single">
                                       <h5>Select Payment Method</h5>
                                       <div className="radio-wrapper">
                                          <div className="radio-single">
                                             <input type="radio" id="testDonation" name="donation-payment" checked />
                                             <label htmlFor="testDonation">Test Donation</label>
                                          </div>
                                          <div className="radio-single">
                                             <input type="radio" id="offlineDonation" name="donation-payment" checked />
                                             <label htmlFor="offlineDonation">Offline Donation</label>
                                          </div>
                                          <div className="radio-single">
                                             <input type="radio" id="cardDonation" name="donation-payment" checked />
                                             <label htmlFor="cardDonation">Credit Card</label>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="cta">
                                       <a href="donate-us.html" aria-label="donate us" title="donate us"
                                          className="btn--primary">Donate Now <i className="fa-solid fa-arrow-right"></i></a>
                                    </div>
                                 </div>
                              </div>
                              <hr />
                              <div className="checkout__form">
                                 <div className="intro">
                                    <h5>Details Information</h5>
                                 </div>
                                 <form action="index.html" method="post">
                                    <div className="input-group">
                                       <div className="input-single">
                                          <input type="text" name="c-name" id="cName" placeholder="First Name" required />
                                          <i className="fa-solid fa-user"></i>
                                       </div>
                                       <div className="input-single">
                                          <input type="text" name="c-lastname" id="clastName" placeholder="Last Name"
                                             required />
                                          <i className="fa-solid fa-user"></i>
                                       </div>
                                    </div>
                                    <div className="input-group">
                                       <div className="input-single">
                                          <input type="email" name="c-email" id="cEmail" placeholder="Your Email"
                                             required />
                                          <i className="fa-solid fa-envelope"></i>
                                       </div>
                                       <div className="input-single">
                                          <input type="text" name="c-phone" id="cPhone" placeholder="Your Number"
                                             required />
                                          <i className="fa-solid fa-phone"></i>
                                       </div>
                                    </div>
                                    <div className="input-single">
                                       <input type="text" name="c-address-two" id="cAddressTwo"
                                          placeholder="Your Address" required />
                                       <i className="fa-solid fa-location-dot"></i>
                                    </div>
                                    <div className="input-single alter-input">
                                       <textarea name="contact-message" id="contactMessage"
                                          placeholder="your message..."></textarea>
                                       <i className="fa-solid fa-envelope"></i>
                                    </div>
                                    <div className="form-cta">
                                       <button type="submit" aria-label="submit message" title="submit message"
                                          className="btn--primary">Save Informations <i
                                             className="fa-solid fa-arrow-right"></i></button>
                                    </div>
                                 </form>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="award">
                     <div className="container">
                        <div className="row gutter-24">
                           <div className="col-12 col-lg-8">
                              <div className="award__single" data-aos="fade-up" data-aos-duration="1000">
                                 <div className="thumb">
                                    <a href="event-details.html">
                                       <img src="/images/award/one.png" alt="Image" />
                                    </a>
                                 </div>
                              </div>
                           </div>
                           <div className="col-12 col-lg-4">
                              <div className="award__single" data-aos="fade-up" data-aos-duration="1000"
                                 data-aos-delay="200">
                                 <div className="thumb">
                                    <a href="event-details.html">
                                       <img src="/images/award/four.png" alt="Image" />
                                    </a>
                                 </div>
                              </div>
                           </div>
                           <div className="col-12 col-lg-5">
                              <div className="award__single" data-aos="fade-up" data-aos-duration="1000"
                                 data-aos-delay="100">
                                 <div className="thumb">
                                    <a href="event-details.html">
                                       <img src="/images/award/two.png" alt="Image" />
                                    </a>
                                 </div>
                              </div>
                           </div>
                           <div className="col-12 col-lg-7">
                              <div className="award__single" data-aos="fade-up" data-aos-duration="1000"
                                 data-aos-delay="300">
                                 <div className="thumb">
                                    <a href="event-details.html">
                                       <img src="/images/award/three.png" alt="Image" />
                                    </a>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="faq__content-inner" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
                     <div className="accordion" id="accordion">
                        <div className="accordion-item">
                           <h6 className="accordion-header" id="headingOne">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                 data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                 What kind of recipes can I find on your website?
                              </button>
                           </h6>
                           <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                              data-bs-parent="#accordion">
                              <div className="accordion-body">
                                 <p>
                                    It is a long established fact that a reader will be distracted by
                                    the readable the a content of a page when looking at its layout.
                                    Many desktop publishing packages and web page editors.
                                 </p>
                              </div>
                           </div>
                        </div>
                        <div className="accordion-item">
                           <h6 className="accordion-header" id="headingTwo">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                 data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                 Are the recipes suitable for beginners?
                              </button>
                           </h6>
                           <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                              data-bs-parent="#accordion">
                              <div className="accordion-body">
                                 <p>
                                    It is a long established fact that a reader will be distracted by
                                    the readable the a content of a page when looking at its layout.
                                    Many desktop publishing packages and web page editors.
                                 </p>
                              </div>
                           </div>
                        </div>
                        <div className="accordion-item">
                           <h6 className="accordion-header" id="headingThree">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                 data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                 Do you offer cooking tips and techniques?
                              </button>
                           </h6>
                           <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                              data-bs-parent="#accordion">
                              <div className="accordion-body">
                                 <p>
                                    It is a long established fact that a reader will be distracted by
                                    the readable the a content of a page when looking at its layout.
                                    Many desktop publishing packages and web page editors.
                                 </p>
                              </div>
                           </div>
                        </div>
                        <div className="accordion-item">
                           <h6 className="accordion-header" id="headingFour">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                 data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                 How frequently do you update your recipe collection?
                              </button>
                           </h6>
                           <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour"
                              data-bs-parent="#accordion">
                              <div className="accordion-body">
                                 <p>
                                    It is a long established fact that a reader will be distracted by
                                    the readable the a content of a page when looking at its layout.
                                    Many desktop publishing packages and web page editors.
                                 </p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-12 col-xl-4">
                  <div className="cm-details__sidebar">
                     <div className="cm-sidebar-widget" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
                        <div className="intro">
                           <h5>search here</h5>
                        </div>
                        <form action="#" method="post">
                           <input type="text" name="search-product" id="searchProduct" placeholder="Search Here..."
                              required />
                           <button type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
                        </form>
                     </div>
                     <div className="cm-sidebar-widget" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
                        <div className="intro">
                           <h5>Recent Causes</h5>
                        </div>
                        <div className="cm-sidebar-post">
                           <div className="single-item">
                              <div className="thumb">
                                 <a href="blog-details.html">
                                    <img src="/images/blog/ph-one.png" alt="Image" />
                                 </a>
                              </div>
                              <div className="content">
                                 <p><i className="fa-solid fa-calendar-days"></i> <span>November 19, 2024</span>
                                 </p>
                                 <p><a href="blog-details.html">Where Innovation Meets Foundation</a>
                                 </p>
                              </div>
                           </div>
                           <div className="single-item">
                              <div className="thumb">
                                 <a href="blog-details.html">
                                    <img src="/images/blog/ph-two.png" alt="Image" />
                                 </a>
                              </div>
                              <div className="content">
                                 <p><i className="fa-solid fa-calendar-days"></i> <span>November 19, 2024</span>
                                 </p>
                                 <p><a href="blog-details.html">Where Innovation Meets Foundation</a>
                                 </p>
                              </div>
                           </div>
                           <div className="single-item">
                              <div className="thumb">
                                 <a href="blog-details.html">
                                    <img src="/images/blog/three.png" alt="Image" />
                                 </a>
                              </div>
                              <div className="content">
                                 <p><i className="fa-solid fa-calendar-days"></i> <span>November 22, 2024</span>
                                 </p>
                                 <p><a href="blog-details.html">Structures That Stand,
                                       Dreams That Soar</a>
                                 </p>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="cm-sidebar-widget" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
                        <div className="intro">
                           <h5>Tags</h5>
                        </div>
                        <div className="tag-wrapper">
                           <a href="shop.html">t-shirt</a>
                           <a href="shop.html">Banner Design</a>
                           <a href="shop.html">Brochures</a>
                           <a href="shop.html">Landing</a>
                           <a href="shop.html">Print</a>
                           <a href="shop.html">Business Card</a>
                        </div>
                     </div>
                     <div className="cm-sidebar-overview" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
                        <div className="cm-logo">
                           <img src="/images/event/logo.png" alt="Image" />
                        </div>
                        <div className="cm-content">
                           <p>Small Donations Bigger Impact</p>
                           <h4>Education Health
                              for Every Child
                           </h4>
                        </div>
                        <div className="cm-cta">
                           <a href="contact-us.html" aria-label="contact us" title="contact us" className="btn--primary">
                              Get A Quote <i className="fa-solid fa-arrow-right"></i>
                           </a>
                        </div>
                        <img src="/images/event/overview.png" alt="Image" className="parallax-image" />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
</div>
  );
};

export default Donate;
