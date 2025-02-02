import React from 'react'
import EventCard from './EventCard'
import EventFile from '../assets/eventFile.json';
const events = [{
    "title" : "WORLD EV DAY",
    "image" : "/EventsGallery/evDay.jpeg",
    "content": "Evolve organized an event to celebrate EV Day, which included a quiz competition, and awarded prizes to the winners."
},{
   "title" : "EV Day",
    "image" : "/EventsGallery/evDay.jpeg",
    "content": "Evolve organized an event to celebrate EV Day, which included a quiz competition, and awarded prizes to the winners."
},{
    "title" : "EV Day",
    "image" : "/EventsGallery/evDay.jpeg",
    "content": "Evolve organized an event to celebrate EV Day, which included a quiz competition, and awarded prizes to the winners."
}
]

const Event = () => {
    return (
        <div class="flex min-h-screen  items-center justify-center bg-black">
  <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 w-[90%]">
    {
        events.map((item)=>{
            console.log(item.title);

            return <EventCard title={item.title} image={item.image} content={item.content}/>
        })
    }
    
  </div>
  </div>

    )
}

export default Event
