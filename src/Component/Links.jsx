import React from "react"
import { SlArrowRight } from "react-icons/sl"
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";

const LinkCard = ({ title, subtitle }) => (
  <div className="bg-white rounded-lg shadow-md p-4 flex items-center justify-between">
    <div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-500 text-sm">{subtitle}</p>
    </div>
    <SlArrowRight className="text-blue-800" />
  </div>
)
const links = [
  {
    title: "Plan your trip",
    description: "Find a destination and any entry requirements.",
  },
  {
    title: "Visit the Help Center",
    description: "Find info on refunds, bags, seats and more.",
  },
  { title: "Stay connected", description: "Get Wi-Fi for your next flight." },
  {
    title: "Time to start packing",
    description: "Learn more about bringing bags on your trip.",
  },
  {
    title: "What to know before you go",
    description: "The world of travel has changed, find out how.",
  },
  {
    title: "See what's on your flight",
    description: "View your seating, food and entertainment options.",
  },
]
function Links() {
  return (
    <>
    <section className="mb-8">
      <h2 className="text-xl font-bold mb-4">Useful links for you</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {links.map((link, index) => (
          <LinkCard
            key={index}
            {...link}
          />
        ))}
      </div>
          </section>

       <div className="w-full max-w-6xl mx-auto">
      <section className="flex flex-col md:flex-row-reverse bg-black rounded-lg overflow-hidden shadow-md">
        <div className="relative w-full md:w-1/2">
          <img
            src="https://media.united.com/assets/m/730a5b86b08a82b3/original/1265_Starlink_BelowTheFold_500x300-new.jpg "
            alt="Break the Wi-Fi barrier"
            className="w-full h-56 md:h-full object-cover"
          />
        </div>

        <div className="p-6 md:w-1/2 flex flex-col justify-center text-white">
          <h3 className="text-2xl font-bold mb-4">Break the Wi-Fi barrier</h3>
          <p className=" mb-6">
            Join MileagePlus® to access the fastest connectivity in the sky, for free. Now available on select United flights.
          </p>
          <button className="bg-white border  text-blue-800 px-4 py-2 rounded-full w-full md:w-auto self-start">
            Join now
          </button>
        </div>
      </section>

      <div className="mt-4 flex justify-center">
        <div className="flex items-center space-x-4 p-2 mb-4 rounded-full ">
          <button className="bg-white hover:bg-gray-100 text-gray-800 px-3 py-1 rounded-full">
            <FaArrowCircleLeft className="text-blue-800" />

          </button>
          <span className="text-gray-800 font-semibold">1 / 6</span>
          <button className="bg-white hover:bg-gray-100 text-gray-800 px-3 py-1 rounded-full">
            <FaArrowCircleRight className="text-blue-800" />

          </button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Links
