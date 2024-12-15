import React from "react";
import Header from "./Header";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../index.css"; // Ensure you have this file and it's correctly linked

const Achievements = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
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
      <div className="first achievements h-[850px] text-white overflow-hidden">
        <Header title="Achievements" />
        <div className="second h-[850px] w-3/4 m-auto mt-20 ">
          <Slider {...settings}>
            {data.map((d, index) => (
              <div
                key={index}
                className="third mx-auto mb-10 lg:mx-0 w-[250px] h-[450px] md:w-[280px] md:h-[400px] rounded-3xl overflow-hidden flex flex-col justify-center items-center border border-transparent hover:border-[rgb(71,255,47)] hover:scale-[110%] hover:translate-x-2 transition-transform duration-300 ease-in-out hover:shadow-lg hover:shadow-[rgb(71,255,47)]"
              >
                <div className="fourth rounded-t-xl bg-indigo-500 flex justify-center items-center">
                  <img src={d.img} alt={d.name} className="h-[242px] w-full" />
                </div>
                <div className="fifth flex flex-col justify-center items-center gap-4 p-4">
                  <p className="font-bold text-xl">{d.name}</p>
                   <div className=" text-center">
                   <p >{d.review}</p>
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

const data = [
  {
    name: `Gujrat Robofest 2024`,
    img: `Achievements/guj_robofest.png`,
    review: `With effort and hard work, three teams from Evolve have advanced to the list of winners of the Ideation Stage. Competing with young minds from across India.`,
  },
  {
    name: `National Finalist-TATA Technologies Innovent`,
    img: `Achievements/guj_robofest.png`,
    review: `Three Team Members (Mr. Yash Kumar Atlani, Mr. Ayush Jain, Mr. Aman Sharma) from Evolve were selected as the National Finalists for the Tata Technologies InnoVent. A National Hackathon for Engineering Students. `,
  },
];

export default Achievements;
