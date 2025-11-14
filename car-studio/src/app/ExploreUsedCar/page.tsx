







"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";



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




const brands = ["All", ...Array.from(new Set(carData.map((car) => car.brand)))];
const types = ["All", ...Array.from(new Set(carData.map((car) => car.type)))];
const fuelTypes = ["All", ...Array.from(new Set(carData.map((car) => car.fuel)))];
const transmissions = ["All", ...Array.from(new Set(carData.map((car) => car.transmission)))];
const seatCounts = ["All", ...Array.from(new Set(carData.map((car) => car.seats)))];
const bodyTypes = ["All", ...Array.from(new Set(carData.map((car) => car.body)))];

const MIN_PRICE = 400000;
const MAX_PRICE = 1200000;

export default function ExploreCars() {
  const [filters, setFilters] = useState({
    brand: "All",
    type: "All",
    fuel: "All",
    transmission: "All",
    seats: "All",
    body: "All",
    price: [MIN_PRICE, MAX_PRICE],
  });
  const [search, setSearch] = useState("");
  const [filteredCars, setFilteredCars] = useState(carData);

  // Handle filtering
  useEffect(() => {
    let filtered = [...carData];
    if (filters.brand !== "All") filtered = filtered.filter((c) => c.brand === filters.brand);
    if (filters.type !== "All") filtered = filtered.filter((c) => c.type === filters.type);
    if (filters.fuel !== "All") filtered = filtered.filter((c) => c.fuel === filters.fuel);
    if (filters.transmission !== "All") filtered = filtered.filter((c) => c.transmission === filters.transmission);
    if (filters.seats !== "All") filtered = filtered.filter((c) => String(c.seats) === String(filters.seats));
    if (filters.body !== "All") filtered = filtered.filter((c) => c.body === filters.body);
    // Price filter (extract number)
    filtered = filtered.filter((c) => {
      const p = parseFloat(c.price.replace(/[^\d.]/g, "")) * 100000;
      return p >= filters.price[0] && p <= filters.price[1];
    });
    // Search filter
    if (search)
      filtered = filtered.filter((c) =>
        c.name.toLowerCase().includes(search.toLowerCase()) ||
        c.brand.toLowerCase().includes(search.toLowerCase())
      );
    setFilteredCars(filtered);
  }, [filters, search]);
  const router = useRouter();
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-100 p-4">



         {/* Hero Section */}
      <section
        className="relative bg-cover bg-center bg-no-repeat text-white py-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.6), rgba(30, 58, 138, 0.7)), url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')",
        }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Find Quality Pre-Owned Cars
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Discover the best deals on certified used cars. Save big on
              quality vehicles with complete history.
            </p>

          </motion.div>
        </div>
      </section>

      <div className=" mt-5 w-full rounded-2xl bg-white shadow p-4 flex flex-col md:flex-row md:items-end gap-3 md:gap-4 ">
        {/* Type */}
        <div className="flex-1">
          <label className="font-semibold text-gray-700 block mb-1">Type</label>
          <select value={filters.type} onChange={(e) => setFilters(f => ({ ...f, type: e.target.value }))}
            className="w-full border rounded-xl px-5 py-2 focus:ring-2 focus:ring-blue-500"
          >{types.map(x => <option key={x} value={x}>{x}</option>)}</select>
        </div>
        {/* Brand */}
        <div className="flex-1">
          <label className="font-semibold text-gray-700 block mb-1">Brand</label>
          <select value={filters.brand} onChange={(e) => setFilters(f => ({ ...f, brand: e.target.value }))}
            className="w-full border rounded-xl px-5 py-2 focus:ring-2 focus:ring-blue-500"
          >{brands.map(x => <option key={x} value={x}>{x}</option>)}</select>
        </div>
        {/* Fuel */}
        <div className="flex-1">
          <label className="font-semibold text-gray-700 block mb-1">Fuel</label>
          <select value={filters.fuel} onChange={(e) => setFilters(f => ({ ...f, fuel: e.target.value }))}
            className="w-full border rounded-xl px-5 py-2 focus:ring-2 focus:ring-blue-500"
          >{fuelTypes.map(x => <option key={x} value={x}>{x}</option>)}</select>
        </div>
        {/* Transmission */}
        <div className="flex-1">
          <label className="font-semibold text-gray-700 block mb-1">Transmission</label>
          <select value={filters.transmission} onChange={(e) => setFilters(f => ({ ...f, transmission: e.target.value }))}
            className="w-full border rounded-xl px-5 py-2 focus:ring-2 focus:ring-blue-500"
          >{transmissions.map(x => <option key={x} value={x}>{x}</option>)}</select>
        </div>
        {/* Seats */}
        <div className="flex-1">
          <label className="font-semibold text-gray-700 block mb-1">Seats</label>
          <select value={filters.seats} onChange={(e) => setFilters(f => ({ ...f, seats: e.target.value }))}
            className="w-full border rounded-xl px-5 py-2 focus:ring-2 focus:ring-blue-500"
          >{seatCounts.map(x => <option key={x} value={x}>{x}</option>)}</select>
        </div>
        {/* Body */}
        <div className="flex-1">
          <label className="font-semibold text-gray-700 block mb-1">Body</label>
          <select value={filters.body} onChange={(e) => setFilters(f => ({ ...f, body: e.target.value }))}
            className="w-full border rounded-xl px-5 py-2 focus:ring-2 focus:ring-blue-500"
          >{bodyTypes.map(x => <option key={x} value={x}>{x}</option>)}</select>
        </div>
        {/* Price */}
        <div className="flex-1 min-w-[180px]">
          <label className="font-semibold text-gray-700 block mb-1">
            Price: ₹{(filters.price[0]/100000).toFixed(1)}L - ₹{(filters.price[1]/100000).toFixed(1)}L
          </label>
          <input
            type="range"
            min={MIN_PRICE}
            max={MAX_PRICE}
            step={50000}
            value={filters.price[1]}
            onChange={e =>
              setFilters(f => ({ ...f, price: [f.price[0], Number(e.target.value)] }))
            }
            className="w-full"
          />
        </div>
      </div>
      {/* Search Bar */}
      <div className="w-full flex justify-center mb-8">
        <div className="rounded-xl flex items-center bg-blue-50 w-full max-w-2xl px-4 border border-blue-100">
          <Search className="w-5 h-5 text-gray-400 mr-2" />
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full py-3 bg-transparent focus:outline-none"
            placeholder="Search by model..."
          />
        </div>
      </div>
      {/* Cars List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filteredCars.length === 0 && (
          <div className="col-span-full text-center text-gray-500">
            No cars found.
          </div>
        )}
        {filteredCars.map((car) => (
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-white rounded-2xl shadow border border-blue-100 p-4 flex flex-col items-center"
            key={car.id}
          >
            <img src={car.image} alt={car.name} className="w-full h-40 object-cover rounded-xl mb-4" />
            <div className="flex flex-col items-center gap-2">
              <span className="text-xl font-bold text-blue-800">{car.price}</span>
              <span className="font-semibold">{car.name}</span>
 <button
  onClick={() => router.push(`/DetailsExploreUsedCar/${car.id}`)}
  className="w-full mt-4 bg-gradient-to-r from-blue-600 to-blue-800 
             hover:from-blue-700 hover:to-blue-900 text-white 
             p-3 rounded-xl font-semibold transition-all duration-300"
>
  View Details
</button></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
