import React from 'react'
import Header from './Header'
import photos from '../assets/galleryFile.json'

const Gallery = () => {
    let index = 0;
    return (
        <div>
            <div className='achievements min-h-[100vh] text-white overflow-hidden'>
                <Header title="Gallery"></Header>

                {/* <div className='border border-2px rounded-lg border-green-500 m-2'> */}

                <div 
                data-aos="fade-up"
                className='mx-5 my-16 flex flex-wrap justify-center items-center gap-10'>

                    {
                        photos.map((i)=>(
                            <img key={index++} src={i.image} className="mb-0 lg:mx-0 md:h-[300px] md:w-[350px]  overflow-hidden flex justify-center items-center hover:scale-[105%] transition-transform duration-300 ease-in-out rounded-xl"></img>
                        ))
                    }

                </div>
                {/* </div> */}
            </div>
        </div>
    )
}

export default Gallery
