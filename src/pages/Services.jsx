import React from 'react'
import { motion } from 'framer-motion'

function Services() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-12 text-center">Our Services</h1>

      <div className="grid gap-12">
        <ServiceSection title="Auto Detailing Packages" packages={autoPackages} />
        <ServiceSection title="Paint Correction Packages" packages={paintPackages} />
        <ServiceSection title="Motorcycle Detailing" packages={motorcyclePackages} />
        <ServiceSection title="Boat Detailing" packages={boatPackages} />
        <ServiceSection title="Pressure Washing" packages={pressureWashingPackages} />
        <ServiceSection title="Window Cleaning" packages={windowPackages} />
        
        <div>
          <h2 className="text-2xl font-bold mb-6">Add-Ons & Extras</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {addOns.map((addon, index) => (
              <div key={index} className="flex justify-between p-4 bg-gray-50 rounded">
                <span>{addon.name}</span>
                <span className="font-semibold">{addon.price}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-yellow-50 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Important Notes</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Pet Hair Removal – $25 extra</li>
            <li>Mileage Fees – May apply for locations outside service areas</li>
            <li>Heavy Stains, Oxidation, or Debris – Subject to additional charges based on assessment</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

function ServiceSection({ title, packages }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="service-section"
    >
      <h2 className="text-2xl font-bold mb-6">{title}</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {packages.map((pkg, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">{pkg.name}</h3>
            <p className="text-2xl font-bold text-blue-600 mb-4">{pkg.price}</p>
            <ul className="space-y-2">
              {pkg.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

const autoPackages = [
  {
    name: "Basic Package",
    price: "$75 (Cars) / $150 (SUVs)",
    features: [
      "Vacuum",
      "Wipe down dash",
      "Clean door jams",
      "Exterior wash & wax"
    ]
  },
  {
    name: "Deluxe Package",
    price: "$150 (Cars) / $200 (SUVs)",
    features: [
      "All basic services",
      "Vinyl & leather conditioning",
      "Exterior wash & wax with aqua shield protectant"
    ]
  },
  {
    name: "Premium Package",
    price: "$175 (Cars) / $275 (SUVs)",
    features: [
      "All deluxe services",
      "Deep clean carpets, mats, and seats",
      "Stain removal",
      "Engine/headlight spot cleaning"
    ]
  }
]

const paintPackages = [
  {
    name: "Basic Paint Restoration",
    price: "$350 (Cars) / $450 (SUVs)",
    features: [
      "Clay bar restoration",
      "Paint reconditioning"
    ]
  },
  {
    name: "The Works",
    price: "$400 (Cars) / $450 (SUVs)",
    features: [
      "Basic package",
      "Scratch/swirl removal",
      "Buffing and conditioning"
    ]
  },
  {
    name: "The Works Plus",
    price: "$550 (Cars) / $650 (SUVs)",
    features: [
      "The Works package",
      "Hard water spot removal",
      "Showroom finish"
    ]
  }
]

const motorcyclePackages = [
  {
    name: "Basic",
    price: "$200",
    features: [
      "Basic wash and wax"
    ]
  },
  {
    name: "Premium",
    price: "$350",
    features: [
      "Detail plus chrome polish"
    ]
  }
]

const boatPackages = [
  {
    name: "Basic",
    price: "$20 per foot",
    features: [
      "Basic wash and cleaning"
    ]
  },
  {
    name: "Premium",
    price: "$35 per foot",
    features: [
      "Detail plus compound polish"
    ]
  }
]

const pressureWashingPackages = [
  {
    name: "Residential and Commercial",
    price: "$0.20–$0.30 per sq ft",
    features: [
      "Exterior cleaning for homes",
      "Driveways, patios, and siding"
    ]
  }
]

const windowPackages = [
  {
    name: "Residential and Commercial",
    price: "$6–$15 per pane",
    features: [
      "Interior and exterior window cleaning",
      "Sparkling finish"
    ]
  }
]

const addOns = [
  { name: "Headlight Restoration", price: "$75" },
  { name: "Hand Wash", price: "$75 (Cars) / $100 (SUVs)" },
  { name: "Leather Conditioning", price: "$75 (Cars) / $100 (SUVs)" },
  { name: "Carpet Shampoo", price: "$100 (Cars) / $150 (SUVs)" },
  { name: "Deep Clean Engine Compartment", price: "$75" },
  { name: "Swirl Removal", price: "$350 (Cars) / $450 (SUVs)" }
]

export default Services
