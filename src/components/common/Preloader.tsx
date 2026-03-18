import { useEffect, useState } from 'react';

const Preloader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide preloader after content is loaded
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 300);

    // Also hide when window is fully loaded
    const handleLoad = () => {
      setIsVisible(false);
    };

    window.addEventListener('load', handleLoad);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="preloader" style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: '#fff',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 9999,
      transition: 'opacity 0.3s ease-out'
    }}>
      <i className="icon-donation" style={{
        fontSize: '3rem',
        marginBottom: '1rem',
        animation: 'spin 2s linear infinite'
      }}></i>
      <p style={{
        fontSize: '1.2rem',
        fontWeight: '600',
        color: '#333'
      }}>Faith Foundations</p>
    </div>
  );
};

export default Preloader;
