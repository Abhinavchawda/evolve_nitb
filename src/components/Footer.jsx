import React from "react";
import instaLogo from '../assets/insta.svg';
import linkedInLogo from '../assets/linkedIn.svg';
import locationLogo from '../assets/location.svg';
import emailLogo from '../assets/email.svg';

function Footer() {
  return (
    <>
      <div id="contact" className="bg-black text-white p-6">
        <div className="border border-[rgb(71,255,47)] mb-20">
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold my-2">
            "Innovation is the unrelenting drive to break the status quo and develop a new path where few have dared to go. It is the courage to challenge conventional wisdom, the vision to see beyond the present, and the determination to turn ideas into reality."
          </h3>
        </div>
        <div className="flex flex-col md:flex-row justify-between">
          <div className="w-full md:w-1/2 mb-4 md:mb-0">
            <div className="mb-4">
              <div className="ml-1 my-4 text-3xl text-[rgb(71,255,47)]">Contact Us</div>
              <ul className="space-y-2">
                <li className="flex items-center pt-3">
                  <i className="mr-2" /> Yash Kumar Atlani :
                </li>
                <li>
                  <div className="font-sans mx-1">+91 83493 49409</div>
                </li>
                <li className="flex items-center py-3">
                  <img src={emailLogo} className='invert w-4 h-4 ml-2'></img>
                  <i className="fa-regular fa-envelope mr-2" /> evolvenitb@gmail.com
                </li>
                <li className="flex items-center py-3">
                  <i className="mr-2" />
                  <img src={locationLogo} className='invert w-4 h-4 mr-2'></img>
                  Maulana Azad
                  National Institute of Technology Bhopal, 462003 (M.P.)
                </li>
                <li>
                  <button className="bg-blue-700 text-white my-4 py-2 px-4 rounded-xl hover:bg-blue-800">
                    Meet the developers
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full md:w-1/2 my-3">
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                required
                className="w-full p-2 border border-gray-300 rounded bg-gray-700 text-white"
              />
              <input
                type="email"
                placeholder="Email-Id"
                required
                className="w-full p-2 border border-gray-300 rounded bg-gray-700 text-white"
              />
              <input
                type="phone"
                placeholder="Phone"
                required
                className="w-full p-2 border border-gray-300 rounded bg-gray-700 text-white"
              />
              <textarea
                placeholder="Your Message"
                className="w-full p-2 border border-gray-300 rounded bg-gray-700 text-white"
                required
              />
              <button
                type="submit"
                className="bg-[rgb(71,255,47)] text-black py-2 px-4 rounded-xl hover:bg-green-700"
              >
                Send
              </button>
            </form>
          </div>
        </div>
        <div className="mt-4 text-center">
          <div className="flex justify-center gap-2 my-2">

            <a href="#" className="text-blue-500">
              <i>
                <img src={instaLogo} className='invert cursor-pointer w-6 h-6'></img>
              </i>
            </a>
            <a href="#" className="text-pink-500">
              <i>
                <img src={linkedInLogo} className='invert cursor-pointer w-6 h-6'></img>
              </i>
            </a>
          </div>
          © 2024 Evolve. All rights reserved.
        </div>
      </div>
    </>
  );
}

export default Footer;