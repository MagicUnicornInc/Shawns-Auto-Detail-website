import React from 'react'
import { motion } from 'framer-motion'

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-12 text-center">Contact Us</h1>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
            <div className="space-y-4">
              <p>
                <strong>Phone:</strong><br />
                <a href="tel:8433038677" className="text-blue-600">(843) 303-8677</a>
              </p>
              <p>
                <strong>Email:</strong><br />
                <a href="mailto:shawnrichard1205@gmail.com" className="text-blue-600">
                  shawnrichard1205@gmail.com
                </a>
              </p>
              <p>
                <strong>Service Area:</strong><br />
                Charleston, SC and surrounding areas
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block mb-1">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded"
                  required
                />
              </div>
              <div>
                <label className="block mb-1">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded"
                  required
                />
              </div>
              <div>
                <label className="block mb-1">Message</label>
                <textarea
                  className="w-full px-4 py-2 border rounded h-32"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Contact
