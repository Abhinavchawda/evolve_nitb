import React from 'react'
import EventCard from './EventCard'
import EventFile from '../assets/eventFile.json';


const Event = () => {
    return (
        <div className="Eventcontent lg:flex my-4 mx-auto">

            {
                EventFile.map((item) => 
                    (
                    <EventCard id={item.id} image={item.image} content={item.content}/>
                ))
            }
            
            {/* <div className="left-part w-5/6 sm:w-3/6 lg:w-2/6 mx-auto">
                <div className="text mx-auto lg:mx-3 my-5 p-5 font-serif rounded">
                    <div className="eventName mb-4 font-semibold text-xl text-cyan-400 text-center">
                        {Event.EventName}
                    </div>
                    <div className="text-gray-300 hover:text-white">
                        {Event.EventContent}
                    </div>
                </div>
            </div>
            <div className="right-part mx-auto overflow-auto lg:flex lg:flex-wrap h-[80vh] lg:w-2/3 my-6 p-4 rounded-3xl border border-transparent hover:border-cyan-100">
                <div className="left-card sm:px-6 mx-auto my-[50px]">
                    <EventCard source="robo2.jpg"/>
                    <EventCard source="robo2.jpg"/>
                    <EventCard source="robo2.jpg"/>
                </div>
                <div className="right-card sm:px-6 mx-auto lg:my-[180px]">
                    <EventCard source="robo2.jpg"/>
                    <EventCard source="robo2.jpg"/>
                    <EventCard source="robo2.jpg"/>
                </div>
            </div> */}
        </div>
    )
}

export default Event
