"use client";

import { useRouter, useParams } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Complete electricCars data
const electricCars = [
  {
    id: 1,
    name: "Tesla Model S Plaid",
    type: "Luxury Sedan",
    brand: "Tesla",
    fuel: "Electric",
    price: "$89,990",
    range: "396 miles",
    acceleration: "0-60 mph: 1.99s",
    topSpeed: "200 mph",
    charging: "15 mins for 200 miles",
    img: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&h=500&fit=crop",
    description: "The quickest car in production with tri-motor all-wheel drive and advanced battery technology.",
    features: [
      "Tri-Motor AWD",
      "1,020 horsepower",
      "390 miles range",
      "0-60 mph in 1.99s",
      "Top Speed 200 mph",
      "Plaid Powertrain"
    ],
    specifications: {
      battery: "100 kWh",
      power: "1,020 hp",
      torque: "1,050 lb-ft",
      seating: "5 adults",
      cargo: "28 cu ft",
      weight: "4,766 lbs"
    }
  },
  {
    id: 2,
    name: "Porsche Taycan Turbo S",
    type: "Sports Sedan",
    brand: "Porsche",
    fuel: "Electric",
    price: "$185,000",
    range: "227 miles",
    acceleration: "0-60 mph: 2.6s",
    topSpeed: "161 mph",
    charging: "22.5 mins for 80%",
    img: "https://images.unsplash.com/photo-1606011334315-027e4b6d370c?w=800&h=500&fit=crop",
    description: "The pure expression of a Porsche electric sports car with exceptional performance and luxury.",
    features: [
      "Dual Motor AWD",
      "750 horsepower",
      "227 miles range",
      "0-60 mph in 2.6s",
      "Porsche Active Suspension",
      "Performance Battery Plus"
    ],
    specifications: {
      battery: "93.4 kWh",
      power: "750 hp",
      torque: "774 lb-ft",
      seating: "4 adults",
      cargo: "17 cu ft",
      weight: "5,132 lbs"
    }
  },
  {
    id: 3,
    name: "Audi e-tron GT",
    type: "Gran Turismo",
    brand: "Audi",
    fuel: "Electric",
    price: "$99,900",
    range: "238 miles",
    acceleration: "0-60 mph: 3.9s",
    topSpeed: "152 mph",
    charging: "22.5 mins for 80%",
    img: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=500&fit=crop",
    description: "A perfect blend of breathtaking design and formidable electric performance.",
    features: [
      "Dual Motor Quattro",
      "522 horsepower",
      "238 miles range",
      "0-60 mph in 3.9s",
      "800-volt architecture",
      "Three-chamber air suspension"
    ],
    specifications: {
      battery: "93 kWh",
      power: "522 hp",
      torque: "472 lb-ft",
      seating: "4 adults",
      cargo: "15 cu ft",
      weight: "5,139 lbs"
    }
  },
  {
    id: 4,
    name: "Ford Mustang Mach-E GT",
    type: "Electric SUV",
    brand: "Ford",
    fuel: "Electric",
    price: "$59,900",
    range: "270 miles",
    acceleration: "0-60 mph: 3.8s",
    topSpeed: "124 mph",
    charging: "45 mins for 80%",
    img: "https://images.unsplash.com/photo-1627404760619-3b4d58c56d73?w=800&h=500&fit=crop",
    description: "The all-electric SUV that delivers Mustang's signature performance with zero emissions.",
    features: [
      "Dual Motor AWD",
      "480 horsepower",
      "270 miles range",
      "0-60 mph in 3.8s",
      "MagneRide Damping",
      "Extended Range Battery"
    ],
    specifications: {
      battery: "88 kWh",
      power: "480 hp",
      torque: "600 lb-ft",
      seating: "5 adults",
      cargo: "29 cu ft",
      weight: "4,920 lbs"
    }
  },
  {
    id: 5,
    name: "Hyundai Ioniq 6",
    type: "Streamlined Sedan",
    brand: "Hyundai",
    fuel: "Electric",
    price: "$41,600",
    range: "361 miles",
    acceleration: "0-60 mph: 5.1s",
    topSpeed: "115 mph",
    charging: "18 mins for 80%",
    img: "https://images.unsplash.com/photo-1695048138202-21d1e4ec45f5?w=800&h=500&fit=crop",
    description: "Aerodynamic electric sedan with exceptional range and futuristic design.",
    features: [
      "Single Motor RWD",
      "225 horsepower",
      "361 miles range",
      "0-60 mph in 5.1s",
      "Ultra-fast charging",
      "Solar roof panel"
    ],
    specifications: {
      battery: "77.4 kWh",
      power: "225 hp",
      torque: "258 lb-ft",
      seating: "5 adults",
      cargo: "11.2 cu ft",
      weight: "4,250 lbs"
    }
  },
  {
    id: 6,
    name: "Rivian R1T",
    type: "Adventure Truck",
    brand: "Rivian",
    fuel: "Electric",
    price: "$73,000",
    range: "314 miles",
    acceleration: "0-60 mph: 3.0s",
    topSpeed: "115 mph",
    charging: "20 mins for 140 miles",
    img: "https://images.unsplash.com/photo-1632765859135-4fe7c6beb541?w=800&h=500&fit=crop",
    description: "The world's first electric adventure truck built for off-road capability and daily driving.",
    features: [
      "Quad Motor AWD",
      "835 horsepower",
      "314 miles range",
      "0-60 mph in 3.0s",
      "Tank Turn capability",
      "Air suspension"
    ],
    specifications: {
      battery: "135 kWh",
      power: "835 hp",
      torque: "908 lb-ft",
      seating: "5 adults",
      cargo: "11 cu ft + gear tunnel",
      weight: "7,148 lbs"
    }
  }
];

