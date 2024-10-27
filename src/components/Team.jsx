import React, { useEffect, useState } from 'react';
import Header from './Header';
import TeamCard from './TeamCard';

import Slider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import team from '../assets/teamFile.json';

const Team = () => {
  const settings1 = {
    dots: true,
    infinite: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className='lg:min-h-[100vh] text-white overflow-hidden my-20'>
      <Header title="Team Evolve"></Header>

      <div data-aos="zoom-in" className='w-[80vw] mx-auto mt-10'>
        <h6 className='text-xl'>Final Year Team</h6>
        <Slider {...settings1} >
          {team.FinalYear.map((t) => (
            <TeamCard key={t.id} source={t.image} name={t.name} post={t.post} />
          ))
          }
        </Slider>
      </div>

      <div data-aos="zoom-in" className='w-[80vw] mx-auto mt-10'>
        <h6 className='text-xl'>Pre Final Year Team</h6>
        <Slider {...settings1} >
          {team.PreFinalYear.map((t) => (
            <TeamCard key={t.id} source={t.image} name={t.name} post={t.post} />
          ))
          }
        </Slider>
      </div>

    </div>
  )
}

export default Team
