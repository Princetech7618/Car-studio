

"use client";
import { useParams } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const carData = [
  {
    id: 1,
    name: "Hyundai Creta",
    brand: "Hyundai",
    type: "SUV",
    price: "₹8.5 Lakh",
    originalPrice: "₹15 Lakh",
    rating: 4.5,
    reviews: 128,
    fuel: "Petrol",
    transmission: "Automatic",
    year: 2020,
    mileage: "18 kmpl",
    driven: "35,000 km",
    owner: "First Owner",
    condition: "Excellent",
    seats: 5,
    image:
      "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=500&h=300&fit=crop",
    location: "Delhi",
    features: ["Sunroof", "Touchscreen", "Camera", "Alloy Wheels"],
    description:
      "Well maintained SUV with all modern features. Single owner with complete service history.",
    verified: true,
    discount: "43% off",
  },
  {
    id: 2,
    name: "Maruti Swift",
    brand: "Maruti Suzuki",
    type: "Hatchback",
    price: "₹4.2 Lakh",
    originalPrice: "₹8.5 Lakh",
    rating: 4.3,
    reviews: 95,
    fuel: "Petrol",
    transmission: "Manual",
    year: 2019,
    mileage: "23 kmpl",
    driven: "28,500 km",
    owner: "First Owner",
    condition: "Very Good",
    seats: 5,
    image:
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=500&h=300&fit=crop",
    location: "Mumbai",
    features: ["Music System", "Power Windows", "AC", "Airbags"],
    description:
      "Fuel efficient and reliable hatchback. Well maintained with regular servicing.",
    verified: true,
    discount: "51% off",
  },
  {
    id: 3,
    name: "Tata Nexon EV",
    brand: "Tata",
    type: "Electric",
    price: "₹9.5 Lakh",
    originalPrice: "₹16 Lakh",
    rating: 4.7,
    reviews: 67,
    fuel: "Electric",
    transmission: "Automatic",
    year: 2021,
    mileage: "312 km/charge",
    driven: "15,200 km",
    owner: "First Owner",
    condition: "Like New",
    seats: 5,
    image:
      "https://images.unsplash.com/photo-1563720223480-2dde5ab32b2d?w=500&h=300&fit=crop",
    location: "Bangalore",
    features: ["Fast Charging", "Sunroof", "Touchscreen", "Camera"],
    description:
      "Eco-friendly electric SUV with great range. Low running costs and excellent condition.",
    verified: true,
    discount: "41% off",
  },
  {
    id: 4,
    name: "Mahindra Thar",
    brand: "Mahindra",
    type: "SUV",
    price: "₹10.5 Lakh",
    originalPrice: "₹17.5 Lakh",
    rating: 4.6,
    reviews: 89,
    fuel: "Diesel",
    transmission: "Manual",
    year: 2020,
    mileage: "15 kmpl",
    driven: "32,000 km",
    owner: "Second Owner",
    condition: "Good",
    seats: 4,
    image:
      "https://images.unsplash.com/photo-1623476408627-3e62a10a8bfb?w=500&h=300&fit=crop",
    location: "Pune",
    features: ["4WD", "Off-road", "Touchscreen", "Alloy Wheels"],
    description:
      "Rugged off-road SUV for adventure enthusiasts. Well maintained with all accessories.",
    verified: true,
    discount: "40% off",
  },
  {
    id: 5,
    name: "Hyundai Verna",
    brand: "Hyundai",
    type: "Sedan",
    price: "₹7.8 Lakh",
    originalPrice: "₹13 Lakh",
    rating: 4.4,
    reviews: 72,
    fuel: "Petrol",
    transmission: "Automatic",
    year: 2018,
    mileage: "20 kmpl",
    driven: "45,000 km",
    owner: "First Owner",
    condition: "Very Good",
    seats: 5,
    image:
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=500&h=300&fit=crop",
    location: "Chennai",
    features: ["Sunroof", "Leather Seats", "Camera", "Auto AC"],
    description:
      "Premium sedan with luxury features. Single owner with complete service records.",
    verified: true,
    discount: "40% off",
  },
  {
    id: 6,
    name: "Kia Seltos",
    brand: "Kia",
    type: "SUV",
    price: "₹8.2 Lakh",
    originalPrice: "₹14 Lakh",
    rating: 4.5,
    reviews: 156,
    fuel: "Petrol",
    transmission: "Automatic",
    year: 2020,
    mileage: "17 kmpl",
    driven: "30,500 km",
    owner: "First Owner",
    condition: "Excellent",
    seats: 5,
    image:
      "https://images.unsplash.com/photo-1621135802920-133df287f89c?w=500&h=300&fit=crop",
    location: "Hyderabad",
    features: ["Sunroof", "Bose Audio", "Ventilated Seats", "Camera"],
    description:
      "Feature-packed SUV with premium audio system. Well maintained and accident-free.",
    verified: true,
    discount: "41% off",
  },
  {
    id: 7,
    name: "Toyota Innova",
    brand: "Toyota",
    type: "MPV",
    price: "₹15.5 Lakh",
    originalPrice: "₹25 Lakh",
    rating: 4.8,
    reviews: 203,
    fuel: "Diesel",
    transmission: "Automatic",
    year: 2019,
    mileage: "14 kmpl",
    driven: "55,000 km",
    owner: "First Owner",
    condition: "Good",
    seats: 7,
    image:
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=500&h=300&fit=crop",
    location: "Kolkata",
    features: ["Spacious", "Comfort", "AC Vents", "Captain Seats"],
    description:
      "Perfect family car with ample space and comfort. Reliable and well-maintained.",
    verified: true,
    discount: "38% off",
  },
  {
    id: 8,
    name: "Honda City",
    brand: "Honda",
    type: "Sedan",
    price: "₹6.5 Lakh",
    originalPrice: "₹12 Lakh",
    rating: 4.6,
    reviews: 134,
    fuel: "Petrol",
    transmission: "Manual",
    year: 2017,
    mileage: "18 kmpl",
    driven: "48,000 km",
    owner: "Second Owner",
    condition: "Good",
    seats: 5,
    image:
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=500&h=300&fit=crop",
    location: "Gurgaon",
    features: ["Sunroof", "Touchscreen", "Camera", "Alloy Wheels"],
    description:
      "Reliable sedan with excellent fuel efficiency. Well maintained with service history.",
    verified: true,
    discount: "46% off",
  },
];

