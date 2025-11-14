// "use client";

// import React, { useMemo } from "react";
// import { useParams } from "next/navigation";
// import { motion } from "framer-motion";
// import { Shield, Fuel, Gauge, Settings, Users, Car } from "lucide-react";
// import Image from "next/image";

// export const carDetails = [
  // {
  //   id: 1,
  //   name: "Maruti Wagon R",
  //   brand: "Maruti Suzuki",
  //   price: "₹4.99 - 6.95 Lakh",
  //   img: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=500&h=300&fit=crop",
  //   type: "Hatchback",
  //   fuel: "Petrol",
  //   transmission: "Manual",
  //   seats: 5,
  //   body: "Compact",
  //   engine: "1.0L / 1.2L K-Series Petrol Engine",
  //   mileage: "23.56 km/l",
  //   power: "67 - 89 bhp",
  //   torque: "89 Nm",
  //   safety: ["Dual Airbags", "ABS with EBD", "Rear Parking Sensors"],
  //   description:
  //     "The Maruti Wagon R is a practical city hatchback known for its tall-boy design, high seating, and great mileage. Perfect for daily urban commutes."
  // },
  // {
  //   id: 2,
  //   name: "Tata Tiago",
  //   brand: "Tata",
  //   price: "₹4.57 - 7.82 Lakh",
  //   img: "https://images.unsplash.com/photo-1605559424843-9e4c8c1d8a6a?auto=format&fit=crop&w=800&q=80",
  //   type: "Hatchback",
  //   fuel: "Petrol",
  //   transmission: "Manual",
  //   seats: 5,
  //   body: "Compact",
  //   engine: "1.2L Revotron Petrol Engine",
  //   mileage: "20.09 km/l",
  //   power: "85 bhp",
  //   torque: "113 Nm",
  //   safety: ["Dual Airbags", "ABS with EBD", "Corner Stability Control"],
  //   description:
  //     "Tata Tiago delivers a safe and comfortable ride with premium interiors and a robust build, making it one of the safest hatchbacks in India."
  // },
  // {
  //   id: 3,
  //   name: "Maruti Alto K10",
  //   brand: "Maruti Suzuki",
  //   price: "₹3.70 - 5.45 Lakh",
  //   img: "https://images.unsplash.com/photo-1610465299993-7e4f8d3e5a57?auto=format&fit=crop&w=800&q=80",
  //   type: "Hatchback",
  //   fuel: "Petrol",
  //   transmission: "Manual",
  //   seats: 5,
  //   body: "Compact",
  //   engine: "1.0L K10C Petrol Engine",
  //   mileage: "24.39 km/l",
  //   power: "67 bhp",
  //   torque: "89 Nm",
  //   safety: ["Dual Airbags", "ABS with EBD", "Seat Belt Reminder"],
  //   description:
  //     "The Alto K10 is India's favorite small car, offering affordability, easy maintenance, and unmatched fuel efficiency for city drives."
  // },
  // {
  //   id: 4,
  //   name: "Maruti S-Presso",
  //   brand: "Maruti Suzuki",
  //   price: "₹3.50 - 5.25 Lakh",
  //   img: "https://images.unsplash.com/photo-1612464984752-1c3e2990d2c8?auto=format&fit=crop&w=800&q=80",
  //   type: "Hatchback",
  //   fuel: "Petrol",
  //   transmission: "Manual",
  //   seats: 5,
  //   body: "Compact SUV",
  //   engine: "1.0L K10B Petrol Engine",
  //   mileage: "21.7 km/l",
  //   power: "67 bhp",
  //   torque: "89 Nm",
  //   safety: ["ABS with EBD", "Rear Parking Sensors", "Airbags"],
  //   description:
  //     "Maruti S-Presso offers a mini SUV look with compact practicality. It’s easy to drive, efficient, and designed for the urban lifestyle."
  // },
  // {
  //   id: 5,
  //   name: "Hyundai Grand i10 Nios",
  //   brand: "Hyundai",
  //   price: "₹5.92 - 8.56 Lakh",
  //   img: "https://images.unsplash.com/photo-1606312616074-6cb8c0d6ef13?auto=format&fit=crop&w=800&q=80",
  //   type: "Hatchback",
  //   fuel: "Petrol",
  //   transmission: "Manual",
  //   seats: 5,
  //   body: "Compact",
  //   engine: "1.2L Kappa Petrol Engine",
  //   mileage: "20.7 km/l",
  //   power: "82 bhp",
  //   torque: "114 Nm",
  //   safety: ["Rear Camera", "ABS with EBD", "Dual Airbags"],
  //   description:
  //     "The Grand i10 Nios brings modern design and a premium cabin. Its smooth drive and high refinement make it a popular choice for families."
  // },
  // {
  //   id: 6,
  //   name: "Tata Altroz",
  //   brand: "Tata",
  //   price: "₹6.60 - 10.74 Lakh",
  //   img: "https://images.unsplash.com/photo-1619551734329-df5e7f7f4576?auto=format&fit=crop&w=800&q=80",
  //   type: "Hatchback",
  //   fuel: "Petrol",
  //   transmission: "Manual",
  //   seats: 5,
  //   body: "Compact",
  //   engine: "1.2L Revotron Petrol Engine",
  //   mileage: "18.5 km/l",
  //   power: "86 bhp",
  //   torque: "113 Nm",
  //   safety: ["5-Star Global NCAP", "Dual Airbags", "ABS with EBD"],
  //   description:
  //     "Tata Altroz sets a benchmark in safety and design, featuring a 5-star crash rating and premium build quality."
  // },
  // {
  //   id: 7,
  //   name: "Hyundai i20",
  //   brand: "Hyundai",
  //   price: "₹7.02 - 11.21 Lakh",
  //   img: "https://images.unsplash.com/photo-1605514933509-9279d7a6d9dc?auto=format&fit=crop&w=800&q=80",
  //   type: "Hatchback",
  //   fuel: "Petrol",
  //   transmission: "Automatic",
  //   seats: 5,
  //   body: "Compact",
  //   engine: "1.2L Kappa Petrol / 1.0L Turbo GDi Engine",
  //   mileage: "20.3 km/l",
  //   power: "83 - 118 bhp",
  //   torque: "114 - 172 Nm",
  //   safety: ["6 Airbags", "ESC", "Hill Assist"],
  //   description:
  //     "The Hyundai i20 is a premium hatchback offering modern tech, powerful performance, and a comfortable, feature-loaded interior."
  // },
  // {
  //   id: 8,
  //   name: "Renault Kwid",
  //   brand: "Renault",
  //   price: "₹4.70 - 6.45 Lakh",
  //   img: "https://images.unsplash.com/photo-1612464990190-f8891e1c2d73?auto=format&fit=crop&w=800&q=80",
  //   type: "Hatchback",
  //   fuel: "Petrol",
  //   transmission: "Manual",
  //   seats: 5,
  //   body: "Compact",
  //   engine: "0.8L / 1.0L SCe Petrol Engine",
  //   mileage: "22.3 km/l",
  //   power: "68 bhp",
  //   torque: "91 Nm",
  //   safety: ["Airbags", "Reverse Parking Camera", "ABS with EBD"],
  //   description:
  //     "Renault Kwid is a stylish entry-level hatchback with SUV-inspired design, touchscreen infotainment, and impressive mileage."
  // },
  // {
  //   id: 9,
  //   name: "Honda Amaze",
  //   brand: "Honda",
  //   price: "₹7.16 - 9.92 Lakh",
  //   img: "https://images.unsplash.com/photo-1626733679496-cb3b9e5b2f47?auto=format&fit=crop&w=800&q=80",
  //   type: "Sedan",
  //   fuel: "Petrol",
  //   transmission: "Automatic",
  //   seats: 5,
  //   body: "Sedan",
  //   engine: "1.2L i-VTEC Petrol Engine",
  //   mileage: "18.6 km/l",
  //   power: "90 bhp",
  //   torque: "110 Nm",
  //   safety: ["Dual Airbags", "ABS with EBD", "Rear Camera"],
  //   description:
  //     "Honda Amaze offers a refined sedan experience with a comfortable cabin, reliable engine, and top-notch Honda build quality."
  // },
  // {
  //   id: 10,
  //   name: "Toyota Glanza",
  //   brand: "Toyota",
  //   price: "₹6.81 - 9.78 Lakh",
  //   img: "https://images.unsplash.com/photo-1617732988510-25b9dfb6a19d?auto=format&fit=crop&w=800&q=80",
  //   type: "Hatchback",
  //   fuel: "Petrol",
  //   transmission: "Automatic",
  //   seats: 5,
  //   body: "Compact",
  //   engine: "1.2L Dual Jet Petrol Engine",
  //   mileage: "22.3 km/l",
  //   power: "89 bhp",
  //   torque: "113 Nm",
  //   safety: ["6 Airbags", "Hill Hold Assist", "ABS with EBD"],
  //   description:
  //     "Toyota Glanza combines Toyota reliability with premium features, offering a refined and efficient driving experience."
  // },
  // {
  //   id: 11,
  //   name: "Hyundai Aura",
  //   brand: "Hyundai",
  //   price: "₹6.44 - 9.00 Lakh",
  //   img: "https://images.unsplash.com/photo-1613929717843-c86db6b1c7c1?auto=format&fit=crop&w=800&q=80",
  //   type: "Sedan",
  //   fuel: "Diesel",
  //   transmission: "Manual",
  //   seats: 5,
  //   body: "Sedan",
  //   engine: "1.2L U2 CRDi Diesel Engine",
  //   mileage: "25.35 km/l",
  //   power: "75 bhp",
  //   torque: "190 Nm",
  //   safety: ["Dual Airbags", "Rear Sensors", "ABS with EBD"],
  //   description:
  //     "The Hyundai Aura is a stylish compact sedan with premium interiors and efficient diesel performance ideal for long drives."
  // },
  // {
  //   id: 12,
  //   name: "Tata Punch",
  //   brand: "Tata",
  //   price: "₹6.13 - 10.10 Lakh",
  //   img: "https://images.unsplash.com/photo-1610465299261-9e32953c9567?auto=format&fit=crop&w=800&q=80",
  //   type: "SUV",
  //   fuel: "Petrol",
  //   transmission: "Manual",
  //   seats: 5,
  //   body: "Mini SUV",
  //   engine: "1.2L Revotron Petrol Engine",
  //   mileage: "20.09 km/l",
  //   power: "86 bhp",
  //   torque: "113 Nm",
  //   safety: ["5-Star NCAP Rating", "ABS with EBD", "Airbags"],
  //   description:
  //     "Tata Punch offers SUV stance in a compact footprint with rugged build, excellent safety, and versatile performance for city and highways."
  // },
  // {
  //   id: 13,
  //   name: "Renault Triber",
  //   brand: "Renault",
  //   price: "₹6.33 - 8.97 Lakh",
  //   img: "https://images.unsplash.com/photo-1612464990431-ef63a0f6f0bb?auto=format&fit=crop&w=800&q=80",
  //   type: "MPV",
  //   fuel: "Petrol",
  //   transmission: "Manual",
  //   seats: 7,
  //   body: "MPV",
  //   engine: "1.0L Energy Petrol Engine",
  //   mileage: "20 km/l",
  //   power: "71 bhp",
  //   torque: "96 Nm",
  //   safety: ["Dual Airbags", "Rear Sensors", "ABS with EBD"],
  //   description:
  //     "The Renault Triber is a versatile 7-seater MPV that combines practicality, space, and affordability — ideal for large families."
  // },
  // {
  //   id: 14,
  //   name: "Nissan Magnite",
  //   brand: "Nissan",
  //   price: "₹5.99 - 10.86 Lakh",
  //   img: "https://images.unsplash.com/photo-1613929717843-c86db6b1c7c1?auto=format&fit=crop&w=800&q=80",
  //   type: "SUV",
  //   fuel: "Petrol",
  //   transmission: "Automatic",
  //   seats: 5,
  //   body: "Compact SUV",
  //   engine: "1.0L Turbo Petrol Engine",
  //   mileage: "20 km/l",
  //   power: "98 bhp",
  //   torque: "152 Nm",
  //   safety: ["Hill Start Assist", "Dual Airbags", "ABS with EBD"],
  //   description:
  //     "The Nissan Magnite offers bold styling, strong performance, and premium features — one of the most value-packed compact SUVs."
  // },
  // {
  //   id: 15,
  //   name: "Maruti Swift",
  //   brand: "Maruti Suzuki",
  //   price: "₹5.99 - 9.03 Lakh",
  //   img: "https://images.unsplash.com/photo-1606312616074-6cb8c0d6ef13?auto=format&fit=crop&w=800&q=80",
  //   type: "Hatchback",
  //   fuel: "Petrol",
  //   transmission: "Manual",
  //   seats: 5,
  //   body: "Compact",
  //   engine: "1.2L Dual Jet Petrol Engine",
  //   mileage: "23.76 km/l",
  //   power: "89 bhp",
  //   torque: "113 Nm",
  //   safety: ["Dual Airbags", "ABS with EBD", "Reverse Camera"],
  //   description:
  //     "The Maruti Swift is India’s most-loved sporty hatchback — efficient, fun-to-drive, and feature-rich for the modern generation."
  // }
