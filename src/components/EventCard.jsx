// import React from 'react'

// const EventCard = (card) => {
//     return (
//         <div className="card mx-auto mb-20 lg:mx-0 sm:w-[410px] sm:h-[231px] border border-[rgb(71,255,47)] rounded-3xl hover:border-[3px] overflow-hidden">
//             <img src={card.source} alt="event"></img>
//         </div>
//     )
// }

import React, { useRef } from 'react'

const EventCard = (Event) => {
    const detailsRef = useRef();

    const showDetails = () => {
        detailsRef.current.style.display = "flex";
    }
    const hideDetails = () => {
        detailsRef.current.style.display = "none";
    }
    return (
        <div
            className="card my-16 sm:my-[100px] mx-auto sm:mx-10 w-[80vw] sm:w-[410px] bg-[rgb(3,2,14)] hover:bg-[rgb(0,0,0)] border border-transparent rounded-3xl hover:border-[rgb(71,255,47)] overflow-hidden  text-white shadow-lg transition-transform duration-300 ease-in-out"
            onMouseEnter={showDetails} onMouseLeave={hideDetails}
        >

            <div className="pic"><img src={Event.image} alt="event" className="w-full h-64 object-cover rounded-t-3xl"></img></div>

            <div className="Pname text-center my-5 p-2 text-3xl text-cyan-400">{Event.name}</div>

            <div className="Pdetail text-center m-5 p-5 overflow-auto max-h-[250px] hidden" ref={detailsRef}>
                {Event.content}
            </div>
        </div>
    )
}

export default EventCard

