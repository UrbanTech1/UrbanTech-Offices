import React from 'react'
import { motion } from 'framer-motion'

export default function Hero(){
  return (
    <header className="relative">
      <div className="h-[60vh] md:h-[70vh] bg-gradient-to-br from-slate-900 via-indigo-900 to-emerald-600 text-white flex items-center">
        <div className="max-w-6xl mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div initial={{ x: -60, opacity: 0 }} animate={{ x:0, opacity:1 }} transition={{ duration: 0.6 }} className="py-12">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">UrbanTech Offices</h1>
            <p className="mt-4 text-lg md:text-xl text-slate-100">Premium commercial office spaces in <strong>Bangalore</strong> — flexible leases & plug-and-play setups.</p>
            <div className="mt-8 flex items-center gap-4">
              <a href="https://wa.me/917892758647" target="_blank" rel="noreferrer"
className="inline-block px-6 py-3 bg-emerald-400 text-slate-900 rounded-full font-semibold shadow hover:bg-emerald-300 transition">
Chat on WhatsApp
</a>
              <a href="#featured" className="inline-block px-6 py-3 border border-slate-200 rounded-full text-slate-200 hover:bg-white/10 transition">View Spaces</a>
            </div>
          </motion.div>
          <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale:1, opacity:1 }} transition={{ duration: 0.6 }} className="py-12 flex items-center justify-center">
            <div className="w-full rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-white/5">
              <img src="https://images.unsplash.com/photo-1560185127-6c4a0a2e2f62?q=80&w=1600&auto=format&fit=crop" alt="office" className="w-full h-80 object-cover" />
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  )
}