// ];


// export default function DetailsPage() {
//   const { id } = useParams();
//   const numericId = Number(id);

//   const car = useMemo(() => carDetails.find((c) => c.id === numericId), [numericId]);

//   if (!car) {
//     return (
//       <div className="min-h-screen flex items-center justify-center text-gray-500 text-xl">
//         Car details not found 🚫
//       </div>
//     );
//   }

//   return (
//     <main className="bg-gradient-to-b from-gray-50 to-white text-gray-800 min-h-screen overflow-hidden ">
//       {/* ==== Hero Section ==== */}
//       <section className="relative w-full h-[70vh] flex items-center justify-center">
//         <Image
//           src={car.img}
//           alt={car.name}
//           fill
//           priority
//           className="object-cover brightness-75"
//         />

//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="absolute z-10 text-center text-white"
//         >
//           <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">
//             {car.name}
//           </h1>
//           <p className="text-lg md:text-2xl font-medium">{car.brand}</p>
//         </motion.div>

//         <div className="absolute inset-0 bg-black/50" />
//       </section>

//       {/* ==== Overview Section ==== */}
//       <section className="max-w-6xl mx-auto px-6 py-16">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.4 }}
//         >
//           <div className="grid md:grid-cols-2 gap-10">
//             <div>
//               <Image
//                 src={car.img}
//                 alt={car.name}
//                 width={600}
//                 height={400}
//                 className="rounded-2xl shadow-lg object-cover"
//               />
//             </div>

