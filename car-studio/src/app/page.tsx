// // // "use client";

// // // import { motion } from "framer-motion";
// // // import Link from "next/link";
// // // import Hero from "./Components/Hero";
// // // import { useState, useMemo } from "react";

// // // export default function HomePage() {
// // // const cars = [
// // //   { id: 1, name: "Swift", type: "Hatchback", brand: "Maruti Suzuki", price: "₹6 Lakh", img: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=500&h=300&fit=crop" },
// // //   { id: 2, name: "Baleno", type: "Hatchback", brand: "Maruti Suzuki", price: "₹7 Lakh", img: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=500&h=300&fit=crop" },
// // //   { id: 3, name: "Creta", type: "SUV", brand: "Hyundai", price: "₹15 Lakh", img: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=500&h=300&fit=crop" },
// // //   { id: 4, name: "Venue", type: "SUV", brand: "Hyundai", price: "₹12 Lakh", img: "https://images.unsplash.com/photo-1621135802920-133df287f89c?w=500&h=300&fit=crop" },
// // //   { id: 5, name: "Thar", type: "SUV", brand: "Mahindra", price: "₹14 Lakh", img: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=500&h=300&fit=crop" },
// // //   { id: 6, name: "XUV700", type: "SUV", brand: "Mahindra", price: "₹17 Lakh", img: "https://images.unsplash.com/photo-1621135802920-133df287f89c?w=500&h=300&fit=crop" },
// // //   { id: 7, name: "Nexon EV", type: "Electric", brand: "Tata", price: "₹13 Lakh", img: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=500&h=300&fit=crop" },
// // //   { id: 8, name: "Tigor EV", type: "Electric", brand: "Tata", price: "₹12 Lakh", img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=500&h=300&fit=crop" },
// // //   { id: 9, name: "Dzire", type: "Sedan", brand: "Maruti Suzuki", price: "₹7.5 Lakh", img: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=500&h=300&fit=crop" },
// // //   { id: 10, name: "Verna", type: "Sedan", brand: "Hyundai", price: "₹10 Lakh", img: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=500&h=300&fit=crop" },
// // //   { id: 11, name: "Ciaz", type: "Sedan", brand: "Maruti Suzuki", price: "₹9 Lakh", img: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=500&h=300&fit=crop" },
// // //   { id: 12, name: "Harrier", type: "SUV", brand: "Tata", price: "₹16 Lakh", img: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=500&h=300&fit=crop" },
// // //   { id: 13, name: "Altroz", type: "Hatchback", brand: "Tata", price: "₹7 Lakh", img: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=500&h=300&fit=crop" },
// // //   { id: 14, name: "Scorpio", type: "SUV", brand: "Mahindra", price: "₹15 Lakh", img: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=500&h=300&fit=crop" },
// // //   { id: 15, name: "KUV100", type: "Hatchback", brand: "Mahindra", price: "₹6.5 Lakh", img: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=500&h=300&fit=crop" },
// // // ];


// // //   const reviews = [
// // //     { id: 1, name: "Rahul Sharma", img: "img/review1.avif", rating: 5, comment: "Amazing service! Found my dream car easily. Highly recommend CarStudio!" },
// // //     { id: 2, name: "Priya Singh", img: "img/review3.avif", rating: 4, comment: "Great variety of cars and very user-friendly interface." },
// // //     { id: 3, name: "Amit Verma", img: "img/review2.avif", rating: 5, comment: "Excellent experience! The search filters made it super easy." },
// // //   ];

// // //   const [searchKeyword, setSearchKeyword] = useState("");
// // //   const [selectedCategory, setSelectedCategory] = useState("");
// // //   const [selectedBrand, setSelectedBrand] = useState("");

// // //   const filteredCars = useMemo(() => {
// // //     return cars.filter((car) => {
// // //       const matchesKeyword =
// // //         searchKeyword === "" ||
// // //         car.name.toLowerCase().includes(searchKeyword.toLowerCase()) ||
// // //         car.brand.toLowerCase().includes(searchKeyword.toLowerCase()) ||
// // //         car.type.toLowerCase().includes(searchKeyword.toLowerCase()) ||
// // //         car.fuel.toLowerCase().includes(searchKeyword.toLowerCase()) ||
// // //         car.price.toLowerCase().includes(searchKeyword.toLowerCase());

// // //       const matchesCategory = selectedCategory === "" || car.type.toLowerCase() === selectedCategory.toLowerCase();

// // //       const matchesBrand = selectedBrand === "" || car.brand.toLowerCase().includes(selectedBrand.toLowerCase());

// // //       return matchesKeyword && matchesCategory && matchesBrand;
// // //     });
// // //   }, [searchKeyword, selectedCategory, selectedBrand]);

// // //   const handleReset = () => {
// // //     setSearchKeyword("");
// // //     setSelectedCategory("");
// // //     setSelectedBrand("");
// // //   };

// // //   const containerVariants = {
// // //     hidden: { opacity: 0 },
// // //     visible: {
// // //       opacity: 1,
// // //       transition: {
// // //         staggerChildren: 0.15,
// // //       },
// // //     },
// // //   };

