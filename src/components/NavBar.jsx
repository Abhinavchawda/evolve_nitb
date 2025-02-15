import React from 'react'
import { useRef } from 'react';
import bar_logo from '../assets/bar.svg';
import cross_logo from '../assets/cross.svg';
import home_logo from '../assets/home.svg';

const NavBar = () => {
    const btn_ref = useRef(0);
    const icon_ref = useRef(0);

    const showMenu = () => {
        if (btn_ref.current.style.visibility == "visible") {
            btn_ref.current.style.visibility = "hidden"
            icon_ref.current.src = bar_logo;
        }
        else {
            btn_ref.current.style.visibility = "visible";
            icon_ref.current.src = cross_logo;
        }
    }

    return (
        <div className='flex justify-center items-center'>

            <div id='box' className='w-full border border-transparent hover:border-[rgb(71,255,47)] rounded-2xl backdrop-blur-lg fixed top-0 z-50 mx-auto transition-all duration-500 ease-in-out'>
                <div className='relative flex items-center justify-between h-20 rounded-2xl'>
                    <div className='text-[rgb(17,42,42)] font-bold text-3xl mx-5 animate-bounce ml-10'>
                        <img src='/Evolve_logo.png' height={50} width={75}></img>
                    </div>

                    <img ref={icon_ref} onClick={showMenu} className='lg:hidden invert absolute right-5 text-white h-8 w-8' src={bar_logo} alt='menu'></img>
                    <ul ref={btn_ref} className='border-[rgb(71,255,47)] invisible lg:hidden rounded-2xl backdrop-blur-lg relative top-60 bg-zinc-950 p-8 flex flex-col items-center gap-3'>
                        <li className='rounded-xl font-semibold text-border-[rgb(71,255,47)] m-2 flex justify-center py-1 px-2'><a href='#main'><img className='invert' src={home_logo} alt='Home'></img></a></li>
                        <li className='rounded-xl font-semibold px-6 py-2 my-1 hover:text-[rgb(71,255,47)] text-center'><a href='#about'>About</a></li>
                        <li className='rounded-xl font-semibold px-6 py-2 my-1 hover:text-[rgb(71,255,47)] text-center'><a href='#events'>Events</a></li>
                        <li className='rounded-xl font-semibold px-6 py-2 my-1 hover:text-[rgb(71,255,47)] text-center'><a href='#projects'>Projects</a></li>
                        <li className='rounded-xl font-semibold px-6 py-2 my-1 hover:text-[rgb(71,255,47)] text-center'><a href='#contact'>Contact</a></li>
                        <li><a href='https://docs.google.com/forms/d/e/1FAIpQLSd29mgbfCC6cuczkPG-wuMGHql35HRtNlcKCRDuJNdAZpCJ4g/viewform?usp=header' target="_blank"  className='bg-[rgb(71,255,47)] text-black cursor-pointer p-2 rounded-xl m-2'>Register Now</a></li> 
                    </ul>

                    <ul className='hidden lg:flex items-center gap-3 m-0 p-5 mr-10'>
                        <li className='rounded-xl font-semibold px-6 py-2 my-1 hover:text-[rgb(71,255,47)] text-center'><a href='#main'>Home</a></li>
                        <li className='rounded-xl font-semibold px-6 py-2 my-1 hover:text-[rgb(71,255,47)] text-center'><a href='#about'>About</a></li>
                        <li className='rounded-xl font-semibold px-6 py-2 my-1 hover:text-[rgb(71,255,47)] text-center'><a href='#events'>Events</a></li>
                        <li className='rounded-xl font-semibold px-6 py-2 my-1 hover:text-[rgb(71,255,47)] text-center'><a href='#projects'>Projects</a></li>
                        <li className='rounded-xl font-semibold px-6 py-2 my-1 hover:text-[rgb(71,255,47)] text-center'><a href='#contact'>Contact</a></li>
                        <li><a  href='https://docs.google.com/forms/d/e/1FAIpQLSd29mgbfCC6cuczkPG-wuMGHql35HRtNlcKCRDuJNdAZpCJ4g/viewform?usp=header' target="_blank" className='bg-[rgb(71,255,47)] text-black cursor-pointer p-2 rounded-xl'>Register Now</a></li> 
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavBar;