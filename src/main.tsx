import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import $ from "jquery";

// Expose jQuery globally for custom scripts
(window as any).$ = $;
(window as any).jQuery = $;

// Import custom jQuery scripts
import "./assets/js/custom.js";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
