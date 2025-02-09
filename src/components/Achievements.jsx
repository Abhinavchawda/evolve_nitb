import React from "react";
import Header from "./Header";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../index.css"; // Ensure you have this file and it's correctly linked

import data from "../assets/achievementsFile.json";

const Achievements = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
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
        <div className="mx-5 lg:mx-auto mt-20 max-w-4xl px-4 sm:px-6 lg:px-8">
          <Slider {...settings} className="px-7">
            {data.map((d, index) => (
              <div
                key={index}
                className="bg-zinc-800 rounded-2xl overflow-hidden flex flex-col justify-center items-center border-2 border-transparent hover:border-[rgb(71,255,47)] transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-green-400/50"
              >
                <div className="fourth rounded-t-xl bg-indigo-500 flex justify-center items-center w-full overflow-hidden">
                  <img
                    src={d.img}
                    alt={d.name}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col justify-center items-center gap-4">
                  <p className="font-bold text-2xl text-center text-[rgb(71,255,47)]">{d.name}</p>
                  <div className="text-center text-gray-300">
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