import React from 'react'
import EventCard from './EventCard'
import EventFile from '../assets/eventFile.json';

const Event = () => {
    return (
        <div class="flex items-center justify-center bg-black">
            <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 w-[90%]">
                {
                    EventFile.map((item) => {
                        console.log(item.title);

                        return <EventCard title={item.title} image={item.image} content={item.content} />
                    })
                }
            </div>
        </div>
    )
}

export default Event;