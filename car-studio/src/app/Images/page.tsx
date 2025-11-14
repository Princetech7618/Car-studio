"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const carGallery = [
  // Electric Cars
  {
    id: 1,
    name: "Tesla Model S",
    type: "Electric",
    images: [
      "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1621135802920-133df287f89c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1592198084033-aade902d1aae?w=800&h=600&fit=crop"
    ]
  },
  {
    id: 2,
    name: "Porsche Taycan",
    type: "Electric",
    images: [
      "https://images.unsplash.com/photo-1606011334315-027e4b6d370c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1606011320221-4df73ee1907f?w=800&h=600&fit=crop"
    ]
  },
  {
    id: 3,
    name: "Audi e-tron GT",
    type: "Electric",
    images: [
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1621135802920-133df287f89c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=800&h=600&fit=crop"
    ]
  },

  // Petrol Cars
  {
    id: 4,
    name: "Mercedes AMG GT",
    type: "Petrol",
    images: [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1592198084033-aade902d1aae?w=800&h=600&fit=crop"
    ]
  },
  {
    id: 5,
    name: "BMW M4",
    type: "Petrol",
    images: [
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1621135802920-133df287f89c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=800&h=600&fit=crop"
    ]
  },
  {
    id: 6,
    name: "Audi R8",
    type: "Petrol",
    images: [
      "https://images.unsplash.com/photo-1606011334315-027e4b6d370c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1606011320221-4df73ee1907f?w=800&h=600&fit=crop"
    ]
  },

  // Diesel Cars
  {
    id: 7,
    name: "Land Rover Defender",
    type: "Diesel",
    images: [
      "https://images.unsplash.com/photo-1627404760619-3b4d58c56d73?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1621135802920-133df287f89c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=800&h=600&fit=crop"
    ]
  },
  {
    id: 8,
    name: "Toyota Land Cruiser",
    type: "Diesel",
    images: [
      "https://images.unsplash.com/photo-1695048138202-21d1e4ec45f5?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1621135802920-133df287f89c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=800&h=600&fit=crop"
    ]
  },
  {
    id: 9,
    name: "Ford F-150",
    type: "Diesel",
    images: [
      "https://images.unsplash.com/photo-1632765859135-4fe7c6beb541?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1621135802920-133df287f89c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=800&h=600&fit=crop"
    ]
  },

  // Classic Cars
  {
    id: 10,
    name: "Ford Mustang 1969",
    type: "Classic",
    images: [
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1621135802920-133df287f89c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=800&h=600&fit=crop"
    ]
  },
  {
    id: 11,
    name: "Chevrolet Camaro",
    type: "Classic",
    images: [
      "https://images.unsplash.com/photo-1632661331327-59ec66390a99?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1621135802920-133df287f89c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=800&h=600&fit=crop"
    ]
  },
  {
    id: 12,
    name: "Porsche 911 Classic",
    type: "Classic",
    images: [
      "https://images.unsplash.com/photo-1606011334315-027e4b6d370c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1606011320221-4df73ee1907f?w=800&h=600&fit=crop"
    ]
  },

  // Sports Cars
  {
    id: 13,
    name: "Lamborghini Aventador",
    type: "Sports",
    images: [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1592198084033-aade902d1aae?w=800&h=600&fit=crop"
    ]
  },
  {
    id: 14,
    name: "Ferrari 488",
    type: "Sports",
    images: [
      "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1621135802920-133df287f89c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1592198084033-aade902d1aae?w=800&h=600&fit=crop"
    ]
  },
  {
    id: 15,
    name: "McLaren 720S",
    type: "Sports",
    images: [
      "https://images.unsplash.com/photo-1606011334315-027e4b6d370c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1606011320221-4df73ee1907f?w=800&h=600&fit=crop"
    ]
  },

  // Luxury Cars
  {
    id: 16,
    name: "Rolls Royce Phantom",
    type: "Luxury",
    images: [
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1621135802920-133df287f89c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=800&h=600&fit=crop"
    ]
  },
  {
    id: 17,
    name: "Bentley Continental",
    type: "Luxury",
    images: [
      "https://images.unsplash.com/photo-1627404760619-3b4d58c56d73?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1621135802920-133df287f89c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=800&h=600&fit=crop"
    ]
  },
  {
    id: 18,
    name: "Mercedes S-Class",
    type: "Luxury",
    images: [
      "https://images.unsplash.com/photo-1695048138202-21d1e4ec45f5?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1621135802920-133df287f89c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=800&h=600&fit=crop"
    ]
  }
];

