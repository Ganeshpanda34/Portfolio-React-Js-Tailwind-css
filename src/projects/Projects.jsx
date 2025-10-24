import React, { useState, useMemo, useEffect } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import AOS from 'aos';
import project1 from "../assets/project1.png";
import project2 from "../assets/project-2.png";
import project3 from "../assets/project-3.png";
import project4 from "../assets/GAME.png";
import project5 from "../assets/project5.png";
import project6 from "../assets/Air-Ganesh.png";

// Sample project data. You can replace this with your actual projects.
const projectsData = [
  {
    title: 'Portfolio Website',
    image: project1,
    description: 'A responsive and modern personal portfolio built from scratch to showcase my skills, projects, and professional journey.',
    tags: [
           { name: 'React Js', color: 'bg-sky-400' },
      { name: 'Tailwind CSS', color: 'bg-teal-500' },
    ],
    liveUrl: '/',
    githubUrl: 'https://github.com/Ganeshpanda34/PORTFOLIO-NO-2.git',
  },
  {
    title: 'Text-To-Speech Converter',
    image: project2,
    description: 'A modern TTS converter with theme toggling, speed/volume controls, and a dynamic particle background.',
    tags: [
      { name: 'HTML5', color: 'bg-blue-500' },
      { name: 'CSS3', color: 'bg-cyan-500' },
      { name: 'JavaScript', color: 'bg-yellow-400 text-black' },
      { name: 'Web Speech API', color: 'bg-green-500' },
    ],
    liveUrl: 'https://ganesh-text-to-speech-converter.netlify.app/',
    githubUrl: 'https://github.com/Ganeshpanda34/Text-To-Speech-Converter.git',
  },
  {
    title: 'GymGenius AI Chatbot',
    image: project3,
    description: 'An AI-powered gym coach chatbot that provides workout routines and form tips in a sleek, glassmorphism-style interface.',
    tags: [
      { name: 'HTML5', color: 'bg-blue-500' },
      { name: 'CSS3', color: 'bg-red-500' },
      { name: 'JavaScript', color: 'bg-yellow-400 text-black' },
    ],
    liveUrl: 'https://ganesh-gym-genius-bot.netlify.app/',
    githubUrl: 'https://github.com/Ganeshpanda34/Genius-GYM-AI.git',
  },
  {
    title: 'Modern Tic-Tac-Toe',
    image: project4,
    description: 'A classic Tic-Tac-Toe game with a clean, modern design, sound effects, and a restart feature.',
    tags: [
      { name: 'HTML5', color: 'bg-blue-500' },
      { name: 'CSS3', color: 'bg-red-500' },
      { name: 'JavaScript', color: 'bg-yellow-400 text-black' },
    ],
    liveUrl: 'https://ganesh-tic-tac-toe-game.netlify.app/',
    githubUrl: 'https://github.com/Ganeshpanda34/TIC---TAC---TOE---GAME.git',
  },
  {
    title: 'InfinityCalc',
    image: project5,
    description: 'A web-based calculator built with Python and Flask, featuring a responsive GUI and deployed on Render.',
    tags: [
      { name: 'Python', color: 'bg-cyan-500' },
      { name: 'GUI', color: 'bg-gray-500' },
      { name: 'Flask', color: 'bg-gray-800' },
      { name: 'Render', color: 'bg-green-500' },
    ],
    liveUrl: 'https://flask-smart-calculator.onrender.com',
    githubUrl: 'https://github.com/Ganeshpanda34/flask-smart-calculator.git',
  },
  {
    title: 'Ganesh | Air draw',
    image: project6,
    description: 'An web application in which you will show your hand in pinch gesture to draw & later you can save into PNG format.',
    tags: [
      { name: 'HTML5', color: 'bg-blue-500' },
      { name: 'CSS3', color: 'bg-red-500' },
      { name: 'JavaScript', color: 'bg-yellow-400 text-black' },
      { name: 'Bootstrap', color: 'bg-purple-600' },
      { name: 'MediaPipe', color: 'bg-green-500' },
    ],
    liveUrl: 'https://ganesh-air-draw.netlify.app',
    githubUrl: 'https://github.com/Ganeshpanda34/Ganesh-Air-draw.git',
  },
];