// // //   const itemVariants = {
// // //     hidden: { y: 40, opacity: 0, scale: 0.9 },
// // //     visible: {
// // //       y: 0,
// // //       opacity: 1,
// // //       scale: 1,
// // //       transition: {
// // //         duration: 0.6,
// // //         ease: "easeOut",
// // //       },
// // //     },
// // //   };

// // //   const getCardGradient = (type: string) => {
// // //     switch (type.toLowerCase()) {
// // //       case "suv":
// // //         return "from-gray-900 via-gray-800 to-black";
// // //       case "sedan":
// // //         return "from-blue-900 via-blue-800 to-indigo-900";
// // //       case "hatchback":
// // //         return "from-emerald-900 via-emerald-800 to-teal-900";
// // //       case "electric":
// // //         return "from-purple-900 via-purple-800 to-violet-900";
// // //       default:
// // //         return "from-gray-900 via-gray-800 to-black";
// // //     }
// // //   };

// // //   const getPriceColor = (price: string) => {
// // //     const priceNum = parseInt(price.replace(/[^0-9]/g, ""));
// // //     if (priceNum > 1500000) return "text-yellow-400";
// // //     if (priceNum > 1000000) return "text-emerald-400";
// // //     return "text-blue-400";
// // //   };

// // //   return (
// // //     <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 text-gray-900">
// // //       {/* Hero Section */}
// // //       <Hero />

// // //       {/* Search Bar Section */}
// // //       <section className="container mx-auto px-4 py-8">
// // //         <motion.div
// // //           initial={{ opacity: 0, y: 20 }}
// // //           animate={{ opacity: 1, y: 0 }}
// // //           transition={{ duration: 0.6 }}
// // //           className="w-full max-w-5xl bg-white/80 backdrop-blur-lg shadow-2xl rounded-2xl px-6 py-6 mx-auto border border-white/20"
// // //         >
// // //           <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
// // //             {/* Keyword Input */}
// // //             <div className="flex-1 min-w-[200px] w-full">
// // //               <div className="relative">
// // //                 <input
// // //                   type="text"
// // //                   placeholder="Search by model, brand, type, fuel, price..."
// // //                   value={searchKeyword}
// // //                   onChange={(e) => setSearchKeyword(e.target.value)}
// // //                   className="w-full border border-gray-300 bg-white/80 backdrop-blur-sm px-6 py-4 rounded-xl outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 placeholder-gray-500"
// // //                 />
// // //                 <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
// // //                   <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
// // //                   </svg>
// // //                 </div>
// // //               </div>
// // //             </div>

// // //             {/* Category Dropdown */}
// // //             <div className="min-w-[160px] w-full lg:w-auto">
// // //               <div className="relative">
// // //                 <select
// // //                   value={selectedCategory}
// // //                   onChange={(e) => setSelectedCategory(e.target.value)}
// // //                   className="w-full border border-gray-300 bg-white/80 backdrop-blur-sm px-6 py-4 rounded-xl outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 appearance-none"
// // //                 >
// // //                   <option value="">All Categories</option>
// // //                   <option value="suv">SUV</option>
// // //                   <option value="sedan">Sedan</option>
// // //                   <option value="hatchback">Hatchback</option>
// // //                   <option value="electric">Electric</option>
// // //                 </select>
// // //                 <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
// // //                   <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
// // //                   </svg>
// // //                 </div>
// // //               </div>
// // //             </div>

// // //             {/* Brand Dropdown */}
// // //             <div className="min-w-[160px] w-full lg:w-auto">
// // //               <div className="relative">
// // //                 <select
// // //                   value={selectedBrand}
// // //                   onChange={(e) => setSelectedBrand(e.target.value)}
// // //                   className="w-full border border-gray-300 bg-white/80 backdrop-blur-sm px-6 py-4 rounded-xl outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 appearance-none"
// // //                 >
// // //                   <option value="">All Brands</option>
// // //                   <option value="maruti suzuki">Maruti Suzuki</option>
// // //                   <option value="hyundai">Hyundai</option>
// // //                   <option value="mahindra">Mahindra</option>
// // //                   <option value="tata">Tata</option>
// // //                 </select>
// // //                 <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
// // //                   <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
// // //                   </svg>
// // //                 </div>
// // //               </div>
// // //             </div>

// // //             {/* Reset Button */}
// // //             <div className="w-full lg:w-auto">
// // //               <motion.button
// // //                 whileHover={{ scale: 1.05, backgroundColor: "#374151" }}
// // //                 whileTap={{ scale: 0.95 }}
// // //                 type="button"
// // //                 onClick={handleReset}
// // //                 className="w-full lg:w-auto flex items-center justify-center bg-gray-700 text-white px-8 py-4 rounded-xl hover:bg-gray-800 transition-all duration-300 font-semibold shadow-lg"
// // //               >
// // //                 <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
// // //                 </svg>
// // //                 Reset
// // //               </motion.button>
// // //             </div>
// // //           </div>

// // //           {/* Results Count */}
// // //           <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-4 text-center text-gray-600 font-medium">
// // //             Showing {filteredCars.length} of {cars.length} premium vehicles
// // //           </motion.div>
// // //         </motion.div>
// // //       </section>

