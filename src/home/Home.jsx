import React, { useCallback } from 'react';
import { TypeAnimation } from 'react-type-animation';
import ProfileImage from '../assets/ganesh-profile.jpg'; 

const Home = () => {

  const handleScrollTo = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center bg-gray-900 text-white pt-16 overflow-hidden">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-x-12 px-6 lg:px-8">
        
        {/* Left Side: Text Content & Buttons */}
        <div className="md:w-1/2 lg:w-2/5 text-center md:text-left mb-12 md:mb-0 font-heading" data-aos="fade-right">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 font-heading">
            Hi, <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">I'm Ganesh</span>
          </h1>
          <TypeAnimation
            sequence={[
              ' I\'m a Frontend Developer',
              1500,
              ' Python Developer',
              1500,
              'Responsive UI Designer',
              1500,
              'Prompt Engineer',
              1500,
              'Vibe Coder ',
              1500,
            ]}
            wrapper="span"
            speed={50}
            className="text-2xl md:text-4xl font-semibold text-cyan-400 block mb-6"
            repeat={Infinity}
          />
          <p className="mt-6 text-lg leading-relaxed text-gray-300 max-w-xl mx-auto md:mx-0">
            From vision to launch, I lead web projects that blend creativity with engineering excellence. Let’s collaborate to turn your boldest ideas into high-impact digital realities.
          </p>
          <div className="mt-8 flex justify-center md:justify-start gap-4">
            <a 
              href="#about" 
              onClick={(e) => handleScrollTo(e, 'about')}
              className="px-6 py-3 font-semibold text-white rounded-lg shadow-lg transform hover:-translate-y-1 transition-all duration-300 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800"
            >
              Profile Summary
            </a>
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, 'contact')}
              className="px-6 py-3 font-semibold text-white bg-gray-700 rounded-lg shadow-lg transform hover:-translate-y-1 transition-all duration-300 hover:bg-gray-600"
            >
              Let's Connect
            </a>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="md:w-1/2 lg:w-2/5 flex justify-center md:justify-end" data-aos="zoom-in" data-aos-delay="200">
          <img 
            src={ProfileImage} // Use the imported image
            alt="Ganesh" 
            className="w-72 h-72 md:w-96 md:h-96 rounded-full object-cover border-4 border-cyan-500 shadow-2xl shadow-cyan-500/20 transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/40"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;