//             <div className="flex flex-col justify-center space-y-4">
//               <h2 className="text-3xl font-semibold text-gray-900">{car.name}</h2>
//               <p className="text-gray-600 text-lg leading-relaxed">
//                 {car.description}
//               </p>

//               <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4 ">
//                 <Spec icon={<Fuel  className="text-blue-600" />} label="Fuel" value={car.fuel} />
//                 <Spec icon={<Settings className="text-blue-600" />} label="Transmission" value={car.transmission} />
//                 <Spec icon={<Gauge   className="text-blue-600"/>} label="Mileage" value={car.mileage} />
//                 <Spec icon={<Users  className="text-blue-600" />} label="Seats" value={`${car.seats} Seater`} />
//                 <Spec icon={<Car   className="text-blue-600"/>} label="Body Type" value={car.body} />
//                 <Spec icon={<Shield   className="text-blue-600"/>} label="Safety" value={`${car.safety.length} Features`} />
//               </div>

//               <div className="mt-8">
//                 <p className="text-2xl font-semibold text-blue-600">{car.price}</p>
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </section>

//       {/* ==== Technical Specs ==== */}
//       <section className="bg-gray-100 py-16 px-6">
//         <div className="max-w-6xl mx-auto">
//           <motion.h3
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             className="text-3xl font-semibold text-center mb-10"
//           >
//             Technical Specifications ⚙️
//           </motion.h3>

