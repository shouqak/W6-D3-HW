import React from 'react'
import { SlArrowDown } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import { AiOutlineGlobal } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { IoPersonSharp } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";

function Header() {
   const navItems = [
    { name: 'Book', label: 'Book' },
    { name: 'MyTrips', label: 'My trips' },
    { name: 'TravelInfo', label: 'Travel info' },
    { name: 'MileagePlus', label: 'MileagePlus' },
    { name: 'Deals', label: 'Deals' },
  ];

  return (
        <header className="sticky top-0 z-50 bg-black ">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          
         <a href="/" className="flex items-center">
              <img 
                src="https://www.united.com/2500e4e62233fbfe8ac6.unitedLogoNew.svg" 
                alt="United Airlines" 
                className="h-8 w-auto"
              />
            </a>

          <nav className="hidden md:flex items-start ">
             <div className="">
            
          </div>
            <ul className="flex space-x-6">
              {navItems.map((item) => (
                <li key={item.name} className="relative group">
                  <button
                    className="flex items-center py-2 px-1 text-sm font-medium text-white hover:text-blue-600 transition-colors"
                    aria-expanded="false"
                    aria-controls={`dropdown-${item.name}`}
                  >
                    {item.label}
                 <SlArrowDown/>
                  </button>
                  
                 
                </li>
              ))}
              
              <li>
                <a
                  href="/help"
                  className="flex items-center py-2 px-1 text-sm font-medium text-white hover:text-blue-600 transition-colors"
                >
                  Help
                  <SlArrowRight/>
                </a>
              </li>
            </ul>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center relative group">
              <button className="flex items-center text-sm font-medium text-white hover:bg-blue-300 hover:text-black rounded-3xl p-2">
              <AiOutlineGlobal/>
                English - US $
              </button>
             
            </div>

            <a href="/search" className="p-2 text-white hover:bg-blue-300 hover:text-black rounded-4xl">
              <CiSearch/>
              <span className="sr-only">Search</span>
            </a>

            <a href="/account" className="p-2 text-white  hover:bg-blue-300 hover:text-black rounded-4xl">
              <IoPersonSharp/>
            </a>

            <a href="/cart" className="p-2 text-white  hover:bg-blue-300 hover:text-black rounded-4xl">
              <FaShoppingCart />
            </a>

            <button 
              className="md:hidden p-2 text-white hover:text-blue-600"
              aria-label="Open main menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header