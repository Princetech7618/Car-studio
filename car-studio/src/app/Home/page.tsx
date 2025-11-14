


"use client";

import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Search, Sparkles, Star, ShieldCheck, Car } from "lucide-react";
import Hero from "../Components/Hero";

// ======= Car Data =======
const carInventory = [
  {
    id: 1,
    name: "Maruti Suzuki Fronx Turbo",
    brand: "Maruti Suzuki",
    category: "Crossover",
    fuel: "Petrol",
    transmission: "Automatic",
    price: 1050000,
    year: 2024,
    seats: 5,
    bodyType: "SUV",
    img: "/img/Home1.jpg",
  },
  {
    id: 2,
    name: "Hyundai Alcazar 2025",
    brand: "Hyundai",
    category: "SUV",
    fuel: "Diesel",
    transmission: "Manual",
    price: 1950000,
    year: 2025,
    seats: 7,
    bodyType: "SUV",
    img: "/img/Home2.jpg",
  },
  {
    id: 3,
    name: "Mahindra Thar EV",
    brand: "Mahindra",
    category: "Electric SUV",
    fuel: "Electric",
    transmission: "Automatic",
    price: 2200000,
    year: 2025,
    seats: 4,
    bodyType: "Off-Road",
    img: "/img/Home3.jpg",
  },
  {
    id: 4,
    name: "Tata Harrier Facelift 2025",
    brand: "Tata",
    category: "SUV",
    fuel: "Diesel",
    transmission: "Automatic",
    price: 2100000,
    year: 2025,
    seats: 5,
    bodyType: "SUV",
    img: "/img/Home4.jpg",
  },
];
const popularModels = [
  {
    id: 1,
    name: "Audi Q7",
    img: "/img/Home8.jpg",
  },
  {
    id: 2,
    name: "BMW X5",
    img: "/img/Home9.jpg",
  },
  {
    id: 3,
    name: "Mercedes GLC",
    img: "/img/Home10.jpg",
  }
];

const featuredCars = [
  {
    id: 1,
    name: "Tata Curvv EV",
    price: "₹20.5 Lakh (Expected)",
    img: "/img/Home5.jpg",
  },
  {
    id: 2,
    name: "Hyundai Creta 2025",
    price: "₹15.4 Lakh",
    img: "/img/Home6.jpg",
  },
  {
    id: 3,
    name: "Mahindra XUV.e8",
    price: "₹28.2 Lakh",
    img: "/img/Home7.jpg",
  },
];

const reviews = [
  {
    id: 1,
    name: "Aarav Mehta",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80",
    rating: 5,
    comment:
      "Car Studio made my luxury purchase seamless! The staff were extremely professional and guided me through every step.",
  },
  {
    id: 2,
    name: "Riya Kapoor",
    img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&q=80",
    rating: 5,
    comment:
      "Absolutely stunning collection! I love how easy it is to explore cars with detailed specifications and visuals.",
  },
  {
    id: 3,
    name: "Karan Singh",
    img: "/img/review2.avif",
    rating: 4,
    comment:
      "My experience with Car Studio was fantastic. Their attention to design and detail truly stands out.",
  },
];
// ======= Filters =======
const categories = ["All", "SUV", "Sedan", "Hatchback", "Electric", "Crossover", "Off-Road"];
const brands = ["All", "Maruti Suzuki", "Hyundai", "Mahindra", "Tata"];
const fuels = ["All", "Petrol", "Diesel", "Electric"];
const transmissions = ["All", "Automatic", "Manual"];
const seatOptions = ["All", "4", "5", "6", "7"];
const bodyTypes = ["All", "SUV", "Sedan", "Coupe", "Off-Road"];