// // //       {/* Featured Cars Section */}
// // //       <section className="container mx-auto px-6 py-8">
// // //         <motion.div
// // //           initial={{ opacity: 0, y: 30 }}
// // //           whileInView={{ opacity: 1, y: 0 }}
// // //           transition={{ duration: 0.8 }}
// // //           viewport={{ once: true }}
// // //           className="text-center mb-16"
// // //         >
// // //           <motion.h2
// // //             initial={{ opacity: 0, y: 20 }}
// // //             whileInView={{ opacity: 1, y: 0 }}
// // //             transition={{ delay: 0.2 }}
// // //             className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r bg-blue-600 bg-clip-text text-transparent"
// // //           >
// // //             Premium Collection
// // //           </motion.h2>
// // //           <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.4 }} className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
// // //             Discover exclusive luxury vehicles curated for the discerning automobile enthusiast
// // //           </motion.p>
// // //         </motion.div>

// // //         {filteredCars.length === 0 ? (
// // //           <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-20">
// // //             <div className="text-gray-500 text-xl mb-6 font-light">No luxury vehicles match your criteria</div>
// // //             <motion.button
// // //               whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(37, 99, 235, 0.3)" }}
// // //               whileTap={{ scale: 0.95 }}
// // //               onClick={handleReset}
// // //               className="bg-gradient-to-r bg-gray-600 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-2xl"
// // //             >
// // //               Reset Filters
// // //             </motion.button>
// // //           </motion.div>
// // //         ) : (
// // //           <motion.div
// // //             variants={containerVariants}
// // //             initial="hidden"
// // //             whileInView="visible"
// // //             viewport={{ once: true, margin: "-50px" }}
// // //             className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4"
// // //           >
// // //             {filteredCars.map((car, index) => (
// // //               <motion.div
// // //                 key={car.id}
// // //                 variants={itemVariants}
// // //                 custom={index}
// // //                 whileHover={{ y: -10, scale: 1.03, transition: { duration: 0.3, ease: "easeOut" } }}
// // //                 className="group relative max-w-xs mx-auto bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg border border-gray-200/40 hover:border-blue-400/50 transition-all duration-300 backdrop-blur-sm overflow-hidden"
// // //               >
// // //                 {/* Image */}
// // //                 <div className="relative overflow-hidden h-35">
// // //                   <motion.img
// // //                     src={car.img}
// // //                     alt={car.name}
// // //                     className="w-full h-90px object-cover transition-transform duration-500 group-hover:scale-105"
// // //                     whileHover={{ scale: 1.05 }}
// // //                     transition={{ duration: 0.5 }}
// // //                   />
// // //                   {/* Gradient Overlay */}
// // //                   <div className={`absolute inset-0 bg-gradient-to-t ${getCardGradient(car.type)}/80 via-transparent to-transparent opacity-70`} />
// // //                 </div>

// // //                 {/* Car info minimal */}
// // //                 <div className="p-4 bg-white/90 backdrop-blur-sm">
// // //                   <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-700 transition-colors truncate">{car.name}</h3>
// // //                   <p className="text-sm text-gray-600 truncate">{car.brand}</p>

// // //                   <div className={`mt-3 font-bold text-lg ${getPriceColor(car.price)}`}>{car.price}</div>

// // //                   <Link href={`/DetailsCarHome/${car.id}`}
// // //                     className="mt-4 block w-full text-center bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
// // //                       View Details
                    
// // //                   </Link>
// // //                 </div>
// // //               </motion.div>
// // //             ))}
// // //           </motion.div>
// // //         )}
// // //       </section>

// // //       {/* Enhanced Reviews Section */}
// // //       <section className="bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 py-20 border-t border-gray-200/50">
// // //         <div className="container mx-auto px-4">
// // //           <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-16">
// // //             <motion.h2
// // //               initial={{ opacity: 0, y: 20 }}
// // //               whileInView={{ opacity: 1, y: 0 }}
// // //               transition={{ delay: 0.2 }}
// // //               className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r  bg-blue-600 bg-clip-text text-transparent"
// // //             >
// // //               Client Testimonials
// // //             </motion.h2>
// // //             <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.4 }} className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
// // //               Experience the excellence that our valued clients cherish
// // //             </motion.p>
// // //           </motion.div>

// // //           <motion.div
// // //             variants={containerVariants}
// // //             initial="hidden"
// // //             whileInView="visible"
// // //             viewport={{ once: true, margin: "-50px" }}
// // //             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
// // //           >
// // //             {reviews.map((review, index) => (
// // //               <motion.div
// // //                 key={review.id}
// // //                 variants={itemVariants}
// // //                 custom={index}
// // //                 whileHover={{ y: -12, scale: 1.03, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
// // //                 className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 border border-white/50 hover:border-blue-200/50 transition-all duration-500 group relative overflow-hidden"
// // //               >
// // //                 {/* Background Gradient */}
// // //                 <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

