import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Preloader from './components/common/Preloader';
import AOSInit from './components/common/AOSInit';
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
  return (
    <>
      <SEO />
      <AOSInit />
      <Preloader />
      <Router >
            <div className="page-wrapper">
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
            <script src="/js/jquery-3.7.1.min.js"></script>
   <script src="/js/bootstrap.bundle.min.js"></script>
   <script src="/js/jquery.nice-select.min.js"></script>
   <script src="/js/jquery.magnific-popup.min.js"></script>
   <script src="/js/swiper-bundle.min.js"></script>
   <script src="/js/viewport.jquery.js"></script>
   <script src="/js/odometer.min.js"></script>
   <script src="/js/vanilla-tilt.min.js"></script>
   <script src="/js/SplitText.min.js"></script>
   <script src="/js/ScrollToPlugin.min.js"></script>
   <script src="/js/ScrollTrigger.min.js"></script>
   <script src="/js/gsap.min.js"></script>
   <script src="/js/template-settings.js"></script>
   <script src="/js/custom.js"></script>
    </Router>
    </>
  );
}

export default App;
