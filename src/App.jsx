import React from 'react'
import Hero from './components/Hero'
import Gallery from './components/Gallery'
import WhatsAppButton from './components/WhatsAppButton'


export default function App(){
return (
<div className="min-h-screen w-full relative">
<Hero />


<main className="max-w-6xl mx-auto px-6 md:px-8 py-12">
<section className="mb-16">
<h2 className="text-2xl md:text-3xl font-semibold mb-4">About UrbanTech Offices</h2>
<p className="text-slate-600 leading-relaxed">
UrbanTech Offices specializes in premium commercial office spaces across <strong>Bangalore</strong> — flexible leases, plug-and-play setups, and strategic locations. We connect you directly on WhatsApp for quick property tours and availability.
</p>
</section>


<section className="mb-16">
<h2 className="text-2xl md:text-3xl font-semibold mb-6">Featured Office Spaces</h2>
<Gallery />
</section>


<section className="mb-16 text-center py-12 rounded-lg bg-white shadow-md">
<h3 className="text-xl md:text-2xl font-bold mb-4">Contact UrbanTech Offices</h3>
<p className="mb-2 text-slate-600">📞 Phone: <a href="tel:+917892758647" className="text-emerald-600 font-medium hover:underline">+91 78927 58647</a></p>
<p className="mb-6 text-slate-600">✉️ Email: <a href="mailto:urbantechoffices@urbantechoffices.com" className="text-emerald-600 font-medium hover:underline">urbantechoffices@urbantechoffices.com</a></p>


<a href="https://wa.me/917892758647" target="_blank" rel="noreferrer" className="inline-block px-6 py-3 bg-emerald-500 text-white rounded-full font-medium shadow hover:bg-emerald-600 transition">Chat on WhatsApp</a>
</section>
</main>


<footer className="w-full py-6 bg-white border-t mt-12">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-2">
<div>
<strong>UrbanTech Offices</strong>
<div className="text-sm text-slate-500">Bangalore • Commercial Office Spaces</div>
</div>
<div className="text-sm text-slate-500 flex flex-col md:flex-row md:gap-4 text-center md:text-right">
<a href="tel:+917892758647" className="hover:underline">+91 78927 58647</a>
<a href="mailto:urbantechoffices@urbantechoffices.com" className="hover:underline">urbantechoffices@urbantechoffices.com</a>
<span>© {new Date().getFullYear()} UrbanTech Offices</span>
</div>
</div>
</footer>


{/* Floating WhatsApp Button */}
<WhatsAppButton />
</div>
)
}