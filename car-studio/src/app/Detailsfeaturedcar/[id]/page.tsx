"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";

const featuredCars = [
  {
    id: 1,
    name: "Tata Curvv EV",
    price: "₹20.5 Lakh (Expected)",
    img: "/img/Home5.jpg",
    desc: "Futuristic electric SUV with panoramic sunroof and dual displays.",
    features: [
      "Electric motor with 300 km range",
      "Panoramic sunroof",
      "Dual large infotainment displays",
      "Advanced safety tech",
      "Premium leather interiors",
    ],
  },
  {
    id: 2,
    name: "Hyundai Creta 2025",
    price: "₹15.4 Lakh",
    img: "/img/Home6.jpg",
    desc: "Bold design, turbo petrol engine, and ventilated seats.",
    features: [
      "1.5L turbo petrol engine",
      "Ventilated front seats",
      "7-inch touchscreen multimedia",
      "Wireless charging",
      "LED headlamps",
    ],
  },
  {
    id: 3,
    name: "Mahindra XUV.e8",
    price: "₹28.2 Lakh",
    img: "/img/Home7.jpg",
    desc: "Luxury electric SUV with 500+ km range and AWD.",
    features: [
      "500+ km electric range",
      "All-wheel drive",
      "Fast charging compatible",
      "Luxury leather interiors",
      "Advanced driver assistance",
    ],
  },
];

export default function FeaturedCarDetailsPage() {
  const params = useParams();
  const id = Array.isArray(params?.id) ? params.id[0] : params?.id;
  const car = featuredCars.find((c) => c.id === Number(id));

  if (!car) {
    return (
      <main className="flex items-center justify-center min-h-screen text-gray-600 text-lg">
        Featured car not found.
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-8 lg:px-16 mt-10">
      <motion.div
        className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.img
          src={car.img}
          alt={car.name}
          className="w-full h-80 object-cover"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        />

        <div className="p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">{car.name}</h1>
          <p className="text-blue-600 text-2xl font-semibold mb-6">{car.price}</p>
          <p className="text-gray-700 mb-8">{car.desc}</p>

          <h2 className="text-2xl font-semibold mb-5">Key Features</h2>
          <ul className="list-disc list-inside space-y-3 mb-8 text-gray-700">
            {car.features.map((feat, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.15 }}
              >
                {feat}
              </motion.li>
            ))}
          </ul>

          <Link
            href="/Home"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg px-8 py-3 transition-colors"
          >
            ← Back to Featured Cars
          </Link>
        </div>
      </motion.div>
    </main>
  );
}
