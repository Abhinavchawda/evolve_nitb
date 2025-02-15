import React, { useState } from 'react';

const WorkshopModal = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    isOpen && (
      <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-80">
        <div className="bg-zinc-900 text-green-400 p-6 rounded-lg shadow-lg max-w-md w-full relative border-transparent transition duration-300">
          {/* Close Button */}
          <button
            className="absolute top-2 right-2 text-5xl font-bold text-red-400 transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            &times;
          </button>

          {/* Animated Title */}
          <h3 className="text-2xl font-bold flex items-center gap-2 animate-pulse [animation-duration:0.8s] text-[rgb(71,255,47)]">
            🚗 Vehicle Dynamics and EV Design Workshop ⚡
          </h3>

          <p className="mt-2 text-lg flex items-center gap-2 text-white">
            📍 MANIT Bhopal | 🗓️ 1st March 2025
          </p>

          <p className="mt-4 text-lg font-semibold text-white">
            Are you passionate about Electric Vehicles and cutting-edge automotive
            technology? Join us for an exciting hands-on workshop on Vehicle
            Dynamics & EV Design at MANIT Bhopal!
          </p>
        </div>
      </div>
    )
  );
};

export default WorkshopModal;
