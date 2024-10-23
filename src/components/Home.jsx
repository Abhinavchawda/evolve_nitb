import React from 'react'
import NavBar from './NavBar'

import HoverCard from "@darenft/react-3d-hover-card";

import "@darenft/react-3d-hover-card/dist/style.css";

const Home = (Home) => {

    return (
        <>
            <div className="h-screen text-white overflow-hidden">
                <NavBar></NavBar>

                <HoverCard scaleFactor={1.4}>
                    <div className='flex justify-center items-center my-[38vh] mx-10'>
                        <img src='/Evolve_logo.png'></img>
                    </div>
                </HoverCard>
            </div>
        </>
    );
}

export default Home
