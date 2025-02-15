import React from "react";
import Header from "./Header";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../index.css"; // Ensure this file is linked

import data from "../assets/achievementsFile.json";

const Achievements = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div id="achievements">
      <div className="text-white overflow-hidden">
        <Header title="Achievements" />
        <div className="lg:mx-auto mt-20 max-w-4xl ">
          <Slider {...settings} className="px-7">
            {data.map((d, index) => (
              <div
                key={index}
                className="bg-zinc-800 rounded-2xl overflow-hidden flex flex-col justify-center items-center border-2 border-transparent hover:border-[rgb(71,255,47)] transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-green-400/50"
                style={{ height: "450px" }} // Set consistent height for all cards
              >
                {/* Image with Fixed Height */}
                <div className="rounded-t-xl bg-indigo-500 flex justify-center items-center w-full overflow-hidden">
                  <img
                    src={d.img}
                    alt={d.name}
                    className="w-full h-80 object-cover"
                  />
                </div>

                {/* Content Area */}
                <div className="p-6 flex flex-col justify-center items-center gap-4 w-full">
                  <p className="font-bold text-2xl text-center text-[rgb(71,255,47)]">
                    {d.name}
                  </p>
                  <div style={{
                    scrollbarWidth: 'thin',
                    scrollbarColor: '#4caf50 #000000'
                  }} className="text-center text-gray-300 max-h-[150px] overflow-y-auto scrollbar-thin scrollbar-thumb-green-500 scrollbar-track-gray-700 p-4">
                    <p>{d.review}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
