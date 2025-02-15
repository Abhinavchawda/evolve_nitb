import React, { useState } from 'react';

const ProjectCard = ({ image, PName, PDetails }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={` relative my-10 mx-auto sm:mx-10 w-[80vw] sm:w-[410px] bg-zinc-800 transition-all duration-300 ease-in-out border border-transparent rounded-3xl overflow-hidden text-white shadow-lg ${isHovered ? 'hover:border-green-400 hover:bg-black scale-105' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        height: isHovered ? 'fit-content' : '350px'
      }}
    >

      <img src={image} alt="project" className="w-full h-64 object-cover rounded-t-3xl" />

      <div className="text-center mt-4 p-4 text-lg sm:text-2xl md:text-2xl lg:text-2xl font-semibold text-cyan-400 rounded-2xl max-w-full break-words">
        {PName}
      </div>

      <div style={{
        scrollbarWidth: 'thin',
        scrollbarColor: '#4caf50 #000000'
      }}
        className={`p-5 text-center text-white rounded-2xl transition-opacity duration-300 overflow-y-auto max-h-[200px] ${isHovered ? 'opacity-100' : 'opacity-0'}`}
      >
        {PDetails}
      </div>
    </div>
  );
};

export default ProjectCard;