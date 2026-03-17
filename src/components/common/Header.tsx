import React from 'react';

const Header: React.FC = () => {
  return (
<div>
      <div className="topbar topbar--secondary d-none d-lg-block">
         <div className="container">
            <div className="row">
               <div className="col-12">
                  <div className="topbar__inner">
                     <div className="row align-items-center">
                        <div className="col-12 col-lg-6 col-xxl-4">
                           <div className="topbar__list-wrapper">
                              <ul className="topbar__list">
                                 <li><a href="mailto:faithfoundation@gmail.com"><i
                                          className="fa-regular fa-envelope"></i>faithfoundation@gmail.com</a>
                                 </li>
                                 <li><a href="tel:+250786714717"><i className="fa-solid fa-phone"></i>+250 786 714 717</a>
                                 </li>
                              </ul>
                           </div>
                        </div>
                        <div className="col-12 col-lg-6 col-xxl-4">
                           <div className="topbar__items justify-content-end">
                           </div>
                        </div>
                        <div className="col-12 col-lg-6 col-xxl-4">
                           <div className="topbar__extra text-center">
                              <p><i className="icon-heart-hand"></i> Ready to bring hope? Join us as a volunteer!</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <header className="header header-secondary">
         <div className="container">
            <div className="row">
               <div className="col-12">
                  <div className="main-header__menu-box">
                     <nav className="navbar p-0">
                        <div className="navbar-logo">
                           <a href="index.html">
                              <img src="/images/logo.png" alt="Image" />
                           </a>
                        </div>
                        <div className="navbar__menu-wrapper">
                           <div className="navbar__menu d-none d-xl-block">
                              <ul className="navbar__list">
                                 <li className="navbar__item nav-fade">
                                    <a href="/">Home</a>
                                 </li>
                                 <li className="navbar__item nav-fade">
                                    <a href="/about-us">About Us</a>
                                 </li>
                                 <li className="navbar__item nav-fade">
                                    <a href="/causes">Causes</a>
                                 </li>
                                 <li className="navbar__item nav-fade">
                                    <a href="/news">News</a>
                                 </li>
                                 <li className="navbar__item nav-fade">
                                    <a href="/contact-us">Contact Us</a>
                                 </li>
                              </ul>
                           </div>
                           <div className="contact-btn">
                              <div className="contact-icon">
                                 <i className="icon-support"></i>
                              </div>
                              <div className="contact-content">
                                 <p>Call Us Now</p>
                                 <a href="tel:01-793-7938">(+01)-793-7938 </a>
                              </div>
                           </div>
                        </div>
                        <div className="navbar__options">
                           <div className="navbar__mobile-options ">
                              <div className="search-box">
                                 <button className="open-search" aria-label="search products" title="open search box">
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                 </button>
                              </div>
                              <a href="/donate" className="btn--primary d-none d-md-flex">Donate Now <i
                                    className="fa-solid fa-arrow-right"></i></a>
                           </div>
                           <button className="open-offcanvas-nav d-flex d-xl-none" aria-label="toggle mobile menu"
                              title="open offcanvas menu">
                              <span className="icon-bar top-bar"></span>
                              <span className="icon-bar middle-bar"></span>
                              <span className="icon-bar bottom-bar"></span>
                           </button>
                        </div>
                     </nav>
                  </div>
               </div>
            </div>
         </div>
      </header>
      <div className="mobile-menu mobile-menu--primary d-block d-xxl-none">
         <nav className="mobile-menu__wrapper">
            <div className="mobile-menu__header nav-fade">
               <div className="logo">
                  <a href="/" aria-label="home page" title="logo">
                     <img src="/images/logo.png" alt="Image" />
                  </a>
               </div>
               <button aria-label="close mobile menu" className="close-mobile-menu">
                  <i className="fa-solid fa-xmark"></i>
               </button>
            </div>
            <div className="mobile-menu__list"></div>
            <div className="mobile-menu__cta nav-fade d-block d-md-none">
               <a href="/donate" className="btn--primary ">Donate Now <i className="fa-solid fa-arrow-right"></i></a>
            </div>
            <div className="mobile-menu__social social nav-fade">
               <a href="https://www.facebook.com/" target="_blank" aria-label="share us on facebook" title="facebook">
                  <i className="fa-brands fa-facebook-f"></i>
               </a>
               <a href="https://vimeo.com/" target="_blank" aria-label="share us on vimeo" title="vimeo">
                  <i className="fa-brands fa-vimeo-v"></i>
               </a>
               <a href="https://x.com/" target="_blank" aria-label="share us on twitter" title="twitter">
                  <i className="fa-brands fa-twitter"></i>
               </a>
               <a href="https://www.linkedin.com/" target="_blank" aria-label="share us on linkedin" title="linkedin">
                  <i className="fa-brands fa-linkedin-in"></i>
               </a>
            </div>
         </nav>
      </div>
      <div className="mobile-menu__backdrop"></div>
      <div className="search-popup">
         <button className="close-search" aria-label="close search box" title="close search box">
            <i className="fa-solid fa-xmark"></i>
         </button>
         <form action="#" method="post">
            <div className="search-popup__group">
               <input type="text" name="search-field" id="searchField" placeholder="Search...." required />
               <button type="submit" aria-label="search products" title="search products">
                  <i className="fa-solid fa-magnifying-glass"></i>
               </button>
            </div>
         </form>
      </div>
</div>
  );
};

export default Header;
