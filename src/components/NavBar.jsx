import React from 'react'
import { useRef } from 'react';
import bar_logo from '../assets/bar.svg';
import cross_logo from '../assets/cross.svg';
import home_logo from '../assets/home.svg';

const NavBar = () => {
    const btn_ref = useRef(0);
    const icon_ref = useRef(0);
    
    const bar_ref = useRef(0);
    
    const showMenu = () => {
        if(btn_ref.current.style.visibility == "visible") {
            btn_ref.current.style.visibility = "hidden"
            icon_ref.current.src = bar_logo;
        }
        else {
            btn_ref.current.style.visibility = "visible";
            icon_ref.current.src = cross_logo;
        }
    }

    // var sticky = bar_ref.offsetTop;
    // window.onscroll = function() {stickyNavBar()};
    // const stickyNavBar = () => {
    //     if (window.scrollY >= sticky) {
    //         bar_ref.classList.add("sticky")
    //     } else {
    //         bar_ref.classList.remove("sticky");
    //     }
    //   }

    return (
        <div ref={bar_ref} className='w-[90%] mx-auto mt-5 border border-[rgb(71,255,47)] hover:border-transparent rounded-3xl'>
            <div className='flex items-center justify-between h-20 bg-[rgb(20,20,20,0.4)] rounded-3xl'>
                <div className='text-[rgb(17,42,42)] font-bold text-3xl mx-5 animate-pulse'>
                    <img src='/Evolve_logo.png' height={50} width={75}></img>
                </div>

                <div>
                    <img ref={icon_ref} className='px-8 invert lg:hidden text-black' src={bar_logo} onClick={showMenu} alt='menu'></img>
                    <div>
                        <ul ref={btn_ref} className='invisible lg:hidden bg-[rgb(20,20,20,0.4)] text-white rounded-2xl p-5 px-8 absolute right-5 top-28 text-md'>
                            <li className='rounded-xl font-semibold text-[rgb(71,255,47)] m-2 flex justify-center py-1 px-2'><a href='#main'><img className='invert' src={home_logo} alt='Home'></img></a></li>
                            <li className='rounded-xl font-semibold text-[rgb(71,255,47)] m-2 text-center py-1 px-2'><a href='#about'>About</a></li>
                            <li className='rounded-xl font-semibold text-[rgb(71,255,47)] m-2 text-center py-1 px-2'><a href='#events'>Events</a></li>
                            <li className='rounded-xl font-semibold text-[rgb(71,255,47)] m-2 text-center py-1 px-2'><a href='#projects'>Projects</a></li>
                            <li className='rounded-xl font-semibold text-[rgb(71,255,47)] m-2 text-center py-1 px-2'><a href='#contact'>Contact</a></li>
                            <li className='rounded-xl text-black bg-[rgb(71,255,47)] font-semibold px-3 py-1 text-center'><a href='http://google.com'>E-Cycle</a></li>
                        </ul>
                    </div>
                </div>

                <ul className='hidden lg:flex items-center gap-10 m-0 p-5'>
                    <li className='rounded-xl text-[rgb(71,255,47)] font-semibold px-3 py-1  hover:text-blue-500'><a href='#main'>Home</a></li>
                    <li className='rounded-xl text-[rgb(71,255,47)] font-semibold px-3 py-1  hover:text-blue-500'><a href='#about'>About</a></li>
                    <li className='rounded-xl text-[rgb(71,255,47)] font-semibold px-3 py-1  hover:text-blue-500'><a href='#events'>Events</a></li>
                    <li className='rounded-xl text-[rgb(71,255,47)] font-semibold px-3 py-1  hover:text-blue-500'><a href='#projects'>Projects</a></li>
                    <li className='rounded-xl text-[rgb(71,255,47)] font-semibold px-3 py-1  hover:text-blue-500'><a href='#contact'>Contact</a></li>
                    <li className='rounded-xl text-black bg-[rgb(71,255,47)] font-semibold px-3 py-1 text-center'><a href='http://google.com'>E-Cycle</a></li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar
