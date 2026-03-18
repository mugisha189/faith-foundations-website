import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Donate from './pages/Donate';
import ContactUs from './pages/ContactUs';
import Campaign from './pages/Campaign';
import Events from './pages/Events';
import News from './pages/News';
import SingleNews from './pages/SingleNews';
import SingleCampaign from './pages/SingleCampaign';
import Terms from './pages/Terms';
import NotFound from './pages/NotFound';
import SEO from './components/SEO';

function App() {
  useEffect(() => {
    // Load external CSS files
    const cssLinks = [
      '/css/main.css',
      '/css/responsive.css',
      '/css/default-theme.css',
      '/css/sticky-header.css',
      '/css/box-layout.css',
      '/css/dark-mode.css',
      '/css/rtl.css'
    ];

    cssLinks.forEach(href => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = href;
      document.head.appendChild(link);
    });

    // Load external JavaScript files
    const scripts = [
      '/js/jquery-3.7.1.min.js',
      '/js/bootstrap.bundle.min.js',
      '/js/jquery.nice-select.min.js',
      '/js/jquery.magnific-popup.min.js',
      '/js/swiper-bundle.min.js',
      '/js/viewport.jquery.js',
      '/js/odometer.min.js',
      '/js/vanilla-tilt.min.js',
      '/js/aos.js',
      '/js/SplitText.min.js',
      '/js/ScrollToPlugin.min.js',
      '/js/ScrollTrigger.min.js',
      '/js/gsap.min.js',
      '/js/template-settings.js',
      '/js/custom.js'
    ];

    scripts.forEach(src => {
      const script = document.createElement('script');
      script.src = src;
      document.body.appendChild(script);
    });

    // Load AOS from CDN and initialize
    const aosScript = document.createElement('script');
    aosScript.src = 'https://unpkg.com/aos@2.3.1/dist/aos.js';
    aosScript.onload = () => {
      const initScript = document.createElement('script');
      initScript.innerHTML = `
        AOS.init({
          duration: 1000,
          once: true,
          offset: 100
        });
      `;
      document.body.appendChild(initScript);
    };
    document.body.appendChild(aosScript);

    return () => {
      // Cleanup function to remove added elements if needed
      const addedLinks = document.querySelectorAll('link[href^="/css/"]');
      const addedScripts = document.querySelectorAll('script[src^="/js/"]');
      addedLinks.forEach(link => link.remove());
      addedScripts.forEach(script => script.remove());
    };
  }, []);

  return (
    <>
      <SEO />
      <Router >
            <div className="page-wrapper">
              <div className="preloader">
         <i className="icon-donation"></i>
         <p>Faith Foundations</p>
      </div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/causes" element={<Campaign />} />
        <Route path="/cause-details" element={<SingleCampaign />} />
        <Route path="/events" element={<Events />} />
        <Route path="/event-details" element={<Events />} />
        <Route path="/news" element={<News />} />
        <Route path="/blog-details" element={<SingleNews />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Terms />} />
        <Route path="/faq" element={<Terms />} />
        <Route path="/volunteer" element={<ContactUs />} />
        <Route path="/team" element={<AboutUs />} />
        <Route path="/team-details" element={<AboutUs />} />
        <Route path="/shop" element={<Donate />} />
        <Route path="/product-details" element={<Donate />} />
        <Route path="/cart" element={<Donate />} />
        <Route path="/checkout" element={<Donate />} />
        <Route path="/coming-soon" element={<Terms />} />
        
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
      <div className="mouseCursor cursor-outer"></div>
      <div className="mouseCursor cursor-inner"></div>
      <button className="progress-wrap" aria-label="scroll indicator" title="back to top">
         <span></span>
         <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
            <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
         </svg>
      </button>
            </div>
    </Router>
    </>
  );
}

export default App;
