import React from 'react'
import { useRef } from 'react';
import instaLogo from '../assets/insta.svg';
import linkedInLogo from '../assets/linkedIn.svg';

const TeamCard = (card) => {
    const showRef = useRef();
    const photoRef = useRef(0);

    const show = () => {
        showRef.current.style.opacity = 1;
        photoRef.current.style.opacity = 0.8;
    }
    const hide = () => {
        showRef.current.style.opacity = 0;
        photoRef.current.style.opacity = 1;        
    }

    return (
        <div className='pt-10'>
            <div className="mx-auto mb-10 lg:mx-0 w-[250px] h-[350px] md:w-[280px] md:h-[400px] rounded-3xl overflow-hidden flex flex-col justify-center items-center border border-transparent hover:border-[rgb(71,255,47)] hover:scale-[110%] hover:translate-x-2 transition-transform duration-300 ease-in-out shadow-lg">
                <div className='flex relative justify-center items-center'
                    onMouseEnter={show} onMouseLeave={hide} 
                >
                    <div ref={photoRef} className='bg-opacity-95'>
                        <img src={card.source} alt="team evolve" className='rounded-3xl w-[250px] h-[350px] md:w-[280px] md:h-[400px] relative object-cover'></img>
                    </div>

                    <div ref={showRef} className='z-10 absolute bottom-4 mx-auto opacity-0 bg-black bg-opacity-60 px-3 py-2 rounded-3xl border border-black transition-all duration-700 w-[90%] backdrop-blur-sm'>
                        <div className='flex flex-col justify-center items-center text-center'>
                        <div className='font-semibold text-center text-2xl text-white'>
                            {card.name}
                        </div>
                        <div className='my-1 font-semibold text-center text-xl'>
                            {card.post}
                        </div>
                        <div className='my-1 font-semibold text-center text-2xl flex gap-5'>
                            <img src={instaLogo} className='invert cursor-pointer w-6 h-6'></img>
                            <img src={linkedInLogo} className='invert cursor-pointer w-6 h-6'></img>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeamCard;
