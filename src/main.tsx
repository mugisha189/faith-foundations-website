import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Import jQuery plugins in correct order
// @ts-ignore - No type definitions available
import "./assets/js/bootstrap.bundle.min.js";
// @ts-ignore - No type definitions available
import "./assets/js/jquery.nice-select.min.js";
// @ts-ignore - No type definitions available
import "./assets/js/jquery.magnific-popup.min.js";
// @ts-ignore - No type definitions available
import "./assets/js/swiper-bundle.min.js";
// @ts-ignore - No type definitions available
import "./assets/js/viewport.jquery.js";
// @ts-ignore - No type definitions available
import "./assets/js/odometer.min.js";
// @ts-ignore - No type definitions available
import "./assets/js/vanilla-tilt.min.js";
// @ts-ignore - No type definitions available
import "./assets/js/SplitText.min.js";
// @ts-ignore - No type definitions available
import "./assets/js/ScrollToPlugin.min.js";
// @ts-ignore - No type definitions available
import "./assets/js/ScrollTrigger.min.js";
// @ts-ignore - No type definitions available
import "./assets/js/gsap.min.js";
// @ts-ignore - No type definitions available
import "./assets/js/template-settings.js";
// @ts-ignore - No type definitions available
import "./assets/js/custom.js";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
