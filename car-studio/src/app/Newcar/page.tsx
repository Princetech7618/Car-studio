


"use client";

import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Search } from "lucide-react";

// ======= Car Data =======

const carInventory = [
  {
    id: 1,
    name: "Maruti Wagon R",
    brand: "Maruti Suzuki",
    price: "₹4.99 - 6.95 Lakh",
    img: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=500&h=300&fit=crop",
    type: "Hatchback",
    fuel: "Petrol",
    transmission: "Manual",
    seats: 5,
    body: "Compact",
  },
  {
    id: 2,
    name: "Tata Tiago",
    brand: "Tata",
    price: "₹4.57 - 7.82 Lakh",
    img: "https://images.unsplash.com/photo-1605559424843-9e4c8c1d8a6a?auto=format&fit=crop&w=800&q=80",
    type: "Hatchback",
    fuel: "Petrol",
    transmission: "Manual",
    seats: 5,
    body: "Compact",
  },
  {
    id: 3,
    name: "Maruti Alto K10",
    brand: "Maruti Suzuki",
    price: "₹3.70 - 5.45 Lakh",
    img: "https://images.unsplash.com/photo-1610465299993-7e4f8d3e5a57?auto=format&fit=crop&w=800&q=80",
    type: "Hatchback",
    fuel: "Petrol",
    transmission: "Manual",
    seats: 5,
    body: "Compact",
  },
  {
    id: 4,
    name: "Maruti S-Presso",
    brand: "Maruti Suzuki",
    price: "₹3.50 - 5.25 Lakh",
    img: "https://images.unsplash.com/photo-1612464984752-1c3e2990d2c8?auto=format&fit=crop&w=800&q=80",
    type: "Hatchback",
    fuel: "Petrol",
    transmission: "Manual",
    seats: 5,
    body: "Compact SUV",
  },
  {
    id: 5,
    name: "Hyundai Grand i10 Nios",
    brand: "Hyundai",
    price: "₹5.92 - 8.56 Lakh",
    img: "https://images.unsplash.com/photo-1606312616074-6cb8c0d6ef13?auto=format&fit=crop&w=800&q=80",
    type: "Hatchback",
    fuel: "Petrol",
    transmission: "Manual",
    seats: 5,
    body: "Compact",
  },
  {
    id: 6,
    name: "Tata Altroz",
    brand: "Tata",
    price: "₹6.60 - 10.74 Lakh",
    img: "https://images.unsplash.com/photo-1619551734329-df5e7f7f4576?auto=format&fit=crop&w=800&q=80",
    type: "Hatchback",
    fuel: "Petrol",
    transmission: "Manual",
    seats: 5,
    body: "Compact",
  },
  {
    id: 7,
    name: "Hyundai i20",
    brand: "Hyundai",
    price: "₹7.02 - 11.21 Lakh",
    img: "https://images.unsplash.com/photo-1605514933509-9279d7a6d9dc?auto=format&fit=crop&w=800&q=80",
    type: "Hatchback",
    fuel: "Petrol",
    transmission: "Automatic",
    seats: 5,
    body: "Compact",
  },
  {
    id: 8,
    name: "Renault Kwid",
    brand: "Renault",
    price: "₹4.70 - 6.45 Lakh",
    img: "https://images.unsplash.com/photo-1612464990190-f8891e1c2d73?auto=format&fit=crop&w=800&q=80",
    type: "Hatchback",
    fuel: "Petrol",
    transmission: "Manual",
    seats: 5,
    body: "Compact",
  },
  {
    id: 9,
    name: "Honda Amaze",
    brand: "Honda",
    price: "₹7.16 - 9.92 Lakh",
    img: "https://images.unsplash.com/photo-1626733679496-cb3b9e5b2f47?auto=format&fit=crop&w=800&q=80",
    type: "Sedan",
    fuel: "Petrol",
    transmission: "Automatic",
    seats: 5,
    body: "Sedan",
  },
  {
    id: 10,
    name: "Toyota Glanza",
    brand: "Toyota",
    price: "₹6.81 - 9.78 Lakh",
    img: "https://images.unsplash.com/photo-1617732988510-25b9dfb6a19d?auto=format&fit=crop&w=800&q=80",
    type: "Hatchback",
    fuel: "Petrol",
    transmission: "Automatic",
    seats: 5,
    body: "Compact",
  },
  {
    id: 11,
    name: "Hyundai Aura",
    brand: "Hyundai",
    price: "₹6.44 - 9.00 Lakh",
    img: "https://images.unsplash.com/photo-1613929717843-c86db6b1c7c1?auto=format&fit=crop&w=800&q=80",
    type: "Sedan",
    fuel: "Diesel",
    transmission: "Manual",
    seats: 5,
    body: "Sedan",
  },
  {
    id: 12,
    name: "Tata Punch",
    brand: "Tata",
    price: "₹6.13 - 10.10 Lakh",
    img: "https://images.unsplash.com/photo-1610465299261-9e32953c9567?auto=format&fit=crop&w=800&q=80",
    type: "SUV",
    fuel: "Petrol",
    transmission: "Manual",
    seats: 5,
    body: "Mini SUV",
  },
  {
    id: 13,
    name: "Renault Triber",
    brand: "Renault",
    price: "₹6.33 - 8.97 Lakh",
    img: "https://images.unsplash.com/photo-1612464990431-ef63a0f6f0bb?auto=format&fit=crop&w=800&q=80",
    type: "MPV",
    fuel: "Petrol",
    transmission: "Manual",
    seats: 7,
    body: "MPV",
  },
  {
    id: 14,
    name: "Nissan Magnite",
    brand: "Nissan",
    price: "₹5.99 - 10.86 Lakh",
    img: "https://images.unsplash.com/photo-1613929717843-c86db6b1c7c1?auto=format&fit=crop&w=800&q=80",
    type: "SUV",
    fuel: "Petrol",
    transmission: "Automatic",
    seats: 5,
    body: "Compact SUV",
  },
  {
    id: 15,
    name: "Maruti Swift",
    brand: "Maruti Suzuki",
    price: "₹5.99 - 9.03 Lakh",
    img: "https://images.unsplash.com/photo-1606312616074-6cb8c0d6ef13?auto=format&fit=crop&w=800&q=80",
    type: "Hatchback",
    fuel: "Petrol",
    transmission: "Manual",
    seats: 5,
    body: "Compact",
  },
];