export default function CarStudioLanding() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [selectedFuel, setSelectedFuel] = useState("All");
  const [selectedTransmission, setSelectedTransmission] = useState("All");
  const [selectedSeats, setSelectedSeats] = useState("All");
  const [selectedBodyType, setSelectedBodyType] = useState("All");
  const [priceRange, setPriceRange] = useState([500000, 3000000]);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCars = useMemo(() => {
    return carInventory.filter((car) => {
      const matchesCategory = selectedCategory === "All" || car.category === selectedCategory;
      const matchesBrand = selectedBrand === "All" || car.brand === selectedBrand;
      const matchesFuel = selectedFuel === "All" || car.fuel === selectedFuel;
      const matchesTransmission = selectedTransmission === "All" || car.transmission === selectedTransmission;
      const matchesSeats = selectedSeats === "All" || car.seats === Number(selectedSeats);
      const matchesBodyType = selectedBodyType === "All" || car.bodyType === selectedBodyType;
      const matchesPrice = car.price >= priceRange[0] && car.price <= priceRange[1];
      const matchesSearch = car.name.toLowerCase().includes(searchTerm.toLowerCase());

      return (
        matchesCategory &&
        matchesBrand &&
        matchesFuel &&
        matchesTransmission &&
        matchesSeats &&
        matchesBodyType &&
        matchesPrice &&
        matchesSearch
      );
    });
  }, [
    selectedCategory,
    selectedBrand,
    selectedFuel,
    selectedTransmission,
    selectedSeats,
    selectedBodyType,
    priceRange,
    searchTerm,
  ]);

  return (
    <main className="overflow-hidden bg-gray-50 text-gray-800 mt-15">
      <Hero />

      {/* ===== Explore Inventory ===== */}
      <section id="inventory" className="max-w-7xl mx-auto px-6 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center text-5xl font-bold text-blue-600 mb-10"
        >
          Explore Our Inventory
        </motion.h2>

        {/* Filters Section */}
     <div className="flex flex-wrap items-center justify-center gap-4 bg-white/70 backdrop-blur-xl p-6 rounded-2xl shadow-lg mb-10">

  {/* Dropdown Filters */}
  {[
    { label: "Category", options: categories, value: selectedCategory, setter: setSelectedCategory },
    { label: "Brand", options: brands, value: selectedBrand, setter: setSelectedBrand },
    { label: "Fuel", options: fuels, value: selectedFuel, setter: setSelectedFuel },
    { label: "Transmission", options: transmissions, value: selectedTransmission, setter: setSelectedTransmission },
    { label: "Seats", options: seatOptions, value: selectedSeats, setter: setSelectedSeats },
    { label: "Body Type", options: bodyTypes, value: selectedBodyType, setter: setSelectedBodyType }
  ].map(({ label, options, value, setter }, i) => (
    <div key={i} className="flex flex-col min-w-[150px]">
      <label className="text-sm font-semibold mb-1 text-gray-700">{label}</label>
      <select
        value={value}
        onChange={(e) => setter(e.target.value)}
        className="p-2 rounded-lg border border-gray-300 bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
      >
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </div>
  ))}

  {/* Price Range */}
  <div className="flex flex-col min-w-[220px]">
    <label className="text-sm font-semibold mb-1 text-gray-700">
      Price: ₹{(priceRange[0] / 100000).toFixed(1)}L - ₹{(priceRange[1] / 100000).toFixed(1)}L
    </label>
    <div className="flex gap-2 items-center">
      <input
        type="range"
        min={500000}
        max={3000000}
        step={50000}
        value={priceRange[0]}
        onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
        className="accent-blue-500 w-full"
      />
      <input
        type="range"
        min={500000}
        max={3000000}
        step={50000}
        value={priceRange[1]}
        onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
        className="accent-blue-500 w-full"
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


        {/* Filtered Cars Grid */}
        {filteredCars.length === 0 ? (
          <div className="text-center text-gray-500 mt-16 text-lg">
            No cars found matching your filters.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredCars.map((car, index) => (
              <motion.div
                key={car.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.03 }}
                className="bg-white/80 backdrop-blur-lg rounded-3xl overflow-hidden shadow-xl transition-all"
              >
                <img src={car.img} alt={car.name} className="w-full h-56 object-cover" />
                <div className="p-6 space-y-3">
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-bold text-gray-900">{car.name}</h3>
                    <span className="text-blue-600 font-semibold text-lg">
                      ₹{(car.price / 100000).toFixed(2)} Lakh
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm">
                    {car.brand} • {car.fuel} • {car.transmission}
                  </p>
                  <Link
                    href={`/Detailsinventorycar/${car.id}`}
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





           {/* ===== Featured Cars ===== */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-14">
            Featured <span className="text-blue-500">Cars</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {featuredCars.map((car) => (
              <motion.div
                key={car.id}
                whileHover={{ scale: 1.03 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition"
              >
                <img src={car.img} alt={car.name} className="h-64 w-full object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{car.name}</h3>
                  <p className="text-gray-500 mb-4">{car.price}</p>
                 <Link href={`/Detailsfeaturedcar/${car.id}`}
                    className=" block w-full text-center bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                      View Details
                    
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== About Section ===== */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <img
              src="/img/Home4.jpg"
              alt="About Car Studio"
              className="rounded-2xl shadow-xl"
            />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <h2 className="text-4xl font-bold mb-4">
               <span className="text-blue-500">About Car Studio</span>
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              At Car Studio, we redefine automotive excellence. From futuristic
              electric vehicles to powerful SUVs, we bring the best cars from
              top manufacturers across the globe. Our goal is to connect
              customers with innovation, safety, and luxury — all in one place.
            </p>
            <Link href={"/About"} className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg">
              Discover More
            </Link>
          </motion.div>
        </div>
      </section>

{/* Popular Models */}
<section className="max-w-7xl mx-auto px-6 py-20">
  <motion.h2
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    className="text-center text-4xl font-bold text-blue-600 mb-12"
  >
    Popular Models
  </motion.h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
    {popularModels.map((car, i) => (
      <motion.div
        key={car.id}
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, delay: i * 0.1 }}
        whileHover={{ scale: 1.06, boxShadow: "0 20px 25px rgba(59, 130, 246, 0.4)" }}
        className="relative rounded-2xl bg-white cursor-pointer flex shadow-lg overflow-hidden"
      >
        {/* Animated vertical glowing gradient bar */}
        <motion.span
          className="absolute left-0 top-0 w-2 h-full rounded-l-2xl"
          style={{
            background:
              "linear-gradient(180deg, rgba(59, 130, 246, 0.9), rgba(147, 197, 253, 0.6), rgba(59, 130, 246, 0.9))",
          }}
          animate={{ y: ["0%", "25%", "0%"] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: i * 0.3 }}
        />

        <div className="flex-grow p-6 ml-4">
          <img
            src={car.img}
            alt={car.name}
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h3 className="text-xl font-semibold text-gray-900">{car.name}</h3>
        </div>
      </motion.div>
    ))}
  </div>
</section>










{/* ===== Meet the Team ===== */}
 <section className="max-w-6xl mx-auto px-6 py-20">
  <motion.h2
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="text-4xl font-bold text-blue-600 mb-12 text-center"
  >
    Meet Our Experts
  </motion.h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
    {[
      { name: "Rahul Sharma", role: "Founder & CEO", img: "/img/review1.avif" },
      { name: "Neha Patel", role: "Marketing Head", img: "/img/review3.avif" },
      { name: "Amit Joshi", role: "Lead Developer", img: "/img/review2.avif" },
      { name: "Priya Singh", role: "Customer Support", img: "/img/review3.avif" },
    ].map((member, i) => (
      <motion.div
        key={i}
        whileHover={{ scale: 1.05 }}
        className="flex items-center bg-white rounded-2xl shadow-md p-6 relative overflow-hidden"
      >
        {/* Animated blue side bar */}
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: i * 0.2,
          }}
          className="absolute left-0 top-0 h-full w-2 bg-blue-600 rounded-l-2xl"
        />
        <div className="flex-shrink-0">
          <img
            src={member.img}
            alt={member.name}
            className="w-32 h-32 rounded-full object-cover mb-4"
          />
            <h3 className="font-semibold text-xl">{member.name}</h3>
          <p className="text-blue-600">{member.role}</p>
        </div>
   
      </motion.div>
    ))}
  </div>
</section> 







      {/* ===== Why Choose Us ===== */}
   

<section className="bg-blue-50 py-20">
  <div className="max-w-7xl mx-auto px-6 text-center">
    <h2 className="text-4xl font-bold mb-14">
      Why Choose <span className="text-blue-500">Car Studio?</span>
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
      {[
        { icon: Sparkles, title: "Luxury Designs", desc: "Premium and futuristic car models." },
        { icon: Star, title: "Top Rated Brands", desc: "Only the most trusted manufacturers." },
        { icon: ShieldCheck, title: "Verified Listings", desc: "100% genuine and inspected cars." },
        { icon: Car, title: "Latest Models", desc: "Stay ahead with the newest releases." },
      ].map(({ icon: Icon, title, desc }, idx) => (
        <div key={title} className="relative bg-white shadow-md p-8 rounded-2xl hover:shadow-xl transition cursor-default">
          {/* Rotating 3D cube behind icon */}
          <motion.div
            className="absolute left-1/2 top-8 -translate-x-1/2 w-16 h-16 bg-gradient-to-tr from-blue-400 to-blue-700 rounded-lg shadow-lg"
            style={{ transformStyle: "preserve-3d" }}
            animate={{ rotateX: 360, rotateY: 360 }}
            transition={{ repeat: Infinity, duration: 6, ease: "linear", delay: idx * 0.4 }}
          />
          <Icon className="w-10 h-10 mx-auto mb-4 relative z-10 text-blue-600 drop-shadow-md" />
          <h3 className="text-xl font-semibold mb-2 relative z-10">{title}</h3>
          <p className="text-gray-600 relative z-10">{desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* ===== Client Testimonials ===== */}

<section className="bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 py-20 border-t border-gray-200/50">
  <div className="max-w-7xl mx-auto px-6 text-center">
    <motion.h2 
      initial={{ opacity: 0, y: 30 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.8 }} 
      className="text-5xl font-bold mb-10 text-blue-600"
    >
      Client Testimonials
    </motion.h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {reviews.map((r, i) => (
        <motion.div
          key={r.id}
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          whileHover={{ scale: 1.06, y: -5 }}
          transition={{ duration: 0.6, delay: i * 0.15, type: "spring", stiffness: 300, damping: 20 }}
          className="relative bg-white/80 backdrop-blur-lg rounded-3xl p-8 border border-white/50 shadow-md cursor-pointer overflow-hidden"
        >
         
          <span className="absolute inset-0 rounded-3xl border-2 border-transparent">
            <motion.span
              className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-500"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
            />
            <motion.span
              className="absolute right-0 top-0 w-0.5 h-full bg-gradient-to-b from-blue-500 via-blue-400 to-blue-500"
              animate={{ y: ["-100%", "100%"] }}
              transition={{ repeat: Infinity, duration: 3, ease: "linear", delay: 0.75 }}
            />
            <motion.span
              className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-l from-blue-500 via-blue-400 to-blue-500"
              animate={{ x: ["100%", "-100%"] }}
              transition={{ repeat: Infinity, duration: 3, ease: "linear", delay: 1.5 }}
            />
            <motion.span
              className="absolute left-0 top-0 w-0.5 h-full bg-gradient-to-t from-blue-500 via-blue-400 to-blue-500"
              animate={{ y: ["100%", "-100%"] }}
              transition={{ repeat: Infinity, duration: 3, ease: "linear", delay: 2.25 }}
            />
          </span>

          <div className="relative flex items-center gap-5 mb-6">
            <img 
              src={r.img} 
              alt={r.name} 
              className="w-20 h-20 rounded-2xl object-cover border-4 border-white shadow-lg" 
            />
            <div className="text-left">
              <h3 className="font-bold text-xl">{r.name}</h3>
              <div className="flex">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <svg 
                    key={idx} 
                    className={`w-5 h-5 ${idx < r.rating ? "text-yellow-500" : "text-gray-300"}`} 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
          <p className="relative text-gray-700 italic z-10">{`"${r.comment}"`}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>








    </main>
  );
}








