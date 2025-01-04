import React from 'react'
import { motion } from 'framer-motion'

function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-8">About Us</h1>
        
        <div className="prose lg:prose-xl">
          <p className="text-lg mb-6">
            Shawn's Pressure Washing & Auto Detailing is a locally owned, mobile cleaning and detailing service based in Charleston, SC. We specialize in transforming vehicles, boats, homes, and businesses with professional cleaning and detailing solutions.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Why Choose Us?</h2>
          <ul className="space-y-4">
            <li className="flex items-center gap-2">
              <span className="text-blue-600">✓</span>
              Mobile Convenience – We come to you!
            </li>
            <li className="flex items-center gap-2">
              <span className="text-blue-600">✓</span>
              Affordable, competitive pricing
            </li>
            <li className="flex items-center gap-2">
              <span className="text-blue-600">✓</span>
              Flexible scheduling and recurring service plans
            </li>
            <li className="flex items-center gap-2">
              <span className="text-blue-600">✓</span>
              Comprehensive packages to suit every need and budget
            </li>
            <li className="flex items-center gap-2">
              <span className="text-blue-600">✓</span>
              Proven results—serving Charleston and surrounding areas
            </li>
          </ul>
        </div>
      </motion.div>
    </div>
  )
}

export default About