// ======= Dynamic Filter Lists =======
const uniqueValues = (key: keyof typeof carInventory[0]) => [
  "All",
  ...Array.from(new Set(carInventory.map((car) => car[key]))),
];

export default function CarStudioLanding() {
  const [selectedType, setSelectedType] = useState("All");
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [selectedFuel, setSelectedFuel] = useState("All");
  const [selectedTransmission, setSelectedTransmission] = useState("All");
  const [selectedSeats, setSelectedSeats] = useState("All");
  const [selectedBody, setSelectedBody] = useState("All");
  const [priceRange, setPriceRange] = useState([4, 12]); // in Lakhs
  const [searchTerm, setSearchTerm] = useState("");

  // ===== Filter Logic =====
  const filteredCars = useMemo(() => {
    return carInventory.filter((car) => {
      const parsePrice = (price: string) => {
        const matches = price.match(/₹([\d.]+)\s*-\s*([\d.]+)/);
        if (!matches) return [0, 0];
        return [parseFloat(matches[1]), parseFloat(matches[2])];
      };

      const [min, max] = parsePrice(car.price);
      const carAvgPrice = (min + max) / 2;

      return (
        (selectedType === "All" || car.type === selectedType) &&
        (selectedBrand === "All" || car.brand === selectedBrand) &&
        (selectedFuel === "All" || car.fuel === selectedFuel) &&
        (selectedTransmission === "All" || car.transmission === selectedTransmission) &&
        (selectedSeats === "All" || car.seats === Number(selectedSeats)) &&
        (selectedBody === "All" || car.body === selectedBody) &&
        carAvgPrice >= priceRange[0] &&
        carAvgPrice <= priceRange[1] &&
        car.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
  }, [
    selectedType,
    selectedBrand,
    selectedFuel,
    selectedTransmission,
    selectedSeats,
    selectedBody,
    priceRange,
    searchTerm,
  ]);

  return (
    <main className="overflow-hidden bg-gray-50 text-gray-800 min-h-screen">
      <section id="inventory" className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center text-4xl md:text-5xl font-bold text-blue-600 mb-10"
        >
          Explore New Cars
        </motion.h2>

        {/* ===== Filters ===== */}
        <div className="flex flex-wrap justify-center gap-4 bg-white/80 backdrop-blur-xl p-6 rounded-2xl shadow-lg mb-10">
          {[
            { label: "Type", value: selectedType, setter: setSelectedType, options: uniqueValues("type") },
            { label: "Brand", value: selectedBrand, setter: setSelectedBrand, options: uniqueValues("brand") },
            { label: "Fuel", value: selectedFuel, setter: setSelectedFuel, options: uniqueValues("fuel") },
            { label: "Transmission", value: selectedTransmission, setter: setSelectedTransmission, options: uniqueValues("transmission") },
            { label: "Seats", value: selectedSeats, setter: setSelectedSeats, options: ["All", "4", "5", "7"] },
            { label: "Body", value: selectedBody, setter: setSelectedBody, options: uniqueValues("body") },
          ].map(({ label, value, setter, options }) => (
            <div key={label} className="flex flex-col min-w-[130px]">
              <label className="text-sm font-semibold mb-1 text-gray-700">{label}</label>
              <select
                value={value}
                onChange={(e) => setter(e.target.value)}
                className="p-2 rounded-lg border border-gray-300 bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                {options.map((opt) => (
                  <option key={opt}>{opt}</option>
                ))}
              </select>
            </div>
          ))}

          {/* Price Range */}
          <div className="flex flex-col min-w-[220px]">
            <label className="text-sm font-semibold mb-1 text-gray-700">
              Price: ₹{priceRange[0].toFixed(1)}L - ₹{priceRange[1].toFixed(1)}L
            </label>
            <div className="flex gap-2 items-center">
              <input
                type="range"
                min={4}
                max={12}
                step={0.1}
                value={priceRange[0]}
                onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                className="accent-blue-600 w-full"
              />
              <input
                type="range"
                min={4}
                max={12}
                step={0.1}
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                className="accent-blue-600 w-full"
              />
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative min-w-[220px] flex-grow max-w-xs">
            <Search className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search by model..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
        </div>

        {/* ===== Car Grid ===== */}
        {filteredCars.length === 0 ? (
          <div className="text-center text-gray-500 mt-16 text-lg">
            No cars found matching your filters.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {filteredCars.map((car, index) => (
              <motion.div
                key={car.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white/90 backdrop-blur-lg rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all"
              >
                <img src={car.img} alt={car.name} className="w-full h-56 object-cover" />
                <div className="p-6 space-y-3">
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-bold text-gray-900">{car.name}</h3>
                    <span className="text-blue-600 font-semibold text-lg">{car.price}</span>
                  </div>
                  <p className="text-gray-500 text-sm">
                    {car.brand} • {car.fuel} • {car.transmission}
                  </p>
                  <Link
                    href={`/DetailsCarHome/${car.id}`}
                    className="block w-full text-center bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                  >
                    View Details
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
