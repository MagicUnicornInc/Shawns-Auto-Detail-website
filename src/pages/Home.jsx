import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

function Home() {
  return (
    <div>
      <section className="relative h-[600px] flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-400">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            We Make It Shine
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl mb-8"
          >
            From Driveways to Dashboards!
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Link 
              to="/booking" 
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition duration-300"
            >
              Book Now
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-6"
              >
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link 
                  to="/services" 
                  className="text-blue-600 font-medium hover:text-blue-700"
                >
                  Learn More →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

const services = [
  {
    title: "Auto Detailing",
    description: "Professional car detailing services that make your vehicle look showroom-ready."
  },
  {
    title: "Pressure Washing",
    description: "Transform your property's appearance with our expert pressure washing services."
  },
  {
    title: "Boat Detailing",
    description: "Keep your boat looking pristine with our specialized detailing services."
  }
]

export default Home
