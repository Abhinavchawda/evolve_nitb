import React, { useRef } from 'react';
import Header from './Header';

const AboutUs = () => {
    return (
        <div id='about'>
            <div className='AboutUs min-h-screen text-white overflow-hidden flex items-center'>
                <div>
                    <Header title="About Us"></Header>

                    <div className='flex flex-col lg:flex-row justify-center items-center gap-10 my-16'>
                        <div data-aos="fade-right" offset="100" className='image w-3/4 lg:w-[40%] hover:scale-110 transition-transform duration-300 ease-in-out'>
                            <img src="/About/withDir.jpg" className='rounded-2xl md:h-[350px] md:w-[500px] mx-auto'></img>
                        </div>

                        <div data-aos="fade-left" offset="100" className='written-content w-3/4 lg:w-[40%] text-center'>
                            <div className='text-3xl font-blod my-5'>
                                Evolve : The Interdisciplinary Technical Club of MANIT Bhopal
                            </div>
                            <div className='text-lg'>
                                Evolve is an Initiative for providing students with practical implementation of various industry-based technologies initiated under the Department of Electrical Engineering, NIT Bhopal.

                                Evolve is a dynamic technical club at Maulana Azad National Institute of Technology, Bhopal.
                                Established in 2023 creating an environment that transforms ideas into impactful solutions through different events and collaborative initiatives, a shared enthusiasm for hands-on learning and inventive problem-solving. The club welcomes any student passionate about robotics, mechanical engineering, electrical engineering, and software development. Beyond the campus, the club has made its mark, bringing numerous prizes and enhancing prestige.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;