// src/pages/Home.jsx
import { LOCATIONS } from "../data/locations";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Explore Office Spaces Across Bangalore
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {LOCATIONS.map((loc) => (
          <Link
            key={loc.slug}
            to={`/locations/${loc.slug}`}
            className="block group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-1 bg-white"
          >
            <div
              className="h-48 bg-cover bg-center"
              style={{
                backgroundImage: `url(${loc.hero})`,
              }}
            ></div>
            <div className="p-4">
              <h2 className="text-xl font-semibold group-hover:text-blue-600">
                {loc.name}
              </h2>
              <p className="text-gray-600 text-sm mt-2 line-clamp-3">
                {loc.about.slice(0, 110)}...
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
