// src/pages/LocationPage.jsx
import React from "react";
import { useParams } from "react-router-dom";
import { LOCATIONS } from "../data/locations";

export default function LocationPage() {
  const { slug } = useParams();
  const location = LOCATIONS.find((loc) => loc.slug === slug);

  // If slug not found in LOCATIONS array
  if (!location) {
    return (
      <div className="text-center py-32 text-gray-600 text-lg">
        Location not found.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm py-8 mb-10">
        <h1 className="text-3xl font-bold text-center text-slate-800">
          {location.name}
        </h1>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 md:px-8 grid md:grid-cols-2 gap-8">
        {/* Left: Consultation Form */}
        <section className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-4 text-slate-800">
            Book a Consultation
          </h2>
          <p className="text-slate-600 mb-6 text-sm">
            Fill out your details and we’ll reach out to you about{" "}
            {location.name}.
          </p>
          <form className="space-y-3">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
            <input
              type="tel"
              placeholder="Mobile Number"
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
            <input
              type="text"
              value={location.name}
              readOnly
              className="w-full border rounded-lg p-3 bg-gray-100 text-gray-700"
            />
            <input
              type="text"
              placeholder="Preferred Time for Call"
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
            <button
              type="submit"
              className="w-full bg-emerald-500 text-white py-3 rounded-lg hover:bg-emerald-600 transition"
            >
              Submit Enquiry
            </button>
          </form>
        </section>

        {/* Right: Image Gallery Placeholder */}
        <section className="bg-white p-6 rounded-xl shadow flex flex-col justify-center items-center">
          <h2 className="text-lg font-medium mb-4 text-slate-800">
            Explore {location.name}
          </h2>
          <div className="w-full h-64 bg-gray-100 rounded-lg flex items-center justify-center text-slate-400">
            Image Gallery Placeholder
          </div>
          <p className="text-sm text-slate-500 mt-3">
            (You can replace this with real photos later)
          </p>
        </section>
      </main>

      {/* About Section */}
      <section className="max-w-6xl mx-auto px-6 md:px-8 py-12 text-center">
        <h2 className="text-2xl font-semibold mb-4 text-slate-800">
          About {location.name}
        </h2>
        <p className="text-slate-600 leading-relaxed max-w-3xl mx-auto">
          {location.about}
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t py-6 text-center text-slate-500 text-sm">
        © {new Date().getFullYear()} UrbanTech Offices — Premium Commercial Spaces in Bangalore
      </footer>
    </div>
  );
}
