"use client";

import { motion, Variants, easeIn, easeOut, easeInOut } from "framer-motion";

export default function Hero() {
  const backgroundImages = [
        "https://images.unsplash.com/photo-1563720223480-2dde5ab32b2d?w=1200&h=800&fit=crop",
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&h=800&fit=crop",
    "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1200&h=800&fit=crop",
    "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1200&h=800&fit=crop",
    "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200&h=800&fit=crop",

  ];
  const handleScroll = () => {
    // Select section jahan scroll karna hai (id = "next-section")
    const section = document.getElementById("next-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  const backgroundVariants: Variants = {
    initial: { opacity: 0, scale: 1.1 },
    animate: (index: number) => ({
      opacity: [0, 1, 1, 0],
      scale: [1.1, 1, 1, 1.1],
      transition: {
        duration: 18,
        ease: easeInOut,
        times: [0, 0.1, 0.9, 1],
        delay: index * 3,
        repeat: Infinity,
        repeatDelay: 12,
      },
    }),
  };

  const textVariants: Variants = {
    initial: { y: 50, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: easeOut,
      },
    },
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* 🔹 Background Animation */}
      <div className="absolute inset-0">
        {backgroundImages.map((image, index) => (
          <motion.div
            key={index}
            className="absolute inset-0"
            custom={index}
            variants={backgroundVariants}
            initial="initial"
            animate="animate"
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              zIndex: 1,
            }}
          />
        ))}
      </div>

      {/* 🔹 Overlay */}
      <div className="absolute inset-0  z-10"></div>

      {/* 🔹 Content Section */}
      <div className="container relative z-20 mx-auto px-4 h-full flex items-center justify-center text-center">
        <motion.div
          initial="initial"
          animate="animate"
          variants={textVariants}
          className="max-w-4xl"
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: easeOut }}
          >
            Find Your Dream Car
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl md:text-2xl mb-8 text-gray-200"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: easeOut }}
          >
            Browse thousands of listings from trusted sellers
          </motion.p>

          {/* 🔹 Info Cards */}
       <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1, delay: 1 }}
  className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 text-white"
>
  {/* ✅ Verified Card */}
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 h-32 w-full flex flex-col items-center justify-center text-center shadow-lg transition-transform"
  >
    <h3 className="font-semibold text-xl mb-2 text-white">✅ Verified</h3>
    <p className="text-gray-200 text-sm sm:text-base">Trusted sellers</p>
  </motion.div>

  {/* 💰 Best Price Card */}
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 h-32 w-full flex flex-col items-center justify-center text-center shadow-lg transition-transform"
  >
    <h3 className="font-semibold text-xl mb-2 text-white">💰 Best Price</h3>
    <p className="text-gray-200 text-sm sm:text-base">Guaranteed</p>
  </motion.div>
</motion.div>

        </motion.div>
      </div>

    </section>
  );
}
 