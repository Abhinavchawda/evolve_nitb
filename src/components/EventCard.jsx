import React from 'react'

const EventCard = (card) => {
    return (
        <div className="card mx-auto mb-20 lg:mx-0 sm:w-[410px] sm:h-[231px] border border-[rgb(71,255,47)] rounded-3xl hover:border-[3px] overflow-hidden">
            <img src={card.source} alt="event"></img>
        </div>
    )
}

export default EventCard
