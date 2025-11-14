"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

// ✅ Same car data array
const upcomingCars = [
  {
    id: 1,
    name: "Maruti Swift 2025",
    price: "₹6 Lakh",
    brand: "Maruti Suzuki",
    type: "Hatchback",
    fuel: "Petrol",
    launch: "March 2025",
    mileage: "22 km/l",
    transmission: "Manual / Automatic",
    img: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1200&q=80",
    desc: "The next-gen Maruti Swift 2025 features a bold new exterior, improved engine efficiency, and a premium cabin experience — designed for those who love a mix of performance and practicality."
  },
  {
    id: 2,
    name: "Hyundai Creta 2025",
    price: "₹15 Lakh",
    brand: "Hyundai",
    type: "SUV",
    fuel: "Petrol / Diesel",
    launch: "April 2025",
    mileage: "20 km/l",
    transmission: "Automatic / Manual",
    img: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&w=1200&q=80",
    desc: "The all-new Hyundai Creta 2025 brings refreshed looks, an upgraded infotainment system, and a host of safety features, offering the perfect balance of luxury and versatility."
  },
  {
    id: 3,
    name: "Tata Harrier Facelift 2025",
    price: "₹17 Lakh",
    brand: "Tata Motors",
    type: "SUV",
    fuel: "Diesel",
    launch: "May 2025",
    mileage: "18 km/l",
    transmission: "Automatic / Manual",
    img: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1200&q=80",
    desc: "The Tata Harrier Facelift 2025 comes with sharper design cues, panoramic sunroof, advanced ADAS safety tech, and a powerful diesel engine — built for the modern explorer."
  },
  {
    id: 4,
    name: "Mahindra Thar EV",
    price: "₹18 Lakh",
    brand: "Mahindra",
    type: "Electric SUV",
    fuel: "Electric",
    launch: "July 2025",
    mileage: "450 km/charge",
    transmission: "Automatic",
    img: "https://images.unsplash.com/photo-1623476408627-3e62a10a8bfb?auto=format&fit=crop&w=1200&q=80",
    desc: "Mahindra Thar EV represents the future of adventure mobility — blending off-road power with zero-emission electric performance and futuristic styling."
  },
  {
    id: 5,
    name: "Hyundai Verna 2025",
    price: "₹10 Lakh",
    brand: "Hyundai",
    type: "Sedan",
    fuel: "Petrol / Hybrid",
    launch: "February 2025",
    mileage: "21 km/l",
    transmission: "Manual / CVT",
    img: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80",
    desc: "The Hyundai Verna 2025 is reimagined with sleek aerodynamics, a futuristic digital cockpit, and hybrid efficiency — ideal for those who demand elegance and innovation."
  },
  {
    id: 6,
    name: "Tata Nexon EV 2025",
    price: "₹14 Lakh",
    brand: "Tata Motors",
    type: "Electric SUV",
    fuel: "Electric",
    launch: "June 2025",
    mileage: "500 km/charge",
    transmission: "Automatic",
    img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    desc: "The Tata Nexon EV 2025 offers futuristic design, longer range, and faster charging — India’s most loved electric SUV gets even better for eco-conscious drivers."
  },
  {
    id: 7,
    name: "Mahindra XUV700 Pro",
    price: "₹19 Lakh",
    brand: "Mahindra",
    type: "SUV",
    fuel: "Petrol / Diesel",
    launch: "August 2025",
    mileage: "18 km/l",
    transmission: "Automatic / Manual",
    img: "https://images.unsplash.com/photo-1621135802920-133df287f89c?auto=format&fit=crop&w=1200&q=80",
    desc: "The Mahindra XUV700 Pro redefines luxury with advanced safety features, panoramic display, and next-gen ADAS tech — setting a new benchmark for premium SUVs."
  },
  {
    id: 8,
    name: "Maruti Baleno Turbo 2025",
    price: "₹9 Lakh",
    brand: "Maruti Suzuki",
    type: "Hatchback",
    fuel: "Petrol Turbo",
    launch: "September 2025",
    mileage: "23 km/l",
    transmission: "Manual / Automatic",
    img: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=80",
    desc: "The Maruti Baleno Turbo 2025 gets a punchy turbo-petrol engine, sportier design, and cutting-edge connectivity — built for those who love spirited driving."
  },
  {
    id: 9,
    name: "Hyundai Ioniq 6",
    price: "₹45 Lakh",
    brand: "Hyundai",
    type: "Electric Sedan",
    fuel: "Electric",
    launch: "October 2025",
    mileage: "610 km/charge",
    transmission: "Automatic",
    img: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&w=1200&q=80",
    desc: "Hyundai Ioniq 6 blends performance, aerodynamics, and luxury with its futuristic electric powertrain and ultra-fast charging — redefining the electric sedan experience."
  },
  {
    id: 10,
    name: "Tata Curvv 2025",
    price: "₹12 Lakh",
    brand: "Tata Motors",
    type: "Crossover SUV",
    fuel: "Petrol / Electric",
    launch: "November 2025",
    mileage: "22 km/l or 450 km/charge",
    transmission: "Automatic",
    img: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1200&q=80",
    desc: "Tata Curvv 2025 brings a futuristic coupe-SUV design, available in both ICE and EV versions — a bold statement for modern urban driving."
  }
];

