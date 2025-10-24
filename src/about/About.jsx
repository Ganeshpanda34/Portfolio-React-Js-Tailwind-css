import React, { useCallback } from "react";
import AboutImage from "../assets/work-ganesh.png";
import ResumePDF from "../assets/Ganesh-Full-Stack-Developer-Resume.pdf";

const About = () => {
  const principles = [
    "Mobile-first, user-focused development",
    "UI/UX Principles",
    "Cross-Browser Compatibility",
    "Intuitive, clean interface design",
    "Code with vibe — where design meets emotion",
    "Always learning. Always improving",
  ];
  const handleDownload = useCallback(() => {
    const link = document.createElement("a");
    link.href = ResumePDF;
    link.download = "Ganesh-Full-Stack-Developer-Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    alert("download successfully.");
  }, []);

  return (
    <section
      id="about"
      className="min-h-screen flex items-center bg-gray-800/50 text-white py-16 md:py-20"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 px-6 lg:px-8">
        {/* Left Side: Image */}
        <div className="w-full sm:w-10/12 md:w-4/12 flex justify-center mt-10 md:mt-0" data-aos="fade-left">
          <div className="animated-gradient-border rounded-xl shadow-2xl shadow-cyan-500/20">
            <img
              src={AboutImage}
              alt="A picture of Ganesh"
              className="rounded-lg w-full"
            />
          </div>
        </div>

        {/* Right Side: Text Content */}
        <div className="w-full md:w-6/12 text-left" data-aos="fade-right">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Who <span className="text-cyan-400">Am I?</span>
          </h2>
          <p className="text-lg text-gray-300 mb-4 leading-relaxed">
            I am a passionate Frontend Developer with a strong foundation in web
            technologies. As a fresher, I specialize in creating responsive,
            accessible, and performance-optimized web applications.
          </p>
          <p className="text-lg text-gray-300 mb-4 leading-relaxed">
            My journey in web development started with a curiosity about how
            websites work, which led me to pursue a degree in 'BSc-ITM'. Since
            then, I've worked on various projects, continuously improving my
            skills and staying updated with the latest industry trends.
          </p>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            When I'm not coding, I explore cutting-edge AI tools and industry
            innovations to stay ahead of the tech curve, I prioritize fitness
            and physical training or enjoy listening to music & podcasts.
          </p>
          <ul className="space-y-3">
            {principles.map((item, index) => (
              <li key={index} className="flex items-start">
                <svg
                  className="w-5 h-5 mr-3 text-cyan-400 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="text-gray-300">{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex justify-start">
            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-white rounded-lg shadow-lg transform hover:-translate-y-1 transition-all duration-300 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Download Resume</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
