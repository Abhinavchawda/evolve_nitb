import React, { useState } from "react";
import instaLogo from '../assets/insta.svg';
import linkedInLogo from '../assets/linkedIn.svg';
import locationLogo from '../assets/location.svg';
import emailLogo from '../assets/email.svg';
import Devs from "./devs";

function Footer() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    
    <div className="overflow-y-auto ">
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
                <li>
                <div className="font-sans mx-1">Akshat Agarwal : +91 79763 55568</div>
                </li>
                <li>
                <div className="font-sans mx-1">Abhinav Chawda : +91 95165 10552</div>
                </li>
                <li>
                  <div className="font-sans mx-1">Anant Srivastava : +91 8542 810385</div>
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
                  <button
                    className="bg-blue-700 text-white my-4 py-2 px-4 rounded-xl hover:bg-blue-800"
                    onClick={openModal}
                  >
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
        <div className="my-8 md:m-8">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Our Location</h3>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              className="rounded-xl shadow-md"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14667.237560620848!2d77.39815179939457!3d23.213616114641827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c42e43fe40941%3A0x10377d4af64ac6e9!2sMaulana%20Azad%20National%20Institute%20of%20Technology%2C%20Bhopal%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1734012130088!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
        <div className="my-4 text-center">
          <div className="flex justify-center gap-2 my-2">
            <a href="https://www.instagram.com/evolve_nitb/" className="text-blue-500">
              <i>
                <img src={instaLogo} className='invert cursor-pointer w-6 h-6'></img>
              </i>
            </a>
            <a href="https://in.linkedin.com/company/evolve-nit-bhopal" className="text-pink-500">
              <i>
                <img src={linkedInLogo} className='invert cursor-pointer w-6 h-6'></img>
              </i>
            </a>
          </div>
          © 2024 Evolve. All rights reserved.
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
          <div className="h-screen w-[90vw] overflow-auto">
            <Devs />
          </div>
          <button
            className="absolute top-5 right-20 text-white hover:text-gray-800 text-7xl"
            onClick={closeModal}
          >
            &times;
          </button>
        </div>
      )}
    </div>
  );
}

export default Footer;