// // //                 <div className="relative z-10">
// // //                   {/* Review Header */}
// // //                   <div className="flex items-center gap-5 mb-6">
// // //                     <motion.div whileHover={{ scale: 1.1, rotate: 5 }} className="relative">
// // //                       <img
// // //                         src={review.img}
// // //                         alt={review.name}
// // //                         className="w-20 h-20 rounded-2xl object-cover border-4 border-white shadow-lg group-hover:border-blue-400 transition-colors duration-300"
// // //                       />
// // //                       <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full border-2 border-white flex items-center justify-center shadow-lg">
// // //                         <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
// // //                           <path
// // //                             fillRule="evenodd"
// // //                             d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
// // //                             clipRule="evenodd"
// // //                           />
// // //                         </svg>
// // //                       </div>
// // //                     </motion.div>
// // //                     <div>
// // //                       <h3 className="font-bold text-xl text-gray-900 mb-2">{review.name}</h3>
// // //                       <div className="flex items-center gap-1">
// // //                         {Array.from({ length: 5 }).map((_, i) => (
// // //                           <motion.svg
// // //                             key={i}
// // //                             initial={{ scale: 0, rotate: -180 }}
// // //                             animate={{ scale: 1, rotate: 0 }}
// // //                             transition={{ delay: i * 0.1 + index * 0.2 }}
// // //                             className={`w-6 h-6 ${i < review.rating ? "text-yellow-500 fill-current drop-shadow" : "text-gray-300"}`}
// // //                             viewBox="0 0 20 20"
// // //                           >
// // //                             <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
// // //                           </motion.svg>
// // //                         ))}
// // //                       </div>
// // //                     </div>
// // //                   </div>

// // //                   {/* Review Comment */}
// // //                   <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 + index * 0.1 }} className="text-gray-700 leading-relaxed text-lg mb-6 font-light italic">
// // //                     "{review.comment}"
// // //                   </motion.p>

// // //                   {/* Verified Badge */}
// // //                   <div className="flex items-center gap-3 text-sm text-gray-500 border-t border-gray-100 pt-4">
// // //                     <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
// // //                       <path
// // //                         fillRule="evenodd"
// // //                         d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
// // //                         clipRule="evenodd"
// // //                       />
// // //                     </svg>
// // //                     <span className="font-medium">Verified Luxury Purchase</span>
// // //                   </div>
// // //                 </div>

// // //                 {/* Corner Accents */}
// // //                 <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-purple-400/50 rounded-tl-xl"></div>
// // //                 <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-purple-400/50 rounded-tr-xl"></div>
// // //                 <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-purple-400/50 rounded-bl-xl"></div>
// // //                 <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-purple-400/50 rounded-br-xl"></div>
// // //               </motion.div>
// // //             ))}
// // //           </motion.div>
// // //         </div>
// // //       </section>
// // //     </main>
// // //   );
// // // }










// // "use client";

// // import React, { useState, useMemo } from "react";
// // import { motion } from "framer-motion";
// // import { Search } from "lucide-react";
// // import Hero from "./Components/Hero";

// // export default function CarStudioLanding() {
// //   // ======= Animation Variants =======
// //   const containerVariants = {
// //     hidden: { opacity: 0, y: 30 },
// //     visible: {
// //       opacity: 1,
// //       y: 0,
// //       transition: {
// //         duration: 0.6,
// //         when: "beforeChildren",
// //         staggerChildren: 0.2,
// //       },
// //     },
// //   };

// //   const itemVariants = {
// //     hidden: { opacity: 0, y: 40 },
// //     visible: (index: number) => ({
// //       opacity: 1,
// //       y: 0,
// //       transition: { duration: 0.6, delay: index * 0.1 },
// //     }),
// //   };

// //   // ======= Featured Cars =======
// //   const cars = [
// //     { id: 1, name: "Swift GT", brand: "Maruti Suzuki", price: "₹8.5 Lakh", img: "https://images.unsplash.com/photo-1542362567-b07e54358753?w=1200&q=80" },
// //     { id: 2, name: "Creta X", brand: "Hyundai", price: "₹12.2 Lakh", img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=80" },
// //     { id: 3, name: "Scorpio Pro", brand: "Mahindra", price: "₹15.9 Lakh", img: "https://images.unsplash.com/photo-1511914265873-7f7f24be8d87?w=1200&q=80" },
// //   ];

// //   // ======= Client Reviews =======
// //   const reviews = [
// //     {
// //       id: 1,
// //       name: "Aarav Mehta",
// //       img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80",
// //       rating: 5,
// //       comment: "Car Studio made my luxury purchase seamless! The staff were extremely professional and guided me through every step.",
// //     },
// //     {
// //       id: 2,
// //       name: "Riya Kapoor",
// //       img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&q=80",
// //       rating: 5,
// //       comment: "Absolutely stunning collection! I love how easy it is to explore cars with detailed specifications and visuals.",
// //     },
// //     {
// //       id: 3,
// //       name: "Karan Singh",
// //       img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80",
// //       rating: 4,
// //       comment: "My experience with Car Studio was fantastic. Their attention to design and detail truly stands out.",
// //     },
// //   ];

