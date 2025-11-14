"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";

const carInventory = [
  {
    id: 1,
    name: "Maruti Suzuki Fronx Turbo",
    brand: "Maruti Suzuki",
    category: "Crossover",
    fuel: "Petrol",
    price: 1050000,
    img: "/img/Home1.jpg",
    description:
      "Experience a sporty, city-ready crossover with turbo performance and smart design built for Indian roads.",
    features: [
      "Turbocharged engine",
      "SmartPlay infotainment",
      "Dual airbags",
      "LED headlamps",
      "Premium interiors",
    ],
  },
  {
    id: 2,
    name: "Hyundai Alcazar 2025",
    brand: "Hyundai",
    category: "SUV",
    fuel: "Diesel",
    price: 1950000,
    img: "/img/Home2.jpg",
    description:
      "Spacious and powerful SUV for families that crave adventure, equipped with next-gen features.",
    features: [
      "Panoramic sunroof",
      "Advanced driver assistance",
      "Wireless charging",
      "Ventilated seats",
      "7-seat configuration",
    ],
  },
  {
    id: 3,
    name: "Mahindra Thar EV",
    brand: "Mahindra",
    category: "Electric SUV",
    fuel: "Electric",
    price: 2200000,
    img: "/img/Home3.jpg",
    description:
      "India's iconic off-road SUV, now with zero emissions and electric power for the future.",
    features: [
      "Electric all-wheel-drive",
      "Fast charging",
      "Water resistant interior",
      "Removable roof",
      "Connected vehicle tech",
    ],
  },
  {
    id: 4,
    name: "Tata Harrier Facelift 2025",
    brand: "Tata",
    category: "SUV",
    fuel: "Diesel",
    price: 2100000,
    img: "/img/Home4.jpg",
    description:
      "Bold design, improved performance, and Tata's reliable diesel engine—perfect for Indian highways.",
    features: [
      "Advanced diesel engine",
      "360-degree camera",
      "Premium JBL audio",
      "Larger touchscreen",
      "Upgraded safety tech",
    ],
  },
];

export default function CarDetailsPage() {
  const params = useParams();
  const id = Array.isArray(params?.id) ? params.id[0] : params?.id;
  const car = carInventory.find((c) => c.id === Number(id));

  if (!car) {
    return (
      <main className="flex items-center justify-center min-h-screen text-gray-600 text-lg ">
        Car not found.
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-8 lg:px-16 mt-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100"
      >
        <motion.img
          src={car.img}
          alt={car.name}
          className="w-full h-80 object-cover"
          initial={{ scale: 0.98, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        />

        <div className="p-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
            {car.name}
          </h1>

          <div className="flex flex-wrap gap-6 mb-4 text-lg">
            <span className="font-semibold text-blue-600">
              ₹{(car.price / 100000).toFixed(2)} Lakh
            </span>
            <span className="text-gray-600">
              <strong>Brand:</strong> {car.brand}
            </span>
            <span className="text-gray-600">
              <strong>Fuel:</strong> {car.fuel}
            </span>
            <span className="text-gray-600">
              <strong>Type:</strong> {car.category}
            </span>
          </div>

          <p className="text-gray-600 mb-8">{car.description}</p>

          <h2 className="text-xl font-bold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2 mb-8">
            {car.features.map((feature, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.15 }}
                className="text-gray-700"
              >
                {feature}
              </motion.li>
            ))}
          </ul>

          <Link
            href="/Home"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors"
          >
            ← Back to Inventory
          </Link>
        </div>
      </motion.div>
    </main>
  );
}
