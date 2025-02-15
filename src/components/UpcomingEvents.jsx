import React from 'react';

function UpcomingEvents() {
    return (
<div className="w-full mx-auto pb-12 p-6 bg-gradient-to-r from-[rgb(71,255,47)] to-[rgb(8,45,2)] text-black rounded-lg shadow-xl flex items-center flex-col gap-5">
      <h2 className="text-4xl font-bold my-4">🗓️ Upcoming Events</h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-16">
        <div className="border-2 border-dashed border-black p-2 rounded-lg">
          <img
            src="https://res.cloudinary.com/deblyam9n/image/upload/v1739532113/vehicle_dynamics_and_simulation_poster_wyvic8.jpg"
            alt="Event Poster"
            width={300}
            height={500}
            className="rounded-lg"
          />
        </div>
        <div className="text-left max-w-lg flex flex-col gap-1 md:gap-2">
          <h3 className="text-2xl font-bold flex items-center gap-2">
            🚗 Vehicle Dynamics and EV Design Workshop ⚡
          </h3>
          <p className="mt-2 text-lg flex items-center gap-2">
            📍 MANIT Bhopal | 🗓️ 1st March 2025
          </p>
          <p className="mt-4 text-lg font-semibold">
            Are you passionate about Electric Vehicles and cutting-edge automotive
            technology? Join us for an exciting hands-on workshop on Vehicle
            Dynamics & EV Design at MANIT Bhopal!
          </p>
          <a href='https://docs.google.com/forms/d/e/1FAIpQLSd29mgbfCC6cuczkPG-wuMGHql35HRtNlcKCRDuJNdAZpCJ4g/viewform?usp=header' target="_blank" className="mt-4 text-white border bg-gradient-to-r from-black to-black px-6 py-2 w-[200px] text-lg font-semibold rounded-xl">
            REGISTER NOW
            </a>
        </div>
      </div>
    </div>
    );
}

export default UpcomingEvents;