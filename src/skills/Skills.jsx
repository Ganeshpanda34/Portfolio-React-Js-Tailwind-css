import React, { useCallback } from 'react';
import { TypeAnimation } from 'react-type-animation';

// Inline SVG component for the Tailwind CSS logo
const TailwindIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 154" className="h-4 w-auto inline-block">
    <path fill="#38bdf8" d="M128 0C93.867 0 72.533 17.067 64 51.2 76.8 34.133 91.733 27.733 108.8 32c9.734 2.4 16.8 10.8 22.4 20.4 13.467 22.933 26.933 45.867 40.4 68.8 2.667 4.267 5.333 8.533 8 12.8 2.667-4.267 5.333-8.533 8-12.8 13.467-22.933 26.933-45.867 40.4-68.8C233.6 42.8 240.666 34.4 250.4 32c17.067-4.267 32 2.133 44.8 19.2-8.533-34.133-29.867-51.2-64-51.2S162.133 0 128 0zM64 76.8C29.867 76.8 8.533 93.867 0 128c12.8-17.067 27.733-23.467 44.8-19.2 9.734 2.4 16.8 10.8 22.4 20.4 13.467 22.933 26.933 45.867 40.4 68.8 2.667 4.267 5.333 8.533 8 12.8 2.667-4.267 5.333-8.533 8-12.8 13.467-22.933 26.933-45.867 40.4-68.8 5.6-9.6 12.666-18 22.4-20.4 17.067-4.267 32 2.133 44.8 19.2-8.533-34.133-29.867-51.2-64-51.2S98.133 76.8 64 76.8z"></path>
  </svg>
);

// Inline SVG component for the Flask logo
const FlaskIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="h-4 w-auto inline-block">
        <path fill="currentColor" d="M213.6 26.9c-2-2.2-4.8-3.5-7.7-3.5h-22.5c-1.7 0-3.4.5-4.9 1.5l-59.3 39.5-59.3-39.5c-1.5-1-3.2-1.5-4.9-1.5H30.1c-2.9 0-5.7 1.3-7.7 3.5-2 2.2-3.1 5-3.1 8v.2c0 2.9 1.2 5.7 3.2 7.8l70.2 70.2-70.2 70.2c-2 2-3.2 4.8-3.2 7.8v.2c0 3 1.1 5.8 3.1 8 2 2.2 4.8 3.5 7.7 3.5h22.5c1.7 0 3.4-.5 4.9-1.5l59.3-39.5 59.3 39.5c1.5 1 3.2 1.5 4.9 1.5h22.5c2.9 0 5.7-1.3 7.7-3.5 2-2.2 3.1-5 3.1-8v-.2c0-2.9-1.2-5.7-3.2-7.8l-70.2-70.2 70.2-70.2c2-2 3.2-4.8 3.2-7.8v-.2c-.1-3-1.2-5.8-3.2-8z"></path>
    </svg>
);

// Inline SVG component for the Streamlit logo
const StreamlitIcon = () => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-4 w-auto inline-block">
    <path fill="#FF4B4B" d="M12.4 5.2L24 12l-5.6 3.4L12.4 22l-5.6-3.4L1.2 12l5.6-3.4L12.4 2zM6.8 8.6L1.2 12l5.6 3.4L6.8 12zm10.4 0L22.8 12l-5.6 3.4L17.2 12zM12.4 5.2l-5.6 3.4 5.6 3.4 5.6-3.4zm0 13.6l-5.6-3.4 5.6-3.4 5.6 3.4z"/>
  </svg>
);

// Inline SVG component for the Google G logo
const GoogleGIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-4 w-auto inline-block">
    <path fill="#4285F4" d="M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.19,4.73C14.76,4.73 16.04,5.7 17.09,6.62L19.27,4.59C17.22,2.67 14.94,1.5 12.19,1.5C7.22,1.5 3.33,5.55 3.33,12C3.33,18.26 7.06,22.5 12.19,22.5C17.5,22.5 21.5,18.42 21.5,11.31C21.5,10.8 21.45,10.42 21.35,11.1Z"/>
  </svg>
);

