import React from 'react';

const Preloader = () => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-gray-900 bg-[radial-gradient(theme(colors.cyan.500/10%)_1px,transparent_1px)] bg-[size:2rem_2rem] animate-fade-in">
      <div className="relative flex items-center justify-center">
        <div className="preloader-ripple">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <span className="absolute text-2xl font-black tracking-widest bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_3px_rgba(100,200,255,0.5)]">
          GANESH
        </span>
      </div>
    </div>
  );
};

export default Preloader;