import React from 'react'
import NavBar from './NavBar'

const Home = (Home) => {

    return (
        <>
            <div className="h-screen text-white overflow-hidden">
                <NavBar></NavBar>
                
                <div className='flex justify-center items-center my-[38vh] mx-10'>
                    <img src='/Evolve_logo.png'></img>
                </div>
            </div>
        </>
    );
}

export default Home
