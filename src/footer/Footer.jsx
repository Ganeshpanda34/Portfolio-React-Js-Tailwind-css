import React, { useState, useEffect } from 'react';

const socialLinks = [
  { icon: 'fa-brands fa-github', href: 'https://github.com/GaneshPanda34' },
  { icon: 'fa-brands fa-linkedin', href: 'https://www.linkedin.com/in/dev-roy-81319a378' },
  { icon: 'fa-brands fa-twitter', href: 'https://twitter.com/@GaneshPanda34' },
  { icon: 'fa-brands fa-instagram', href: 'https://www.instagram.com/ganesh_panda69' }
];

const quickLinks = [
  { text: 'Home', href: '#home' },
  { text: 'About', href: '#about' },
  { text: 'Education', href: '#education' },
  { text: 'Skills', href: '#skills' },
  { text: 'Projects', href: '#project' },
  { text: 'Contact', href: '#contact' },
];

const services = [
  'Web Development',
  'UI/UX Design',
  'Responsive Design with Mobile-first approach',
  'Vibe Coding',
];

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set up a scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="py-12 sm:py-16 bg-gray-900 text-white relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Column 1: Brand and Socials - Spans 1 column on medium screens, but centered overall */}
          <div className="text-left lg:col-span-2" data-aos="fade-up">
            <div className="text-3xl font-bold mb-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text inline-block drop-shadow-[0_1px_2px_rgba(0,255,255,0.3)]">
              Ganesh Prasad Panda
            </div>
            <p className="text-gray-400 mb-6 max-w-sm">
              I don't build websites – I craft magnetic digital experiences that pull users in and don't let go. Let's create something unforgettable⚡
            </p>
            <div className="flex flex-wrap justify-start gap-5">
              {socialLinks.map((link, index) => (
                <a key={index} href={link.href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-2xl">
                  <i className={link.icon}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="text-left" data-aos="fade-up" data-aos-delay="100">
            <h5 className="text-lg font-semibold mb-4 font-heading">Quick Links</h5>
            <ul>
              {quickLinks.map((link, index) => (
                <li key={index} className="mb-2">
                  <a href={link.href} onClick={(e) => handleLinkClick(e, link.href)} className="text-gray-400 hover:text-cyan-400 transition-colors no-underline">
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="text-left" data-aos="fade-up" data-aos-delay="200">
            <h5 className="text-lg font-semibold mb-4 font-heading">Services</h5>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index} className="text-gray-400">{service}</li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="my-8 border-gray-700" />

        <div className="text-left md:text-center text-gray-500">
          <p className="mb-0">&copy; {new Date().getFullYear()} <span className="text-cyan-400">Ganesh</span>. All rights reserved.</p>
        </div>
      </div>

      {/* Back to Top Button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg transform hover:scale-110 hover:shadow-cyan-500/40 transition-all duration-300"
          aria-label="Go to top"
        >
          <i className="fa-solid fa-arrow-up h-5 w-5"></i>
        </button>
      )}
    </footer>
  );
};

export default Footer;
