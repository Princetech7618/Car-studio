
"use client";

import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

// Complete car data with required keys added
const upcomingCars = [
  {
    id: 1,
    name: "Maruti Swift 2025",
    price: "₹6 Lakh",
    priceLakh: 6,
    img: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=800&q=80",
    type: "Hatchback",
    brand: "Maruti",
    fuel: "Petrol",
    transmission: "Manual",
    seats: 5,
    body: "Compact",
  },
  {
    id: 2,
    name: "Hyundai Creta 2025",
    price: "₹15 Lakh",
    priceLakh: 15,
    img: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&w=800&q=80",
    type: "SUV",
    brand: "Hyundai",
    fuel: "Petrol",
    transmission: "Automatic",
    seats: 5,
    body: "Midsize SUV",
  },
  {
    id: 3,
    name: "Tata Harrier Facelift",
    price: "₹17 Lakh",
    priceLakh: 17,
    img: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=800&q=80",
    type: "SUV",
    brand: "Tata",
    fuel: "Diesel",
    transmission: "Automatic",
    seats: 5,
    body: "Midsize SUV",
  },
  {
    id: 4,
    name: "Mahindra Thar EV",
    price: "₹18 Lakh",
    priceLakh: 18,
    img: "https://images.unsplash.com/photo-1621135802920-133df287f89c?auto=format&fit=crop&w=800&q=80",
    type: "SUV",
    brand: "Mahindra",
    fuel: "Electric",
    transmission: "Automatic",
    seats: 4,
    body: "Offroad SUV",
  },
  {
    id: 5,
    name: "Hyundai Verna 2025",
    price: "₹10 Lakh",
    priceLakh: 10,
    img: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80",
    type: "Sedan",
    brand: "Hyundai",
    fuel: "Petrol",
    transmission: "Manual",
    seats: 5,
    body: "Sedan",
  },
  {
    id: 6,
    name: "Tata Nexon EV 2025",
    price: "₹14 Lakh",
    priceLakh: 14,
    img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80",
    type: "SUV",
    brand: "Tata",
    fuel: "Electric",
    transmission: "Automatic",
    seats: 5,
    body: "Compact SUV",
  },
  {
    id: 7,
    name: "Mahindra XUV700 Pro",
    price: "₹19 Lakh",
    priceLakh: 19,
    img: "https://images.unsplash.com/photo-1621135802920-133df287f89c?auto=format&fit=crop&w=800&q=80",
    type: "SUV",
    brand: "Mahindra",
    fuel: "Diesel",
    transmission: "Automatic",
    seats: 7,
    body: "Midsize SUV",
  },
  {
    id: 8,
    name: "Maruti Baleno Turbo",
    price: "₹9 Lakh",
    priceLakh: 9,
    img: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=80",
    type: "Hatchback",
    brand: "Maruti",
    fuel: "Petrol",
    transmission: "Manual",
    seats: 5,
    body: "Compact",
  },
  {
    id: 9,
    name: "Hyundai Ioniq 6",
    price: "₹45 Lakh",
    priceLakh: 45,
    img: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&w=800&q=80",
    type: "Sedan",
    brand: "Hyundai",
    fuel: "Electric",
    transmission: "Automatic",
    seats: 5,
    body: "Luxury Sedan",
  },
  {
    id: 10,
    name: "Tata Curvv",
    price: "₹12 Lakh",
    priceLakh: 12,
    img: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=800&q=80",
    type: "SUV",
    brand: "Tata",
    fuel: "Petrol",
    transmission: "Manual",
    seats: 5,
    body: "SUV Coupe",
  },
];

function getUniqueOptions(list, key) {
  const set = new Set(list.map((item) => item[key]));
  return ["All", ...Array.from(set)];
}

const minValue = 4;
const maxValue = 45;