export default function CarDetailsPage() {
  const { id } = useParams();
  const [showForm, setShowForm] = useState(false);

  const car = upcomingCars.find((c) => c.id === Number(id));

  if (!car) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600 text-lg font-semibold">
        Car details not found 😢
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-100 pb-16">
      {/* HERO IMAGE */}
      <div className="relative w-full h-[60vh] overflow-hidden">
        <motion.img
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
          src={car.img}
          alt={car.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white text-4xl md:text-6xl font-bold text-center drop-shadow-lg"
          >
            {car.name}
          </motion.h1>
        </div>
      </div>

      {/* DETAILS SECTION */}
      <section className="container mx-auto px-5 md:px-10 mt-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-3xl shadow-xl p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
              About the Car
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              {car.desc}
            </p>
            <div className="grid grid-cols-2 gap-4 text-gray-800 text-base md:text-lg">
              <div>
                <p className="font-semibold text-gray-600">Brand</p>
                <p>{car.brand}</p>
              </div>
              <div>
                <p className="font-semibold text-gray-600">Type</p>
                <p>{car.type}</p>
              </div>
              <div>
                <p className="font-semibold text-gray-600">Fuel Type</p>
                <p>{car.fuel}</p>
              </div>
              <div>
                <p className="font-semibold text-gray-600">Launch Date</p>
                <p>{car.launch}</p>
              </div>
              <div>
                <p className="font-semibold text-gray-600">Mileage</p>
                <p>{car.mileage}</p>
              </div>
              <div>
                <p className="font-semibold text-gray-600">Transmission</p>
                <p>{car.transmission}</p>
              </div>
              <div className="col-span-2 mt-4">
                <p className="font-semibold text-gray-600">Expected Price</p>
                <p className="text-blue-700 font-bold text-2xl">{car.price}</p>
              </div>
            </div>

            {/* Booking Button */}
            <div className="mt-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowForm(!showForm)}
                className="bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-800 transition w-full sm:w-auto"
              >
                {showForm ? "Close Booking Form" : "Book Now"}
              </motion.button>
            </div>
          </div>

          {/* RIGHT IMAGE SIDE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
            className="rounded-2xl overflow-hidden shadow-lg"
          >
            <img
              src={car.img}
              alt={car.name}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>

        {/* ✅ Booking Form (Appears After Click) */}
        {showForm && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="mt-10 bg-white rounded-3xl shadow-lg p-8 md:p-10 max-w-3xl mx-auto"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Book Your {car.name}
            </h3>
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Full Name"
                className="border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
              <input
                type="email"
                placeholder="Email Address"
                className="border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
              <input
                type="text"
                placeholder="City"
                className="border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
              <textarea
                placeholder="Any specific requirements..."
                className="border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none col-span-1 sm:col-span-2"
                rows={3}
              ></textarea>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="col-span-1 sm:col-span-2 bg-blue-700 text-white py-3 rounded-xl font-semibold hover:bg-blue-800 transition"
              >
                Submit Booking
              </motion.button>
            </form>
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-3xl p-8 md:p-12 text-center shadow-lg"
        >
          <h3 className="text-3xl font-bold mb-4">
            Want to stay updated for the launch?
          </h3>
          <p className="mb-6 text-lg text-blue-100">
            Subscribe for exclusive updates and be the first to know when it
            arrives!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/Upcomingcars"
              className="bg-white text-blue-700 px-6 py-3 rounded-xl font-semibold hover:bg-blue-100 transition"
            >
              Back to Cars
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
