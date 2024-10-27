import React, { useEffect, useRef } from 'react';
import NavBar from './NavBar';

import HoverCard from "@darenft/react-3d-hover-card";
import "@darenft/react-3d-hover-card/dist/style.css";

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

import NET from 'vanta/src/vanta.net';

const Home = () => {
    const imgRef = useRef();

    useEffect(() => {
        NET({
            el: "#vanta",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 1000.00,
            minWidth: 1000.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0xff41,
            backgroundColor: 0x0,
            points: 18.00,
            spacing: 13.00
        })
    }, [])

    useGSAP(() => {
        gsap.from(imgRef.current, {
            y: 700,
            duration: 1,
            delay: 0.5,
        })
    })

    return (
        <>
            <div className="h-screen text-white overflow-hidden">

                <div className='bg' id='vanta'></div>

                <NavBar/>

                <HoverCard scaleFactor={1.4}>
                    <div ref={imgRef} className='flex justify-center items-center my-[34vh] mx-10'>
                        <img src='/Evolve_logo.png'></img>
                    </div>
                </HoverCard>
            </div>
        </>
    );
}

export default Home;