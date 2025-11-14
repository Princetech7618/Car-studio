// "use client";

// import { useRouter } from "next/navigation";
// import { motion } from "framer-motion";

// const electricCars = [
//   {
//     id: 1,
//     name: "Tesla Model S Plaid",
//     price: "$89,990",
//     img: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&h=500&fit=crop",
//   },
//   {
//     id: 2,
//     name: "Porsche Taycan Turbo S",
//     price: "$185,000",
//     img: "https://images.unsplash.com/photo-1621135802920-133df287f89c?w=800&h=500&fit=crop",
//   },
//   {
//     id: 3,
//     name: "Audi e-tron GT",
//     price: "$99,900",
//     img: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=500&fit=crop",
//   },
//   {
//     id: 4,
//     name: "Ford Mustang Mach-E GT",
//     price: "$59,900",
//     img: "https://images.unsplash.com/photo-1621135802920-133df287f89c?w=800&h=500&fit=crop",
//   },
//   {
//     id: 5,
//     name: "Hyundai Ioniq 6",
//     price: "$41,600",
//     img: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=500&fit=crop",
//   },
//   {
//     id: 6,
//     name: "Rivian R1T",
//     price: "$73,000",
//     img: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&h=500&fit=crop",
//   },
//   {
//     id: 7,
//     name: "BMW i4 M50",
//     price: "$69,700",
//     img: "https://images.unsplash.com/photo-1621135802920-133df287f89c?w=800&h=500&fit=crop",
//   },
//   {
//     id: 8,
//     name: "Mercedes EQS 580",
//     price: "$104,400",
//     img: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&h=500&fit=crop",
//   },
// ];

// export default function ElectricCarsPage() {
//   const router = useRouter();

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 pb-20">
//       {/* Hero Section */}
//       <section
//         className="relative py-20 md:py-28 text-white text-center overflow-hidden"
//         style={{
//           backgroundImage:
//             'url("https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1200&h=800&fit=crop")',
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         <div className="absolute inset-0 bg-black/50"></div>
//         <div className="relative z-10 container mx-auto px-6">
//           <motion.h1
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-4xl md:text-6xl font-bold mb-6"
//           >
//             ELECTRIC REVOLUTION
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="text-lg md:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed"
//           >
//             Discover the future of driving — premium electric cars redefining luxury and performance.
//           </motion.p>
//         </div>
//       </section>

//       {/* Car Collection */}
//       <section className="py-16 md:py-20 container mx-auto px-4 sm:px-6">
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-14"
//         >
//           <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">
//             <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
//               Premium Electric Collection
//             </span>
//           </h2>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             Sleek design, advanced tech, and sustainable performance — choose your next electric dream.
//           </p>
//         </motion.div>

//         {/* Grid Layout */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 place-items-center">
//           {electricCars.map((car) => (
//             <motion.div
//               key={car.id}
//               whileHover={{ scale: 1.05 }}
//               transition={{ type: "spring", stiffness: 200, damping: 12 }}
//               className="bg-white rounded-2xl shadow-xl overflow-hidden w-72 h-[350px] flex flex-col justify-between"
//             >
//               <img
//                 src={car.img}
//                 alt={car.name}
//                 className="w-full h-44 object-cover"
//                 loading="lazy"
//               />
//               <div className="p-5 text-center flex flex-col justify-between flex-grow">
//                 <div>
//                   <h3 className="text-lg font-bold text-blue-700 mb-1">{car.name}</h3>
//                   <p className="text-gray-800 text-lg font-semibold">{car.price}</p>
//                 </div>
//                 <button
//                   onClick={() => router.push(`/DetailsElectricCar/${car.id}`)}
//                   className="mt-5 w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-semibold py-2 rounded-xl transition"
//                 >
//                   View Details
//                 </button>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// }



"use client";

