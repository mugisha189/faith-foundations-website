import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import $ from "jquery";

// Expose jQuery globally for custom scripts
(window as any).$ = $;
(window as any).jQuery = $;

// Import jQuery plugins in correct order
import "./assets/js/bootstrap.bundle.min.js";
import "./assets/js/jquery.nice-select.min.js";
import "./assets/js/jquery.magnific-popup.min.js";
import "./assets/js/swiper-bundle.min.js";
import "./assets/js/viewport.jquery.js";
import "./assets/js/odometer.min.js";
import "./assets/js/vanilla-tilt.min.js";
import "./assets/js/SplitText.min.js";
import "./assets/js/ScrollToPlugin.min.js";
import "./assets/js/ScrollTrigger.min.js";
import "./assets/js/gsap.min.js";
import "./assets/js/template-settings.js";
import "./assets/js/custom.js";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