export default function CarDetailsPage() {
  const { id } = useParams();  
  const car = carData.find((c) => c.id === Number(id));

  const [showBooking, setShowBooking] = useState(false);
  const [bookingForm, setBookingForm] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    message: "",
  });

  const handleChange = (e) =>
    setBookingForm({ ...bookingForm, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowBooking(false);
    setBookingForm({
      name: "",
      email: "",
      phone: "",
      city: "",
      message: "",
    });
    alert("Booking request submitted!");
  };

  if (!car) {
    return (
      <div className="p-8 text-center text-red-600 font-semibold">
        Car not found.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-100 flex flex-col items-center py-8">
      {/* Main Card */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, type: "spring" }}
        className="bg-white max-w-2xl w-full rounded-2xl shadow-2xl p-6 md:p-10"
      >
        <img
          src={car.image}
          alt={car.name}
          className="rounded-xl mb-6 w-full h-56 object-cover"
        />

        <h2 className="text-2xl sm:text-3xl font-bold mb-2">{car.name}</h2>

        <div className="flex flex-wrap items-center gap-2 text-blue-700 font-semibold text-lg mb-4">
          <span className="bg-blue-200 px-3 py-1 rounded-xl">{car.price}</span>
          {car.discount && (
            <span className="bg-green-100 text-green-600 px-2 py-1 rounded-md text-sm">
              {car.discount}
            </span>
          )}
          <span className="text-gray-500 text-sm">
            ({car.rating} ★ {car.reviews} reviews)
          </span>
        </div>

        <p className="mb-3 text-gray-700">{car.description}</p>

        {/* Details */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-gray-600 text-sm mb-6">
          <div><strong>Brand:</strong> {car.brand}</div>
          <div><strong>Type:</strong> {car.type}</div>
          <div><strong>Fuel:</strong> {car.fuel}</div>
          <div><strong>Transmission:</strong> {car.transmission}</div>
          <div><strong>Year:</strong> {car.year}</div>
          <div><strong>Seats:</strong> {car.seats}</div>
          <div><strong>Owner:</strong> {car.owner}</div>
          <div><strong>Condition:</strong> {car.condition}</div>
          <div><strong>Mileage:</strong> {car.mileage}</div>
          <div><strong>Driven:</strong> {car.driven}</div>
          <div><strong>Location:</strong> {car.location}</div>
          <div><strong>Verified:</strong> {car.verified ? "Yes" : "No"}</div>
        </div>

        {/* Features */}
        <div className="mb-6">
          <strong className="block text-gray-700 mb-1">Features:</strong>
          <ul className="flex flex-wrap gap-2">
            {car.features.map((f) => (
              <li key={f} className="bg-blue-100 px-3 py-1 rounded-full text-sm">
                {f}
              </li>
            ))}
          </ul>
        </div>

        {/* Book Button */}
        <button
          className="block w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition-all duration-300"
          onClick={() => setShowBooking(true)}
        >
          Book Now
        </button>
      </motion.div>

      {/* Booking Modal */}
      <AnimatePresence>
        {showBooking && (
          <motion.div
            key="modalBg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/40"
          >
            <motion.div
              key="modalContent"
              initial={{ y: -60, opacity: 0, scale: 0.96 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 50, opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-white rounded-2xl max-w-md w-full p-8 shadow-2xl relative mx-2"
            >
              <button
                className="absolute right-3 top-3 text-gray-500 hover:text-gray-700 text-xl"
                onClick={() => setShowBooking(false)}
                aria-label="Close"
              >
                ×
              </button>

              <h2 className="text-xl font-bold text-blue-700 mb-4">
                Book {car.name}
              </h2>

              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm mb-1 font-medium">Full Name *</label>
                  <input
                    name="name"
                    value={bookingForm.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-1 font-medium">Email *</label>
                  <input
                    name="email"
                    type="email"
                    value={bookingForm.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-1 font-medium">Phone *</label>
                  <input
                    name="phone"
                    type="tel"
                    value={bookingForm.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-1 font-medium">City *</label>
                  <input
                    name="city"
                    value={bookingForm.city}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-1 font-medium">Message (optional)</label>
                  <textarea
                    name="message"
                    value={bookingForm.message}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 mt-3 rounded-xl font-semibold transition-all duration-300"
                >
                  Submit Booking
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
