import React from 'react'
import { motion } from 'framer-motion'

const IMAGES = [
  {
    title: 'Ready-to-Use Office — Koramangala',
    src: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1600&auto=format&fit=crop'
  },
  {
    title: 'Open-plan Space — Indiranagar',
    src: 'https://images.unsplash.com/photo-1557800636-894a64c1696f?q=80&w=1600&auto=format&fit=crop'
  },
  {
    title: 'Modern Workspace — Whitefield',
    src: 'https://images.unsplash.com/photo-1553729784-e91953dec042?q=80&w=1600&auto=format&fit=crop'
  }
]

export default function Gallery(){
  return (
    <div id="featured" className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {IMAGES.map((img, i) => (
        <motion.figure key={i} className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition" whileHover={{ y: -6 }}>
          <img src={img.src} alt={img.title} className="w-full h-56 md:h-44 lg:h-56 img-cover" />
          <figcaption className="p-4">
            <div className="font-semibold">{img.title}</div>
            <div className="text-sm text-slate-500">Prime Bangalore location • Contact to view</div>
          </figcaption>
        </motion.figure>
      ))}
    </div>
  )
}