// //   // ======= Explore Inventory Section =======
// //   const carInventory = [
// //     {
// //       id: 1,
// //       name: "Swift GT Turbo",
// //       brand: "Maruti Suzuki",
// //       category: "Hatchback",
// //       fuel: "Petrol",
// //       price: 850000,
// //       img: "https://images.unsplash.com/photo-1542362567-b07e54358753?w=1600&q=80",
// //     },
// //     {
// //       id: 2,
// //       name: "Hyundai Creta SX",
// //       brand: "Hyundai",
// //       category: "SUV",
// //       fuel: "Diesel",
// //       price: 1520000,
// //       img: "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=1600&q=80",
// //     },
// //     {
// //       id: 3,
// //       name: "Mahindra Scorpio N",
// //       brand: "Mahindra",
// //       category: "SUV",
// //       fuel: "Diesel",
// //       price: 1780000,
// //       img: "https://images.unsplash.com/photo-1511914265873-7f7f24be8d87?w=1600&q=80",
// //     },
// //     {
// //       id: 4,
// //       name: "Tata Nexon EV",
// //       brand: "Tata",
// //       category: "Electric",
// //       fuel: "Electric",
// //       price: 1650000,
// //       img: "https://images.unsplash.com/photo-1549924231-f129b911e442?w=1600&q=80",
// //     },
// //   ];

// //   const categories = ["All", "SUV", "Sedan", "Hatchback", "Electric"];
// //   const brands = ["All", "Maruti Suzuki", "Hyundai", "Mahindra", "Tata"];
// //   const fuels = ["All", "Petrol", "Diesel", "Electric"];

// //   const [selectedCategory, setSelectedCategory] = useState("All");
// //   const [selectedBrand, setSelectedBrand] = useState("All");
// //   const [selectedFuel, setSelectedFuel] = useState("All");
// //   const [searchTerm, setSearchTerm] = useState("");

// //   const filteredCars = useMemo(() => {
// //     return carInventory.filter((car) => {
// //       const matchesCategory = selectedCategory === "All" || car.category === selectedCategory;
// //       const matchesBrand = selectedBrand === "All" || car.brand === selectedBrand;
// //       const matchesFuel = selectedFuel === "All" || car.fuel === selectedFuel;
// //       const matchesSearch = car.name.toLowerCase().includes(searchTerm.toLowerCase());
// //       return matchesCategory && matchesBrand && matchesFuel && matchesSearch;
// //     });
// //   }, [selectedCategory, selectedBrand, selectedFuel, searchTerm]);

// //   // ======= Page Layout =======
// //   return (
// //     <div className="min-h-screen bg-gray-50 text-gray-800 scroll-smooth">
// //       {/* Hero Section */}
// //       <Hero />




// //       {/* Explore Inventory Section */}
// //       <section id="inventory" className="max-w-7xl mx-auto px-6 py-20">
// //         <motion.h2
// //           initial={{ opacity: 0, y: 20 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           className="text-center text-5xl font-bold text-blue-600 mb-10"
// //         >
// //           Explore Our Inventory
// //         </motion.h2>

// //         {/* Filters */}
// //         <div className="flex flex-col md:flex-row justify-between items-center gap-6 bg-white/70 backdrop-blur-xl p-6 rounded-2xl shadow-lg mb-10">
// //           <div className="flex flex-wrap gap-4 justify-center md:justify-start">
// //             <select
// //               value={selectedCategory}
// //               onChange={(e) => setSelectedCategory(e.target.value)}
// //               className="p-3 rounded-lg border border-gray-300 bg-white shadow-sm"
// //             >
// //               {categories.map((c) => (
// //                 <option key={c}>{c}</option>
// //               ))}
// //             </select>
// //             <select
// //               value={selectedBrand}
// //               onChange={(e) => setSelectedBrand(e.target.value)}
// //               className="p-3 rounded-lg border border-gray-300 bg-white shadow-sm"
// //             >
// //               {brands.map((b) => (
// //                 <option key={b}>{b}</option>
// //               ))}
// //             </select>
// //             <select
// //               value={selectedFuel}
// //               onChange={(e) => setSelectedFuel(e.target.value)}
// //               className="p-3 rounded-lg border border-gray-300 bg-white shadow-sm"
// //             >
// //               {fuels.map((f) => (
// //                 <option key={f}>{f}</option>
// //               ))}
// //             </select>
// //           </div>

// //           <div className="relative w-full md:w-1/3">
// //             <Search className="absolute left-3 top-3 text-gray-400" size={20} />
// //             <input
// //               type="text"
// //               placeholder="Search by model..."
// //               value={searchTerm}
// //               onChange={(e) => setSearchTerm(e.target.value)}
// //               className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 shadow-sm"
// //             />
// //           </div>
// //         </div>

// //         {/* Inventory Grid */}
// //         {filteredCars.length === 0 ? (
// //           <div className="text-center text-gray-500 mt-16 text-lg">No cars found matching your criteria.</div>
// //         ) : (
// //           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
// //             {filteredCars.map((car, index) => (
// //               <motion.div
// //                 key={car.id}
// //                 initial={{ opacity: 0, y: 50 }}
// //                 whileInView={{ opacity: 1, y: 0 }}
// //                 transition={{ duration: 0.6, delay: index * 0.1 }}
// //                 whileHover={{
// //                   y: -10,
// //                   scale: 1.03,
// //                   boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
// //                 }}
// //                 className="bg-white/80 backdrop-blur-lg rounded-3xl overflow-hidden shadow-xl border border-white/50 transition-all"
// //               >
// //                 <img src={car.img} alt={car.name} className="w-full h-56 object-cover" />
// //                 <div className="p-6 space-y-3">
// //                   <div className="flex justify-between items-center">
// //                     <h3 className="text-xl font-bold text-gray-900">{car.name}</h3>
// //                     <span className="text-blue-600 font-semibold text-lg">
// //                       ₹{(car.price / 100000).toFixed(2)} Lakh
// //                     </span>
// //                   </div>
// //                   <p className="text-gray-500 text-sm">
// //                     {car.brand} • {car.category} • {car.fuel}
// //                   </p>
             
