import React from 'react';

function UpcomingEvents() {
    return (
<div className="w-full mx-auto pb-12 p-6 bg-gradient-to-r from-[rgb(71,255,47)] to-[rgb(19,86,19)] text-black rounded-lg shadow-xl flex items-center flex-col gap-5">
      <h2 className="text-4xl font-bold my-4">🗓️ Upcoming </h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-16">
        <div className="border-2 border-dashed border-black p-2 rounded-lg">
          <img
            src="https://res.cloudinary.com/dsshwxfk3/image/upload/v1743099418/PHOTO-2025-03-27-15-55-01_glhmhz.jpg"
            alt="Event Poster"
            width={300}
            height={500}
            className="rounded-lg"
          />
        </div>
        <div className="text-left max-w-lg flex flex-col gap-1 md:gap-2">
          <h3 className="text-2xl font-bold flex items-center gap-2">
           The wait is over! 🚀
          </h3>
        
          <p className="mt-4 text-lg font-semibold">
          Join Team EVolve, a dynamic community fueled by innovation, collaboration, and the drive to push boundaries. Compete in prestigious national events, dive into cutting-edge tech projects—from robotics to ideathons—and gain hands-on experience solving real-world challenges. With expert mentorship and a team that thrives on adaptability, you'll develop essential skills while shaping the future.


          </p>
          <p className="mt-4 text-lg font-medium flex items-center gap-2">
  This is your chance to grow, create, and make an impact.
</p>
<p className="text-3xl mt-8 font-semibold flex items-center gap-3">
  Are you ready to  
  <span className="inline-block">
    <img src="/Evolve_logo.png" alt="EVolve Logo" className="h-12 w-18 object-contain" />
  </span>
  ? 
</p>

          {/* <a href='https://docs.google.com/forms/d/e/1FAIpQLSd29mgbfCC6cuczkPG-wuMGHql35HRtNlcKCRDuJNdAZpCJ4g/viewform?usp=header' target="_blank" className="mt-4 text-white border bg-gradient-to-r from-black to-black px-6 py-2 w-[200px] text-lg font-semibold rounded-xl">
            REGISTER NOW
            </a> */}
        </div>
      </div>
    </div>
    );
}

export default UpcomingEvents;