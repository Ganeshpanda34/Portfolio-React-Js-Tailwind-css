import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

// import required modules
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';
import { FaSchool, FaFlask, FaUserGraduate, FaPercentage, FaClipboardList, FaStar } from 'react-icons/fa';

// Education data
const educationData = [
  {
    degree: 'Matriculation',
    institution: 'Carmel School',
    description: 'Completed Secondary Education under the ICSE curriculum, establishing a strong academic foundation across core subjects.',
    score: '77%',
    curriculum: 'Curriculum: Indian Certificate of Secondary Education (ICSE)',
    details: 'Strong academic performance in Computer Applications and Science.',
    icon: <FaSchool className="w-8 h-8" />,
  },
  {
    degree: 'Intermediate',
    institution: 'Charampa Mahavidyalaya College',
    description: 'Completed Higher Secondary Education under the CHSE curriculum with a focus on Science and Mathematics, specializing in PCMB.',
    score: '60%',
    curriculum: 'Curriculum: Council of Higher Secondary Education (CHSE)',
    details: 'Subjects: Physics, Chemistry, Mathematics & Biology.',
    icon: <FaFlask className="w-8 h-8" />,
  },
  {
    degree: 'B.Sc Graduation',
    institution: 'Bhadrak Autonomous College',
    description: "Completed Graduation in 'BSc-ITM' with a strong foundation in computer science, focusing on Python programming, web technologies and core computer science concepts.",
    score: '8.01 CGPA',
    curriculum: 'Curriculum: Council of Higher Secondary Education (CHSE)',
    details: 'Developed a keen interest in building practical software solutions.',
    icon: <FaUserGraduate className="w-8 h-8" />,
  },
];

const EducationCard = ({ degree, institution, description, score, curriculum, details, icon }) => (
  <div className="bg-gray-800 rounded-xl shadow-lg h-full flex flex-col p-6 border border-cyan-400/20 transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-cyan-400/20">
    <div className="flex items-center gap-4 mb-2">
      <div className="text-cyan-400">{icon}</div>
      <h3 className="text-2xl font-bold text-cyan-400 font-heading">{degree}</h3>
    </div>
    <p className="text-lg font-semibold text-gray-300 mb-4">{institution}</p>
    <p className="text-gray-400 mb-4 flex-grow">{description}</p>
    <div className="mt-auto border-t border-gray-700 pt-4 space-y-2 text-sm">
      <p className="flex items-center gap-2 text-gray-300 transition-transform duration-300 group-hover:translate-x-1">
        <FaPercentage className="text-cyan-400/80" /><span><span className="font-semibold">Score:</span> {score}</span>
      </p>
      <p className="flex items-center gap-2 text-gray-300 transition-transform duration-300 group-hover:translate-x-1 delay-75">
        <FaClipboardList className="text-cyan-400/80" /><span>{curriculum}</span>
      </p>
      <p className="flex items-center gap-2 text-gray-300 transition-transform duration-300 group-hover:translate-x-1 delay-150">
        <FaStar className="text-cyan-400/80" /><span><span className="font-semibold">Highlights:</span> {details}</span>
      </p>
    </div>
  </div>
);

const Education = () => {
  // Add this style block for the glow animation.
  // For production, it's better to move this to your main CSS file and configure it in tailwind.config.js
  const animationStyle = `
    @keyframes border-glow {
      0%, 100% { border-color: rgba(56, 189, 248, 0.4); box-shadow: 0 0 5px rgba(56, 189, 248, 0.2), inset 0 0 5px rgba(56, 189, 248, 0.1); }
      50% { border-color: rgba(56, 189, 248, 1); box-shadow: 0 0 20px rgba(56, 189, 248, 0.6), inset 0 0 10px rgba(56, 189, 248, 0.4); }
    }
  `;

  return (
    <section id="education" className="min-h-screen flex flex-col justify-center bg-gray-900 text-white py-16 md:py-20 overflow-x-hidden">
      <div className="w-full px-4">
        <h2 data-aos="fade-up" className="text-4xl md:text-5xl font-bold text-center mb-12 font-heading">
          My <span className="text-cyan-400">Education</span>
        </h2>
        <div data-aos="zoom-in-up" data-aos-delay="200" className="relative w-full max-w-5xl mx-auto">
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            rewind={true} // Use rewind for a seamless loop with a few slides
            speed={800} // Make the transition smoother (800ms)
            slidesPerView={'auto'}
            autoplay={{
              delay: 900,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: 10,
              depth: 100,
              modifier: 2,
              slideShadows: false,
            }}
            pagination={{ el: '.swiper-pagination', clickable: true }}
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
            className="h-auto pb-12"
          >
            <style>{animationStyle}</style>
            {educationData.map((edu, index) => (
              <SwiperSlide key={`${edu.degree}-${index}`} className="!w-full !max-w-xs sm:!max-w-sm md:!max-w-md">
                {({ isActive }) => (
                  <div
                    className={`p-2 sm:p-4 h-full transition-all duration-500 group ${isActive ? 'opacity-100 blur-none' : 'opacity-50 blur-sm'}`}
                    style={isActive ? { animation: 'border-glow 1.5s ease-in-out infinite' } : {}}
                  >
                    <EducationCard {...edu} />
                  </div>
                )}
              </SwiperSlide>
            ))}
            {/* Pagination */}
            <div className="swiper-pagination !relative !bottom-0 mt-4"></div>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Education;