//           <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
//             <SpecCard title="Engine" value={car.engine} />
//             <SpecCard title="Power" value={car.power} />
//             <SpecCard title="Torque" value={car.torque} />
//             <SpecCard title="Mileage" value={car.mileage} />
//             <SpecCard title="Fuel Type" value={car.fuel} />
//             <SpecCard title="Transmission" value={car.transmission} />
//           </div>
//         </div>
//       </section>

//       {/* ==== Safety Features ==== */}
//       <section className="max-w-6xl mx-auto px-6 py-16">
//         <motion.h3
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           className="text-3xl font-semibold text-center mb-10"
//         >
//           Safety Features 🛡️
//         </motion.h3>

//         <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-gray-700">
//           {car.safety.map((item, idx) => (
//             <motion.li
//               key={idx}
//               initial={{ opacity: 0, y: 10 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: idx * 0.1 }}
//               className="p-4 rounded-xl bg-white shadow-md hover:shadow-lg transition"
//             >
//               ✅ {item}
//             </motion.li>
//           ))}
//         </ul>
//       </section>

//       {/* ==== Floating CTA ==== */}
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="fixed bottom-6 right-6"
//       >
//         <button className="bg-indigo-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-indigo-700 transition font-semibold">
//           Book Test Drive 🚘
//         </button>
//       </motion.div>
//     </main>
//   );
// }

