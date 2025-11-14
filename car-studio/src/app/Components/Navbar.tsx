"use client";

import Link from "next/link";
import { useState, useRef } from "react";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<
    "new" | "used" | "review" | null
  >(null);

  // Mobile accordion states
  const [newCarsOpen, setNewCarsOpen] = useState(false);
  const [usedCarsOpen, setUsedCarsOpen] = useState(false);
  const [reviewOpen, setReviewOpen] = useState(false);

  // Refs for delayed closing
  const closeTimeout = useRef<NodeJS.Timeout | null>(null);

  // Desktop hover handlers
  const handleMouseEnter = (dropdown: "new" | "used" | "review") => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
      closeTimeout.current = null;
    }
    setOpenDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    closeTimeout.current = setTimeout(() => setOpenDropdown(null), 150);
  };

  // Mobile accordion toggle
  const toggleMobileAccordion = (accordion: "new" | "used" | "review") => {
    switch (accordion) {
      case "new":
        setNewCarsOpen((prev) => !prev);
        break;
      case "used":
        setUsedCarsOpen((prev) => !prev);
        break;
      case "review":
        setReviewOpen((prev) => !prev);
        break;
    }
  };

  return (
    <nav className="w-full bg-white shadow-lg fixed top-0 left-0 z-50 border-b border-gray-200 ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-4">
        {/* Logo */}
        <div className="flex space-x-4 items-center">
          <img
            src="/img/logo.png"
            alt="CarStudio Logo"
            className="w-10 h-10 rounded-full object-cover"
          />
          <h1 className="text-2xl font-bold text-black">CarStudio</h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-black font-medium relative">
          <li>
            <Link 
              href="/" 
              className="hover:text-blue-600 transition-colors duration-300"
            >
              Home
            </Link>
          </li>

          {/* New Cars */}
          <li className="relative">
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("new")}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center gap-1 hover:text-blue-600 transition-colors duration-300">
                New Cars{" "}
                {openDropdown === "new" ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
              {openDropdown === "new" && (
                <div 
                  className="absolute left-0 top-full bg-white shadow-xl p-6 w-[500px] grid grid-cols-3 gap-4 mt-2 rounded-lg z-50 border border-gray-200"
                  onMouseEnter={() => handleMouseEnter("new")}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="space-y-3">
                    <Link
                      href="/Upcomingcars"
                      className="block p-3 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 border border-transparent hover:border-blue-200"
                    >
                      Upcoming Cars
                    </Link>
                    <Link
                      href="/Newcar"
                      className="block p-3 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 border border-transparent hover:border-blue-200"
                    >
                      New Car
                    </Link>
                  </div>
                  <div className="space-y-3">
                    <Link
                      href="/ElectricCar"
                      className="block p-3 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 border border-transparent hover:border-blue-200"
                    >
                      Electric Cars
                    </Link>
                    <Link
                      href="/Images"
                      className="block p-3 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 border border-transparent hover:border-blue-200"
                    >
                      Images
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </li>

          {/* Used Cars */}
          <li className="relative">
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("used")}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center gap-1 hover:text-blue-600 transition-colors duration-300">
                Used Cars{" "}
                {openDropdown === "used" ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
              {openDropdown === "used" && (
                <div 
                  className="absolute left-0 top-full bg-white shadow-xl p-6 w-[500px] grid grid-cols-3 gap-4 mt-2 rounded-lg z-50 border border-gray-200"
                  onMouseEnter={() => handleMouseEnter("used")}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="space-y-3">
                    <Link
                      href="/ExploreUsedCar"
                      className="block p-3 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 border border-transparent hover:border-blue-200"
                    >
                      Explore Used Cars
                    </Link>
                    <Link
                      href="/SellyourCar"
                      className="block p-3 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 border border-transparent hover:border-blue-200"
                    >
                      Sell Your Car
                    </Link>
                  </div>
                  <div className="space-y-3">
                    <Link
                      href="/MyListing"
                      className="block p-3 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 border border-transparent hover:border-blue-200"
                    >
                      My Listings
                    </Link>
                 
                  </div>
                </div>
              )}
            </div>
          </li>

          {/* Reviews & News */}
          <li className="relative">
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("review")}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center gap-1 hover:text-blue-600 transition-colors duration-300">
                Reviews & News{" "}
                {openDropdown === "review" ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
              {openDropdown === "review" && (
                <div 
                  className="absolute left-0 top-full bg-white shadow-xl p-6 w-[400px] grid gap-4 mt-2 rounded-lg z-50 border border-gray-200"
                  onMouseEnter={() => handleMouseEnter("review")}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    href="/News"
                    className="block p-4 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 border border-transparent hover:border-blue-200  font-semibold"
                  >
                    News
                  </Link>
                  <Link
                    href="/Review"
                    className="block p-4 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 border border-transparent hover:border-blue-200  font-semibold"
                  >
                    User Reviews
                  </Link>
                </div>
              )}
            </div>
          </li>

          {/* Contact Us */}
          <li>
            <Link 
              href="/Contactus" 
              className="hover:text-blue-600 transition-colors duration-300"
            >
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Login */}
        <div className="hidden md:flex space-x-4 items-center">
          <Link
            href="/Login"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold"
          >
            Login
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-black hover:text-blue-600 transition-colors duration-300"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white shadow-xl border-t border-gray-200">
          <ul className="px-6 py-4 space-y-2 text-black">
            <li>
              <Link 
                href="/" 
                className="block p-4 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-all duration-300"
                onClick={() => setMobileOpen(false)}
              >
                Home
              </Link>
            </li>

            {/* New Cars Accordion */}
            <li className="border-b border-gray-100 pb-2">
              <button
                className="w-full flex justify-between items-center p-4 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-all duration-300"
                onClick={() => toggleMobileAccordion("new")}
              >
                <span className="font-semibold">New Cars</span>
                {newCarsOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              {newCarsOpen && (
                <div className="pl-4 mt-2 space-y-1">
                  <Link
                    href="/Upcomingcars"
                    className="block p-3 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 ml-2 border-l-2 border-transparent hover:border-blue-500"
                    onClick={() => setMobileOpen(false)}
                  >
                    Upcoming Cars
                  </Link>
                  <Link
                    href="/Newcar"
                    className="block p-3 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 ml-2 border-l-2 border-transparent hover:border-blue-500"
                    onClick={() => setMobileOpen(false)}
                  >
                    New Car
                  </Link>
                  <Link
                    href="/ElectricCar"
                    className="block p-3 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 ml-2 border-l-2 border-transparent hover:border-blue-500"
                    onClick={() => setMobileOpen(false)}
                  >
                    Electric Cars
                  </Link>
                  <Link
                    href="/Images"
                    className="block p-3 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 ml-2 border-l-2 border-transparent hover:border-blue-500"
                    onClick={() => setMobileOpen(false)}
                  >
                    Images
                  </Link>
                </div>
              )}
            </li>

            {/* Used Cars Accordion */}
            <li className="border-b border-gray-100 pb-2">
              <button
                className="w-full flex justify-between items-center p-4 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-all duration-300"
                onClick={() => toggleMobileAccordion("used")}
              >
                <span className="font-semibold">Used Cars</span>
                {usedCarsOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              {usedCarsOpen && (
                <div className="pl-4 mt-2 space-y-1">
                  <Link
                    href="/ExploreUsedCar"
                    className="block p-3 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 ml-2 border-l-2 border-transparent hover:border-blue-500"
                    onClick={() => setMobileOpen(false)}
                  >
                    Explore Used Cars
                  </Link>
                  <Link
                    href="/SellyourCar"
                    className="block p-3 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 ml-2 border-l-2 border-transparent hover:border-blue-500"
                    onClick={() => setMobileOpen(false)}
                  >
                    Sell Your Car
                  </Link>
                  <Link
                    href="/MyListing"
                    className="block p-3 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 ml-2 border-l-2 border-transparent hover:border-blue-500"
                    onClick={() => setMobileOpen(false)}
                  >
                    My Listings
                  </Link>
                
                </div>
              )}
            </li>

            {/* Reviews & News Accordion */}
            <li className="border-b border-gray-100 pb-2">
              <button
                className="w-full flex justify-between items-center p-4 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-all duration-300"
                onClick={() => toggleMobileAccordion("review")}
              >
                <span className="font-semibold">Reviews & News</span>
                {reviewOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              {reviewOpen && (
                <div className="pl-4 mt-2 space-y-1">
                  <Link
                    href="/News"
                    className="block p-3 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 ml-2 border-l-2 border-transparent hover:border-blue-500"
                    onClick={() => setMobileOpen(false)}
                  >
                    News
                  </Link>
                  <Link
                    href="/Review"
                    className="block p-3 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 ml-2 border-l-2 border-transparent hover:border-blue-500"
                    onClick={() => setMobileOpen(false)}
                  >
                    User Reviews
                  </Link>
                </div>
              )}
            </li>

            <li className="border-b border-gray-100 pb-2">
              <Link
                href="/Contactus"
                className="block p-4 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-all duration-300"
                onClick={() => setMobileOpen(false)}
              >
                Contact Us
              </Link>
            </li>
            
            <li className="pt-4">
              <Link
                href="/Login"
                className="block w-full bg-blue-600 text-white text-center px-4 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg font-semibold"
                onClick={() => setMobileOpen(false)}
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}