export default function CarGalleryPage() {
  const [selectedCar, setSelectedCar] = useState<typeof carGallery[0] | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [filter, setFilter] = useState("all");

  const filteredCars = filter === "all" 
    ? carGallery 
    : carGallery.filter(car => car.type.toLowerCase() === filter.toLowerCase());

  const openLightbox = (car: typeof carGallery[0], imageIndex: number = 0) => {
    setSelectedCar(car);
    setSelectedImageIndex(imageIndex);
  };

  const closeLightbox = () => {
    setSelectedCar(null);
    setSelectedImageIndex(0);
  };

  const nextImage = () => {
    if (selectedCar) {
      setSelectedImageIndex((prev) => 
        prev === selectedCar.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedCar) {
      setSelectedImageIndex((prev) => 
        prev === 0 ? selectedCar.images.length - 1 : prev - 1
      );
    }
  };

  // Get unique types for filter
  const types = ["all", ...new Set(carGallery.map(car => car.type))];

  // Type colors for badges
  const typeColors: { [key: string]: string } = {
    Electric: "bg-green-500",
    Petrol: "bg-red-500",
    Diesel: "bg-blue-500",
    Classic: "bg-yellow-500",
    Sports: "bg-purple-500",
    Luxury: "bg-pink-500"
  };

  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 text-white overflow-hidden mt-5">
        <div className="absolute inset-0 bg-black/60"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")'
          }}
        ></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500 rounded-full filter blur-3xl opacity-20"
          />
          <motion.div
            animate={{
              x: [0, -80, 0],
              y: [0, 60, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
              delay: 2
            }}
            className="absolute top-3/4 right-1/3 w-40 h-40 bg-blue-500 rounded-full filter blur-3xl opacity-15"
          />
          <motion.div
            animate={{
              x: [0, 120, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
              delay: 1
            }}
            className="absolute bottom-1/4 left-3/4 w-28 h-28 bg-blue-400 rounded-full filter blur-3xl opacity-25"
          />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            CAR  GALLERY
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl  mb-8 max-w-4xl mx-auto leading-relaxed"
          >
            Explore stunning visuals of all types of cars - Electric, Petrol, Diesel, Classic & More
          </motion.p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white/10 backdrop-blur-sm sticky top-0 z-30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {types.map((type) => (
              <motion.button
                key={type}
                whileHover={{ 
                  scale: 1.05,
                  y: -2
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(type)}
                className={`px-5 py-2.5 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                  filter === type
                    ? "bg-blue-500 text-white shadow-lg shadow-cyan-500/30"
                    : "bg-white/10 text-blue-600 hover:bg-white/20"
                }`}
              >
                {type === "all" ? (
                  "All Cars"
                ) : (
                  <>
                    <div className={`w-2 h-2 rounded-full ${typeColors[type]}`}></div>
                    {type}
                  </>
                )}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredCars.map((car, index) => (
            <motion.div
              key={car.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="group relative bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 hover:border-blue-500 transition-all duration-500 shadow-2xl hover:shadow-cyan-500/20 cursor-pointer"
              onClick={() => openLightbox(car, 0)}
            >
              {/* Main Image */}
              <div className="relative h-64 overflow-hidden">
                <motion.img
                  src={car.images[0]}
                  alt={car.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  whileHover={{ scale: 1.1 }}
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Type Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`${typeColors[car.type]} text-white px-3 py-1 rounded-full text-sm font-bold backdrop-blur-sm`}>
                    {car.type}
                  </span>
                </div>

                {/* Image Count */}
                <div className="absolute top-4 right-4">
                  <span className="bg-black/50 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                    {car.images.length}
                  </span>
                </div>

                {/* Hover Overlay Content */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <motion.div
                    initial={{ scale: 0.8 }}
                    whileHover={{ scale: 1 }}
                    className="text-center"
                  >
                    <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                      <h3 className="text-white font-bold text-xl mb-2">{car.name}</h3>
                      <div className="flex justify-center space-x-2">
                        {car.images.slice(0, 3).map((_, idx) => (
                          <div key={idx} className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              </div>

              {/* Thumbnail Strip */}
              <div className="p-3 bg-white/5">
                <div className="grid grid-cols-3 gap-2">
                  {car.images.slice(0, 3).map((image, imgIndex) => (
                    <motion.div
                      key={imgIndex}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="relative aspect-video rounded-lg overflow-hidden cursor-pointer border-2 border-transparent hover:border-blue-600 transition-all duration-300"
                      onClick={(e) => {
                        e.stopPropagation();
                        openLightbox(car, imgIndex);
                      }}
                    >
                      <img
                        src={image}
                        alt={`${car.name} ${imgIndex + 1}`}
                        className="w-full h-full object-cover"
                      />
                      {imgIndex === 2 && car.images.length > 3 && (
                        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                          <span className="text-white font-bold text-sm">+{car.images.length - 3}</span>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredCars.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-16"
          >
            <div className="text-blue-600 text-xl mb-4">No cars found for this category</div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter("all")}
              className="bg-blue-500 text-white px-8 py-3 rounded-full hover:bg-blue-600 transition-colors shadow-lg"
            >
              Show All Cars
            </motion.button>
          </motion.div>
        )}
      </section>

      {/* Lightbox Modal - Simplified */}
      <AnimatePresence>
        {selectedCar && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, rotateY: 10 }}
              animate={{ scale: 1, opacity: 1, rotateY: 0 }}
              exit={{ scale: 0.9, opacity: 0, rotateY: -10 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative max-w-6xl w-full max-h-[90vh] rounded-3xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Main Image */}
              <div className="relative h-96 md:h-[500px] lg:h-[600px]">
                <motion.img
                  key={selectedImageIndex}
                  src={selectedCar.images[selectedImageIndex]}
                  alt={selectedCar.name}
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                />

                {/* Navigation Arrows */}
                <motion.button
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(0,0,0,0.8)" }}
                  whileTap={{ scale: 0.9 }}
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-4 rounded-full backdrop-blur-sm border border-white/20"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(0,0,0,0.8)" }}
                  whileTap={{ scale: 0.9 }}
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-4 rounded-full backdrop-blur-sm border border-white/20"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.button>

                {/* Close Button */}
                <motion.button
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(0,0,0,0.8)" }}
                  whileTap={{ scale: 0.9 }}
                  onClick={closeLightbox}
                  className="absolute top-4 right-4 bg-black/50 text-white p-3 rounded-full backdrop-blur-sm border border-white/20"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.button>

                {/* Image Counter */}
                <div className="absolute bottom-4 left-4 bg-black/50 text-white px-4 py-2 rounded-full text-sm backdrop-blur-sm border border-white/20">
                  {selectedImageIndex + 1} / {selectedCar.images.length}
                </div>

                {/* Car Name */}
                <div className="absolute bottom-4 right-4 bg-black/50 text-white px-4 py-2 rounded-full text-sm backdrop-blur-sm border border-white/20">
                  {selectedCar.name}
                </div>
              </div>

              {/* Thumbnail Strip */}
              <div className="p-4 bg-gray-900/80 backdrop-blur-sm">
                <div className="flex gap-3 overflow-x-auto pb-2">
                  {selectedCar.images.map((image, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedImageIndex(index)}
                      className={`flex-shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                        selectedImageIndex === index
                          ? "border-blue-400 shadow-lg shadow-cyan-400/50"
                          : "border-transparent hover:border-blue-500"
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${selectedCar.name} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}