import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <div>

      <section className="common-banner">
         <div className="container">
            <div className="row">
               <div className="common-banner__content text-center">
                  <span className="sub-title"><i className="icon-donation"></i>Empowering Hope Since 2012</span>
                  <h2 className="title-animation">About Faith Foundation</h2>
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



      <section className="help">
         <div className="container">
            <div className="row align-items-center gutter-40">
               <div className="col-12 col-lg-5 col-xxl-6 d-none d-lg-block">
                  <div className="help__thumb">
                     <div className="help__thumb-inner">
                        <div className="thumb-top thumb">
                           <img src="/images/help/thumb-top.png" alt="Image" />
                        </div>
                        <div className="thumb-lg thumb" data-aos="fade-left" data-aos-duration="1000">
                           <img src="/images/help/thumb-lg.png" alt="Image" />
                           <div className="video-btn-wrapper">
                              <a href="https://www.youtube.com/watch?v=RvreULjnzFo" target="_blank" title="video Player"
                                 className="open-video-popup">
                                 <i className="icon-play"></i>
                              </a>
                           </div>
                        </div>
                        <div className="thumb thumb-bottom">
                           <img src="/images/help/thumb-bottom.png" alt="Image" />
                        </div>
                        <div className="line">
                           <img src="/images/help/line.png" alt="Image" />
                        </div>
                        <div className="grid-line">
                           <img src="/images/help/grid.png" alt="Image" className="base-img" />
                        </div>
                        <div className="vertical-text">
                           <h5>We Give <span>Donations</span> to Poor People </h5>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-12 col-lg-7 col-xxl-6">
                  <div className="help__content">
                     <span className="sub-title"><i className="icon-donation"></i>Empowering Hope Since 2012</span>
                     <h2 className="title-animation">Our Story: <span>Faith</span> Uwantege's Vision</h2>
                     <p>Faith Foundation began working on the 6th June 2012, this organization is currently serving 100 children and 48 women. Started by a young woman from Rwanda named Faith UWANTEGE, who saw the need and fought hard to get a solution to the problem.</p>
                     <p>FF's inspiration bears its roots from the streets of Kinigi where she worked by then, when she constantly saw vulnerable children at risk everywhere she walked with no hope for tomorrow. She then made a decision of saving her own salary to see her dream come true, because she has always wanted to do something to help the children at risk not only in Rwanda but all over the world and hence the birth of the Faith Foundation.</p>
                     <div className="help__content-icon-group">
                        <div className="help__content-icon">
                           <div className="thumb">
                              <i className="icon-make-donation"></i>
                           </div>
                           <div className="content">
                              <h6>Start helping them</h6>
                              <p>Restore hope, empower dreams and educate to build skills for a brighter life and future.</p>
                           </div>
                        </div>
                        <div className="help__content-icon">
                           <div className="thumb">
                              <i className="icon-support-heart"></i>
                           </div>
                           <div className="content">
                              <h6>Make Donations</h6>
                              <p>Help us break the poverty cycle by supporting the absolute poorest of the poor.</p>
                           </div>
                        </div>
                     </div>
                     <div className="help__content-list">
                        <ul>
                           <li><i className="fa-solid fa-circle-check"></i> Currently serving 100 children and 48 women
                           </li>
                           <li><i className="fa-solid fa-circle-check"></i> Breaking the poverty cycle through education
                           </li>
                           <li><i className="fa-solid fa-circle-check"></i> Empowering widows to generate income and support their families
                           </li>
                        </ul>
                     </div>
                     <div className="help__content-cta cta">
                        <a href="/donate" aria-label="donate now" title="donate now" className="btn--primary">Donate
                           Now</a>
                        <div className="contact-btn">
                           <div className="contact-icon">
                              <i className="icon-phone"></i>
                           </div>
                           <div className="contact-content">
                              <p>Phone</p>
                              <a href="tel:+250786714717">+250 786 714 717</a>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="hand">
            <img src="/images/help/hand.png" alt="Image" />
         </div>
         <div className="parasuit">
            <img src="/images/parasuit.png" alt="Image" />
         </div>
         <div className="spade">
            <img src="/images/help/spade.png" alt="Image" />
         </div>
      </section>



      <section className="cta-section-two">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-12 col-lg-7">
                  <div className="cta__section__content">
                     <div className="section__content text-center" data-aos="fade-up" data-aos-duration="1000">
                        <span className="sub-title"><i className="icon-donation"></i>Start donating poor
                           people</span>
                        <h2 className="title-animation">children need your help
                           by donating today
                        </h2>
                        <div className="banner__content-cta cta">
                           <a href="our-causes.html" aria-label="about us" title="about us"
                              className="btn--tertiary">Discover More <i className="fa-solid fa-arrow-right"></i></a>
                           <a href="contact-us.html" aria-label="contact us" title="contact us" className="btn--primary">Get
                              A Quote <i className="fa-solid fa-arrow-right"></i></a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="cta-bg">
            <img src="/images/cta/cta-bg.png" alt="Image" className="parallax-image" />
         </div>
         <div className="shape-left" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300">
            <img src="/images/cta/shape-left.png" alt="Image" />
         </div>
         <div className="shape">
            <img src="/images/shape-two.png" alt="Image" />
         </div>
      </section>



      <section className="team">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-12 col-lg-10 col-xl-6">
                  <div className="section__header text-center" data-aos="fade-up" data-aos-duration="1000">
                     <span className="sub-title"><i className="icon-donation"></i>Start donating poor
                        people</span>
                     <h2 className="title-animation">Meet Our Volunteer
                        <span>Team</span> members
                     </h2>
                  </div>
               </div>
            </div>
            <div className="row gutter-40">
               <div className="col-12 col-sm-6 col-xl-3">
                  <div className="team__single-wrapper" data-aos="fade-up" data-aos-duration="1000">
                     <div className="team__single van-tilt">
                        <div className="team__single-thumb">
                           <a href="team-details.html">
                              <img src="/images/team/one.png" alt="Image" />
                           </a>
                           <div className="team__icons">
                              <div className="team__single-content__icon">
                                 <i className="fa-solid fa-plus"></i>
                              </div>
                              <div className="team__single__thumb-social">
                                 <ul>
                                    <li>
                                       <a href="index.html">
                                          <i className="fa-brands fa-facebook-f"></i>
                                       </a>
                                    </li>
                                    <li>
                                       <a href="index.html">
                                          <i className="fa-brands fa-twitter"></i>
                                       </a>
                                    </li>
                                    <li>
                                       <a href="index.html">
                                          <i className="fa-brands fa-instagram"></i>
                                       </a>
                                    </li>
                                    <li>
                                       <a href="index.html">
                                          <i className="fa-brands fa-behance"></i>
                                       </a>
                                    </li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                        <div className="team__single-content">
                           <h6><a href="team-details.html">Michel Fokluz</a></h6>
                           <p>Volunteer</p>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-12 col-sm-6 col-xl-3">
                  <div className="team__single-wrapper" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                     <div className="team__single van-tilt">
                        <div className="team__single-thumb">
                           <a href="team-details.html">
                              <img src="/images/team/two.png" alt="Image" />
                           </a>
                           <div className="team__icons">
                              <div className="team__single-content__icon">
                                 <i className="fa-solid fa-plus"></i>
                              </div>
                              <div className="team__single__thumb-social">
                                 <ul>
                                    <li>
                                       <a href="index.html">
                                          <i className="fa-brands fa-facebook-f"></i>
                                       </a>
                                    </li>
                                    <li>
                                       <a href="index.html">
                                          <i className="fa-brands fa-twitter"></i>
                                       </a>
                                    </li>
                                    <li>
                                       <a href="index.html">
                                          <i className="fa-brands fa-instagram"></i>
                                       </a>
                                    </li>
                                    <li>
                                       <a href="index.html">
                                          <i className="fa-brands fa-behance"></i>
                                       </a>
                                    </li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                        <div className="team__single-content">
                           <h6><a href="team-details.html">Arian Drobloas</a></h6>
                           <p>Volunteer</p>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-12 col-sm-6 col-xl-3">
                  <div className="team__single-wrapper" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
                     <div className="team__single van-tilt">
                        <div className="team__single-thumb">
                           <a href="team-details.html">
                              <img src="/images/team/three.png" alt="Image" />
                           </a>
                           <div className="team__icons">
                              <div className="team__single-content__icon">
                                 <i className="fa-solid fa-plus"></i>
                              </div>
                              <div className="team__single__thumb-social">
                                 <ul>
                                    <li>
                                       <a href="index.html">
                                          <i className="fa-brands fa-facebook-f"></i>
                                       </a>
                                    </li>
                                    <li>
                                       <a href="index.html">
                                          <i className="fa-brands fa-twitter"></i>
                                       </a>
                                    </li>
                                    <li>
                                       <a href="index.html">
                                          <i className="fa-brands fa-instagram"></i>
                                       </a>
                                    </li>
                                    <li>
                                       <a href="index.html">
                                          <i className="fa-brands fa-behance"></i>
                                       </a>
                                    </li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                        <div className="team__single-content">
                           <h6><a href="team-details.html">Jara Klintof</a></h6>
                           <p>Volunteer</p>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-12 col-sm-6 col-xl-3">
                  <div className="team__single-wrapper" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="900">
                     <div className="team__single van-tilt">
                        <div className="team__single-thumb">
                           <a href="team-details.html">
                              <img src="/images/team/four.png" alt="Image" />
                           </a>
                           <div className="team__icons">
                              <div className="team__single-content__icon">
                                 <i className="fa-solid fa-plus"></i>
                              </div>
                              <div className="team__single__thumb-social">
                                 <ul>
                                    <li>
                                       <a href="index.html">
                                          <i className="fa-brands fa-facebook-f"></i>
                                       </a>
                                    </li>
                                    <li>
                                       <a href="index.html">
                                          <i className="fa-brands fa-twitter"></i>
                                       </a>
                                    </li>
                                    <li>
                                       <a href="index.html">
                                          <i className="fa-brands fa-instagram"></i>
                                       </a>
                                    </li>
                                    <li>
                                       <a href="index.html">
                                          <i className="fa-brands fa-behance"></i>
                                       </a>
                                    </li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                        <div className="team__single-content">
                           <h6><a href="team-details.html">Aiden Markram</a></h6>
                           <p>Volunteer</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col-12">
                  <div className="section__cta cta text-center">
                     <a href="our-team.html" aria-label="our team" title="our team" className="btn--primary">View All
                        <i className="fa-solid fa-arrow-right"></i></a>
                  </div>
               </div>
            </div>
         </div>
         <div className="spade">
            <img src="/images/sprade-green.png" alt="Image" />
         </div>
      </section>



      <section className="faq">
         <div className="container">
            <div className="row align-items-center">
               <div className="col-12 col-lg-8 col-xl-6">
                  <div className="faq__content">
                     <div className="section__content" data-aos="fade-up" data-aos-duration="1000">
                        <span className="sub-title"><i className="icon-donation"></i>Start donating poor
                           people</span>
                        <h2 className="title-animation">Frequently <span>Asked</span>
                           Questions
                        </h2>
                     </div>
                     <div className="faq__content-inner cta" data-aos="fade-up" data-aos-duration="1000"
                        data-aos-delay="100">
                        <div className="accordion" id="accordion">
                           <div className="accordion-item">
                              <h6 className="accordion-header" id="headingOne">
                                 <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    What kind of recipes can I find on your website?
                                 </button>
                              </h6>
                              <div id="collapseOne" className="accordion-collapse collapse show"
                                 aria-labelledby="headingOne" data-bs-parent="#accordion">
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
               </div>
               <div className="col-12 col-lg-4 col-xl-5 offset-xl-1">
                  <div className="faq__thumb d-none d-lg-block">
                     <div className="faq__thumb-inner">
                        <div className="thumb-lg" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
                           <img src="/images/faq/thumb-lg.png" alt="Image" />
                        </div>
                        <div className="thumb-sm" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="300">
                           <img src="/images/faq/thumb-sm.png" alt="Image" />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="shape d-none d-lg-block">
            <img src="/images/faq/shape.png" alt="Image" />
         </div>
      </section>



      <section className="testimonial testimonial-alter" data-background="/images/bg-one.png">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-12 col-md-8 col-xl-7">
                  <div className="section__header text-center" data-aos="fade-up" data-aos-duration="1000">
                     <span className="sub-title"><i className="icon-donation"></i>Start donating poor
                        people</span>
                     <h2 className="title-animation">Our valueable <span>customer</span>
                        Awesome Feedback
                     </h2>
                  </div>
               </div>
            </div>
         </div>
         <div className="testimonial__inner">
            <div className="container">
               <div className="row">
                  <div className="col-12">
                     <div className="testimonial__slider swiper">
                        <div className="swiper-wrapper">
                           <div className="swiper-slide">
                              <div className="testimonial__slider-single">
                                 <div className="review">
                                    <i className="icon-star"></i>
                                    <i className="icon-star"></i>
                                    <i className="icon-star"></i>
                                    <i className="icon-star"></i>
                                    <i className="icon-star"></i>
                                 </div>
                                 <div className="content">
                                    <blockquote><q>Charity is the voluntary act of giving help, typically in
                                          the form of money, time, or resources, to those in need.
                                          Charitable organizations aim to solve social, environmental, and
                                          economic challenges by addressing issues like poverty</q>
                                    </blockquote>
                                 </div>
                                 <div className="author-info">
                                    <div className="author-thumb">
                                       <img src="/images/author.png" alt="Image" />
                                    </div>
                                    <div className="author-content">
                                       <h6>Michel Smith</h6>
                                       <p>Cloth Store Inc.</p>
                                    </div>
                                 </div>
                                 <div className="quote">
                                    <img src="/images/quote.png" alt="Image" />
                                 </div>
                              </div>
                           </div>
                           <div className="swiper-slide">
                              <div className="testimonial__slider-single">
                                 <div className="review">
                                    <i className="icon-star"></i>
                                    <i className="icon-star"></i>
                                    <i className="icon-star"></i>
                                    <i className="icon-star"></i>
                                    <i className="icon-star"></i>
                                 </div>
                                 <div className="content">
                                    <blockquote><q>Charity is the voluntary act of giving help, typically in
                                          the form of money, time, or resources, to those in need.
                                          Charitable organizations aim to solve social, environmental, and
                                          economic challenges by addressing issues like poverty</q>
                                    </blockquote>
                                 </div>
                                 <div className="author-info">
                                    <div className="author-thumb">
                                       <img src="/images/author.png" alt="Image" />
                                    </div>
                                    <div className="author-content">
                                       <h6>Ruby Klara</h6>
                                       <p>Cloth Store Inc.</p>
                                    </div>
                                 </div>
                                 <div className="quote">
                                    <img src="/images/quote.png" alt="Image" />
                                 </div>
                              </div>
                           </div>
                           <div className="swiper-slide">
                              <div className="testimonial__slider-single">
                                 <div className="review">
                                    <i className="icon-star"></i>
                                    <i className="icon-star"></i>
                                    <i className="icon-star"></i>
                                    <i className="icon-star"></i>
                                    <i className="icon-star"></i>
                                 </div>
                                 <div className="content">
                                    <blockquote><q>Charity is the voluntary act of giving help, typically in
                                          the form of money, time, or resources, to those in need.
                                          Charitable organizations aim to solve social, environmental, and
                                          economic challenges by addressing issues like poverty</q>
                                    </blockquote>
                                 </div>
                                 <div className="author-info">
                                    <div className="author-thumb">
                                       <img src="/images/author.png" alt="Image" />
                                    </div>
                                    <div className="author-content">
                                       <h6>Bishu Kiev</h6>
                                       <p>Cloth Store Inc.</p>
                                    </div>
                                 </div>
                                 <div className="quote">
                                    <img src="/images/quote.png" alt="Image" />
                                 </div>
                              </div>
                           </div>
                           <div className="swiper-slide">
                              <div className="testimonial__slider-single">
                                 <div className="review">
                                    <i className="icon-star"></i>
                                    <i className="icon-star"></i>
                                    <i className="icon-star"></i>
                                    <i className="icon-star"></i>
                                    <i className="icon-star"></i>
                                 </div>
                                 <div className="content">
                                    <blockquote><q>Charity is the voluntary act of giving help, typically in
                                          the form of money, time, or resources, to those in need.
                                          Charitable organizations aim to solve social, environmental, and
                                          economic challenges by addressing issues like poverty</q>
                                    </blockquote>
                                 </div>
                                 <div className="author-info">
                                    <div className="author-thumb">
                                       <img src="/images/author.png" alt="Image" />
                                    </div>
                                    <div className="author-content">
                                       <h6>Michel Smith</h6>
                                       <p>Cloth Store Inc.</p>
                                    </div>
                                 </div>
                                 <div className="quote">
                                    <img src="/images/quote.png" alt="Image" />
                                 </div>
                              </div>
                           </div>
                           <div className="swiper-slide">
                              <div className="testimonial__slider-single">
                                 <div className="review">
                                    <i className="icon-star"></i>
                                    <i className="icon-star"></i>
                                    <i className="icon-star"></i>
                                    <i className="icon-star"></i>
                                    <i className="icon-star"></i>
                                 </div>
                                 <div className="content">
                                    <blockquote><q>Charity is the voluntary act of giving help, typically in
                                          the form of money, time, or resources, to those in need.
                                          Charitable organizations aim to solve social, environmental, and
                                          economic challenges by addressing issues like poverty</q>
                                    </blockquote>
                                 </div>
                                 <div className="author-info">
                                    <div className="author-thumb">
                                       <img src="/images/author.png" alt="Image" />
                                    </div>
                                    <div className="author-content">
                                       <h6>Ruby Klara</h6>
                                       <p>Cloth Store Inc.</p>
                                    </div>
                                 </div>
                                 <div className="quote">
                                    <img src="/images/quote.png" alt="Image" />
                                 </div>
                              </div>
                           </div>
                           <div className="swiper-slide">
                              <div className="testimonial__slider-single">
                                 <div className="review">
                                    <i className="icon-star"></i>
                                    <i className="icon-star"></i>
                                    <i className="icon-star"></i>
                                    <i className="icon-star"></i>
                                    <i className="icon-star"></i>
                                 </div>
                                 <div className="content">
                                    <blockquote><q>Charity is the voluntary act of giving help, typically in
                                          the form of money, time, or resources, to those in need.
                                          Charitable organizations aim to solve social, environmental, and
                                          economic challenges by addressing issues like poverty</q>
                                    </blockquote>
                                 </div>
                                 <div className="author-info">
                                    <div className="author-thumb">
                                       <img src="/images/author.png" alt="Image" />
                                    </div>
                                    <div className="author-content">
                                       <h6>Bishu Kiev</h6>
                                       <p>Cloth Store Inc.</p>
                                    </div>
                                 </div>
                                 <div className="quote">
                                    <img src="/images/quote.png" alt="Image" />
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="slider-navigation">
               <button type="button" aria-label="prev slide" title="prev slide" className="prev-testimonial slider-btn">
                  <i className="fa-solid fa-arrow-left"></i>
               </button>
               <button type="button" aria-label="next slide" title="next slide"
                  className="next-testimonial slider-btn slider-btn-next">
                  <i className="fa-solid fa-arrow-right"></i>
               </button>
            </div>
         </div>
      </section>


      <section className="contact">
         <div className="container">
            <div className="row justify-content-end">
               <div className="col-12 col-md-10 col-xl-7">
                  <div className="contact__content">
                     <div className="section__content" data-aos="fade-up" data-aos-duration="1000">
                        <span className="sub-title"><i className="icon-donation"></i>Start donating poor
                           people</span>
                        <h2 className="title-animation">Send Us <span>message</span>
                           For donation!
                        </h2>
                     </div>
                     <div className="contact__form cta" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
                        <form action="#" method="post">
                           <div className="input-group">
                              <div className="input-single">
                                 <input type="email" name="contact-email" id="contactEmail" placeholder="your email..." />
                                 <i className="fa-solid fa-paper-plane"></i>
                              </div>
                              <div className="input-single">
                                 <input type="text" name="contact-number" id="contactNumber"
                                    placeholder="your phone..." />
                                 <i className="fa-solid fa-phone"></i>
                              </div>
                           </div>
                           <div className="input-single">
                              <input type="text" name="contact-address" id="contactAddress"
                                 placeholder="your address..." />
                              <i className="fa-solid fa-location-dot"></i>
                           </div>
                           <div className="input-single alter-input">
                              <textarea name="contact-message" id="contactMessage"
                                 placeholder="your message..."></textarea>
                              <i className="fa-solid fa-envelope"></i>
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
         </div>
         <div className="contact-bg">
            <img src="/images/contact/contact-bg.png" alt="Image" className="parallax-image" />
         </div>
         <div className="shape-left" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="300">
            <img src="/images/cta/shape-left.png" alt="Image" className="base-img" />
         </div>
      </section>


      <section className="difference-two">
         <div className="container">
            <div className="row gutter-40 align-items-center">
               <div className="col-12 col-lg-4 col-xxl-5 d-none d-lg-block">
                  <div className="difference-two__thumb-wrapper">
                     <div className="difference-two__thumb">
                        <div className="thumb-lg" data-aos="fade-right" data-aos-duration="1000">
                           <img src="/images/difference/thumb-sm.png" alt="Image" />
                           <div className="grid-line">
                              <img src="/images/help/grid.png" alt="Image" className="base-img" />
                           </div>
                           <div className="video-btn-wrapper">
                              <a href="https://www.youtube.com/watch?v=RvreULjnzFo" target="_blank" title="video Player"
                                 className="open-video-popup">
                                 <i className="icon-play"></i>
                              </a>
                           </div>
                        </div>
                        <div className="thumb-sm" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                           <img src="/images/difference/thumb-lg.png" alt="Image" />
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-12 col-lg-8 col-xxl-7">
                  <div className="difference-two__content" data-aos="fade-up" data-aos-duration="1000">
                     <span className="sub-title"><i className="icon-donation"></i>Start donating poor
                        people</span>
                     <h2 className="title-animation">Donate <span>Support</span> to Make
                        Difference way
                     </h2>
                     <p>Charity is the voluntary act of giving help,
                        typically in the form of money, time, or resources, to those in need. Charitable
                        organizations aim to solve social, environmental, and economic challenges by addressing
                        issues like poverty,
                     </p>
                     <div className="difference-two__inner cta">
                        <div className="difference-two__inner-content">
                           <div className="difference-two__tab">
                              <div className="difference-two__tab-btns">
                                 <button className="difference-two__tab-btn active" data-target="#mission"
                                    aria-label="mission" title="mission">Our Mission</button>
                                 <button className="difference-two__tab-btn" data-target="#vision" aria-label="vision"
                                    title="vision">Our Vision</button>
                                 <button className="difference-two__tab-btn" data-target="#excellence"
                                    aria-label="excellence" title="excellence">Excellence</button>
                              </div>
                              <div className="difference-two__tab-content">
                                 <div className="difference-two__content-single" id="mission">
                                    <ul>
                                       <li><i className="fa-solid fa-check"></i>We help companies develop
                                          powerful corporate social
                                       </li>
                                       <li><i className="fa-solid fa-check"></i>Helped fund 3,265 Project
                                          powerful corporate poor
                                       </li>
                                       <li><i className="fa-solid fa-check"></i>Dedicated Tech Services</li>
                                    </ul>
                                 </div>
                                 <div className="difference-two__content-single" id="vision">
                                    <ul>
                                       <li><i className="fa-solid fa-check"></i>We help companies develop
                                          powerful corporate social
                                       </li>
                                       <li><i className="fa-solid fa-check"></i>Helped fund 3,265 Project
                                          powerful corporate poor
                                       </li>
                                       <li><i className="fa-solid fa-check"></i>Dedicated Tech Services</li>
                                    </ul>
                                 </div>
                                 <div className="difference-two__content-single" id="excellence">
                                    <ul>
                                       <li><i className="fa-solid fa-check"></i>We help companies develop
                                          powerful corporate social
                                       </li>
                                       <li><i className="fa-solid fa-check"></i>Helped fund 3,265 Project
                                          powerful corporate poor
                                       </li>
                                       <li><i className="fa-solid fa-check"></i>Dedicated Tech Services</li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                           <div className="difference-two__progress">
                              <div className="difference-progress-single">
                                 <div className="progress-bar-single" data-percent="75%">
                                    <div className="circular-progress">
                                       <div className="percent-value">0%</div>
                                       <svg className="progress-circle" viewBox="0 0 36 36">
                                          <path className="circle-bg" d="M18 2.0845
                                                a 15.9155 15.9155 0 0 1 0 31.831
                                                a 15.9155 15.9155 0 0 1 0 -31.831" />
                                          <path className="circle-progress" d="M18 2.0845
                                                a 15.9155 15.9155 0 0 1 0 31.831
                                                a 15.9155 15.9155 0 0 1 0 -31.831" />
                                       </svg>
                                    </div>
                                 </div>
                                 <div className="content">
                                    <p>Treatment <br />
                                       Helping
                                    </p>
                                 </div>
                              </div>
                              <div className="difference-progress-single">
                                 <div className="progress-bar-single" data-percent="92%">
                                    <div className="circular-progress">
                                       <div className="percent-value">0%</div>
                                       <svg className="progress-circle" viewBox="0 0 36 36">
                                          <path className="circle-bg" d="M18 2.0845
                                                a 15.9155 15.9155 0 0 1 0 31.831
                                                a 15.9155 15.9155 0 0 1 0 -31.831" />
                                          <path className="circle-progress" d="M18 2.0845
                                                a 15.9155 15.9155 0 0 1 0 31.831
                                                a 15.9155 15.9155 0 0 1 0 -31.831" />
                                       </svg>
                                    </div>
                                 </div>
                                 <div className="content">
                                    <p>Highest <br />
                                       Fund Raised
                                    </p>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="difference-two__card">
                           <div className="card-group">
                              <div className="thumb">
                                 <i className="icon-donation-card"></i>
                              </div>
                              <div className="content">
                                 <h6>Donate Now</h6>
                                 <p>$40,456</p>
                              </div>
                           </div>
                           <hr />
                           <div className="card-group card-group-alt">
                              <div className="thumb">
                                 <i className="icon-fund"></i>
                              </div>
                              <div className="content">
                                 <h6>Total Fundraised</h6>
                                 <p>$1,540,456</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="spade">
            <img src="/images/spade-green-two.png" alt="Image" />
         </div>
      </section>


      <div className="gallery">
         <div className="gallery__inner">
            <div className="gallery__slider">
               <div className="gallery__single">
                  <img src="/images/gallery/one.png" alt="Image" />
                  <a href="index.html">
                     <i className="fa-brands fa-instagram"></i>
                  </a>
               </div>
               <div className="gallery__single">
                  <img src="/images/gallery/two.png" alt="Image" />
                  <a href="index.html">
                     <i className="fa-brands fa-instagram"></i>
                  </a>
               </div>
               <div className="gallery__single">
                  <img src="/images/gallery/three.png" alt="Image" />
                  <a href="index.html">
                     <i className="fa-brands fa-instagram"></i>
                  </a>
               </div>
               <div className="gallery__single">
                  <img src="/images/gallery/four.png" alt="Image" />
                  <a href="index.html">
                     <i className="fa-brands fa-instagram"></i>
                  </a>
               </div>
               <div className="gallery__single">
                  <img src="/images/gallery/five.png" alt="Image" />
                  <a href="index.html">
                     <i className="fa-brands fa-instagram"></i>
                  </a>
               </div>
               <div className="gallery__single">
                  <img src="/images/gallery/six.png" alt="Image" />
                  <a href="index.html">
                     <i className="fa-brands fa-instagram"></i>
                  </a>
               </div>
               <div className="gallery__single">
                  <img src="/images/gallery/one.png" alt="Image" />
                  <a href="index.html">
                     <i className="fa-brands fa-instagram"></i>
                  </a>
               </div>
               <div className="gallery__single">
                  <img src="/images/gallery/two.png" alt="Image" />
                  <a href="index.html">
                     <i className="fa-brands fa-instagram"></i>
                  </a>
               </div>
               <div className="gallery__single">
                  <img src="/images/gallery/three.png" alt="Image" />
                  <a href="index.html">
                     <i className="fa-brands fa-instagram"></i>
                  </a>
               </div>
               <div className="gallery__single">
                  <img src="/images/gallery/four.png" alt="Image" />
                  <a href="index.html">
                     <i className="fa-brands fa-instagram"></i>
                  </a>
               </div>
               <div className="gallery__single">
                  <img src="/images/gallery/five.png" alt="Image" />
                  <a href="index.html">
                     <i className="fa-brands fa-instagram"></i>
                  </a>
               </div>
               <div className="gallery__single">
                  <img src="/images/gallery/six.png" alt="Image" />
                  <a href="index.html">
                     <i className="fa-brands fa-instagram"></i>
                  </a>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};

export default AboutUs;
