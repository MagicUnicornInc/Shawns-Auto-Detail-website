import React from 'react'
import { FaPhone, FaEnvelope, FaFacebook, FaInstagram } from 'react-icons/fa'

function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-4">
              <a href="tel:8433038677" className="flex items-center gap-2">
                <FaPhone /> (843) 303-8677
              </a>
              <a href="mailto:shawnrichard1205@gmail.com" className="flex items-center gap-2">
                <FaEnvelope /> shawnrichard1205@gmail.com
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Service Area</h3>
            <p>Charleston, SC and surrounding areas</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="hover:text-pink-400">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; {new Date().getFullYear()} Shawn's Pressure Washing & Auto Detailing. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
