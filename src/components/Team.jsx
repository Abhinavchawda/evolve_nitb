import React, { useEffect, useState } from 'react'
import Header from './Header'
import TeamCard from './TeamCard'

import Slider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import team from '../assets/teamFile.json'

const Team = () => {
  const settings = {
    dots: true,
    infinite: 1,
    speed: 500,
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

      <div className='w-[80vw] mx-auto mt-10'>
        <Slider {...settings} >
          {team.map((t) => (
            <TeamCard key={t.id} source={t.image} name={t.name} post={t.post} />
          ))
          }
        </Slider>
      </div>

    </div>
  )
}

export default Team
