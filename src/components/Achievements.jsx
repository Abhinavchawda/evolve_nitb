import React from 'react'
import Header from './Header'

const Achievements = () => {
    return (
        <div id='achievements'>
            <div className='achievements min-h-screen text-white overflow-hidden'>
                <Header title="Achievements"></Header>

                <div className='flex flex-col lg:flex-row justify-center items-center gap-10 my-20'>
                    <div className='image w-3/4 lg:w-[40%] hover:scale-110 transition-transform duration-300 ease-in-out'>
                        <img
                            data-aos="fade-right"
                            src="Achievements/trophy.jpg" className='rounded-2xl md:h-[350px] md:w-[500px] mx-auto'></img>
                    </div>

                    <div data-aos="fade-left" offset="100" className='written-content w-3/4 lg:w-[40%] text-center'>
                        <div className='text-3xl font-blod mt-0 mb-2'>
                            Gujrat Robofest 2024 : India's biggest Robotic competition
                        </div>
                        <div className='text-lg'>
                            With effort and hard work, three teams from Evolve have advanced to the list of winners of the Ideation Stage. Competing with young minds from across India. Each team will now develop a solid proof of concept for their respective ideas under the categories they were selected for, with each team receiving a cash prize of INR 50,000 to move ahead.
                        </div>
                        <div className='text-3xl font-blod mt-8 mb-2'>
                            National Finalist-TATA Technologies Innovent
                        </div>
                        <div className='text-lg'>
                            Three Team Members (Mr. Yash Kumar Atlani, Mr. Ayush Jain, Mr. Aman Sharma) from Evolve were selected as the National Finalists for the Tata Technologies InnoVent. A National Hackathon for Engineering Students. The Team from Evolve NIT Bhopal was selected under the Top 10 in the Country out of 2900 Members and 800+ Teams.
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Achievements
