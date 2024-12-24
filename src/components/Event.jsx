import React from 'react'
import EventCard from './EventCard'
import EventFile from '../assets/eventFile.json';
const events = [{
    "title" : "Techno",
    "image" : "/EventsGallery/Techno.png",
    "content": "Technosearch, the annual technical festival of Maulana Azad National Institute of Technology (MANIT) Bhopal, is a vibrant platform igniting young minds with the spark of innovation and technical prowess. Since its inception in 2003, it has established itself as a premier technical extravaganza in Central India, attracting a footfall of over 15,000 participants. Technosearch stands as a testament to the unwavering spirit of innovation at MANIT Bhopal. It continues to inspire and empower young minds, shaping them into future leaders who will contribute significantly to the technological advancements of tomorrow. Technosearch continues to be a sought-after event, attracting not only students from MANIT Bhopal but also from other educational institutions across the country. "
},{
    "title" : "Techno",
    "image" : "https://images.unsplash.com/photo-1494145904049-0dca59b4bbad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
    "content": "Technosearch, the annual technical festival of Maulana Azad National Institute of Technology (MANIT) Bhopal, is a vibrant platform igniting young minds with the spark of innovation and technical prowess. Since its inception in 2003, it has established itself as a premier technical extravaganza in Central India, attracting a footfall of over 15,000 participants. Technosearch stands as a testament to the unwavering spirit of innovation at MANIT Bhopal. It continues to inspire and empower young minds, shaping them into future leaders who will contribute significantly to the technological advancements of tomorrow. Technosearch continues to be a sought-after event, attracting not only students from MANIT Bhopal but also from other educational institutions across the country. "
},{
    "title" : "Techno",
    "image" : "https://images.unsplash.com/photo-1494145904049-0dca59b4bbad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
    "content": "Technosearch, the annual technical festival of Maulana Azad National Institute of Technology (MANIT) Bhopal, is a vibrant platform igniting young minds with the spark of innovation and technical prowess. Since its inception in 2003, it has established itself as a premier technical extravaganza in Central India, attracting a footfall of over 15,000 participants. Technosearch stands as a testament to the unwavering spirit of innovation at MANIT Bhopal. It continues to inspire and empower young minds, shaping them into future leaders who will contribute significantly to the technological advancements of tomorrow. Technosearch continues to be a sought-after event, attracting not only students from MANIT Bhopal but also from other educational institutions across the country. "
}
]

const Event = () => {
    return (
        <div class="flex min-h-screen items-center justify-center bg-black">
  <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
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