// // ===== Small Components =====
// const Spec = ({
//   icon,
//   label,
//   value,
// }: {
//   icon: React.ReactNode;
//   label: string;
//   value: string;
// }) => (
//   <div className="flex items-center space-x-2 bg-white p-3 rounded-xl shadow-sm hover:shadow-md transition">
//     <div className="text-indigo-600">{icon}</div>
//     <div>
//       <p className="text-sm text-gray-500">{label}</p>
//       <p className="text-base font-medium">{value}</p>
//     </div>
//   </div>
// );

// const SpecCard = ({ title, value }: { title: string; value: string }) => (
//   <div className="p-5 bg-white rounded-2xl shadow-md hover:shadow-lg transition text-center">
//     <h4 className="text-gray-500 text-sm">{title}</h4>
//     <p className="text-lg font-semibold text-gray-800 mt-1">{value}</p>
//   </div>
// );

"use client";

import React, { useMemo, useState } from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { Shield, Fuel, Gauge, Settings, Users, Car } from "lucide-react";
import Image from "next/image";

export const carDetails = [
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
    engine: "1.0L / 1.2L K-Series Petrol Engine",
    mileage: "23.56 km/l",
    power: "67 - 89 bhp",
    torque: "89 Nm",
    safety: ["Dual Airbags", "ABS with EBD", "Rear Parking Sensors"],
    description:
      "The Maruti Wagon R is a practical city hatchback known for its tall-boy design, high seating, and great mileage. Perfect for daily urban commutes."
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
    engine: "1.2L Revotron Petrol Engine",
    mileage: "20.09 km/l",
    power: "85 bhp",
    torque: "113 Nm",
    safety: ["Dual Airbags", "ABS with EBD", "Corner Stability Control"],
    description:
      "Tata Tiago delivers a safe and comfortable ride with premium interiors and a robust build, making it one of the safest hatchbacks in India."
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
    engine: "1.0L K10C Petrol Engine",
    mileage: "24.39 km/l",
    power: "67 bhp",
    torque: "89 Nm",
    safety: ["Dual Airbags", "ABS with EBD", "Seat Belt Reminder"],
    description:
      "The Alto K10 is India's favorite small car, offering affordability, easy maintenance, and unmatched fuel efficiency for city drives."
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
    engine: "1.0L K10B Petrol Engine",
    mileage: "21.7 km/l",
    power: "67 bhp",
    torque: "89 Nm",
    safety: ["ABS with EBD", "Rear Parking Sensors", "Airbags"],
    description:
      "Maruti S-Presso offers a mini SUV look with compact practicality. It’s easy to drive, efficient, and designed for the urban lifestyle."
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
    engine: "1.2L Kappa Petrol Engine",
    mileage: "20.7 km/l",
    power: "82 bhp",
    torque: "114 Nm",
    safety: ["Rear Camera", "ABS with EBD", "Dual Airbags"],
    description:
      "The Grand i10 Nios brings modern design and a premium cabin. Its smooth drive and high refinement make it a popular choice for families."
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
    engine: "1.2L Revotron Petrol Engine",
    mileage: "18.5 km/l",
    power: "86 bhp",
    torque: "113 Nm",
    safety: ["5-Star Global NCAP", "Dual Airbags", "ABS with EBD"],
    description:
      "Tata Altroz sets a benchmark in safety and design, featuring a 5-star crash rating and premium build quality."
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
    engine: "1.2L Kappa Petrol / 1.0L Turbo GDi Engine",
    mileage: "20.3 km/l",
    power: "83 - 118 bhp",
    torque: "114 - 172 Nm",
    safety: ["6 Airbags", "ESC", "Hill Assist"],
    description:
      "The Hyundai i20 is a premium hatchback offering modern tech, powerful performance, and a comfortable, feature-loaded interior."
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
    engine: "0.8L / 1.0L SCe Petrol Engine",
    mileage: "22.3 km/l",
    power: "68 bhp",
    torque: "91 Nm",
    safety: ["Airbags", "Reverse Parking Camera", "ABS with EBD"],
    description:
      "Renault Kwid is a stylish entry-level hatchback with SUV-inspired design, touchscreen infotainment, and impressive mileage."
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
    engine: "1.2L i-VTEC Petrol Engine",
    mileage: "18.6 km/l",
    power: "90 bhp",
    torque: "110 Nm",
    safety: ["Dual Airbags", "ABS with EBD", "Rear Camera"],
    description:
      "Honda Amaze offers a refined sedan experience with a comfortable cabin, reliable engine, and top-notch Honda build quality."
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
    engine: "1.2L Dual Jet Petrol Engine",
    mileage: "22.3 km/l",
    power: "89 bhp",
    torque: "113 Nm",
    safety: ["6 Airbags", "Hill Hold Assist", "ABS with EBD"],
    description:
      "Toyota Glanza combines Toyota reliability with premium features, offering a refined and efficient driving experience."
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
    engine: "1.2L U2 CRDi Diesel Engine",
    mileage: "25.35 km/l",
    power: "75 bhp",
    torque: "190 Nm",
    safety: ["Dual Airbags", "Rear Sensors", "ABS with EBD"],
    description:
      "The Hyundai Aura is a stylish compact sedan with premium interiors and efficient diesel performance ideal for long drives."
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
    engine: "1.2L Revotron Petrol Engine",
    mileage: "20.09 km/l",
    power: "86 bhp",
    torque: "113 Nm",
    safety: ["5-Star NCAP Rating", "ABS with EBD", "Airbags"],
    description:
      "Tata Punch offers SUV stance in a compact footprint with rugged build, excellent safety, and versatile performance for city and highways."
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
    engine: "1.0L Energy Petrol Engine",
    mileage: "20 km/l",
    power: "71 bhp",
    torque: "96 Nm",
    safety: ["Dual Airbags", "Rear Sensors", "ABS with EBD"],
    description:
      "The Renault Triber is a versatile 7-seater MPV that combines practicality, space, and affordability — ideal for large families."
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
    engine: "1.0L Turbo Petrol Engine",
    mileage: "20 km/l",
    power: "98 bhp",
    torque: "152 Nm",
    safety: ["Hill Start Assist", "Dual Airbags", "ABS with EBD"],
    description:
      "The Nissan Magnite offers bold styling, strong performance, and premium features — one of the most value-packed compact SUVs."
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
    engine: "1.2L Dual Jet Petrol Engine",
    mileage: "23.76 km/l",
    power: "89 bhp",
    torque: "113 Nm",
    safety: ["Dual Airbags", "ABS with EBD", "Reverse Camera"],
    description:
      "The Maruti Swift is India’s most-loved sporty hatchback — efficient, fun-to-drive, and feature-rich for the modern generation."
  }
];

