import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="font-bold text-xl">
            Shawn's Pressure Washing
          </Link>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="hover:bg-blue-700 px-3 py-2 rounded-md">Home</Link>
              <Link to="/about" className="hover:bg-blue-700 px-3 py-2 rounded-md">About</Link>
              <Link to="/services" className="hover:bg-blue-700 px-3 py-2 rounded-md">Services</Link>
              <Link to="/gallery" className="hover:bg-blue-700 px-3 py-2 rounded-md">Gallery</Link>
              <Link to="/contact" className="hover:bg-blue-700 px-3 py-2 rounded-md">Contact</Link>
              <Link to="/booking" className="bg-white text-blue-600 px-4 py-2 rounded-md font-medium hover:bg-gray-100">
                Book Now
              </Link>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-blue-700"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block hover:bg-blue-700 px-3 py-2 rounded-md">Home</Link>
            <Link to="/about" className="block hover:bg-blue-700 px-3 py-2 rounded-md">About</Link>
            <Link to="/services" className="block hover:bg-blue-700 px-3 py-2 rounded-md">Services</Link>
            <Link to="/gallery" className="block hover:bg-blue-700 px-3 py-2 rounded-md">Gallery</Link>
            <Link to="/contact" className="block hover:bg-blue-700 px-3 py-2 rounded-md">Contact</Link>
            <Link to="/booking" className="block bg-white text-blue-600 px-4 py-2 rounded-md font-medium hover:bg-gray-100">
              Book Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
