import React, { useState, useEffect, Suspense } from 'react';
import './index.css';
import Navbar from './navbar/Navbar.jsx';
import Home from './home/Home.jsx';
import Preloader from './footer/Preloader.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = React.lazy(() => import('./about/About.jsx'));
const Education = React.lazy(() => import('./education/Education.jsx'));
const Skills = React.lazy(() => import('./skills/Skills.jsx'));
const Projects = React.lazy(() => import('./projects/Projects.jsx'));
const Contact = React.lazy(() => import('./contact/Contact.jsx'));
const Footer = React.lazy(() => import('./footer/Footer.jsx'));

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      disable: false, // Enable animations on all devices
      duration: 800, // Animation duration
      offset: 100,   // Offset from the original trigger point
      easing: 'ease-in-out', // Default easing
      once: true,    // Whether animation should happen only once
    });

    // Wait for all images to load before hiding the preloader
    const images = document.images;
    const totalImages = images.length;
    let loadedImages = 0;

    const handleImageLoad = () => {
      loadedImages++;
      if (loadedImages >= totalImages) {
        // Add a small extra delay for a smoother transition
        setTimeout(() => setLoading(false), 500);
      }
    };

    if (totalImages === 0) {
      setLoading(false);
    } else {
      Array.from(images).forEach((img) => {
        if (img.complete) {
          handleImageLoad();
        } else {
          img.addEventListener('load', handleImageLoad);
          img.addEventListener('error', handleImageLoad); // Count errors as "loaded" to avoid getting stuck
        }
      });
    }
  }, []);

  return (
    <>
      <div className={`transition-opacity duration-1000 ${loading ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}><Preloader /></div>
      <div className={`min-h-screen bg-gray-900 overflow-x-hidden transition-opacity duration-1000 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        <Navbar />
        <Home />
        <Suspense fallback={<div></div>}>
          <About />
          <Education />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </Suspense>
      </div>
    </>
  );
}

export default App;