export default function DetailsPage() {
  const { id } = useParams();
  const numericId = Number(id);
  const car = useMemo(() => carDetails.find((c) => c.id === numericId), [numericId]);

  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
  });
  const [formMessage, setFormMessage] = useState("");

  if (!car) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500 text-xl">
        Car details not found 🚫
      </div>
    );
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone || !formData.date) {
      setFormMessage("Please fill in all fields.");
      return;
    }

    setFormMessage("Booking request submitted successfully!");
    setTimeout(() => {
      setIsBookingOpen(false);
      setFormData({ name: "", email: "", phone: "", date: "" });
      setFormMessage("");
    }, 2000);
  };

  return (
    <main className="bg-gradient-to-b from-gray-50 to-white text-gray-800 min-h-screen overflow-hidden">
      {/* ==== Hero Section ==== */}
      <section className="relative w-full h-[70vh] flex items-center justify-center">
        <Image src={car.img} alt={car.name} fill priority className="object-cover brightness-75" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute z-10 text-center text-white"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">{car.name}</h1>
          <p className="text-lg md:text-2xl font-medium">{car.brand}</p>
        </motion.div>
        <div className="absolute inset-0 bg-black/50" />
      </section>

      {/* ==== Overview Section ==== */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <Image
                src={car.img}
                alt={car.name}
                width={600}
                height={400}
                className="rounded-2xl shadow-lg object-cover"
              />
            </div>

            <div className="flex flex-col justify-center space-y-4">
              <h2 className="text-3xl font-semibold text-gray-900">{car.name}</h2>
              <p className="text-gray-600 text-lg leading-relaxed">{car.description}</p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
                <Spec icon={<Fuel  className="text-blue-600"/>} label="Fuel" value={car.fuel} />
                <Spec icon={<Settings  className="text-blue-600"/>} label="Transmission" value={car.transmission} />
                <Spec icon={<Gauge className="text-blue-600" />} label="Mileage" value={car.mileage} />
                <Spec icon={<Users  className="text-blue-600"/>} label="Seats" value={`${car.seats} Seater`} />
                <Spec icon={<Car  className="text-blue-600"/>} label="Body Type" value={car.body} />
                <Spec icon={<Shield className="text-blue-600" />} label="Safety" value={`${car.safety.length} Features`} />
              </div>

              <p className="text-2xl font-semibold text-blue-600 mt-6">{car.price}</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ==== Technical Specs ==== */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-semibold text-center mb-10"
          >
            Technical Specifications ⚙️
          </motion.h3>
          <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
            <SpecCard title="Engine" value={car.engine} />
            <SpecCard title="Power" value={car.power} />
            <SpecCard title="Torque" value={car.torque} />
            <SpecCard title="Mileage" value={car.mileage} />
            <SpecCard title="Fuel Type" value={car.fuel} />
            <SpecCard title="Transmission" value={car.transmission} />
          </div>
        </div>
      </section>

      {/* ==== Safety Features ==== */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-semibold text-center mb-10"
        >
          Safety Features 🛡️
        </motion.h3>
        <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-gray-700">
          {car.safety.map((item, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="p-4 rounded-xl bg-white shadow-md hover:shadow-lg transition"
            >
              ✅ {item}
            </motion.li>
          ))}
        </ul>
      </section>

      {/* ==== Floating CTA ==== */}
      <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsBookingOpen(true)}
          className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition font-semibold"
        >
          Book Test Drive 🚘
        </button>
      </motion.div>

      {/* ==== Booking Modal ==== */}
      {isBookingOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-[1000]">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-3xl max-w-md w-full p-8 shadow-xl relative"
          >
            <h2 className="text-2xl font-bold mb-6 text-center">Book Your Test Drive</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-blue-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-blue-500"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-blue-500"
              />
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-blue-500"
              />

              {formMessage && (
                <p
                  className={`text-center ${
                    formMessage.includes("successfully") ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {formMessage}
                </p>
              )}

              <div className="flex justify-between items-center mt-6">
                <button
                  type="button"
                  onClick={() => setIsBookingOpen(false)}
                  className="px-6 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  Submit
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </main>
  );
}

/* ===== Small Components ===== */
const Spec = ({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) => (
  <div className="flex items-center space-x-2 bg-white p-3 rounded-xl shadow-sm hover:shadow-md transition">
    <div className="text-indigo-600">{icon}</div>
    <div>
      <p className="text-sm text-gray-500">{label}</p>
      <p className="text-base font-medium">{value}</p>
    </div>
  </div>
);

const SpecCard = ({ title, value }: { title: string; value: string }) => (
  <div className="p-5 bg-white rounded-2xl shadow-md hover:shadow-lg transition text-center">
    <h4 className="text-gray-500 text-sm">{title}</h4>
    <p className="text-lg font-semibold text-gray-800 mt-1">{value}</p>
  </div>
);