// //                 </div>
// //               </motion.div>
// //             ))}
// //           </div>
// //         )}
// //       </section>
// //       {/* About Section */}
// //       <section className="relative overflow-hidden" id="about">
// //         <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
// //           <motion.div initial={{ x: -40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
// //             <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
// //               Crafting Experiences — <span className="text-blue-600">One Car at a Time</span>
// //             </h2>
// //             <p className="mt-4 text-gray-600 max-w-xl">
// //               Car Studio is a curated showroom and design playground for automotive lovers. Explore modern listings,
// //               high-quality imagery and immersive details designed to convert curious browsers into test drivers.
// //             </p>

// //             <div className="mt-6 flex flex-wrap gap-3">
// //               <a href="#inventory">
// //                 <button className="px-5 py-3 rounded-lg bg-blue-600 text-white shadow hover:scale-105 transition">
// //                   Explore Inventory
// //                 </button>
// //               </a>
// //             </div>
// //           </motion.div>

// //           <motion.div initial={{ scale: 0.98, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6 }}>
// //             <div className="rounded-3xl overflow-hidden shadow-2xl">
// //               <img
// //                 src="https://images.unsplash.com/photo-1502877338535-766e1452684a?w=1600&q=80"
// //                 alt="Hero car"
// //                 className="w-full h-72 md:h-96 object-cover"
// //               />
// //             </div>
// //           </motion.div>
// //         </div>
// //       </section>

// //       {/* Featured Cars */}
// //       <section id="showcase" className="max-w-7xl mx-auto px-6 py-16">
// //         <div className="text-center">
// //           <h3 className="text-5xl font-bold text-blue-600">Featured Collection</h3>
// //           <p className="text-gray-600 mt-2">Handpicked cars with premium details and photography.</p>
// //         </div>

// //         <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
// //           {cars.map((car) => (
// //             <motion.article
// //               key={car.id}
// //               whileHover={{ y: -6 }}
// //               className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-2xl transition"
// //             >
// //               <img src={car.img} alt={car.name} className="w-full h-48 object-cover" />
// //               <div className="p-4">
// //                 <div className="flex items-center justify-between">
// //                   <div>
// //                     <div className="font-semibold">{car.name}</div>
// //                     <div className="text-xs text-gray-500">{car.brand}</div>
// //                   </div>
// //                   <div className="text-indigo-600 font-bold">{car.price}</div>
// //                 </div>
// //               </div>
// //             </motion.article>
// //           ))}
// //         </div>
// //       </section>

// //       {/* Client Testimonials */}
// //       <section className="bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 py-20 border-t border-gray-200/50">
// //         <div className="container mx-auto px-4">
// //           <motion.div
// //             initial={{ opacity: 0, y: 30 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.8 }}
// //             className="text-center mb-16"
// //           >
// //             <h2 className="text-5xl font-bold mb-6 text-blue-600">Client Testimonials</h2>
// //             <p className="text-gray-600 text-xl max-w-3xl mx-auto">
// //               Experience the excellence that our valued clients cherish
// //             </p>
// //           </motion.div>

// //           <motion.div
// //             variants={containerVariants}
// //             initial="hidden"
// //             whileInView="visible"
// //             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
// //           >
// //             {reviews.map((review, index) => (
// //               <motion.div
// //                 key={review.id}
// //                 variants={itemVariants}
// //                 custom={index}
// //                 whileHover={{
// //                   y: -12,
// //                   scale: 1.03,
// //                   boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
// //                 }}
// //                 className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 border border-white/50"
// //               >
// //                 <div className="flex items-center gap-5 mb-6">
// //                   <img
// //                     src={review.img}
// //                     alt={review.name}
// //                     className="w-20 h-20 rounded-2xl object-cover border-4 border-white shadow-lg"
// //                   />
// //                   <div>
// //                     <h3 className="font-bold text-xl text-gray-900 mb-1">{review.name}</h3>
// //                     <div className="flex items-center gap-1">
// //                       {Array.from({ length: 5 }).map((_, i) => (
// //                         <svg
// //                           key={i}
// //                           className={`w-5 h-5 ${
// //                             i < review.rating ? "text-yellow-500" : "text-gray-300"
// //                           }`}
// //                           fill="currentColor"
// //                           viewBox="0 0 20 20"
// //                         >
// //                           <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
// //                         </svg>
// //                       ))}
// //                     </div>
// //                   </div>
// //                 </div>
// //                 <p className="text-gray-700 italic">"{review.comment}"</p>
// //               </motion.div>
// //             ))}
// //           </motion.div>
// //         </div>
// //       </section>

// //     </div>
// //   );
// // }



// "use client";

// import React, { useState, useMemo } from "react";
// import { motion } from "framer-motion";
//  import Link from "next/link";

// import { Search, Sparkles, Star, ShieldCheck, Car } from "lucide-react";
// import Hero from "./Components/Hero";

