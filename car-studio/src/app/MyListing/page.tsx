"use client";
import { useRouter } from 'next/navigation';

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Car, Calendar, MapPin, IndianRupee, Fuel, Settings, User, Phone, Mail, Edit, Trash2, Filter, X, Save } from "lucide-react";

export default function MyListings() {
    const router = useRouter();

  const [listings, setListings] = useState([]);
  const [filteredListings, setFilteredListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [editingListing, setEditingListing] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [filters, setFilters] = useState({
    status: "all",
    priceRange: "all",
    fuelType: "all"
  });

  // Car features options
  const carFeatures = [
    "Power Steering", "Power Windows", "Air Conditioning", "Music System",
    "Alloy Wheels", "ABS", "Airbags", "Sunroof", "Leather Seats",
    "Rear Camera", "Parking Sensors", "Cruise Control", "Keyless Entry"
  ];

  // Fuel type options
  const fuelTypes = ["Petrol", "Diesel", "Electric", "CNG", "Hybrid"];

  // Transmission options
  const transmissions = ["Manual", "Automatic", "CVT", "AMT"];

  // Fetch listings from localStorage
  useEffect(() => {
    const fetchListings = () => {
      try {
        const savedListings = JSON.parse(localStorage.getItem('soldCars') || '[]');
        setListings(savedListings);
        setFilteredListings(savedListings);
      } catch (error) {
        console.error('Error fetching listings:', error);
        setListings([]);
        setFilteredListings([]);
      } finally {
        setLoading(false);
      }
    };

    fetchListings();
    
    window.addEventListener('storage', fetchListings);
    return () => window.removeEventListener('storage', fetchListings);
  }, []);

  // Apply filters
  useEffect(() => {
    let filtered = [...listings];

    if (filters.fuelType !== "all") {
      filtered = filtered.filter(listing => 
        listing.fuelType?.toLowerCase() === filters.fuelType.toLowerCase()
      );
    }

    if (filters.priceRange !== "all") {
      const [min, max] = filters.priceRange.split('-').map(Number);
      filtered = filtered.filter(listing => {
        const price = parseInt(listing.expectedPrice) || 0;
        if (max) {
          return price >= min && price <= max;
        }
        return price >= min;
      });
    }

    setFilteredListings(filtered);
  }, [filters, listings]);

  // Delete listing
  const deleteListing = (id) => {
    const updatedListings = listings.filter(listing => listing.id !== id);
    setListings(updatedListings);
    localStorage.setItem('soldCars', JSON.stringify(updatedListings));
    setShowDeleteModal(false);
    setDeleteId(null);
  };

  // Open edit modal
  const handleEdit = (listing) => {
    setEditingListing(listing);
    setShowEditModal(true);
  };

  // Handle edit form changes
  const handleEditChange = (e) => {
    const { name, value, type, checked } = e.target;
    setEditingListing(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // Handle feature selection in edit modal
  const handleEditFeatureToggle = (feature) => {
    setEditingListing(prev => ({
      ...prev,
      features: prev.features.includes(feature)
        ? prev.features.filter(f => f !== feature)
        : [...prev.features, feature]
    }));
  };

  // Save edited listing
  const saveEditedListing = () => {
    const updatedListings = listings.map(listing => 
      listing.id === editingListing.id ? editingListing : listing
    );
    
    setListings(updatedListings);
    localStorage.setItem('soldCars', JSON.stringify(updatedListings));
    setShowEditModal(false);
    setEditingListing(null);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const hoverVariants = {
    hover: {
      scale: 1.02,
      boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
      transition: {
        duration: 0.3
      }
    }
  };

  const cardHoverVariants = {
    hover: {
      y: -5,
      boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
      transition: {
        duration: 0.3
      }
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-100 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-blue-600 font-semibold">Loading your listings...</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-100 py-8 mt-15">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-blue-600 mb-4"
            whileHover={{ scale: 1.02 }}
          >
            My Listings
          </motion.h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Manage and track all your car listings in one place
          </p>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12"
        >
          {[
            { label: "Total Listings", value: listings.length, icon: Car, color: "blue" },
            { label: "Active", value: listings.length, icon: Calendar, color: "green" },
            { label: "Pending", value: 0, icon: User, color: "yellow" },
            { label: "Sold", value: 0, icon: IndianRupee, color: "purple" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              whileHover="hover"
              variants={hoverVariants}
              className={`bg-white rounded-2xl p-6 border border-gray-200 shadow-lg ${
                stat.color === 'blue' ? 'border-l-4 border-l-blue-500' :
                stat.color === 'green' ? 'border-l-4 border-l-green-500' :
                stat.color === 'yellow' ? 'border-l-4 border-l-yellow-500' :
                'border-l-4 border-l-purple-500'
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                    {stat.label}
                  </p>
                  <p className="text-3xl font-bold text-gray-900 mt-2">
                    {stat.value}
                  </p>
                </div>
                <div className={`p-3 rounded-xl ${
                  stat.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                  stat.color === 'green' ? 'bg-green-100 text-green-600' :
                  stat.color === 'yellow' ? 'bg-yellow-100 text-yellow-600' :
                  'bg-purple-100 text-purple-600'
                }`}>
                  <stat.icon className="w-6 h-6" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg p-6 mb-8 border border-gray-200"
        >
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex items-center gap-3">
              <Filter className="w-5 h-5 text-blue-600" />
              <h3 className="text-lg font-semibold text-gray-900">Filter Listings</h3>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <select
                value={filters.fuelType}
                onChange={(e) => setFilters(prev => ({ ...prev, fuelType: e.target.value }))}
                className="px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
              >
                <option value="all">All Fuel Types</option>
                <option value="petrol">Petrol</option>
                <option value="diesel">Diesel</option>
                <option value="electric">Electric</option>
                <option value="cng">CNG</option>
                <option value="hybrid">Hybrid</option>
              </select>

              <select
                value={filters.priceRange}
                onChange={(e) => setFilters(prev => ({ ...prev, priceRange: e.target.value }))}
                className="px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
              >
                <option value="all">All Prices</option>
                <option value="0-50000">Under ₹50,000</option>
                <option value="50000-200000">₹50,000 - ₹2 Lakh</option>
                <option value="200000-500000">₹2 Lakh - ₹5 Lakh</option>
                <option value="500000-1000000">₹5 Lakh - ₹10 Lakh</option>
                <option value="1000000-0">Above ₹10 Lakh</option>
              </select>

              <button
                onClick={() => setFilters({ status: "all", priceRange: "all", fuelType: "all" })}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-all duration-300 font-medium"
              >
                Reset Filters
              </button>
            </div>
          </div>
        </motion.div>

        {/* Listings Grid */}
        {filteredListings.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-16 bg-white rounded-2xl shadow-lg border border-gray-200"
          >
            <Car className="w-24 h-24 text-gray-400 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {listings.length === 0 ? "No Listings Yet" : "No Listings Match Your Filters"}
            </h3>
            <p className="text-gray-600 max-w-md mx-auto mb-8">
              {listings.length === 0 
                ? "Start by listing your first car for sale. Click the button below to get started!"
                : "Try adjusting your filters to see more listings."
              }
            </p>
            {listings.length === 0 && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 shadow-lg"
  onClick={() => router.push('/SellyourCar')}
              >
                List Your First Car
              </motion.button>
            )}
          </motion.div>
        ) : (
          <>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
            >
              <AnimatePresence>
                {filteredListings.map((listing) => (
                  <motion.div
                    key={listing.id}
                    layout
                    variants={itemVariants}
                    whileHover="hover"
                    variants={cardHoverVariants}
                    initial="hidden"
                    animate="visible"
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 group"
                  >
                    {/* Card Header with Image */}
                    <div className="relative h-48 bg-gradient-to-br from-blue-100 to-blue-200 overflow-hidden">
                      {listing.carImages && listing.carImages.length > 0 ? (
                        <div className="w-full h-full flex items-center justify-center">
                          <div className="text-center">
                            <Car className="w-12 h-12 text-blue-600 mx-auto mb-2" />
                            <p className="text-blue-800 font-medium">{listing.carImages.length} images</p>
                          </div>
                        </div>
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <Car className="w-16 h-16 text-blue-600" />
                        </div>
                      )}
                      
                      {/* Status Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                          Active
                        </span>
                      </div>

                      {/* Price Badge */}
                      <div className="absolute top-4 right-4">
                        <span className="bg-black/80 text-white px-3 py-1 rounded-full text-sm font-bold backdrop-blur-sm">
                          ₹{listing.expectedPrice}
                        </span>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-6">
                      {/* Title */}
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                        {listing.carMake} {listing.carModel}
                      </h3>
                      
                      {/* Basic Info */}
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Calendar className="w-4 h-4" />
                          <span>{listing.carYear}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Fuel className="w-4 h-4" />
                          <span>{listing.fuelType}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Settings className="w-4 h-4" />
                          <span>{listing.transmission}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <MapPin className="w-4 h-4" />
                          <span>{listing.mileage} km</span>
                        </div>
                      </div>

                      {/* Description Preview */}
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {listing.description || "No description provided"}
                      </p>

                      {/* Features Preview */}
                      {listing.features && listing.features.length > 0 && (
                        <div className="mb-4">
                          <div className="flex flex-wrap gap-1">
                            {listing.features.slice(0, 3).map((feature, index) => (
                              <span
                                key={index}
                                className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-medium"
                              >
                                {feature}
                              </span>
                            ))}
                            {listing.features.length > 3 && (
                              <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs font-medium">
                                +{listing.features.length - 3} more
                              </span>
                            )}
                          </div>
                        </div>
                      )}

                      {/* Contact Info */}
                      <div className="border-t border-gray-200 pt-4">
                        <div className="flex items-center justify-between text-sm text-gray-600">
                          <div className="flex items-center gap-2">
                            <User className="w-4 h-4" />
                            <span>{listing.fullName}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Phone className="w-4 h-4" />
                            <span>{listing.phone}</span>
                          </div>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-2 mt-4">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-xl text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                          onClick={() => handleEdit(listing)}
                        >
                          <Edit className="w-4 h-4" />
                          Edit
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-xl text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                          onClick={() => {
                            setDeleteId(listing.id);
                            setShowDeleteModal(true);
                          }}
                        >
                          <Trash2 className="w-4 h-4" />
                          Delete
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {/* Results Count */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-8 text-center text-gray-600"
            >
              Showing {filteredListings.length} of {listings.length} listings
            </motion.div>
          </>
        )}

        {/* Edit Modal */}
        <AnimatePresence>
          {showEditModal && editingListing && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
              onClick={() => setShowEditModal(false)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-white rounded-2xl p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-blue-900">Edit Car Listing</h2>
                  <button
                    onClick={() => setShowEditModal(false)}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-300"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={editingListing.fullName}
                        onChange={handleEditChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={editingListing.phone}
                        onChange={handleEditChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                      />
                    </div>
                  </div>

                  {/* Car Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Car Make
                      </label>
                      <input
                        type="text"
                        name="carMake"
                        value={editingListing.carMake}
                        onChange={handleEditChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Car Model
                      </label>
                      <input
                        type="text"
                        name="carModel"
                        value={editingListing.carModel}
                        onChange={handleEditChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Car Year
                      </label>
                      <input
                        type="number"
                        name="carYear"
                        value={editingListing.carYear}
                        onChange={handleEditChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Fuel Type
                      </label>
                      <select
                        name="fuelType"
                        value={editingListing.fuelType}
                        onChange={handleEditChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                      >
                        {fuelTypes.map(type => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Transmission
                      </label>
                      <select
                        name="transmission"
                        value={editingListing.transmission}
                        onChange={handleEditChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                      >
                        {transmissions.map(type => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Mileage (km)
                      </label>
                      <input
                        type="number"
                        name="mileage"
                        value={editingListing.mileage}
                        onChange={handleEditChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                      />
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Expected Price (₹)
                      </label>
                      <input
                        type="number"
                        name="expectedPrice"
                        value={editingListing.expectedPrice}
                        onChange={handleEditChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                      />
                    </div>
                    <div className="flex items-center">
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          name="negotiable"
                          checked={editingListing.negotiable}
                          onChange={handleEditChange}
                          className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                        />
                        <span className="text-sm font-semibold text-gray-700">Price is Negotiable</span>
                      </label>
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-4">
                      Car Features
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                      {carFeatures.map((feature) => (
                        <label
                          key={feature}
                          className={`flex items-center gap-2 p-3 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                            editingListing.features.includes(feature)
                              ? 'border-blue-500 bg-blue-50 text-blue-700'
                              : 'border-gray-300 bg-gray-50 text-gray-700 hover:border-blue-300'
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={editingListing.features.includes(feature)}
                            onChange={() => handleEditFeatureToggle(feature)}
                            className="hidden"
                          />
                          <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                            editingListing.features.includes(feature)
                              ? 'bg-blue-500 border-blue-500'
                              : 'bg-white border-gray-400'
                          }`}>
                            {editingListing.features.includes(feature) && (
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            )}
                          </div>
                          <span className="text-sm font-medium">{feature}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Description */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Description
                    </label>
                    <textarea
                      name="description"
                      value={editingListing.description}
                      onChange={handleEditChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 resize-none"
                      placeholder="Describe your car..."
                    />
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4 pt-4">
                    <button
                      onClick={() => setShowEditModal(false)}
                      className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-3 rounded-xl transition-all duration-300"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={saveEditedListing}
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <Save className="w-5 h-5" />
                      Save Changes
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Delete Confirmation Modal */}
        <AnimatePresence>
          {showDeleteModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
              onClick={() => setShowDeleteModal(false)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-white rounded-2xl p-8 max-w-md w-full mx-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Trash2 className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Delete Listing?
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Are you sure you want to delete this listing? This action cannot be undone.
                  </p>
                  <div className="flex gap-4">
                    <button
                      onClick={() => setShowDeleteModal(false)}
                      className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-3 rounded-xl transition-all duration-300"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={() => deleteListing(deleteId)}
                      className="flex-1 bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-xl transition-all duration-300"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}