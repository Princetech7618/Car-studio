"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";

const featuredCars = [
  {
    id: 1,
    name: "Tata Curvv EV",
    price: "₹20.5 Lakh (Expected)",
    img: "/img/about.avif",
  },
  {
    id: 2,
    name: "Hyundai Creta 2025",
    price: "₹15.4 Lakh",
    img: "/img/about.avif",
  },
  {
    id: 3,
    name: "Mahindra XUV.e8",
    price: "₹28.2 Lakh",
    img: "/img/about.avif",
  },
];

const carInventory = [
  {
    id: 1,
    name: "Swift GT Turbo",
    brand: "Maruti Suzuki",
    category: "Hatchback",
    fuel: "Petrol",
    price: 850000,
    mileage: "20 km/l",
    topSpeed: "190 km/h",
    transmission: "6-Speed Manual",
    power: "110 bhp",
    torque: "150 Nm",
    safety: "4 Star (Global NCAP)",
    features: [
      "LED Projector Headlamps",
      "SmartPlay Infotainment System",
      "Cruise Control",
      "Dual Airbags & ABS",
      "Sporty Alloy Wheels",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1542362567-b07e54358753?w=1600&q=80",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1600&q=80",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1600&q=80",
    ],
    img: "https://images.unsplash.com/photo-1542362567-b07e54358753?w=1600&q=80",
  },
  {
    id: 2,
    name: "Hyundai Creta SX",
    brand: "Hyundai",
    category: "SUV",
    fuel: "Diesel",
    price: 1520000,
    mileage: "18.5 km/l",
    topSpeed: "195 km/h",
    transmission: "6-Speed Automatic",
    power: "115 bhp",
    torque: "250 Nm",
    safety: "5 Star (Global NCAP)",
    features: [
      "Panoramic Sunroof",
      "Ventilated Seats",
      "BOSE Sound System",
      "Wireless Charging",
      "Hill Assist Control",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=1600&q=80",
      "https://images.unsplash.com/photo-1610465299990-0b7b3a96f94a?w=1600&q=80",
      "https://images.unsplash.com/photo-1589402900371-438db0f3b739?w=1600&q=80",
    ],
    img: "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=1600&q=80",
  },
  {
    id: 3,
    name: "Mahindra Scorpio N",
    brand: "Mahindra",
    category: "SUV",
    fuel: "Diesel",
    price: 1780000,
    mileage: "16 km/l",
    topSpeed: "200 km/h",
    transmission: "6-Speed Manual/Automatic",
    power: "175 bhp",
    torque: "400 Nm",
    safety: "5 Star (Global NCAP)",
    features: [
      "4X4 Drive System",
      "Advanced Infotainment",
      "Terrain Management Modes",
      "360° Camera",
      "Ventilated Leather Seats",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1511914265873-7f7f24be8d87?w=1600&q=80",
      "https://images.unsplash.com/photo-1578849287492-d8b342a2e1ed?w=1600&q=80",
      "https://images.unsplash.com/photo-1602866548093-3a2b8ed9f7e1?w=1600&q=80",
    ],
    img: "https://images.unsplash.com/photo-1511914265873-7f7f24be8d87?w=1600&q=80",
  },
  {
    id: 4,
    name: "Tata Nexon EV",
    brand: "Tata",
    category: "Electric",
    fuel: "Electric",
    price: 1650000,
    mileage: "453 km (ARAI)",
    topSpeed: "150 km/h",
    transmission: "Automatic",
    power: "129 bhp",
    torque: "245 Nm",
    safety: "5 Star (Global NCAP)",
    features: [
      "Fast Charging (0–80% in 56 min)",
      "Touchscreen Infotainment",
      "Regenerative Braking",
      "Connected Car Tech",
      "ABS + EBD + 6 Airbags",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1549924231-f129b911e442?w=1600&q=80",
      "https://images.unsplash.com/photo-1610465299990-0b7b3a96f94a?w=1600&q=80",
      "https://images.unsplash.com/photo-1589402900371-438db0f3b739?w=1600&q=80",
    ],
    img: "https://images.unsplash.com/photo-1549924231-f129b911e442?w=1600&q=80",
  },
];

export default function CarDetailsPage() {
  const { id } = useParams();
  const car = carInventory.find((c) => c.id === Number(id));

  if (!car) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500 text-lg">
        Car not found 🚗
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100 text-gray-900">
      {/* HERO SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden rounded-b-[3rem] shadow-2xl"
      >
        <Image
          src={car.img}
          alt={car.name}
          fill
          className="object-cover scale-105 hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
        <div className="absolute bottom-10 left-8 md:left-20 text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl md:text-6xl font-bold tracking-wide"
          >
            {car.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-2 text-lg md:text-2xl font-medium text-gray-200"
          >
            Starting from ₹{(car.price / 100000).toFixed(2)} Lakh
          </motion.p>
        </div>
      </motion.div>

      {/* MAIN DETAILS */}
      <div className="max-w-6xl mx-auto py-16 px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT INFO */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              Experience the {car.name}
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              The {car.name} by {car.brand} delivers unmatched performance and
              cutting-edge design. With advanced features and superior comfort,
              it redefines what a {car.category.toLowerCase()} can achieve on
              Indian roads.
            </p>

            {/* SPECIFICATIONS */}
            <div className="grid grid-cols-2 gap-4 text-lg mt-6">
              {[
                ["Brand", car.brand],
                ["Fuel Type", car.fuel],
                ["Transmission", car.transmission],
                ["Mileage", car.mileage],
                ["Power", car.power],
                ["Torque", car.torque],
                ["Top Speed", car.topSpeed],
                ["Safety Rating", car.safety],
              ].map(([key, value], idx) => (
                <div
                  key={idx}
                  className="p-4 bg-gray-100 rounded-2xl shadow-sm hover:bg-gray-200 transition"
                >
                  <span className="block font-semibold text-gray-700">
                    {key}:
                  </span>
                  <span>{value}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] w-full rounded-3xl overflow-hidden shadow-xl"
          >
            <Image
              src={car.img}
              alt={car.name}
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
        </div>

        {/* FEATURES */}
        <div className="mt-16">
          <h3 className="text-3xl font-semibold mb-6">Key Highlights</h3>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {car.features.map((feature, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="p-4 bg-white rounded-2xl shadow hover:shadow-lg transition"
              >
                🚗 {feature}
              </motion.li>
            ))}
          </ul>
        </div>

        {/* GALLERY */}
        <div className="mt-16">
          <h3 className="text-3xl font-semibold mb-6">Gallery</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {car.gallery.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: idx * 0.2 }}
                className="relative w-full h-56 rounded-2xl overflow-hidden shadow-md"
              >
                <Image
                  src={img}
                  alt={`${car.name} view ${idx + 1}`}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-700"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* FEATURED SECTION */}
      <section className="bg-white py-16 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <h3 className="text-3xl font-bold mb-10 text-center">
            Featured Upcoming Cars
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCars.map((f) => (
              <motion.div
                key={f.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all bg-gray-50"
              >
                <Image
                  src={f.img}
                  alt={f.name}
                  width={500}
                  height={300}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <h4 className="text-xl font-semibold mb-2">{f.name}</h4>
                  <p className="text-gray-600">{f.price}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