const skillsData = {
  technical: {
    title: 'Technical Skills',
    skills: [
        { name: 'HTML', level: '95%', icon: { type: 'fa', value: 'fa-brands fa-html5' } },
        { name: 'CSS', level: '90%', icon: { type: 'fa', value: 'fa-brands fa-css3-alt' } },
        { name: 'Bootstrap', level: '85%', icon: { type: 'fa', value: 'fa-brands fa-bootstrap' } },
        { name: 'JavaScript', level: '80%', icon: { type: 'fa', value: 'fa-brands fa-js-square' } },
        { name: 'React.js', level: '85%', icon: { type: 'fa', value: 'fa-brands fa-react' } },
        { name: 'Tailwind CSS', level: '90%', icon: { type: 'svg', value: <TailwindIcon /> } },
        { name: 'Python', level: '75%', icon: { type: 'fa', value: 'fa-brands fa-python' } },
        { name: 'Flask', level: '70%', icon: { type: 'svg', value: <FlaskIcon /> } },
        { name: 'Streamlit', level: '65%', icon: { type: 'svg', value: <StreamlitIcon /> } },
    ],
    bgColor: 'bg-conic from-indigo-500 via-teal-400 to-indigo-500',
    textColor: 'text-rose-400',
    progressColor: 'bg-gradient-to-r from-red-500 via-blue-500 to-green-500',
  },
  tools: {
    title: 'Tools & Platforms',
    skills: [
      { 
        subheading: 'AI Tools', 
        items: [
          { name: 'Perplexity', icon: 'fa-solid fa-robot' }, 
          { name: 'ChatGPT', icon: 'fa-solid fa-comment-dots' }, 
          { name: 'Gemini', icon: { type: 'svg', value: <GoogleGIcon /> } }
        ] 
      },
      { 
        subheading: 'Platforms', 
        items: [
          { name: 'GitHub', icon: 'fa-brands fa-github' }, 
          { name: 'Streamlit', icon: 'fa-solid fa-chart-line' }, 
          { name: 'Vercel', icon: 'fa-solid fa-play' }, 
          { name: 'Netlify', icon: 'fa-solid fa-cloud-arrow-up' }
        ] 
      },
      { 
        subheading: 'Code Editor', 
        items: [{ name: 'Visual Studio Code', icon: 'fa-solid fa-code' }] 
      },
    ],
    bgColor: 'bg-conic from-sky-500 via-cyan-400 to-sky-500',
    textColor: 'text-blue-400',
  },
  soft: {
    title: 'Soft Skills',
    skills: [
      { name: 'Problem Solving', icon: 'fa-solid fa-puzzle-piece' },
      { name: 'Communication', icon: 'fa-solid fa-comments' },
      { name: 'Teamwork', icon: 'fa-solid fa-users' },
      { name: 'Creativity', icon: 'fa-solid fa-lightbulb' },
      { name: 'Adaptability', icon: 'fa-solid fa-arrows-rotate' },
      { name: 'Time Management', icon: 'fa-solid fa-clock' },
    ],
    bgColor: 'bg-conic from-indigo-600 via-indigo-50 to-indigo-600',
    textColor: 'text-emerald-400',
  },
};