import React, { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

// Your electricCars dataset with extended fields for filtering
const electricCars = [
  {
    id: 1,
    name: "Tesla Model S Plaid",
    brand: "Tesla",
    price: "$89,990",
    priceNum: 89990,
    img: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&h=500&fit=crop",
    fuel: "Electric",
    transmission: "Automatic",
    seats: 5,
    body: "Sedan",
  },
  {
    id: 2,
    name: "Porsche Taycan Turbo S",
    brand: "Porsche",
    price: "$185,000",
    priceNum: 185000,
    img: "https://images.unsplash.com/photo-1621135802920-133df287f89c?w=800&h=500&fit=crop",
    fuel: "Electric",
    transmission: "Automatic",
    seats: 4,
    body: "Sedan",
  },
  {
    id: 3,
    name: "Audi e-tron GT",
    brand: "Audi",
    price: "$99,900",
    priceNum: 99900,
    img: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=500&fit=crop",
    fuel: "Electric",
    transmission: "Automatic",
    seats: 5,
    body: "Sedan",
  },
  {
    id: 4,
    name: "Ford Mustang Mach-E GT",
    brand: "Ford",
    price: "$59,900",
    priceNum: 59900,
    img: "https://images.unsplash.com/photo-1621135802920-133df287f89c?w=800&h=500&fit=crop",
    fuel: "Electric",
    transmission: "Automatic",
    seats: 5,
    body: "SUV",
  },
  {
    id: 5,
    name: "Hyundai Ioniq 6",
    brand: "Hyundai",
    price: "$41,600",
    priceNum: 41600,
    img: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=500&fit=crop",
    fuel: "Electric",
    transmission: "Automatic",
    seats: 5,
    body: "Sedan",
  },
  {
    id: 6,
    name: "Rivian R1T",
    brand: "Rivian",
    price: "$73,000",
    priceNum: 73000,
    img: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&h=500&fit=crop",
    fuel: "Electric",
    transmission: "Automatic",
    seats: 5,
    body: "Pickup",
  },
  {
    id: 7,
    name: "BMW i4 M50",
    brand: "BMW",
    price: "$69,700",
    priceNum: 69700,
    img: "https://images.unsplash.com/photo-1621135802920-133df287f89c?w=800&h=500&fit=crop",
    fuel: "Electric",
    transmission: "Automatic",
    seats: 5,
    body: "Sedan",
  },
  {
    id: 8,
    name: "Mercedes EQS 580",
    brand: "Mercedes",
    price: "$104,400",
    priceNum: 104400,
    img: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&h=500&fit=crop",
    fuel: "Electric",
    transmission: "Automatic",
    seats: 5,
    body: "Sedan",
  },
];

// Utils for populating filter options
function getUniqueOptions(list, key) {
  const set = new Set(list.map(item => item[key]));
  return ["All", ...Array.from(set)];
}
const minValue = Math.min(...electricCars.map(car => car.priceNum));
const maxValue = Math.max(...electricCars.map(car => car.priceNum));

export default function ElectricCarsPage() {
  const router = useRouter();

  const [filters, setFilters] = useState({
    brand: "All",
    fuel: "All",
    transmission: "All",
    body: "All",
    seats: "All",
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
    return electricCars.filter(car => {
      const inPrice = car.priceNum >= filters.price[0] && car.priceNum <= filters.price[1];
      const matches = [
        filters.brand === "All" || car.brand === filters.brand,
        filters.fuel === "All" || car.fuel === filters.fuel,
        filters.transmission === "All" || car.transmission === filters.transmission,
        filters.body === "All" || car.body === filters.body,
        filters.seats === "All" || car.seats === Number(filters.seats),
        inPrice,
        filters.model === "" || car.name.toLowerCase().includes(filters.model.toLowerCase())
      ];
      return matches.every(Boolean);
    });
  }, [filters]);

  const brands = getUniqueOptions(electricCars, "brand");
  const fuels = getUniqueOptions(electricCars, "fuel");
  const transmissions = getUniqueOptions(electricCars, "transmission");
  const bodies = getUniqueOptions(electricCars, "body");
  const seats = getUniqueOptions(electricCars, "seats");

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 pb-20">


           {/* Hero Section */}
      <section
        className="relative py-20 md:py-28 text-white text-center overflow-hidden"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1200&h=800&fit=crop")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 container mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            ELECTRIC REVOLUTION
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            Discover the future of driving — premium electric cars redefining luxury and performance.
          </motion.p>
        </div>
      </section>
      {/* Filter/Search Bar */}
      <div className="w-full sticky top-0 z-30 bg-white shadow px-2 pt-6 pb-3">
        <div className="flex flex-wrap gap-3 md:gap-6 justify-center items-center">
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
          <div>
            <label className="block text-sm font-semibold mb-1 text-gray-700">Fuel</label>
            <select
              className="block w-32 md:w-36 rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
              value={filters.fuel}
              onChange={(e) => handleChange("fuel", e.target.value)}
            >
              {fuels.map(opt => <option key={opt}>{opt}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1 text-gray-700">Transmission</label>
            <select
              className="block w-40 md:w-44 rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
              value={filters.transmission}
              onChange={(e) => handleChange("transmission", e.target.value)}
            >
              {transmissions.map(opt => <option key={opt}>{opt}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1 text-gray-700">Body</label>
            <select
              className="block w-28 md:w-36 rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
              value={filters.body}
              onChange={(e) => handleChange("body", e.target.value)}
            >
              {bodies.map(opt => <option key={opt}>{opt}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1 text-gray-700">Seats</label>
            <select
              className="block w-20 md:w-28 rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
              value={filters.seats}
              onChange={(e) => handleChange("seats", e.target.value)}
            >
              {seats.map(opt => <option key={opt}>{opt}</option>)}
            </select>
          </div>
          <div className="flex flex-col items-start">
            <label className="font-semibold mb-0.5 text-gray-700">
              Price: ${minValue.toLocaleString()} - ${filters.price[1].toLocaleString()}
            </label>
            <input
              type="range"
              min={minValue}
              max={maxValue}
              step={1000}
              value={filters.price[1]}
              onChange={handlePriceChange}
              className="w-[150px] md:w-[180px] accent-blue-600"
            />
          </div>
        </div>
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
                <path stroke="currentColor" strokeWidth="2" d="m21 21-4.35-4.35M11 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16Z" />
              </svg>
            </span>
          </div>
        </div>
      </div>
 
      {/* Car Collection */}
      <section className="py-16 md:py-20 container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Premium Electric Collection
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Sleek design, advanced tech, and sustainable performance — choose your next electric dream.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 place-items-center">
          {filteredCars.length === 0 ? (
            <div className="text-center text-gray-400 py-20 text-xl col-span-full">
              No cars found for selected filters.
            </div>
          ) : (
            filteredCars.map((car) => (
              <motion.div
                key={car.id}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200, damping: 12 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden w-72 h-[350px] flex flex-col justify-between"
              >
                <img
                  src={car.img}
                  alt={car.name}
                  className="w-full h-44 object-cover"
                  loading="lazy"
                />
                <div className="p-5 text-center flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-lg font-bold text-blue-700 mb-1">{car.name}</h3>
                    <p className="text-gray-800 text-lg font-semibold">{car.price}</p>
                  </div>
                  <button
                    onClick={() => router.push(`/DetailsElectricCar/${car.id}`)}
                    className="mt-5 w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-semibold py-2 rounded-xl transition"
                  >
                    View Details
                  </button>
                </div>
              </motion.div>
            ))
          )}
        </div>
      </section>
    </div>
  );
}