const ProjectCard = ({ project, ...props }) => {
  const cardRef = React.useRef(null);

  React.useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e) => {
      const { left, top, width, height } = card.getBoundingClientRect();
      const x = e.clientX - left; // x position within the element.
      const y = e.clientY - top;  // y position within the element.
      const rotateX = -10 * ((y - height / 2) / height); // Rotate on X-axis
      const rotateY = 10 * ((x - width / 2) / width);   // Rotate on Y-axis
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
    };

    const handleMouseLeave = () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    };
    
    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      {...props}
      ref={cardRef}
      className="group bg-gray-800/50 border border-gray-700 rounded-lg shadow-lg flex flex-col h-full overflow-hidden transition-all duration-300 ease-out min-h-[450px]"
      style={{ transformStyle: 'preserve-3d', willChange: 'transform' }}
    >
      <img src={project.image} className="w-full h-48 object-cover transition-transform duration-500 ease-in-out group-hover:scale-105" alt={project.title} loading="lazy" />
      <div className="p-6 flex flex-col flex-grow">
        <h5 className="text-xl font-bold text-white mb-2">{project.title}</h5>
        <p className="text-gray-400 text-sm flex-grow mb-4">{project.description}</p>
        <div className="mb-4 flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <span key={index} className={`px-2.5 py-1 text-xs font-semibold rounded-full text-white ${tag.color} border border-white/20 transition-all duration-300 ease-in-out hover:scale-110 hover:-translate-y-1 hover:brightness-110`}>
              {tag.name}
            </span>
          ))}
        </div>
        <div className="mt-auto flex gap-3">
          <a className="px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors" href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`View live demo of ${project.title}`}>View Live</a>
          <a href={project.githubUrl} className="px-4 py-2 text-sm font-semibold text-gray-300 bg-gray-700 rounded-md hover:bg-gray-600 hover:text-white transition-colors" title="View Code on GitHub" target="_blank" rel="noopener noreferrer" aria-label={`View source code of ${project.title} on GitHub`}>
            <i className="fa-brands fa-github"></i> Code
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showAll, setShowAll] = useState(false);

  // Filter projects based on the active filter
  const filteredProjects = useMemo(() => {
    let projects = projectsData;

    // Filter by search query on title
    if (searchQuery) {
      projects = projects.filter(project =>
        project.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return projects;
  }, [searchQuery]);

  // Determine which projects to display based on the showAll state
  const displayedProjects = useMemo(() => {
    return showAll ? filteredProjects : filteredProjects.slice(0, 3);
  }, [showAll, filteredProjects]);

  // Refresh AOS when the displayed projects change to animate new items
  useEffect(() => {
    AOS.refresh();
  }, [displayedProjects]);

  return (
    <section id="project" className="bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <h2
          className="mb-8 text-center text-4xl font-bold text-white"
          data-aos="fade-down"
        >
          My <span className="text-cyan-400">Projects</span>
        </h2>
        <div className="mb-12 max-w-md mx-auto" data-aos="fade-up">
          <div className="relative" style={{ animation: 'input-border-glow 4s ease-in-out infinite alternate' }}>
            <input
              type="text"
              placeholder="Search By  Project's Name"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-800/50 border-2 border-transparent rounded-md py-3 px-4 pl-10 pr-10 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
            />
            <i className="fa-solid fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
            {searchQuery && (
              <button
                onClick={() => { setSearchQuery(''); }}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                aria-label="Clear search"
              >
                <i className="fa-solid fa-times"></i>
              </button>
            )}
          </div>
        </div>
        {filteredProjects.length > 0 ? (
          <>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
              {displayedProjects.map((project, index) => (
                <ProjectCard key={project.title || index} project={project} data-aos="fade-up" />
              ))}
            </div>
            {filteredProjects.length > 3 && (
              <div className="mt-12 text-center">
                {showAll ? (
                  <button
                    onClick={() => setShowAll(false)}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-md hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg shadow-purple-500/20 transform hover:scale-105"
                  >
                    <FaChevronUp /> Show Less
                  </button>
                ) : (
                  <button
                    onClick={() => setShowAll(true)}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-lg shadow-cyan-500/20 transform hover:scale-105"
                  >
                    <FaChevronDown /> View More
                  </button>
                )}
              </div>
            )}
          </>
        ) : (
          <div className="text-center text-gray-400 mt-16" data-aos="fade-up">
            <p className="text-2xl font-semibold">No Projects Found</p>
            <p className="mt-2">Try adjusting your search query.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
