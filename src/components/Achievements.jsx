import React from 'react'
import Header from './Header'

const Achievements = () => {
    return (
        <div id='achievements'>
            <div className='achievements min-h-screen text-white overflow-hidden'>
                <Header title="Achievements"></Header>

                <div className='flex flex-col lg:flex-row justify-center items-center gap-10 my-20'>
                    <div className='image w-3/4 lg:w-[40%] hover:scale-110 transition-transform duration-300 ease-in-out'>
                        <img src="Achievements/trophy.jpg" className='rounded-2xl md:h-[350px] md:w-[500px] mx-auto'></img>
                    </div>

                    <div className='written-content w-3/4 lg:w-[40%] text-center'>
                        <div className='text-3xl font-blod my-5'>
                            प्रभोत्सव Technical Quiz Competition 2024 “Quizzard”
                        </div>
                        <div className='text-lg'>
                            Thrilled to share the moment of triumph as our teams representing MANIT Bhopal during Quizzard at प्रभोTsav'24 and have clinched all the top three positions and, earned a well-deserved prize🏆
                            It was a thrilling journey full of learning and adrenaline!
                            Our dedication, teamwork, and passion for knowledge have truly shined through.
                            Let's continue to challenge ourselves, learn from each other, and strive for excellence in everything we do. There are more milestones and success ahead!
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Achievements
