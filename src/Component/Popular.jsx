import React from 'react'
import { CiSearch } from "react-icons/ci";
import { IoWifi } from "react-icons/io5";
import { IoAirplaneSharp } from "react-icons/io5";
import { MdOutlineChair } from "react-icons/md";
import { IoPaw } from "react-icons/io5";
import { BsBookmarkFill } from "react-icons/bs";
import { GiGymBag } from "react-icons/gi";
import { AiFillDollarCircle } from "react-icons/ai";
import { MdHeadsetMic } from "react-icons/md";

function Popular() {
  
   const topics = [
    { icon: 'wifi', label: 'Wi-Fi' },
    { icon: 'plane', label: 'Change flight' },
    { icon: 'chair', label: 'United Club' },
    { icon: 'paw', label: 'Traveling with pets' },
    { icon: 'mileageplus', label: 'MileagePlus' },
    { icon: 'bag', label: 'Baggage' },
    { icon: 'dollar', label: 'Refund' },
    { icon: 'headset', label: 'Help Center' },
  ];

  return (
    <div className="bg-gray-900 text-white py-8 px-4">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row justify-between items-center">
       
        <h2 className="text-2xl font-bold mb-6 md:mb-0">Popular topics</h2>

        <div className="w-full md:w-1/2">
          <div className="relative">
            <input
              type="text"
              placeholder="Search united"
              className="w-full p-4 pl-10 pr-16 rounded-lg bg-white text-black focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                           defaultValue="search"

   />
            <button className="absolute top-1/2 right-4 transform -translate-y-1/2 00 rounded-full p-2">
              <CiSearch className='text-blue-800 border-b-blue-8' />
            </button>
          </div>
        </div>
      </div>

      
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {topics.map((topic, index) => (
        
        <a
            key={index}
            href="#"
            className="flex items-center space-x-2 text-sm  transition-colors"
          >
            
            <span className="text-whiye">
                {topic.icon === 'wifi' && (
                  <IoWifi />

                )}
                {topic.icon === 'plane' && (
                 <IoAirplaneSharp />

                )}
                {topic.icon === 'chair' && (
                  <MdOutlineChair />
                )}
                {topic.icon === 'paw' && (
                  <IoPaw />
                )}
                {topic.icon === 'mileageplus' && (
                  <BsBookmarkFill />

                )}
                {topic.icon === 'bag' && (
                  <GiGymBag />
                )}
                {topic.icon === 'dollar' && (
                  <AiFillDollarCircle />

                )}
                {topic.icon === 'headset' && (
                 <MdHeadsetMic />

                )}
              
            </span>

            {/* Label */}
            <span>{topic.label}</span>
          </a>
        ))}
      </div>
    </div>
  )
}

export default Popular