interface BookingData {
  name: string;
  email: string;
  phone: string;
  date: string;
  message: string;
}

export default function ElectricCarDetails() {
  const router = useRouter();
  const params = useParams();
  const carId = parseInt(params.id as string);
  const car = electricCars.find(c => c.id === carId);

  const [showBookingForm, setShowBookingForm] = useState(false);
  const [bookingData, setBookingData] = useState<BookingData>({
    name: "",
    email: "",
    phone: "",
    date: "",
    message: ""
  });
  const [activeImage, setActiveImage] = useState(0);

  if (!car) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Car Not Found</h1>
          <button
            onClick={() => router.push('/electric-cars')}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Electric Cars
          </button>
        </div>
      </div>
    );
  }

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Booking confirmed for ${car.name}! We'll contact you soon.`);
    setShowBookingForm(false);
    setBookingData({
      name: "",
      email: "",
      phone: "",
      date: "",
      message: ""
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setBookingData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Additional images for gallery
  const carImages = [
    car.img,
    "https://images.unsplash.com/photo-1592198084033-aade902d1aae?w=800&h=500&fit=crop",
    "https://images.unsplash.com/photo-1606011334315-027e4b6d370c?w=800&h=500&fit=crop",
    "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=500&fit=crop"
  ];

  // Extract acceleration time safely
  const accelerationTime = car.acceleration.split(':')[1]?.trim() || car.acceleration;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 mt-15">
    

      {/* Hero Section */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12"
          >
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="relative rounded-2xl overflow-hidden bg-white p-4 shadow-xl">
                <motion.img
                  key={activeImage}
                  src={carImages[activeImage]}
                  alt={car.name}
                  className="w-full h-80 md:h-96 object-cover rounded-xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    Electric
                  </span>
                </div>
              </div>
              
              {/* Thumbnail Gallery */}
              <div className="grid grid-cols-4 gap-3">
                {carImages.map((img, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveImage(index)}
                    className={`relative rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                      activeImage === index ? 'border-blue-500' : 'border-gray-200'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${car.name} view ${index + 1}`}
                      className="w-full h-20 object-cover"
                    />
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Car Info */}
            <div className="space-y-6">
              <div>
                <span className="text-blue-600 font-semibold">{car.brand}</span>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
                  {car.name}
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  {car.description}
                </p>
              </div>

              {/* Price and Key Specs */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="text-3xl md:text-4xl font-bold text-gray-900">{car.price}</div>
                    <div className="text-gray-500">Starting price</div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-600">{car.range}</div>
                    <div className="text-gray-500">Electric Range</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{accelerationTime}</div>
                    <div className="text-sm text-gray-500">0-60 mph</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">{car.topSpeed}</div>
                    <div className="text-sm text-gray-500">Top Speed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">{car.charging}</div>
                    <div className="text-sm text-gray-500">Fast Charge</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">{car.specifications.power}</div>
                    <div className="text-sm text-gray-500">Power</div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 pt-6"
              >
                <motion.button
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 10px 30px rgba(37, 99, 235, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowBookingForm(true)}
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl flex-1 flex items-center justify-center gap-2 relative overflow-hidden group"
                >
                  {/* Animated Background Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  
                  <svg className="w-5 h-5 z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span className="z-10">Book Test Drive</span>
                </motion.button>
                
                <motion.button
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 10px 30px rgba(5, 150, 105, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => router.push("/Contactus")}
                  className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl flex-1 flex items-center justify-center gap-2 relative overflow-hidden group"
                >
                  {/* Animated Background Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  
                  <svg className="w-5 h-5 z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="z-10">Contact Dealer</span>
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features & Specifications */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Features */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {car.features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors group"
                  >
                    <div className="w-2 h-2 bg-blue-500 rounded-full group-hover:scale-150 transition-transform"></div>
                    <span className="text-gray-700 group-hover:text-gray-900">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Specifications */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Technical Specifications</h2>
              <div className="space-y-4">
                {Object.entries(car.specifications).map(([key, value], index) => (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex justify-between items-center p-4 bg-gray-50 rounded-xl hover:bg-green-50 transition-colors group"
                  >
                    <span className="text-gray-600 capitalize group-hover:text-gray-900">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </span>
                    <span className="font-semibold text-gray-900">{value}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

  

      {/* Booking Form Modal */}
      <AnimatePresence>
        {showBookingForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowBookingForm(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">Test Drive Booking</h2>
                    <p className="text-gray-600">Schedule your {car.name}</p>
                  </div>
                  <button
                    onClick={() => setShowBookingForm(false)}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Car Info */}
                <div className="bg-gray-50 rounded-xl p-4 mb-6 border border-gray-200">
                  <div className="flex items-center gap-4">
                    <img
                      src={car.img}
                      alt={car.name}
                      className="w-16 h-12 object-cover rounded-lg"
                    />
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{car.name}</h3>
                      <p className="text-blue-600 font-semibold">{car.price}</p>
                      <p className="text-gray-600 text-sm">{car.brand} • {car.type}</p>
                    </div>
                  </div>
                </div>

                {/* Booking Form */}
                <form onSubmit={handleBookingSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={bookingData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={bookingData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={bookingData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Date</label>
                    <input
                      type="date"
                      name="date"
                      value={bookingData.date}
                      onChange={handleInputChange}
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Additional Message</label>
                    <textarea
                      name="message"
                      value={bookingData.message}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Any special requirements or questions?"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Confirm Booking
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}