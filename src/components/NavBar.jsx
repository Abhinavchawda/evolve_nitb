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
    window.onscroll = function() {stickyNavBar(),mobNav()};
    const stickyNavBar = () => {
        let temp = document.getElementById("box");
        if (window.scrollY >= 90) {
            temp.classList.add("scale-x-95");
        } else {
            temp.classList.remove("scale-x-95");    
        }
      }
    const mobNav = () => {
        let temp = document.getElementById("box");
        if(btn_ref.current.style.visibility == "visible"&&window.scrollY >= 130) {
            btn_ref.current.style.visibility = "hidden"
            icon_ref.current.src = bar_logo;
        }
      }

      

    return (
        <div className='flex justify-center items-center'>

        <div ref={bar_ref} id='box' className='w-[93%] mt-5 border border-transparent hover:border-[rgb(71,255,47)] rounded-2xl backdrop-blur-lg fixed top-1 z-50 mx-auto transition-all duration-500 ease-in-out'>
            <div className='flex items-center justify-between h-20  rounded-2xl'>
                <div className='text-[rgb(17,42,42)] font-bold text-3xl mx-5 animate-pulse ml-10'>
                    <img src='/Evolve_logo.png' height={50} width={75}></img>
                </div>

                <div>
                    <img ref={icon_ref} className='px-8 invert lg:hidden text-black' src={bar_logo} onClick={showMenu} alt='menu'></img>
                    <div>
                        <ul ref={btn_ref} className='border-[rgb(71,255,47)] invisible lg:hidden rounded-2xl backdrop-blur-lg mobNav'>
                    <li className='rounded-xl  font-semibold text-border-[rgb(71,255,47)] m-2 flex justify-center py-1 px-2'><a href='#main'><img className='invert' src={home_logo} alt='Home'></img></a></li>
                    <li className='rounded-xl  font-semibold px-3 py-1  hover:text-[rgb(71,255,47)]'><a href='#about'>About</a></li>
                    <li className='rounded-xl  font-semibold px-3 py-1  hover:text-[rgb(71,255,47)]'><a href='#events'>Events</a></li>
                    <li className='rounded-xl  font-semibold px-3 py-1  hover:text-[rgb(71,255,47)]'><a href='#projects'>Projects</a></li>
                    <li className='rounded-xl  font-semibold px-3 py-1  hover:text-[rgb(71,255,47)]'><a href='#contact'>Contact</a></li>
                        </ul>
                    </div>
                </div>

                <ul className='hidden lg:flex items-center gap-3 m-0 p-5 mr-10'>
                    <li className='rounded-xl  font-semibold px-3 py-1  hover:text-[rgb(71,255,47)]'><a href='#main'>Home</a></li>
                    <li className='rounded-xl  font-semibold px-3 py-1  hover:text-[rgb(71,255,47)]'><a href='#about'>About</a></li>
                    <li className='rounded-xl  font-semibold px-3 py-1  hover:text-[rgb(71,255,47)]'><a href='#events'>Events</a></li>
                    <li className='rounded-xl  font-semibold px-3 py-1  hover:text-[rgb(71,255,47)]'><a href='#projects'>Projects</a></li>
                    <li className='rounded-xl  font-semibold px-3 py-1  hover:text-[rgb(71,255,47)]'><a href='#contact'>Contact</a></li>

                </ul>
            </div>
        </div>
        </div>
    )
}

export default NavBar
