import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import SanityStudio from './components/SanityStudio';
import SEO from './components/SEO';

function App() {
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
        <Route path="/404" element={<Terms />} />
        <Route path="/studio" element={<SanityStudio />} />
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
