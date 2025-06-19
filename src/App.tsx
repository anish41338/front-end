import React, { useState, useEffect, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import Showcase from './components/Showcase';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const rippleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode) {
      setDarkMode(JSON.parse(savedDarkMode));
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleLoaderComplete = () => {
    setIsLoading(false);
  };

  // 🌀 Cursor Ripple Movement
  useEffect(() => {
    const moveRipple = (e: MouseEvent) => {
      const ripple = rippleRef.current;
      if (ripple) {
        ripple.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };
    window.addEventListener('mousemove', moveRipple);
    return () => window.removeEventListener('mousemove', moveRipple);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 relative overflow-hidden">
      {/* 🌀 Ripple follows cursor */}
      <div
        ref={rippleRef}
        className="fixed top-0 left-0 w-[200px] h-[200px] rounded-full pointer-events-none z-0 mix-blend-overlay"
        style={{
          background:
            'radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 80%)',
          transform: 'translate(-50%, -50%)',
          transition: 'transform 0.05s ease-out',
        }}
      ></div>

      <AnimatePresence>
        {isLoading && <Loader onComplete={handleLoaderComplete} />}
      </AnimatePresence>

      {!isLoading && (
        <>
          <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <main className="relative z-10">
            <Hero />
            <Features />
            <Stats />
            <Testimonials />
            <Showcase />
            <Contact />
          </main>
          <ScrollToTop />
        </>
      )}
    </div>
  );
}

export default App;
