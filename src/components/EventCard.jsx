import React from 'react';

const EventCard = ({ title, image, content }) => {
  return (
    <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-3xl">
      <div class="h-96 w-90">
        <img class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-125" src={image} alt="" />
      </div>
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/50 group-hover:to-black/80"></div>
      <div class="absolute inset-0 flex translate-y-[65%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 class="font-dmserif text-3xl font-bold text-[rgb(71,255,47)]">{title}</h1>
        <p class="mb-3 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">{content}</p>
      
      </div>
    </div>
  );
};

export default EventCard;