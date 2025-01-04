import React, { useState } from 'react'
import { motion } from 'framer-motion'

function Booking() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    service: '',
    package: '',
    date: '',
    time: '',
    name: '',
    email: '',
    phone: '',
    address: '',
    notes: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle booking submission
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-12 text-center">Book an Appointment</h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-lg shadow-lg p-6"
      >
        <div className="mb-8">
          <div className="flex justify-between items-center">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  step >= i ? 'bg-blue-600 text-white' : 'bg-gray-200'
                }`}
              >
                {i}
              </div>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {step === 1 && (
            <div className="space-y-4">
              <div>
                <label className="block mb-1">Service Type</label>
                <select
                  className="w-full px-4 py-2 border rounded"
                  value={formData.service}
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                  required
                >
                  <option value="">Select a service</option>
                  <option value="auto">Auto Detailing</option>
                  <option value="pressure">Pressure Washing</option>
                  <option value="boat">Boat Detailing</option>
                  <option value="window">Window Cleaning</option>
                </select>
              </div>
              
              <div>
                <label className="block mb-1">Package</label>
                <select
                  className="w-full px-4 py-2 border rounded"
                  value={formData.package}
                  onChange={(e) => setFormData({...formData, package: e.target.value})}
                  required
                >
                  <option value="">Select a package</option>
                  <option value="basic">Basic</option>
                  <option value="deluxe">Deluxe</option>
                  <option value="premium">Premium</option>
                </select>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <div>
                <label className="block mb-1">Preferred Date</label>
                <input
                  type="date"
                  className="w-full px-4 py-2 border rounded"
                  value={formData.date}
                  onChange={(e) => setFormData({...formData, date: e.target.value})}
                  required
                />
              </div>
              
              <div>
                <label className="block mb-1">Preferred Time</label>
                <input
                  type="time"
                  className="w-full px-4 py-2 border rounded"
                  value={formData.time}
                  onChange={(e) => setFormData({...formData, time: e.target.value})}
                  required
                />
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <div>
                <label className="block mb-1">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                />
              </div>
              
              <div>
                <label className="block mb-1">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                />
              </div>
              
              <div>
                <label className="block mb-1">Phone</label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 border rounded"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  required
                />
              </div>
              
              <div>
                <label className="block mb-1">Address</label>
                <textarea
                  className="w-full px-4 py-2 border rounded"
                  value={formData.address}
                  onChange={(e) => setFormData({...formData, address: e.target.value})}
                  required
                ></textarea>
              </div>
              
              <div>
                <label className="block mb-1">Additional Notes</label>
                <textarea
                  className="w-full px-4 py-2 border rounded"
                  value={formData.notes}
                  onChange={(e) => setFormData({...formData, notes: e.target.value})}
                ></textarea>
              </div>
            </div>
          )}

          <div className="flex justify-between">
            {step > 1 && (
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="px-6 py-2 border rounded hover:bg-gray-50"
              >
                Previous
              </button>
            )}
            
            {step < 3 ? (
              <button
                type="button"
                onClick={() => setStep(step + 1)}
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
              >
                Book Now
              </button>
            )}
          </div>
        </form>
      </motion.div>
    </div>
  )
}

export default Booking
