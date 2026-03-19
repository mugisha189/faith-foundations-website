import React from 'react';

const Events: React.FC = () => {
  return (
<div>
      <section className="common-banner">
         <div className="container">
            <div className="row">
               <div className="common-banner__content text-center">
                  <span className="sub-title"><i className="icon-donation"></i>Start donating poor people</span>
                  <h2 className="title-animation">Our Events</h2>
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
      <section className="event event-alt">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-12 col-md-8 col-xl-7">
                  <div className="section__header text-center" data-aos="fade-up" data-aos-duration="1000">
                     <span className="sub-title"><i className="icon-donation"></i>Start donating poor
                        people</span>
                     <h2 className="title-animation">Checkout our upcoming full <span>event</span> list</h2>
                  </div>
               </div>
            </div>
            <div className="row gutter-30">
               <div className="col-12 col-lg-6 col-xl-7">
                  <div className="event__single-wrapper" data-aos="fade-up" data-aos-duration="1000">
                     <div className="event__single van-tilt">
                        <div className="event__single-thumb">
                           <img src="/images/event/one.png" alt="Image" />
                        </div>
                        <div className="event__content">
                           <span>October 19, 2025</span>
                           <h4><a href="event-details.html">Transforming Lives Charity Golf Tournam
                                 Entdges Charity Networking Event</a>
                           </h4>
                           <p><i className="fa-solid fa-location-dot"></i> 135 W, 46nd Street, New York</p>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-12 col-lg-6 col-xl-5">
                  <div className="event__single-wrapper" data-aos="fade-left" data-aos-duration="1000">
                     <div className="event__single event-single-alt van-tilt">
                        <div className="event__single-thumb">
                           <img src="/images/event/two.png" alt="Image" />
                        </div>
                        <div className="event__content">
                           <span>October 19, 2025</span>
                           <h4><a href="event-details.html">Unity in Giving Community
                                 Charity Event</a>
                           </h4>
                           <p><i className="fa-solid fa-location-dot"></i> 135 W, 46nd Street, New York</p>
                        </div>
                     </div>
                  </div>
                  <div className="event__single-wrapper" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="300">
                     <div className="event__single  event-single-alt van-tilt">
                        <div className="event__single-thumb">
                           <img src="/images/event/three.png" alt="Image" />
                        </div>
                        <div className="event__content">
                           <span>October 19, 2025</span>
                           <h4><a href="event-details.html">Unity in Giving Community
                                 Charity Event</a>
                           </h4>
                           <p><i className="fa-solid fa-location-dot"></i> 135 W, 46nd Street, New York</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col-12">
                  <div className="pagination-wrapper" data-aos="fade-up" data-aos-duration="1000">
                     <ul className="pagination main-pagination">
                        <li>
                           <button>
                              <i className="fa-solid fa-angles-left"></i>
                           </button>
                        </li>
                        <li>
                           <a href="blog-list.html">1</a>
                        </li>
                        <li>
                           <a href="blog-list.html" className="active">2</a>
                        </li>
                        <li>
                           <a href="blog-list.html">3</a>
                        </li>
                        <li>
                           <button>
                              <i className="fa-solid fa-angles-right"></i>
                           </button>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
         <div className="spade">
            <img src="/images/blog/spade-base.png" alt="Image" className="base-img" />
         </div>
      </section>
</div>
  );
};

export default Events;
