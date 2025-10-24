import React, { useState, useEffect } from 'react';
import { FaHome, FaUser, FaGraduationCap, FaCogs, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { id: 1, text: 'Home', href: '#home', icon: <FaHome /> },
    { id: 2, text: 'About', href: '#about', icon: <FaUser /> },
    { id: 3, text: 'Education', href: '#education', icon: <FaGraduationCap /> },
    { id: 4, text: 'Skill', href: '#skills', icon: <FaCogs /> },
    { id: 5, text: 'Projects', href: '#project', icon: <FaProjectDiagram /> },
    { id: 6, text: 'Contact', href: '#contact', icon: <FaEnvelope /> },
  ];

  useEffect(() => {
    // Trigger the animation shortly after the component mounts
    const timer = setTimeout(() => {
      setIsNavVisible(true);
    }, 100); // Small delay to ensure the initial state is rendered first

    // Scroll handling
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150; // Offset for better accuracy
      navLinks.forEach(link => {
        const section = document.getElementById(link.href.substring(1));
        if (section) {
          if (section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
            setActiveLink(link.href.substring(1));
          }
        }
      });

      // Background change on scroll
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove the event listener
    // and clear the timer
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  // Effect to prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup function to reset the style when the component unmounts
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsOpen(false); // Close mobile menu on click
  };

  return (
    <>
      {/* Main Navigation Bar */}
      <nav className={`
        fixed top-0 left-0 w-full z-50
        transform transition-all duration-300 ease-in-out
        ${isNavVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}
        ${isScrolled ? 'bg-gray-900/50 backdrop-blur-lg shadow-lg border-b border-white/10' : 'bg-transparent border-b border-transparent'}
      `}>
        <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">

          {/* Left Side: Logo */}
          <div className="flex-shrink-0">
            <a href="#home" className="futuristic-logo text-2xl font-bold tracking-wider">
              GANESH
            </a>
          </div>

          {/* Right Side: Desktop Navigation Links */}
          <div className="hidden md:flex items-center">
            <div className="ml-10 flex items-baseline space-x-1 lg:space-x-4">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`px-3 py-2 rounded-md text-sm font-medium cursor-pointer transition-all duration-300 ${
                  activeLink === link.href.substring(1)
                    ? 'bg-cyan-400/20 text-cyan-300 font-semibold'
                    : 'text-gray-300 hover:bg-white/10 hover:text-white'
                }`}
              >
                {link.text}
              </a>
            ))}
            </div>
          </div>

          {/* Right Side: Hamburger Menu Button for Mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md
                         focus:outline-none focus:ring-2
                         focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Animated Hamburger/Close Icon */}
              <div className="w-6 h-5 flex flex-col justify-between items-center">
                <span className={`block h-0.5 w-full bg-white transform transition duration-300 ease-in-out ${isOpen ? 'rotate-45 translate-y-[6px]' : ''}`}></span>
                <span className={`block h-0.5 w-full bg-white transition duration-300 ease-in-out ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`block h-0.5 w-full bg-white transform transition duration-300 ease-in-out ${isOpen ? '-rotate-45 -translate-y-[6px]' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Overlay for Mobile Menu */}
      <div
        aria-hidden="true"
        className={`
          md:hidden fixed inset-0 bg-black/60 z-30 transition-opacity duration-300
          ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
        `}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Mobile Menu, show/hide based on menu state. */}
      <div 
        className={`md:hidden fixed top-0 left-0 h-screen w-3/4 max-w-sm z-40 transform transition-transform duration-300 ease-in-out
                    bg-gray-900/80 backdrop-blur-xl shadow-2xl border-r border-white/10
                    ${isOpen ? 'translate-x-0' : '-translate-x-full'}`} 
        id="mobile-menu"
      >
        {/* Add padding-top to account for the main navbar height */}
        <div className="flex flex-col px-2 pt-24 pb-3 space-y-2 sm:px-3">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className={`group flex items-center justify-start gap-4 px-4 py-3 rounded-lg text-base font-medium w-full cursor-pointer transition-colors duration-300 ${
                activeLink === link.href.substring(1)
                  ? 'bg-cyan-400/40 text-cyan-100 font-semibold'
                  : 'text-gray-200 hover:bg-white/20 hover:text-white'
              }`}
            >
              <span className="text-lg transition-transform duration-300 ease-out group-hover:scale-110 group-hover:-translate-y-0.5">
                {link.icon}
              </span>
              {link.text}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