// // ======= Car Data =======
// const featuredCars = [
//   {
//     id: 1,
//     name: "Tata Curvv EV",
//     price: "₹20.5 Lakh (Expected)",
//     img: "/img/about.avif",
//   },
//   {
//     id: 2,
//     name: "Hyundai Creta 2025",
//     price: "₹15.4 Lakh",
//     img: "/img/about.avif",
//   },
//   {
//     id: 3,
//     name: "Mahindra XUV.e8",
//     price: "₹28.2 Lakh",
//     img: "/img/about.avif",
//   },
// ];

// const carInventory = [
//   {
//     id: 1,
//     name: "Swift GT Turbo",
//     brand: "Maruti Suzuki",
//     category: "Hatchback",
//     fuel: "Petrol",
//     price: 850000,
//     img: "https://images.unsplash.com/photo-1542362567-b07e54358753?w=1600&q=80",
//   },
//   {
//     id: 2,
//     name: "Hyundai Creta SX",
//     brand: "Hyundai",
//     category: "SUV",
//     fuel: "Diesel",
//     price: 1520000,
//     img: "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=1600&q=80",
//   },
//   {
//     id: 3,
//     name: "Mahindra Scorpio N",
//     brand: "Mahindra",
//     category: "SUV",
//     fuel: "Diesel",
//     price: 1780000,
//     img: "https://images.unsplash.com/photo-1511914265873-7f7f24be8d87?w=1600&q=80",
//   },
//   {
//     id: 4,
//     name: "Tata Nexon EV",
//     brand: "Tata",
//     category: "Electric",
//     fuel: "Electric",
//     price: 1650000,
//     img: "https://images.unsplash.com/photo-1549924231-f129b911e442?w=1600&q=80",
//   },
// ];

// const reviews = [
//   {
//     id: 1,
//     name: "Aarav Mehta",
//     img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80",
//     rating: 5,
//     comment:
//       "Car Studio made my luxury purchase seamless! The staff were extremely professional and guided me through every step.",
//   },
//   {
//     id: 2,
//     name: "Riya Kapoor",
//     img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&q=80",
//     rating: 5,
//     comment:
//       "Absolutely stunning collection! I love how easy it is to explore cars with detailed specifications and visuals.",
//   },
//   {
//     id: 3,
//     name: "Karan Singh",
//     img: "/img/review2.avif",
//     rating: 4,
//     comment:
//       "My experience with Car Studio was fantastic. Their attention to design and detail truly stands out.",
//   },
// ];

// export default function CarStudioLanding() {
//   const categories = ["All", "SUV", "Sedan", "Hatchback", "Electric"];
//   const brands = ["All", "Maruti Suzuki", "Hyundai", "Mahindra", "Tata"];
//   const fuels = ["All", "Petrol", "Diesel", "Electric"];

//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [selectedBrand, setSelectedBrand] = useState("All");
//   const [selectedFuel, setSelectedFuel] = useState("All");
//   const [searchTerm, setSearchTerm] = useState("");

//   const filteredCars = useMemo(() => {
//     return carInventory.filter((car) => {
//       const matchesCategory = selectedCategory === "All" || car.category === selectedCategory;
//       const matchesBrand = selectedBrand === "All" || car.brand === selectedBrand;
//       const matchesFuel = selectedFuel === "All" || car.fuel === selectedFuel;
//       const matchesSearch = car.name.toLowerCase().includes(searchTerm.toLowerCase());
//       return matchesCategory && matchesBrand && matchesFuel && matchesSearch;
//     });
//   }, [selectedCategory, selectedBrand, selectedFuel, searchTerm]);

//   return (
//     <main className="overflow-hidden bg-gray-50 text-gray-800">
//       {/* ===== Hero Section ===== */}
// < Hero />

//       {/* ===== Explore Inventory ===== */}
//       <section id="inventory" className="max-w-7xl mx-auto px-6 py-20">
//         <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center text-5xl font-bold text-blue-600 mb-10">
//           Explore Our Inventory
//         </motion.h2>

//         {/* Filters */}
//         <div className="flex flex-col md:flex-row justify-between items-center gap-6 bg-white/70 backdrop-blur-xl p-6 rounded-2xl shadow-lg mb-10">
//           <div className="flex flex-wrap gap-4 justify-center md:justify-start">
//             {[{ label: "Category", options: categories, value: selectedCategory, setter: setSelectedCategory },
//               { label: "Brand", options: brands, value: selectedBrand, setter: setSelectedBrand },
//               { label: "Fuel", options: fuels, value: selectedFuel, setter: setSelectedFuel }].map(({ options, value, setter }, i) => (
//               <select key={i} value={value} onChange={(e) => setter(e.target.value)} className="p-3 rounded-lg border border-gray-300 bg-white shadow-sm">
//                 {options.map((o) => (
//                   <option key={o}>{o}</option>
//                 ))}
//               </select>
//             ))}
//           </div>
//           <div className="relative w-full md:w-1/3">
//             <Search className="absolute left-3 top-3 text-gray-400" size={20} />
//             <input
//               type="text"
//               placeholder="Search by model..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 shadow-sm"
//             />
//           </div>
//         </div>

