"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Save, Upload, Car, User, Phone, Mail, MapPin } from "lucide-react";

export default function SellYourCar() {
  const [formData, setFormData] = useState({
    // Personal Information
    fullName: "",
    email: "",
    phone: "",
    location: "",
    
    // Car Details
    carMake: "",
    carModel: "",
    carYear: "",
    carVariant: "",
    registrationYear: "",
    fuelType: "",
    transmission: "",
    mileage: "",
    ownership: "",
    
    // Pricing
    expectedPrice: "",
    negotiable: false,
    
    // Additional Details
    features: [],
    description: "",
    carImages: [],
    
    // Images (simulated with file names)
    imageFiles: []
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

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

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // Handle feature selection
  const handleFeatureToggle = (feature) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.includes(feature)
        ? prev.features.filter(f => f !== feature)
        : [...prev.features, feature]
    }));
  };

  // Handle image upload simulation
  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const imageNames = files.map(file => file.name);
    
    setFormData(prev => ({
      ...prev,
      carImages: [...prev.carImages, ...imageNames],
      imageFiles: [...prev.imageFiles, ...files]
    }));
  };

  // Remove image
  const removeImage = (index) => {
    setFormData(prev => ({
      ...prev,
      carImages: prev.carImages.filter((_, i) => i !== index),
      imageFiles: prev.imageFiles.filter((_, i) => i !== index)
    }));
  };

  // Save to localStorage
  const saveToLocalStorage = () => {
    const savedCars = JSON.parse(localStorage.getItem('soldCars') || '[]');
    const newCar = {
      id: Date.now(),
      ...formData,
      submittedAt: new Date().toISOString()
    };
    
    savedCars.push(newCar);
    localStorage.setItem('soldCars', JSON.stringify(savedCars));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call delay
    setTimeout(() => {
      saveToLocalStorage();
      setIsSubmitting(false);
      setIsSaved(true);
      
      // Reset form after successful submission
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        location: "",
        carMake: "",
        carModel: "",
        carYear: "",
        carVariant: "",
        registrationYear: "",
        fuelType: "",
        transmission: "",
        mileage: "",
        ownership: "",
        expectedPrice: "",
        negotiable: false,
        features: [],
        description: "",
        carImages: [],
        imageFiles: []
      });

      // Hide success message after 5 seconds
      setTimeout(() => setIsSaved(false), 5000);
    }, 2000);
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
      boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-100 py-8 mt-15">
      <div className="container mx-auto px-4 max-w-6xl">
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
            Sell Your Car
          </motion.h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Fill in the details below and get the best price for your car. Our team will contact you within 24 hours.
          </p>
        </motion.div>

        {/* Success Message */}
        {isSaved && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded-xl mb-8 text-center"
          >
            <div className="flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Your car details have been saved successfully! We'll contact you soon.
            </div>
          </motion.div>
        )}

        <motion.form
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200"
        >
          {/* Form Sections */}
          <div className="space-y-8 p-6 md:p-8">
            {/* Personal Information Section */}
            <motion.section variants={itemVariants}>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <User className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-blue-600">Personal Information</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div variants={itemVariants} whileHover={{ scale: 1.01 }}>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                    placeholder="Enter your full name"
                  />
                </motion.div>

                <motion.div variants={itemVariants} whileHover={{ scale: 1.01 }}>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                    placeholder="Enter your email"
                  />
                </motion.div>

                <motion.div variants={itemVariants} whileHover={{ scale: 1.01 }}>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                    placeholder="Enter your phone number"
                  />
                </motion.div>

                <motion.div variants={itemVariants} whileHover={{ scale: 1.01 }}>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Location *
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                    placeholder="Enter your city"
                  />
                </motion.div>
              </div>
            </motion.section>

            {/* Car Details Section */}
            <motion.section variants={itemVariants}>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Car className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-blue-600">Car Details</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { label: "Car Make *", name: "carMake", placeholder: "e.g., Maruti Suzuki" },
                  { label: "Car Model *", name: "carModel", placeholder: "e.g., Swift" },
                  { label: "Car Year *", name: "carYear", placeholder: "e.g., 2020", type: "number" },
                  { label: "Car Variant", name: "carVariant", placeholder: "e.g., ZXI Plus" },
                  { label: "Registration Year *", name: "registrationYear", placeholder: "e.g., 2020", type: "number" },
                  { label: "Mileage (km) *", name: "mileage", placeholder: "e.g., 25000", type: "number" },
                  { label: "Ownership *", name: "ownership", placeholder: "e.g., 1st Owner" }
                ].map((field, index) => (
                  <motion.div key={field.name} variants={itemVariants} whileHover={{ scale: 1.01 }}>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {field.label}
                    </label>
                    <input
                      type={field.type || "text"}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleInputChange}
                      required={field.label.includes('*')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                      placeholder={field.placeholder}
                    />
                  </motion.div>
                ))}

                {/* Fuel Type Dropdown */}
                <motion.div variants={itemVariants} whileHover={{ scale: 1.01 }}>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Fuel Type *
                  </label>
                  <select
                    name="fuelType"
                    value={formData.fuelType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-white"
                  >
                    <option value="">Select Fuel Type</option>
                    {fuelTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </motion.div>

                {/* Transmission Dropdown */}
                <motion.div variants={itemVariants} whileHover={{ scale: 1.01 }}>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Transmission *
                  </label>
                  <select
                    name="transmission"
                    value={formData.transmission}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-white"
                  >
                    <option value="">Select Transmission</option>
                    {transmissions.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </motion.div>
              </div>
            </motion.section>

            {/* Pricing Section */}
            <motion.section variants={itemVariants}>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-blue-600">Pricing Details</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div variants={itemVariants} whileHover={{ scale: 1.01 }}>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Expected Price (₹) *
                  </label>
                  <input
                    type="number"
                    name="expectedPrice"
                    value={formData.expectedPrice}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                    placeholder="Enter expected price"
                  />
                </motion.div>

                <motion.div variants={itemVariants} className="flex items-center">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="negotiable"
                      checked={formData.negotiable}
                      onChange={handleInputChange}
                      className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                    />
                    <span className="text-sm font-semibold text-gray-700">Price is Negotiable</span>
                  </label>
                </motion.div>
              </div>
            </motion.section>

            {/* Features Section */}
            <motion.section variants={itemVariants}>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-blue-600">Car Features</h2>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {carFeatures.map((feature, index) => (
                  <motion.label
                    key={feature}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    className={`flex items-center gap-2 p-3 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                      formData.features.includes(feature)
                        ? 'border-blue-500 bg-blue-50 text-blue-700'
                        : 'border-gray-300 bg-gray-50 text-gray-700 hover:border-blue-300'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={formData.features.includes(feature)}
                      onChange={() => handleFeatureToggle(feature)}
                      className="hidden"
                    />
                    <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                      formData.features.includes(feature)
                        ? 'bg-blue-500 border-blue-500'
                        : 'bg-white border-gray-400'
                    }`}>
                      {formData.features.includes(feature) && (
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                    <span className="text-sm font-medium">{feature}</span>
                  </motion.label>
                ))}
              </div>
            </motion.section>

            {/* Description Section */}
            <motion.section variants={itemVariants}>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-blue-600">Description</h2>
              </div>
              
              <motion.div variants={itemVariants} whileHover={{ scale: 1.01 }}>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Additional Details & Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 resize-none"
                  placeholder="Describe your car's condition, service history, any modifications, etc."
                />
              </motion.div>
            </motion.section>

            {/* Image Upload Section */}
            <motion.section variants={itemVariants}>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Upload className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-blue-600">Car Images</h2>
              </div>
              
              <motion.div
                variants={itemVariants}
                whileHover="hover"
                className="border-2 border-dashed border-gray-300 rounded-2xl p-8 text-center hover:border-blue-400 transition-all duration-300 bg-gray-50"
              >
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                  id="car-images"
                />
                <label htmlFor="car-images" className="cursor-pointer">
                  <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">
                    Upload Car Images
                  </h3>
                  <p className="text-gray-500 mb-4">
                    Upload clear images of your car (exterior, interior, engine, etc.)
                  </p>
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
                  >
                    Choose Files
                  </motion.span>
                </label>
              </motion.div>

              {/* Uploaded Images Preview */}
              {formData.carImages.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6"
                >
                  <h4 className="text-lg font-semibold text-gray-700 mb-4">
                    Uploaded Images ({formData.carImages.length})
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {formData.carImages.map((image, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="relative group"
                      >
                        <div className="aspect-square bg-gray-200 rounded-xl flex items-center justify-center overflow-hidden">
                          <div className="text-center p-4">
                            <svg className="w-8 h-8 text-gray-400 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                            </svg>
                            <p className="text-xs text-gray-500 truncate">{image}</p>
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeImage(index)}
                          className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        >
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </motion.section>

            {/* Submit Button */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center pt-8"
            >
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-12 py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center gap-3 ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl'
                } text-white`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Save className="w-5 h-5" />
                    Submit Car Details
                  </>
                )}
              </motion.button>
            </motion.div>
          </div>
        </motion.form>

        {/* Additional Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            {
              icon: <Phone className="w-8 h-8" />,
              title: "Quick Response",
              description: "Get contacted within 24 hours by our verified buyers"
            },
            {
              icon: <Car className="w-8 h-8" />,
              title: "Best Price",
              description: "We ensure you get the best market price for your car"
            },
            {
              icon: <MapPin className="w-8 h-8" />,
              title: "Free Inspection",
              description: "Comprehensive vehicle inspection at your location"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover="hover"
              variants={hoverVariants}
              className="bg-white rounded-2xl p-6 border border-gray-200 text-center"
            >
              <div className="text-blue-600 mb-4 flex justify-center">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}