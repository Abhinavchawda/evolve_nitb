import React from 'react'

const Header = ({ title }) => {
    return (
        <div className='flex justify-center items-center'>
            <div className="text-center bg-gradient-to-r object-cover from-[rgb(44,255,47)] to-[rgb(35,248,255)] mt-10 py-10 mx-auto text-5xl font-bold text-wrap inline-block text-transparent bg-clip-text">
                {title}
            </div>
        </div>
    )
}

export default Header