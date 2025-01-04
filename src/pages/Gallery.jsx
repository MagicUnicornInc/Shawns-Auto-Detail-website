import React from 'react'
import { motion } from 'framer-motion'

function Gallery() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-12 text-center">Our Work</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="aspect-square bg-gray-200 rounded-lg overflow-hidden"
          >
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              Image {item}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Gallery
