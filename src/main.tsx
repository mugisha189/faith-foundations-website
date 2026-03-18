import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// jQuery is loaded from CDN in HTML
// Expose jQuery globally for custom scripts (already available from CDN)
if (typeof window !== 'undefined' && window.jQuery) {
  (window as any).$ = (window as any).jQuery;
}

// Import remaining jQuery plugins in correct order (GSAP plugins loaded from CDN)
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
import "./assets/js/template-settings.js";
// @ts-ignore - No type definitions available
import "./assets/js/custom.js";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
