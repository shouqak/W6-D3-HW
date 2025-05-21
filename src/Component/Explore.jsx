import React from 'react'
import { FaCalendarAlt } from "react-icons/fa"
import { RiEqualizerFill } from "react-icons/ri";

function Explore() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 py-6">
        
        <div className="bg-white mb-5 ">
          <h1 className="text-5xl font-semibold mb-4">Explore destinations</h1>
          <p className="text-gray-600 mb-6 max-w-2xl">
            Not sure where to go? Use our interactive map to find flights to great destinations.
          </p>

          
          <form className="w-full">
            <div className="flex flex-col lg:flex-row gap-4 items-stretch">
              <div className="flex flex-col flex-1 min-w-[200px]">
                <label htmlFor="origin" className="block text-lg font-medium text-black mb-1">
                  Flying from
                </label>
                <input
                  type="text"
                  id="origin"
                  placeholder="City or airport"
                  className="w-full px-4 py-3 border border-gray-400 rounded-xl focus:ring-blue-600 focus:border-blue-600 text-lg font-normal"
                  defaultValue="Riyadh RUH"
                />
              </div>


              <div className="flex flex-col flex-1 min-w-[180px]">
                <label htmlFor="searchType" className="block text-lg font-medium text-black mb-1">
                  Search type
                </label>
                <select
                  id="searchType"
                  className="w-full px-4 py-3 border border-gray-400 rounded-xl focus:ring-blue-600 focus:border-blue-600 text-lg font-normal"
                  defaultValue="roundTrip"
                >
                  <option value="roundTrip">Roundtrip</option>
                  <option value="oneWay">One Way</option>
                </select>
              </div>

              <div className="flex flex-col flex-1 min-w-[200px]">
                <label className="block text-lg font-medium text-black mb-1">Dates</label>
                <button
                  type="button"
                  className="w-full flex justify-between items-center px-4 py-3 border border-gray-400 rounded-xl text-lg font-normal focus:ring-blue-600 focus:border-blue-600"
                  aria-label="Flexible dates"
                >
                  <span>Flexible dates</span>
                  <FaCalendarAlt className="text-blue-700 "/>
                </button>
              </div>

              <div className="flex flex-col flex-1 min-w-[160px]">
                <label htmlFor="maxPrice" className="block text-lg font-medium text-black mb-1">
                  Max price
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg text-black font-normal">$</span>
                  <input
                    type="number"
                    id="maxPrice"
                    className="w-full pl-8 pr-12 py-3 border border-gray-400 rounded-xl focus:ring-blue-600 focus:border-blue-600 text-lg font-normal"
                    defaultValue="2000"
                    min="50"
                    max="2000"
                    step="50"
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-700"
                    aria-label="Filters"
                  >
                    <RiEqualizerFill />
                  </button>
                </div>
              </div>

              {/* Search Button */}
              <div className="flex flex-col justify-end">
                <button
                  type="submit"
                  className="w-full lg:w-48 px-6 py-3 bg-blue-700 text-white font-bold rounded-full text-lg hover:bg-blue-800 transition"
                >
                  Search
                </button>
              </div>

              <div className="flex flex-col justify-end">
                <button
                  type="button"
                  className="flex items-center text-blue-700 hover:text-blue-900 text-lg font-medium"
                >
                  <svg className="w-6 h-6 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                  Refine search
                </button>
              </div>
            </div>
          </form>
        </div>

        <div className="bg-gray-200 rounded-lg h-96 mb-8 flex items-center justify-center">
          <div className="text-center">
            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <h3 className="mt-2 text-lg font-medium text-gray-900">Interactive Map</h3>
            <p className="mt-1 text-sm text-gray-500">Use the map to explore flight destinations</p>
          </div>
        </div>

      </main>
    </div>
  );
}

export default Explore