export default function UpcomingCarsPage() {
  const [filters, setFilters] = useState({
    type: "All",
    brand: "All",
    fuel: "All",
    transmission: "All",
    seats: "All",
    body: "All",
    price: [minValue, maxValue],
    model: ""
  });

  const handleChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const handlePriceChange = (e) => {
    setFilters(prev => ({
      ...prev,
      price: [minValue, Number(e.target.value)]
    }));
  };

  const filteredCars = useMemo(() => {
    return upcomingCars.filter(car => {
      const priceNum = Number(car.priceLakh);
      const inPrice = priceNum >= filters.price[0] && priceNum <= filters.price[1];

      const matches = [
        filters.type === "All" || car.type === filters.type,
        filters.brand === "All" || car.brand === filters.brand,
        filters.fuel === "All" || car.fuel === filters.fuel,
        filters.transmission === "All" || car.transmission === filters.transmission,
        filters.seats === "All" || car.seats === Number(filters.seats),
        filters.body === "All" || car.body === filters.body,
        inPrice,
        filters.model === "" || car.name.toLowerCase().includes(filters.model.toLowerCase())
      ];
      return matches.every(Boolean);
    });
  }, [filters]);

  const types = getUniqueOptions(upcomingCars, "type");
  const brands = getUniqueOptions(upcomingCars, "brand");
  const fuels = getUniqueOptions(upcomingCars, "fuel");
  const transmissions = getUniqueOptions(upcomingCars, "transmission");
  const seats = getUniqueOptions(upcomingCars, "seats");
  const bodies = getUniqueOptions(upcomingCars, "body");
  const priceMax = maxValue;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 pb-16 mt-18">
      {/* Hero Section */}
      <section
        className="relative py-16 md:py-24 text-center text-white overflow-hidden"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1200&h=800&fit=crop")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 container mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Upcoming Cars 🚗
          </motion.h1>
          <p className="text-lg md:text-2xl max-w-2xl mx-auto">
            Discover the most anticipated cars launching soon — stylish, powerful, and built for the future.
          </p>
        </div>
      </section>
      {/* Filter/Search Bar */}
      <div className="w-full sticky top-0 z-30 bg-white shadow px-2 pt-6 pb-3">
        <div className="flex flex-wrap gap-3 md:gap-6 justify-center items-center">
          {/* Type */}
          <div>
            <label className="block text-sm font-semibold mb-1 text-gray-700">Type</label>
            <select
              className="block w-36 md:w-40 rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
              value={filters.type}
              onChange={(e) => handleChange("type", e.target.value)}
            >
              {types.map(opt => <option key={opt}>{opt}</option>)}
            </select>
          </div>
          {/* Brand */}
          <div>
            <label className="block text-sm font-semibold mb-1 text-gray-700">Brand</label>
            <select
              className="block w-36 md:w-40 rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
              value={filters.brand}
              onChange={(e) => handleChange("brand", e.target.value)}
            >
              {brands.map(opt => <option key={opt}>{opt}</option>)}
            </select>
          </div>
          {/* Fuel */}
          <div>
            <label className="block text-sm font-semibold mb-1 text-gray-700">Fuel</label>
            <select
              className="block w-36 md:w-40 rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
              value={filters.fuel}
              onChange={(e) => handleChange("fuel", e.target.value)}
            >
              {fuels.map(opt => <option key={opt}>{opt}</option>)}
            </select>
          </div>
          {/* Transmission */}
          <div>
            <label className="block text-sm font-semibold mb-1 text-gray-700">Transmission</label>
            <select
              className="block w-36 md:w-40 rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
              value={filters.transmission}
              onChange={(e) => handleChange("transmission", e.target.value)}
            >
              {transmissions.map(opt => <option key={opt}>{opt}</option>)}
            </select>
          </div>
          {/* Seats */}
          <div>
            <label className="block text-sm font-semibold mb-1 text-gray-700">Seats</label>
            <select
              className="block w-24 md:w-28 rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
              value={filters.seats}
              onChange={(e) => handleChange("seats", e.target.value)}
            >
              {seats.map(opt => <option key={opt}>{opt}</option>)}
            </select>
          </div>
          {/* Body */}
          <div>
            <label className="block text-sm font-semibold mb-1 text-gray-700">Body</label>
            <select
              className="block w-36 md:w-40 rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
              value={filters.body}
              onChange={(e) => handleChange("body", e.target.value)}
            >
              {bodies.map(opt => <option key={opt}>{opt}</option>)}
            </select>
          </div>
          {/* Price Slider */}
          <div className="flex flex-col items-start">
            <label className="font-semibold mb-0.5 text-gray-700">
              Price: ₹{minValue}.0L - ₹{filters.price[1]}.0L
            </label>
            <input
              type="range"
              min={minValue}
              max={priceMax}
              step={1}
              value={filters.price[1]}
              onChange={handlePriceChange}
              className="w-[150px] md:w-[180px] accent-blue-600"
            />
          </div>
        </div>
        {/* Search Bar */}
        <div className="w-full flex justify-center mt-4">
          <div className="relative w-full sm:w-[420px]">
            <input
              type="text"
              value={filters.model}
              onChange={(e) => handleChange("model", e.target.value)}
              placeholder="Search by model..."
              className="w-full rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-400 px-12 py-3 text-base"
            />
            <span className="absolute left-4 top-3.5 text-gray-400 pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeWidth="2" d="m21 21-4.35-4.35M11 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16Z"/>
              </svg>
            </span>
          </div>
        </div>
      </div>
      {/* Car Grid */}
      <section className="container mx-auto px-4 sm:px-6 py-12 md:py-20">
        <h2 className="text-center text-3xl md:text-5xl font-bold mb-12 text-gray-900">
          <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            Our Upcoming Lineup
          </span>
        </h2>
        {filteredCars.length === 0 ? (
          <div className="text-center text-gray-400 py-20 text-xl">No cars found for selected filters.</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 place-items-center">
            {filteredCars.map((car) => (
              <motion.div
                key={car.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white w-72 h-[330px] rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 overflow-hidden flex flex-col justify-between"
              >
                <img
                  src={car.img}
                  alt={car.name}
                  className="w-full h-44 object-cover"
                  loading="lazy"
                />
                <div className="p-5 text-center flex flex-col justify-between flex-grow">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{car.name}</h3>
                  <p className="text-blue-700 text-lg font-semibold mb-4">{car.price}</p>
                  <Link
                    href={`/DetailsUpcoming/${car.id}`}
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
                  >
                    View Details
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
