import React from 'react';
import HomePageSEO from '../components/HomePageSEO';

const HomePage: React.FC = () => {
  return (
    <>
      <HomePageSEO
        title="Faith Foundation Rwanda - Empowering Vulnerable Children & Women Since 2012"
        description="Faith Foundation Rwanda empowers vulnerable children and women since 2012. Join us in breaking the poverty cycle through education, child sponsorship, and community development in Kinigi, Rwanda."
        keywords="Faith Foundation, Rwanda, vulnerable children, women empowerment, charity, nonprofit, NGO, child sponsorship, poverty alleviation, Kinigi, education, skills training, community development"
        image="https://www.faithfoundation.rw/images/faith-foundation-hero.jpg"
      />
      <div >
      <section className="banner-two">
         <div className="banner-two__slider swiper">
            <div className="swiper-wrapper">
               <div className="swiper-slide">
                  <div className="banner-two__slider-single">
                     <div className="banner-two__slider-bg" data-background="/images/banner/banner-two-bg.png">
                     </div>
                     <div className="container">
                        <div className="row">
                           <div className="col-12 col-md-9 col-lg-7 col-xxl-6">
                              <div className="banner-two__slider-content">
                                 <span className="sub-title"><i className="icon-donation"></i>Empowering Hope Since 2012</span>
                                 <h1>Bringing Hope <br />
                                    To <span className="bottom-line">Vulnerable</span>
                                    Children & Women.
                                 </h1>
                                 <div className="banner__content-cta cta">
                                    <a href="/causes" aria-label="discover causes" title="discover causes"
                                       className="btn--tertiary">Discover Our Work <i className="fa-solid fa-arrow-right"></i></a>
                                    <a href="/donate" aria-label="donate now" title="donate now"
                                       className="btn--primary">Donate Now <i className="fa-solid fa-arrow-right"></i></a>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="swiper-slide">
                  <div className="banner-two__slider-single">
                     <div className="banner-two__slider-bg" data-background="/images/banner/banner-one-bg.png">
                     </div>
                     <div className="container">
                        <div className="row">
                           <div className="col-12 col-md-9  col-lg-7 col-xxl-6">
                              <div className="banner-two__slider-content">
                                 <span className="sub-title"><i className="icon-donation"></i>Empowering Hope Since 2012</span>
                                 <h1>Bringing Hope <br  />
                                    To <span className="bottom-line">Vulnerable</span>
                                    Children & Women.
                                 </h1>
                                 <div className="banner__content-cta cta">
                                    <a href="/causes" aria-label="discover causes" title="discover causes"
                                       className="btn--tertiary">Discover Our Work <i className="fa-solid fa-arrow-right"></i></a>
                                    <a href="/donate" aria-label="donate now" title="donate now"
                                       className="btn--primary">Donate Now <i className="fa-solid fa-arrow-right"></i></a>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="swiper-slide">
                  <div className="banner-two__slider-single">
                     <div className="banner-two__slider-bg" data-background="/images/banner/banner-two-bg.png">
                     </div>
                     <div className="container">
                        <div className="row">
                           <div className="col-12 col-md-9 col-lg-7 col-xxl-6">
                              <div className="banner-two__slider-content">
                                 <span className="sub-title"><i className="icon-donation"></i>Empowering Hope Since 2012</span>
                                 <h1>Bringing Hope <br />
                                    To <span className="bottom-line">Vulnerable</span>
                                    Children & Women.
                                 </h1>
                                 <div className="banner__content-cta cta">
                                    <a href="/causes" aria-label="discover causes" title="discover causes"
                                       className="btn--tertiary">Discover Our Work <i className="fa-solid fa-arrow-right"></i></a>
                                    <a href="/donate" aria-label="donate now" title="donate now"
                                       className="btn--primary">Donate Now <i className="fa-solid fa-arrow-right"></i></a>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="swiper-slide">
                  <div className="banner-two__slider-single">
                     <div className="banner-two__slider-bg" data-background="/images/banner/banner-one-bg.png">
                     </div>
                     <div className="container">
                        <div className="row">
                           <div className="col-12 col-md-9 col-lg-7 col-xxl-6">
                              <div className="banner-two__slider-content">
                                 <span className="sub-title"><i className="icon-donation"></i>Empowering Hope Since 2012</span>
                                 <h1>Bringing Hope <br />
                                    To <span className="bottom-line">Vulnerable</span>
                                    Children & Women.
                                 </h1>
                                 <div className="banner__content-cta cta">
                                    <a href="/causes" aria-label="discover causes" title="discover causes"
                                       className="btn--tertiary">Discover Our Work <i className="fa-solid fa-arrow-right"></i></a>
                                    <a href="/donate" aria-label="donate now" title="donate now"
                                       className="btn--primary">Donate Now <i className="fa-solid fa-arrow-right"></i></a>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="slider-navigation d-none d-md-flex">
            <button type="button" aria-label="prev slide" title="prev slide" className="prev-banner slider-btn">
               <i className="fa-solid fa-arrow-left"></i>
            </button>
            <button type="button" aria-label="next slide" title="next slide"
               className="next-banner slider-btn slider-btn-next">
               <i className="fa-solid fa-arrow-right"></i>
            </button>
         </div>
         <div className="shape">
            <img src="/images/shape.png" alt="Image" />
         </div>
         <div className="shape-left" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300">
            <img src="/images/banner/banner-two-shape.png" alt="Image" />
         </div>
         <div className="sprade-shape">
            <img src="/images/sprade-base.png" alt="Image" className="base-img" data-aos="zoom-in"
               data-aos-duration="1000" />
         </div>
         <div className="unity">
            <img src="/images/unity.png" alt="Image" />
         </div>
      </section>
      <div className="partner">
         <div className="container">
            <div className="row">
               <div className="col-12">
                  <div className="partner__slider swiper">
                     <div className="swiper-wrapper">
                        <div className="swiper-slide">
                           <div className="partner__slider-single">
                              <img src="/images/sponsor/one.png" alt="Image" />
                           </div>
                        </div>
                        <div className="swiper-slide">
                           <div className="partner__slider-single">
                              <img src="/images/sponsor/two.png" alt="Image" />
                           </div>
                        </div>
                        <div className="swiper-slide">
                           <div className="partner__slider-single">
                              <img src="/images/sponsor/three.png" alt="Image" />
                           </div>
                        </div>
                        <div className="swiper-slide">
                           <div className="partner__slider-single">
                              <img src="/images/sponsor/four.png" alt="Image" />
                           </div>
                        </div>
                        <div className="swiper-slide">
                           <div className="partner__slider-single">
                              <img src="/images/sponsor/five.png" alt="Image" />
                           </div>
                        </div>
                        <div className="swiper-slide">
                           <div className="partner__slider-single">
                              <img src="/images/sponsor/one.png" alt="Image" />
                           </div>
                        </div>
                        <div className="swiper-slide">
                           <div className="partner__slider-single">
                              <img src="/images/sponsor/two.png" alt="Image" />
                           </div>
                        </div>
                        <div className="swiper-slide">
                           <div className="partner__slider-single">
                              <img src="/images/sponsor/three.png" alt="Image" />
                           </div>
                        </div>
                        <div className="swiper-slide">
                           <div className="partner__slider-single">
                              <img src="/images/sponsor/four.png" alt="Image" />
                           </div>
                        </div>
                        <div className="swiper-slide">
                           <div className="partner__slider-single">
                              <img src="/images/sponsor/five.png" alt="Image" />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <section className="difference">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-12 col-lg-10 col-xl-8">
                  <div className="section__header text-center" data-aos="fade-up" data-aos-duration="1000">
                     <span className="sub-title"><i className="icon-donation"></i>Start donating poor
                        people</span>
                     <h2 className="title-animation">Charity With Difference</h2>
                     <p>Join our monthly giving program to provide consistent support to our initiatives. Regular
                        contributions, no matter the size, help us plan and sustain long-term projects.
                     </p>
                  </div>
               </div>
            </div>
         </div>
         <div className="difference__inner">
            <div className="container">
               <div className="row">
                  <div className="col-12">
                     <div className="difference__slider swiper">
                        <div className="swiper-wrapper">
                           <div className="swiper-slide">
                              <div className="difference__single-wrapper">
                                 <div className="difference__single difference__single-first"
                                    data-background="/images/difference/bg-one.png">
                                    <div className="difference__single-thumb">
                                       <i className="icon-education"></i>
                                    </div>
                                    <div className="difference__single-content">
                                       <h5><a href="cause-details.html">Child Education</a></h5>
                                       <p>Set up a secure and user-friendly online donation platform that accepts
                                          multiple
                                       </p>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="swiper-slide">
                              <div className="difference__single-wrapper">
                                 <div className="difference__single difference__single-second"
                                    data-background="/images/difference/bg-two.png">
                                    <div className="difference__single-thumb">
                                       <i className="icon-food"></i>
                                    </div>
                                    <div className="difference__single-content">
                                       <h5><a href="cause-details.html">Healthy Food</a></h5>
                                       <p>Set up a secure and user-friendly online donation platform that accepts
                                          multiple
                                       </p>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="swiper-slide">
                              <div className="difference__single-wrapper">
                                 <div className="difference__single difference__single-third "
                                    data-background="/images/difference/bg-three.png">
                                    <div className="difference__single-thumb">
                                       <i className="icon-health"></i>
                                    </div>
                                    <div className="difference__single-content">
                                       <h5><a href="cause-details.html">Medical Care</a></h5>
                                       <p>Set up a secure and user-friendly online donation platform that accepts
                                          multiple
                                       </p>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="swiper-slide">
                              <div className="difference__single-wrapper">
                                 <div className="difference__single difference__single-first"
                                    data-background="/images/difference/bg-one.png">
                                    <div className="difference__single-thumb">
                                       <i className="icon-education"></i>
                                    </div>
                                    <div className="difference__single-content">
                                       <h5><a href="cause-details.html">Child Education</a></h5>
                                       <p>Set up a secure and user-friendly online donation platform that accepts
                                          multiple
                                       </p>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="swiper-slide">
                              <div className="difference__single-wrapper">
                                 <div className="difference__single difference__single-second"
                                    data-background="/images/difference/bg-two.png">
                                    <div className="difference__single-thumb">
                                       <i className="icon-food"></i>
                                    </div>
                                    <div className="difference__single-content">
                                       <h5><a href="cause-details.html">Healthy Food</a></h5>
                                       <p>Set up a secure and user-friendly online donation platform that accepts
                                          multiple
                                       </p>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="swiper-slide">
                              <div className="difference__single-wrapper">
                                 <div className="difference__single difference__single-third "
                                    data-background="/images/difference/bg-three.png">
                                    <div className="difference__single-thumb">
                                       <i className="icon-health"></i>
                                    </div>
                                    <div className="difference__single-content">
                                       <h5><a href="cause-details.html">Medical Care</a></h5>
                                       <p>Set up a secure and user-friendly online donation platform that accepts
                                          multiple
                                       </p>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="slider-navigation">
               <button type="button" aria-label="prev slide" title="prev slide" className="prev-difference slider-btn">
                  <i className="fa-solid fa-arrow-left"></i>
               </button>
               <button type="button" aria-label="next slide" title="next slide"
                  className="next-difference slider-btn slider-btn-next">
                  <i className="fa-solid fa-arrow-right"></i>
               </button>
            </div>
         </div>
         <div className="shape-hand" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300">
            <img src="/images/difference/shape-hand.png" alt="Image" />
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
                     <span className="sub-title"><i className="icon-donation"></i>Start donating poor
                        people</span>
                     <h2 className="title-animation">Helping each other can
                        make <span>world</span> better
                     </h2>
                     <p>Volunteering offers opportunities to develop new skills and gain valuable
                        experience. This can include leadership, communication, project management, and teamwork
                        skills.
                     </p>
                     <div className="help__content-icon-group">
                        <div className="help__content-icon">
                           <div className="thumb">
                              <i className="icon-make-donation"></i>
                           </div>
                           <div className="content">
                              <h6>Start helping them</h6>
                              <p>Raising awareness about the charity's mission and cause.</p>
                           </div>
                        </div>
                        <div className="help__content-icon">
                           <div className="thumb">
                              <i className="icon-support-heart"></i>
                           </div>
                           <div className="content">
                              <h6>Make Donations</h6>
                              <p>Raising awareness about the charity's mission and cause.</p>
                           </div>
                        </div>
                     </div>
                     <div className="help__content-list">
                        <ul>
                           <li><i className="fa-solid fa-circle-check"></i> Helped fund 3,265 Project powerful
                              corporate poor.
                           </li>
                           <li><i className="fa-solid fa-circle-check"></i> We give child a gift of a education
                           </li>
                           <li><i className="fa-solid fa-circle-check"></i> We help companies develop powerful
                              corporate social Responsibility,
                           </li>
                        </ul>
                     </div>
                     <div className="help__content-cta cta">
                        <a href="about-us.html" aria-label="more about us" title="about us" className="btn--primary">More
                           About Us</a>
                        <div className="contact-btn">
                           <div className="contact-icon">
                              <i className="icon-phone"></i>
                           </div>
                           <div className="contact-content">
                              <p>Phone</p>
                              <a href="tel:01-793-7938">+236 (456) 896 22</a>
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
      
      
      <section className="cause" data-background="/images/cause/cause-bg.png">
         <div className="container">
            <div className="row gutter-30 align-items-center">
               <div className="col-12 col-md-8 col-xl-7">
                  <div className="section__header">
                     <span className="sub-title"><i className="icon-donation"></i>Start donating poor
                        people</span>
                     <h2 className="title-animation">Help & <span>donate</span> them when
                        they're in need
                     </h2>
                  </div>
               </div>
               <div className="col-12 col-md-4 col-xl-5">
                  <div className="slider-navigation">
                     <button type="button" aria-label="prev slide" title="prev slide" className="prev-cause slider-btn">
                        <i className="fa-solid fa-arrow-left"></i>
                     </button>
                     <button type="button" aria-label="next slide" title="next slide"
                        className="next-cause slider-btn slider-btn-next">
                        <i className="fa-solid fa-arrow-right"></i>
                     </button>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col-12">
                  <div className="cause__slider-wrapper">
                     <div className="cause__slider swiper">
                        <div className="swiper-wrapper">
                           <div className="swiper-slide">
                              <div className="cause__slider-inner">
                                 <div className="cause__slider-single">
                                    <div className="thumb">
                                       <a href="cause-details.html">
                                          <img src="/images/cause/one.png" alt="Image" />
                                       </a>
                                       <div className="tag">
                                          <a href="our-causes.html">Health</a>
                                       </div>
                                    </div>
                                    <div className="content">
                                       <h6><a href="cause-details.html">Children we work with</a></h6>
                                       <p>Lorem ipsum dolor sit amet, consete
                                          sadipscing elitr, sed diam nonum
                                       </p>
                                    </div>
                                    <div className="cause__slider-cta">
                                       <div className="cause__progress progress-bar-single">
                                          <div className="cause-progress__intro">
                                             <p><span>Donation</span>
                                                <span className="percent-value">85%</span>
                                             </p>
                                          </div>
                                          <div className="cause-progress__bar">
                                             <div className="progress-bar-wrapper" data-percent="85%">
                                                <div className="progress-bar">
                                                   <div className="progress-bar-percent">
                                                   </div>
                                                </div>
                                             </div>
                                          </div>
                                          <div className="cause-progress__goal">
                                             <p>Raised: <span className="raised">$8500</span></p>
                                             <p>Goal: <span className="goal">$1,0000</span></p>
                                          </div>
                                       </div>
                                       <div className="cause__cta">
                                          <a href="donate-us.html" aria-label="donate now" title="donate now"
                                             className="btn--secondary">Donate Now</a>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="swiper-slide">
                              <div className="cause__slider-inner">
                                 <div className="cause__slider-single">
                                    <div className="thumb">
                                       <a href="cause-details.html">
                                          <img src="/images/cause/two.png" alt="Image" />
                                       </a>
                                       <div className="tag">
                                          <a href="our-causes.html">Food</a>
                                       </div>
                                    </div>
                                    <div className="content">
                                       <h6><a href="cause-details.html">Help For Education</a></h6>
                                       <p>Lorem ipsum dolor sit amet, consete
                                          sadipscing elitr, sed diam nonum
                                       </p>
                                    </div>
                                    <div className="cause__slider-cta">
                                       <div className="cause__progress progress-bar-single">
                                          <div className="cause-progress__intro">
                                             <p><span>Donation</span>
                                                <span className="percent-value">90%</span>
                                             </p>
                                          </div>
                                          <div className="cause-progress__bar">
                                             <div className="progress-bar-wrapper" data-percent="90%">
                                                <div className="progress-bar">
                                                   <div className="progress-bar-percent">
                                                   </div>
                                                </div>
                                             </div>
                                          </div>
                                          <div className="cause-progress__goal">
                                             <p>Raised: <span className="raised">$8500</span></p>
                                             <p>Goal: <span className="goal">$1,0000</span></p>
                                          </div>
                                       </div>
                                       <div className="cause__cta">
                                          <a href="donate-us.html" aria-label="donate now" title="donate now"
                                             className="btn--secondary">Donate Now</a>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="swiper-slide">
                              <div className="cause__slider-inner">
                                 <div className="cause__slider-single">
                                    <div className="thumb">
                                       <a href="cause-details.html">
                                          <img src="/images/cause/three.png" alt="Image" />
                                       </a>
                                       <div className="tag">
                                          <a href="our-causes.html">Health</a>
                                       </div>
                                    </div>
                                    <div className="content">
                                       <h6><a href="cause-details.html">Help For Food</a></h6>
                                       <p>Lorem ipsum dolor sit amet, consete
                                          sadipscing elitr, sed diam nonum
                                       </p>
                                    </div>
                                    <div className="cause__slider-cta">
                                       <div className="cause__progress progress-bar-single">
                                          <div className="cause-progress__intro">
                                             <p><span>Donation</span>
                                                <span className="percent-value">75%</span>
                                             </p>
                                          </div>
                                          <div className="cause-progress__bar">
                                             <div className="progress-bar-wrapper" data-percent="75%">
                                                <div className="progress-bar">
                                                   <div className="progress-bar-percent">
                                                   </div>
                                                </div>
                                             </div>
                                          </div>
                                          <div className="cause-progress__goal">
                                             <p>Raised: <span className="raised">$8500</span></p>
                                             <p>Goal: <span className="goal">$1,0000</span></p>
                                          </div>
                                       </div>
                                       <div className="cause__cta">
                                          <a href="donate-us.html" aria-label="donate now" title="donate now"
                                             className="btn--secondary">Donate Now</a>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="swiper-slide">
                              <div className="cause__slider-inner">
                                 <div className="cause__slider-single">
                                    <div className="thumb">
                                       <a href="cause-details.html">
                                          <img src="/images/cause/four.png" alt="Image" />
                                       </a>
                                       <div className="tag">
                                          <a href="our-causes.html">Food</a>
                                       </div>
                                    </div>
                                    <div className="content">
                                       <h6><a href="cause-details.html">Give health support</a></h6>
                                       <p>Lorem ipsum dolor sit amet, consete
                                          sadipscing elitr, sed diam nonum
                                       </p>
                                    </div>
                                    <div className="cause__slider-cta">
                                       <div className="cause__progress progress-bar-single">
                                          <div className="cause-progress__intro">
                                             <p><span>Donation</span>
                                                <span className="percent-value">65%</span>
                                             </p>
                                          </div>
                                          <div className="cause-progress__bar">
                                             <div className="progress-bar-wrapper" data-percent="65%">
                                                <div className="progress-bar">
                                                   <div className="progress-bar-percent">
                                                   </div>
                                                </div>
                                             </div>
                                          </div>
                                          <div className="cause-progress__goal">
                                             <p>Raised: <span className="raised">$8500</span></p>
                                             <p>Goal: <span className="goal">$1,0000</span></p>
                                          </div>
                                       </div>
                                       <div className="cause__cta">
                                          <a href="donate-us.html" aria-label="donate now" title="donate now"
                                             className="btn--secondary">Donate Now</a>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="swiper-slide">
                              <div className="cause__slider-inner">
                                 <div className="cause__slider-single">
                                    <div className="thumb">
                                       <a href="cause-details.html">
                                          <img src="/images/cause/one.png" alt="Image" />
                                       </a>
                                       <div className="tag">
                                          <a href="our-causes.html">Health</a>
                                       </div>
                                    </div>
                                    <div className="content">
                                       <h6><a href="cause-details.html">Children we work with</a></h6>
                                       <p>Lorem ipsum dolor sit amet, consete
                                          sadipscing elitr, sed diam nonum
                                       </p>
                                    </div>
                                    <div className="cause__slider-cta">
                                       <div className="cause__progress progress-bar-single">
                                          <div className="cause-progress__intro">
                                             <p><span>Donation</span>
                                                <span className="percent-value">85%</span>
                                             </p>
                                          </div>
                                          <div className="cause-progress__bar">
                                             <div className="progress-bar-wrapper" data-percent="85%">
                                                <div className="progress-bar">
                                                   <div className="progress-bar-percent">
                                                   </div>
                                                </div>
                                             </div>
                                          </div>
                                          <div className="cause-progress__goal">
                                             <p>Raised: <span className="raised">$8500</span></p>
                                             <p>Goal: <span className="goal">$1,0000</span></p>
                                          </div>
                                       </div>
                                       <div className="cause__cta">
                                          <a href="donate-us.html" aria-label="donate now" title="donate now"
                                             className="btn--secondary">Donate Now</a>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="swiper-slide">
                              <div className="cause__slider-inner">
                                 <div className="cause__slider-single">
                                    <div className="thumb">
                                       <a href="cause-details.html">
                                          <img src="/images/cause/two.png" alt="Image" />
                                       </a>
                                       <div className="tag">
                                          <a href="our-causes.html">Food</a>
                                       </div>
                                    </div>
                                    <div className="content">
                                       <h6><a href="cause-details.html">Help For Education</a></h6>
                                       <p>Lorem ipsum dolor sit amet, consete
                                          sadipscing elitr, sed diam nonum
                                       </p>
                                    </div>
                                    <div className="cause__slider-cta">
                                       <div className="cause__progress progress-bar-single">
                                          <div className="cause-progress__intro">
                                             <p><span>Donation</span>
                                                <span className="percent-value">90%</span>
                                             </p>
                                          </div>
                                          <div className="cause-progress__bar">
                                             <div className="progress-bar-wrapper" data-percent="90%">
                                                <div className="progress-bar">
                                                   <div className="progress-bar-percent">
                                                   </div>
                                                </div>
                                             </div>
                                          </div>
                                          <div className="cause-progress__goal">
                                             <p>Raised: <span className="raised">$8500</span></p>
                                             <p>Goal: <span className="goal">$1,0000</span></p>
                                          </div>
                                       </div>
                                       <div className="cause__cta">
                                          <a href="donate-us.html" aria-label="donate now" title="donate now"
                                             className="btn--secondary">Donate Now</a>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="swiper-slide">
                              <div className="cause__slider-inner">
                                 <div className="cause__slider-single">
                                    <div className="thumb">
                                       <a href="cause-details.html">
                                          <img src="/images/cause/three.png" alt="Image" />
                                       </a>
                                       <div className="tag">
                                          <a href="our-causes.html">Health</a>
                                       </div>
                                    </div>
                                    <div className="content">
                                       <h6><a href="cause-details.html">Help For Food</a></h6>
                                       <p>Lorem ipsum dolor sit amet, consete
                                          sadipscing elitr, sed diam nonum
                                       </p>
                                    </div>
                                    <div className="cause__slider-cta">
                                       <div className="cause__progress progress-bar-single">
                                          <div className="cause-progress__intro">
                                             <p><span>Donation</span>
                                                <span className="percent-value">75%</span>
                                             </p>
                                          </div>
                                          <div className="cause-progress__bar">
                                             <div className="progress-bar-wrapper" data-percent="75%">
                                                <div className="progress-bar">
                                                   <div className="progress-bar-percent">
                                                   </div>
                                                </div>
                                             </div>
                                          </div>
                                          <div className="cause-progress__goal">
                                             <p>Raised: <span className="raised">$8500</span></p>
                                             <p>Goal: <span className="goal">$1,0000</span></p>
                                          </div>
                                       </div>
                                       <div className="cause__cta">
                                          <a href="donate-us.html" aria-label="donate now" title="donate now"
                                             className="btn--secondary">Donate Now</a>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="swiper-slide">
                              <div className="cause__slider-inner">
                                 <div className="cause__slider-single">
                                    <div className="thumb">
                                       <a href="cause-details.html">
                                          <img src="/images/cause/four.png" alt="Image" />
                                       </a>
                                       <div className="tag">
                                          <a href="our-causes.html">Food</a>
                                       </div>
                                    </div>
                                    <div className="content">
                                       <h6><a href="cause-details.html">Give health support</a></h6>
                                       <p>Lorem ipsum dolor sit amet, consete
                                          sadipscing elitr, sed diam nonum
                                       </p>
                                    </div>
                                    <div className="cause__slider-cta">
                                       <div className="cause__progress progress-bar-single">
                                          <div className="cause-progress__intro">
                                             <p><span>Donation</span>
                                                <span className="percent-value">65%</span>
                                             </p>
                                          </div>
                                          <div className="cause-progress__bar">
                                             <div className="progress-bar-wrapper" data-percent="65%">
                                                <div className="progress-bar">
                                                   <div className="progress-bar-percent">
                                                   </div>
                                                </div>
                                             </div>
                                          </div>
                                          <div className="cause-progress__goal">
                                             <p>Raised: <span className="raised">$8500</span></p>
                                             <p>Goal: <span className="goal">$1,0000</span></p>
                                          </div>
                                       </div>
                                       <div className="cause__cta">
                                          <a href="donate-us.html" aria-label="donate now" title="donate now"
                                             className="btn--secondary">Donate Now</a>
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
            <div className="row">
               <div className="col-12">
                  <div className="cause-pagination pagination-one"></div>
               </div>
            </div>
         </div>
         <div className="spade">
            <img src="/images/help/spade.png" alt="Image" />
         </div>
      </section>
      
      
      <section className="cta-section">
         <div className="container-fluid">
            <div className="row gutter-40">
               <div className="col-12 col-xxl-4">
                  <div className="cta-section__first cta-section__single">
                     <div className="cta-section__group" data-aos="fade-up" data-aos-duration="1000">
                        <div className="thumb">
                           <i className="icon-spread-love"></i>
                        </div>
                        <div className="content">
                           <span>We give child a gift of a education</span>
                           <h3 className="title-animation">Become a volunteer?</h3>
                        </div>
                        <div className="cta-s">
                           <a href="become-volunteer.html" aria-label="become a volunteer" title="become a volunteer"
                              className="btn--tertiary">Contact Now</a>
                        </div>
                     </div>
                     <div className="cta-img">
                        <img src="/images/cta/one.png" alt="Image" />
                     </div>
                  </div>
               </div>
               <div className="col-12 col-xxl-4">
                  <div className="cta-section__center cta-section__single">
                     <div className="video-btn-wrapper">
                        <a href="https://www.youtube.com/watch?v=RvreULjnzFo" target="_blank" title="video Player"
                           className="open-video-popup">
                           <i className="icon-play"></i>
                        </a>
                     </div>
                     <div className="cta-img">
                        <img src="/images/cta/two.png" alt="Image" className="parallax-image" />
                     </div>
                  </div>
               </div>
               <div className="col-12 col-xxl-4">
                  <div className="cta-section__last cta-section__single">
                     <div className="cta-section__group" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                        <div className="thumb">
                           <i className="icon-spread-love"></i>
                        </div>
                        <div className="content">
                           <span>We give child a gift of a education</span>
                           <h3 className="title-animation">Make donation to us?</h3>
                        </div>
                        <div className="cta-s">
                           <a href="donate-us.html" aria-label="make a donation" title="make a donation"
                              className="btn--primary">Donate Now</a>
                        </div>
                     </div>
                     <div className="cta-img">
                        <img src="/images/cta/three.png" alt="Image" />
                     </div>
                  </div>
               </div>
            </div>
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
      
      
      <section className="community">
         <div className="container">
            <div className="row">
               <div className="col-12 col-md-8 col-xl-7">
                  <div className="section__header" data-aos="fade-up" data-aos-duration="1000">
                     <span className="sub-title"><i className="icon-donation"></i>Start donating poor
                        people</span>
                     <h2 className="title-animation">Join The <span>Community</span> To Give
                        Education For Children
                     </h2>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col-12">
                  <div className="community-donation" data-aos="fade-up" data-aos-duration="1000">
                     <div className="community-donation__inner">
                        <h4>Support Where It Counts.</h4>
                        <div className="warning">
                           <div className="line"><i className="fa-solid fa-triangle-exclamation"></i></div>
                           <p><strong>Notice:</strong> Test mode is enabled. While in test mode no live
                              donations are processed.
                           </p>
                        </div>
                        <div className="donation-form">
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
                     <div className="community__thumb d-none d-lg-block" data-aos="fade-left" data-aos-duration="1000">
                        <img src="/images/community/thumb.png" alt="Image" />
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="community-bg">
            <img src="/images/community/community-bg.png" alt="Image" className="parallax-image" />
         </div>
         <div className="gift" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
            <img src="/images/community/gift.png" alt="Image" />
         </div>
         <div className="spade">
            <img src="/images/community/spade.png" alt="Image" className="base-img" />
         </div>
      </section>
      
      
      <section className="testimonial" data-background="/images/bg-one.png">
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
         <div className="shape" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">
            <img src="/images/community/shape.png" alt="Image" className="base-img" />
         </div>
      </section>
      
      
      <section className="cause-two">
         <div className="container-fluid">
            <div className="row">
               <div className="col-12">
                  <div className="cause-two__inner">
                     <div className="slider-navigation">
                        <button type="button" aria-label="prev slide" title="prev slide"
                           className="prev-cause-two slider-btn">
                           <i className="fa-solid fa-arrow-left"></i>
                        </button>
                        <button type="button" aria-label="next slide" title="next slide"
                           className="next-cause-two slider-btn slider-btn-next">
                           <i className="fa-solid fa-arrow-right"></i>
                        </button>
                     </div>
                     <div className="cause-two__slider swiper">
                        <div className="swiper-wrapper">
                           <div className="swiper-slide">
                              <div className="cause-two__slider-single">
                                 <div className="cause-thumb">
                                    <img src="/images/cause/five.png" alt="Image" />
                                    <a href="cause-details.html">
                                       <i className="fa-solid fa-arrow-right"></i>
                                    </a>
                                 </div>
                              </div>
                           </div>
                           <div className="swiper-slide">
                              <div className="cause-two__slider-single">
                                 <div className="cause-thumb">
                                    <img src="/images/cause/six.png" alt="Image" />
                                    <a href="cause-details.html">
                                       <i className="fa-solid fa-arrow-right"></i>
                                    </a>
                                 </div>
                              </div>
                           </div>
                           <div className="swiper-slide">
                              <div className="cause-two__slider-single">
                                 <div className="cause-thumb">
                                    <img src="/images/cause/seven.png" alt="Image" />
                                    <a href="cause-details.html">
                                       <i className="fa-solid fa-arrow-right"></i>
                                    </a>
                                 </div>
                              </div>
                           </div>
                           <div className="swiper-slide">
                              <div className="cause-two__slider-single">
                                 <div className="cause-thumb">
                                    <img src="/images/cause/five.png" alt="Image" />
                                    <a href="cause-details.html">
                                       <i className="fa-solid fa-arrow-right"></i>
                                    </a>
                                 </div>
                              </div>
                           </div>
                           <div className="swiper-slide">
                              <div className="cause-two__slider-single">
                                 <div className="cause-thumb">
                                    <img src="/images/cause/six.png" alt="Image" />
                                    <a href="cause-details.html">
                                       <i className="fa-solid fa-arrow-right"></i>
                                    </a>
                                 </div>
                              </div>
                           </div>
                           <div className="swiper-slide">
                              <div className="cause-two__slider-single">
                                 <div className="cause-thumb">
                                    <img src="/images/cause/seven.png" alt="Image" />
                                    <a href="cause-details.html">
                                       <i className="fa-solid fa-arrow-right"></i>
                                    </a>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="cause-two__content-slider swiper">
                     <div className="swiper-wrapper">
                        <div className="swiper-slide">
                           <div className="cause-content">
                              <h4>old people & Child trouble</h4>
                              <p>Child & old care</p>
                           </div>
                        </div>
                        <div className="swiper-slide">
                           <div className="cause-content">
                              <h4>old people & Child trouble</h4>
                              <p>Child & old care</p>
                           </div>
                        </div>
                        <div className="swiper-slide">
                           <div className="cause-content">
                              <h4>old people & Child trouble</h4>
                              <p>Child & old care</p>
                           </div>
                        </div>
                        <div className="swiper-slide">
                           <div className="cause-content">
                              <h4>old people & Child trouble</h4>
                              <p>Child & old care</p>
                           </div>
                        </div>
                        <div className="swiper-slide">
                           <div className="cause-content">
                              <h4>old people & Child trouble</h4>
                              <p>Child & old care</p>
                           </div>
                        </div>
                        <div className="swiper-slide">
                           <div className="cause-content">
                              <h4>old people & Child trouble</h4>
                              <p>Child & old care</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
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
                  <div className="difference-two__content">
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
      

      
      <section className="blog">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-12 col-md-8 col-xl-7">
                  <div className="section__header text-center" data-aos="fade-up" data-aos-duration="1000">
                     <span className="sub-title"><i className="icon-donation"></i>Start donating poor
                        people</span>
                     <h2 className="title-animation">Our Latest <span>News</span> &
                        Articles you like
                     </h2>
                  </div>
               </div>
            </div>
            <div className="row gutter-40">
               <div className="col-12 col-lg-6 col-xl-4">
                  <div className="blog__single-wrapper" data-aos="fade-up" data-aos-duration="1000">
                     <div className="blog__single van-tilt">
                        <div className="blog__single-thumb">
                           <a href="blog-details.html">
                              <img src="/images/blog/one.png" alt="Image" />
                           </a>
                           <div className="tag">
                              <a href="blog-list.html"><i className="fa-solid fa-tags"></i>Health</a>
                           </div>
                        </div>
                        <div className="blog__single-inner">
                           <div className="blog__single-meta">
                              <p><i className="icon-user"></i>Robert Fox</p>
                              <p><i className="icon-message"></i>Comments (03)</p>
                           </div>
                           <div className="blog__single-content">
                              <h5><a href="blog-details.html">IT Service Case Studies Accelerate
                                    Business Fly Success Tech</a>
                              </h5>
                           </div>
                           <div className="blog__single-cta">
                              <a href="blog-details.html" aria-label="blog details" title="blog details">Read
                                 More<i className="fa-solid fa-circle-arrow-right"></i></a>
                           </div>
                        </div>
                        <img src="/images/blog/spade.png" alt="Image" className="spade-two" />
                     </div>
                  </div>
               </div>
               <div className="col-12 col-lg-6 col-xl-4">
                  <div className="blog__single-wrapper" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                     <div className="blog__single van-tilt">
                        <div className="blog__single-thumb">
                           <a href="blog-details.html">
                              <img src="/images/blog/two.png" alt="Image" />
                           </a>
                           <div className="tag">
                              <a href="blog-list.html"><i className="fa-solid fa-tags"></i>Education</a>
                           </div>
                        </div>
                        <div className="blog__single-inner">
                           <div className="blog__single-meta">
                              <p><i className="icon-user"></i>Robert Fox</p>
                              <p><i className="icon-message"></i>Comments (08)</p>
                           </div>
                           <div className="blog__single-content">
                              <h5><a href="blog-details.html">IT Service Case Studies Accelerate
                                    Business Fly Success Tech</a>
                              </h5>
                           </div>
                           <div className="blog__single-cta">
                              <a href="blog-details.html" aria-label="blog details" title="blog details">Read
                                 More<i className="fa-solid fa-circle-arrow-right"></i></a>
                           </div>
                        </div>
                        <img src="/images/blog/spade.png" alt="Image" className="spade-two" />
                     </div>
                  </div>
               </div>
               <div className="col-12 col-lg-6 col-xl-4">
                  <div className="blog__single-wrapper" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
                     <div className="blog__single van-tilt">
                        <div className="blog__single-thumb">
                           <a href="blog-details.html">
                              <img src="/images/blog/three.png" alt="Image" />
                           </a>
                           <div className="tag">
                              <a href="blog-list.html"><i className="fa-solid fa-tags"></i>Food</a>
                           </div>
                        </div>
                        <div className="blog__single-inner">
                           <div className="blog__single-meta">
                              <p><i className="icon-user"></i>Robert Fox</p>
                              <p><i className="icon-message"></i>Comments (13)</p>
                           </div>
                           <div className="blog__single-content">
                              <h5><a href="blog-details.html">IT Service Case Studies Accelerate
                                    Business Fly Success Tech</a>
                              </h5>
                           </div>
                           <div className="blog__single-cta">
                              <a href="blog-details.html" aria-label="blog details" title="blog details">Read
                                 More<i className="fa-solid fa-circle-arrow-right"></i></a>
                           </div>
                        </div>
                        <img src="/images/blog/spade.png" alt="Image" className="spade-two" />
                     </div>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col-12">
                  <div className="section__cta cta text-center">
                     <a href="blog-list.html" aria-label="our blog" title="our blog" className="btn--primary">View
                        All <i className="fa-solid fa-arrow-right"></i></a>
                  </div>
               </div>
            </div>
         </div>
         <div className="blog-bg">
            <img src="/images/blog/blog-bg.png" alt="Image" />
         </div>
         <div className="spade">
            <img src="/images/blog/spade-base.png" alt="Image" className="base-img" />
         </div>
      </section>
      </div>
    </>
  );
};

export default HomePage;
