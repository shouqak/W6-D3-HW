import React from "react"
import { SlArrowDown } from "react-icons/sl"
import { CiShare1 } from "react-icons/ci"
import { FaCalendarAlt } from "react-icons/fa"
import { FaArrowRightArrowLeft } from "react-icons/fa6"
import { CiCreditCard1 } from "react-icons/ci"
import { SlArrowRight } from "react-icons/sl"

function Hero() {
  const mainTabs = [
    { id: "book", label: "Book" },
    { id: "status", label: "Flight status" },
    { id: "checkin", label: "Check-in" },
    { id: "trips", label: "My trips" },
  ]

  const flightTabs = [
    { id: "flight", label: "Flight" },
    { id: "packages", label: "Packages" },
    { id: "hotel", label: "Hotel" },
    { id: "car", label: "Car" },
    { id: "cruise", label: "Cruise", external: true },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-cover bg-center ">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage:
            "url('https://media.united.com/assets/m/1c37a93b1d5c1771/original/040125_FOC_95K_HPCARSUL1_640X690_TY.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-black/20 z-0" />

      <div className="relative w-full max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row items-start justify-center gap-6 w-full">
          <div className="bg-white shadow-lg rounded-2xl w-full max-w-[550px] px-6 pb-5 ">
            <div
              role="tablist"
              className="flex overflow-x-auto  scrollbar-hide pl-9"
              style={{ scrollbarWidth: "none" }}
            >
              {mainTabs.map((tab) => (
                <button
                  key={tab.id}
                  role="tab"
                  className={`flex-shrink-0 px-4 py-3 md:px-6 md:py-4 font-medium text-sm focus:outline-none ${
                    tab.id === "book"
                      ? "text-blue-950"
                      : "bg-blue-950 text-white mx-1 px-auto "
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="pt-6">
              <div className="mb-6 overflow-x-auto scrollbar-hide">
                <div
                  role="tablist"
                  className="flex border-b border-gray-200 w-max min-w-full"
                >
                  {flightTabs.map((tab) =>
                    tab.external ? (
                      <a
                        key={tab.id}
                        href="#"
                        className="flex-shrink-0 flex items-center px-3 py-2 text-sm font-medium text-blue-500 hover:text-blue-500 ml-2"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {tab.label}
                        <CiShare1 className="ml-1 w-4 h-4" />
                      </a>
                    ) : (
                      <button
                        key={tab.id}
                        role="tab"
                        aria-selected={tab.id === "flight"}
                        className={`flex-shrink-0 px-3 py-2 text-sm font-medium focus:outline-none ${
                          tab.id === "flight"
                            ? "text-blue-600 border-b-2 border-blue-600"
                            : "text-gray-600 hover:text-blue-500"
                        }`}
                      >
                        {tab.label}
                      </button>
                    )
                  )}
                </div>
              </div>

              <div className="mb-6">
                <fieldset className="flex flex-wrap gap-3">
                  <legend className="sr-only">Trip type</legend>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="tripType"
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                      defaultChecked
                    />
                    <span className="ml-2 text-gray-700 text-sm md:text-base">
                      Roundtrip
                    </span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="tripType"
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                    />
                    <span className="ml-2 text-gray-700 text-sm md:text-base">
                      One-way
                    </span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <span className="ml-2 text-gray-700 text-sm md:text-base">
                      Book with miles
                    </span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <span className="ml-2 text-gray-700 text-sm md:text-base">
                      Flexible dates
                    </span>
                  </label>
                </fieldset>
              </div>

              <form className="space-y-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <label
                      htmlFor="from"
                      className="block text-base font-medium text-black mb-1"
                    >
                      From
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="from"
                        className="w-full rounded-xl border border-black text-black font-normal bg-white p-3 focus:border-blue-700 focus:ring-blue-700 text-base placeholder:text-gray-500"
                        placeholder="Riyadh RUH"
                        defaultValue="Riyadh RUH"
                      />
                      <button
                        type="button"
                        className="absolute right-2 top-1/2 -translate-y-1/2 text-blue-800 hover:text-blue-700"
                        aria-label="Swap origin and destination"
                      ></button>
                    </div>
                  </div>
                  <div>
                    <FaArrowRightArrowLeft className="hidden lg:inline text-blue-800 lg:mt-10" />
                  </div>
                  <div className="flex-1">
                    <label
                      htmlFor="to"
                      className="block text-base font-medium text-black mb-1"
                    >
                      To
                    </label>
                    <input
                      type="text"
                      id="to"
                      className="w-full rounded-xl border border-black text-black font-normal bg-white p-3 focus:border-blue-700 focus:ring-blue-700 text-base italic placeholder:text-gray-500"
                      placeholder="Destination"
                    />
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <label className="block text-base font-medium text-black mb-1">
                      Dates
                    </label>
                    <div className="relative flex items-center">
                      <input
                        type="text"
                        className="flex-1 rounded-xl border border-black text-black font-normal bg-white p-3 focus:border-blue-700 focus:ring-blue-700 text-base"
                        placeholder="Jul 20"
                        defaultValue="Jul 20"
                        readOnly
                      />
                      <button
                        type="button"
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-800 hover:text-blue-700"
                        aria-label="Open calendar"
                      >
                        <FaCalendarAlt className="w-6 h-6" />
                      </button>
                    </div>
                  </div>
                  <div className="flex-1">
                    <label
                      htmlFor="travelers"
                      className="block text-base font-medium text-black mb-1"
                    >
                      Travelers
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="travelers"
                        className="w-full rounded-xl border border-black text-black font-normal bg-white p-3 focus:border-blue-700 focus:ring-blue-700 text-base"
                        defaultValue="1 Adult"
                        readOnly
                      />
                      <button
                        type="button"
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-800 hover:text-blue-700"
                        aria-label="Select travelers"
                      >
                        {" "}
                      </button>
                    </div>
                  </div>
                </div>

                <div>
                  <select
                    id="cabin"
                    className="  rounded-xl border border-black text-black font-normal bg-white p-3 focus:border-blue-700 focus:ring-blue-700 text-base"
                    defaultValue="Economy"
                  >
                    <option>Economy</option>
                    <option>Premium economy</option>
                    <option>Business or First</option>
                  </select>
                </div>

                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <a
                      href="#"
                      className="text-blue-700 hover:text-blue-900 text-base font-medium flex items-center"
                    >
                      Advanced search
                      <SlArrowRight className="w-5 h-5 ml-1" />
                    </a>
                    <div className="text-xs text-black mt-1">
                      (Certificates, multi-city and upgrades)
                    </div>
                    <div className="mt-2 space-y-1">
                      <a
                        href="#"
                        className="block text-blue-700 underline text-xs hover:text-blue-900"
                      >
                        Changed bag rules and
                      </a>
                      <a
                        href="#"
                        className="block text-blue-700 underline text-xs hover:text-blue-900"
                      >
                        fees for optional services
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-col  gap-3 md:w-auto md:items-end">
                    <button
                      type="submit"
                      className=" md:w-64 bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 rounded-full text-lg transition"
                    >
                      Find flights
                    </button>
                    <button
                      type="button"
                      className=" md:w-64 border-2 border-blue-700 text-blue-700 hover:bg-blue-50 font-bold py-3 rounded-full text-lg flex items-center justify-center gap-2 transition"
                    >
                      <span>
                        <CiCreditCard1 />
                      </span>
                      Find your travel credits
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="w-full lg:w-auto lg:flex-1 max-w-md">
            <div className="bg-black/50 rounded-lg p-4 md:p-6 text-white">
              <p className="text-xs md:text-sm font-semibold uppercase tracking-wider text-blue-300 mb-1 md:mb-2">
                UNITED MILEAGEPLUS CARDS
              </p>
              <h2 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">
                If you ever fly United, you should probably have a United card.
              </h2>
              <a
                href="#"
                className="inline-flex items-center text-blue-200 hover:text-white font-medium text-sm md:text-base mb-3 md:mb-4"
              >
                Learn more <SlArrowRight className="w-4 h-4 ml-1" />
              </a>

              <div className="flex items-center mt-3 md:mt-4 space-x-2">
                <button
                  aria-label="Pause carousel"
                  type="button"
                  className="p-1 text-white/70 hover:text-blue-200 focus:outline-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-4 h-4 md:w-5 md:h-5"
                  >
                    <path d="M5.75 3a.75.75 0 00-.75.75v12.5c0 .414.336.75.75.75h1.5a.75.75 0 00.75-.75V3.75A.75.75 0 007.25 3h-1.5zM12.75 3a.75.75 0 00-.75.75v12.5c0 .414.336.75.75.75h1.5a.75.75 0 00.75-.75V3.75a.75.75 0 00-.75-.75h-1.5z" />
                  </svg>
                </button>

                {[...Array(6)].map((_, i) => (
                  <button
                    key={i}
                    className={`w-2 h-2 rounded-full ${
                      i === 0 ? "bg-white" : "bg-white/40"
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
