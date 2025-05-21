import React from "react"
import { AiFillTikTok } from "react-icons/ai";
import { AiOutlineGlobal } from "react-icons/ai";
import { IoSearchOutline } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import { GrInstagram } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black text-white py-8 px-4">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row justify-between items-center">
        <div className="md:w-1/4">
          <button className="flex items-center space-x-2 bg-white text-blue-800 px-4 py-2 rounded-full">
           <IoSearchOutline />

            <span>Search</span>
          </button>
        </div>

        <div className="md:w-1/4 text-center">
          <button className="text-white hover:text-indigo-600">
            <AiOutlineGlobal />
English - United States $ | Español
          </button>
        </div>

        <div className="md:w-1/4 hidden md:block">
          <div className="flex space-x-4">
            <a className= "px-2"
              href="https://www.tiktok.com/ @united"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillTikTok />

            </a>
            <a className= "px-2"
              href="https://www.facebook.com/united "
              target="_blank"
              rel="noopener noreferrer"
            >
             <FaFacebook />
            </a>
            <a className= "px-2"
              href="https://www.twitter.com/united "
              target="_blank"
              rel="noopener noreferrer"
            >
             <FaXTwitter />
            </a>
            <a className= "px-2"
              href="https://www.youtube.com/united "
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoYoutube />
            </a>
            <a className= "px-2"
              href="https://www.instagram.com/united "
              target="_blank"
              rel="noopener noreferrer"
            >
             <GrInstagram />
            </a>
            <a className= "px-2"
              href="https://www.linkedin.com/company/united-airlines "
              target="_blank"
              rel="noopener noreferrer"
            >
            <FaLinkedin />

            </a>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <div className="flex flex-wrap text-blue-800 gap-4">
          <div >
            <a className= "px-2" href="/en/us/fly/about-contract-of-carriage.html">
              Contract of carriage
            </a>

            <a className= "px-2" href="/en/us/fly/tarmac-delay-contingency-plan.html">
              Lengthy tarmac delay plan
            </a>

            <a className= "px-2" href="/en/us/fly/legal.html">Legal information</a>

            <a className= "px-2" href="/en/us/fly/customer-commitment.html">
              Our United Customer Commitment
            </a>

            <a className= "px-2" href="/en/us/fly/travel/special-needs.html">Accessible travel</a>

            <a className= "px-2" href="/en/us/fly/privacy-policy.html">Privacy Policy</a>

            <a className= "px-2"
              href="https://privacy-central.securiti.ai/ #/dsr-universal/25b9a872-419a-415b-bf1c-6dacd4e9056c"
              target="_blank"
              rel="noopener noreferrer"
            >
              Do Not Sell or Share My Personal Information
            </a>

            <a className= "px-2"
              href="https://www.united.com/privacy-interest-based-ads "
              target="_self"
            >
              Interest Based Ads
            </a>

            <a className= "px-2"
              href="https://jetstream.united.com/ "
              target="_blank"
              rel="noopener noreferrer"
            >
              United Jetstream
            </a>

            <a className= "px-2"
              href="http://www.unitedcargo.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cargo
            </a>

            <a className= "px-2"
              href="https://webportal.edicomgroup.com/customers/united/pasaje/ "
              target="_blank"
              rel="noopener noreferrer"
            >
              Electronic Invoice
            </a>
          </div>
        </div>
      </div>

     
      <div className="flex justify-end mt-4">
        <img
          src="https://www.united.com/2500e4e62233fbfe8ac6.unitedLogoNew.svg"
          alt="United Airlines Logo"
          className="h-6 mr-2"
        />
        <img
          src="https://www.united.com/dd45368f41b2bc6e1df9.StarAlliance.svg "
          alt="Star Alliance Logo"
          className="h-6"
        />
      </div>

      <div className="mt-8 text-center">
        <button className="bg-white text-gray-800 hover:bg-gray-100 px-4 py-2 rounded-full flex items-center justify-between space-x-2">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
          <span>CoBrowse</span>
        </button>
        <p className="text-sm">
          Copyright © 2025 United Airlines, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