const ProgressBar = ({ skill, level, icon, progressColor, isRevealed }) => {
  return (
    <div className="w-full text-left">
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium text-gray-300 flex items-center gap-2">
           {icon && (
             <span className="w-4 text-center flex items-center justify-center">
               {icon.type === 'fa' && <i className={`${icon.value}`}></i>}
               {icon.type === 'svg' && icon.value}
             </span>
           )}
           {skill}
         </span>
         <span className="text-sm font-medium text-gray-300">{level}</span>
       </div>
       <div className="w-full bg-gray-700 rounded-full h-2.5 overflow-hidden">
         <div className={`${progressColor} h-2.5 rounded-full w-0 transition-all duration-1000 ease-out ${isRevealed ? 'w-[var(--level)]' : 'group-hover:w-[var(--level)]'}`} style={{ '--level': level }}></div>
       </div>
     </div>
   );
 };
 
 const SkillCard = ({ title, skills, bgColor, textColor, progressColor }) => {
   const [isRevealed, setIsRevealed] = React.useState(false);
 
   return (
     <div
       className="group relative h-80 w-full cursor-pointer overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/40"
       onClick={() => setIsRevealed(!isRevealed)}
       // On desktop, if the user hovers and then moves the mouse away, we should hide the card again.
       // On mobile, this event won't fire, so the tapped state will persist until tapped again.
       onMouseLeave={() => setIsRevealed(false)}
     >
       {/* Revealed Content */}
       <div className="absolute inset-0 z-10 flex flex-col items-center justify-start bg-black px-6 pt-8 pb-6 text-center overflow-y-auto">
         <h3 className={`mb-6 text-2xl font-bold font-heading ${textColor}`}>{title}</h3>
         <ul className="w-full space-y-4">
           {skills.map((skill, index) => {
             // Render technical skills with progress bars
             if (skill.level) { // This is the technical skills card
               return <ProgressBar key={index} skill={skill.name} level={skill.level} icon={skill.icon} progressColor={progressColor} isRevealed={isRevealed} />;
             }
             // Render tools/platforms with subheadings
             if (skill.subheading) {
               return (
                 <li key={index} className="text-left px-2">
                   <h4 className="font-semibold text-lg text-gray-400 mb-2 font-heading">{skill.subheading}</h4>
                   <ul className="space-y-2">
                     {skill.items.map((item, itemIndex) => (
                       <li key={itemIndex} className="text-gray-300 flex items-center gap-3">
                         {typeof item.icon === 'string' ? (
                            <i className={`${item.icon} w-5 text-center`}></i>
                         ) : (
                            <span className="w-5 text-center flex items-center justify-center">{item.icon.value}</span>
                         )}
                         {item.name}
                       </li>
                     ))}
                   </ul>
                 </li>
               );
             }
             // Render simple list for soft skills
             return (
                <li key={index} className="text-gray-300 text-lg flex items-center gap-3">
                  <i className={`${skill.icon} w-5 text-center`}></i>
                  <span>{skill.name}</span>
                </li>
             );
           })}
         </ul>
       </div>
 
       {/* Curtain */}
       <div
         className={`absolute inset-0 z-20 flex transform flex-col items-center justify-center text-white transition-transform duration-700 ease-in-out group-hover:-translate-y-full ${isRevealed ? '-translate-y-full' : 'translate-y-0'} ${bgColor}`}
       >
         <TypeAnimation
            sequence={[
              title,
              3000,
              '',
              500,
            ]}
            wrapper="h3"
            speed={50}
            className="text-3xl font-bold bg-gradient-to-r from-gray-400 to-black bg-clip-text text-transparent font-heading"
            repeat={Infinity}
          />
         <p className="mt-4 text-lg text-black opacity-80">Tap to reveal 👇</p>
       </div>
     </div>
   );
 };
 
 const Skills = () => {
   return (
     <section id="skills" className="bg-gray-900/70 py-20">
       <div className="container mx-auto px-4">
         <h2
           className="mb-16 text-center text-4xl font-bold text-white font-heading"
           data-aos="fade-down"
         >
           My Skills
         </h2>
         <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
           {/* Technical Skills Card */}
           <div className="md:col-start-1 lg:col-start-auto bg-gradient-to-r from-indigo-500 to-teal-400 rounded-lg p-1" data-aos="fade-up">
             <SkillCard
               title={skillsData.technical.title}
               skills={skillsData.technical.skills}
               bgColor={skillsData.technical.bgColor}
               textColor={skillsData.technical.textColor}
               progressColor={skillsData.technical.progressColor}
             />
           </div>
 
           {/* Tools & Platforms Card */}
           <div className="md:col-start-2 lg:col-start-auto bg-gradient-to-r from-sky-500 to-cyan-400 rounded-lg p-1" data-aos="fade-up" data-aos-delay="200">
             <SkillCard
               title={skillsData.tools.title}
               skills={skillsData.tools.skills}
               bgColor={skillsData.tools.bgColor}
               textColor={skillsData.tools.textColor}
             />
           </div>
 
           {/* Soft Skills Card */}
           <div className="md:col-span-2 md:col-start-1 lg:col-span-1 lg:col-start-auto bg-gradient-to-r from-indigo-600 to-indigo-50 rounded-lg p-1" data-aos="fade-up" data-aos-delay="400">
              <SkillCard
               title={skillsData.soft.title}
               skills={skillsData.soft.skills}
               bgColor={skillsData.soft.bgColor}
               textColor={skillsData.soft.textColor}
             />
           </div>
         </div>
       </div>
     </section>
   );
 };
 
 export default Skills;