//         {/* Grid */}
//         {filteredCars.length === 0 ? (
//           <div className="text-center text-gray-500 mt-16 text-lg">No cars found matching your criteria.</div>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
//             {filteredCars.map((car, index) => (
//               <motion.div
//                 key={car.id}
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 whileHover={{ y: -10, scale: 1.03 }}
//                 className="bg-white/80 backdrop-blur-lg rounded-3xl overflow-hidden shadow-xl transition-all"
//               >
//                 <img src={car.img} alt={car.name} className="w-full h-56 object-cover" />
//                 <div className="p-6 space-y-3">
//                   <div className="flex justify-between items-center">
//                     <h3 className="text-xl font-bold text-gray-900">{car.name}</h3>
//                     <span className="text-blue-600 font-semibold text-lg">
//                       ₹{(car.price / 100000).toFixed(2)} Lakh
//                     </span>
//                   </div>
//                   <p className="text-gray-500 text-sm">
//                     {car.brand} • {car.category} • {car.fuel}
//                   </p>
//                 <Link href={`/DetailsHome/${car.id}`}
//                     className=" block w-full text-center bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
//                       View Details
                    
//                   </Link>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         )}
//       </section>

//       {/* ===== Featured Cars ===== */}
//       <section className="bg-gray-100 py-20">
//         <div className="max-w-7xl mx-auto px-6 text-center">
//           <h2 className="text-4xl font-bold mb-14">
//             Featured <span className="text-blue-500">Cars</span>
//           </h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
//             {featuredCars.map((car) => (
//               <motion.div
//                 key={car.id}
//                 whileHover={{ scale: 1.03 }}
//                 className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition"
//               >
//                 <img src={car.img} alt={car.name} className="h-64 w-full object-cover" />
//                 <div className="p-6">
//                   <h3 className="text-xl font-semibold mb-2">{car.name}</h3>
//                   <p className="text-gray-500 mb-4">{car.price}</p>
//                  <Link href={`/DetailsHome/${car.id}`}
//                     className=" block w-full text-center bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
//                       View Details
                    
//                   </Link>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ===== About Section ===== */}
//       <section className="max-w-7xl mx-auto px-6 py-20">
//         <div className="grid md:grid-cols-2 gap-10 items-center">
//           <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
//             <img
//               src="/img/about.avif"
//               alt="About Car Studio"
//               className="rounded-2xl shadow-xl"
//             />
//           </motion.div>
//           <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
//             <h2 className="text-4xl font-bold mb-4">
//               About <span className="text-blue-500">Car Studio</span>
//             </h2>
//             <p className="text-gray-600 mb-6 leading-relaxed">
//               At Car Studio, we redefine automotive excellence. From futuristic
//               electric vehicles to powerful SUVs, we bring the best cars from
//               top manufacturers across the globe. Our goal is to connect
//               customers with innovation, safety, and luxury — all in one place.
//             </p>
//             <Link href={"/About"} className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg">
//               Discover More
//             </Link>
//           </motion.div>
//         </div>
//       </section>

//       {/* ===== Why Choose Us ===== */}
//       <section className="bg-blue-50 py-20">
//         <div className="max-w-7xl mx-auto px-6 text-center">
//           <h2 className="text-4xl font-bold mb-14">
//             Why Choose <span className="text-blue-500">Car Studio?</span>
//           </h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
//             {[{ icon: Sparkles, title: "Luxury Designs", desc: "Premium and futuristic car models." },
//               { icon: Star, title: "Top Rated Brands", desc: "Only the most trusted manufacturers." },
//               { icon: ShieldCheck, title: "Verified Listings", desc: "100% genuine and inspected cars." },
//               { icon: Car, title: "Latest Models", desc: "Stay ahead with the newest releases." },
//             ].map(({ icon: Icon, title, desc }) => (
//               <div key={title} className="bg-white shadow-md p-8 rounded-2xl hover:shadow-xl transition">
//                 <Icon className="w-10 h-10 mx-auto mb-4 text-blue-500" />
//                 <h3 className="text-xl font-semibold mb-2">{title}</h3>
//                 <p className="text-gray-600">{desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ===== Client Testimonials ===== */}
//       <section className="bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 py-20 border-t border-gray-200/50">
//         <div className="max-w-7xl mx-auto px-6 text-center">
//           <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-5xl font-bold mb-10 text-blue-600">
//             Client Testimonials
//           </motion.h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//             {reviews.map((r) => (
//               <motion.div
//                 key={r.id}
//                 whileHover={{ scale: 1.05 }}
//                 className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 border border-white/50 shadow-md"
//               >
//                 <div className="flex items-center gap-5 mb-6">
//                   <img src={r.img} alt={r.name} className="w-20 h-20 rounded-2xl object-cover border-4 border-white shadow-lg" />
//                   <div className="text-left">
//                     <h3 className="font-bold text-xl">{r.name}</h3>
//                     <div className="flex">
//                       {Array.from({ length: 5 }).map((_, i) => (
//                         <svg key={i} className={`w-5 h-5 ${i < r.rating ? "text-yellow-500" : "text-gray-300"}`} fill="currentColor" viewBox="0 0 20 20">
//                           <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                         </svg>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//                 <p className="text-gray-700 italic">"{r.comment}"</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }
 "use client";


import React from "react";
import Home from "./Home/page";

export default function HomePage() {
  return (
    <div>
      
      <Home />
    </div>
  );
}
