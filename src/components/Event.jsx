import React from 'react'
import EventCard from './EventCard'
import EventFile from '../assets/eventFile.json';
const events = [{
    "title" : "WORLD EV DAY",
    "image" : "/EventsGallery/evDay.jpeg",
    "content": "Evolve organized a vibrant EV Day celebration, featuring an engaging quiz competition that tested participants' knowledge about electric vehicles. The event saw active participation, and winners were awarded exciting prizes. It was a great way to raise awareness and foster enthusiasm about the future of sustainable transportation."
},
{
    "title" : "WORLD EV DAY",
    "image" : "/EventsGallery/evDay.jpeg",
    "content": "Evolve organized a vibrant EV Day celebration, featuring an engaging quiz competition that tested participants' knowledge about electric vehicles. The event saw active participation, and winners were awarded exciting prizes. It was a great way to raise awareness and foster enthusiasm about the future of sustainable transportation."
},
{
    "title" : "WORLD EV DAY",
    "image" : "/EventsGallery/evDay.jpeg",
    "content": "Evolve organized a vibrant EV Day celebration, featuring an engaging quiz competition that tested participants' knowledge about electric vehicles. The event saw active participation, and winners were awarded exciting prizes. It was a great way to raise awareness and foster enthusiasm about the future of sustainable transportation."
},
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
