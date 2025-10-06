// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import WhatsAppButton from "./components/WhatsAppButton";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen w-full relative">
        <Hero />

        <main className="max-w-6xl mx-auto px-6 md:px-8 py-12">
          <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/locations/:slug" element={<LocationPage />} />
</Routes>

        </main>

        {/* Footer */}
        <footer className="w-full py-6 bg-white border-t mt-12">
          <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-2">
            <div>
              <strong>UrbanTech Offices</strong>
              <div className="text-sm text-slate-500">
                Bangalore • Commercial Office Spaces
              </div>
            </div>
            <div className="text-sm text-slate-500 flex flex-col md:flex-row md:gap-4 text-center md:text-right">
              <a
                href="tel:+917892758647"
                className="hover:underline"
              >
                +91 78927 58647
              </a>
              <a
                href="mailto:urbantechoffices@urbantechoffices.com"
                className="hover:underline"
              >
                urbantechoffices@urbantechoffices.com
              </a>
              <span>© {new Date().getFullYear()} UrbanTech Offices</span>
            </div>
          </div>
        </footer>

        {/* Floating WhatsApp Button */}
        <WhatsAppButton />
      </div>
    </Router>
  );
}
