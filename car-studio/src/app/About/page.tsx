"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import AboutPage from "../About2/page";

export default function AboutCarStudio() {
  return (
    <div className="min-h-screen bg-blue-50 text-gray-900 overflow-hidden">
      {/* Hero Section */}
      <section className="relative w-full h-[70vh] md:h-[90vh] flex items-center justify-center overflow-hidden">
        <Image
              src="/img/about.jpg"
          alt="Car Studio Showroom"
          fill
          className="object-cover scale-105 brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white max-w-3xl px-6"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-wide">
            About  Car Studio
          </h1>
          <p className="text-lg md:text-xl text-gray-200">
            Redefining the automotive experience — innovation, passion, and
            perfection on every drive.
          </p>
        </motion.div>
      </section>

      {/* Our Story */}
      <section className="max-w-6xl mx-auto py-20 px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className=" text-blue-600 text-3xl md:text-5xl font-bold mb-8 text-center">
            Our Journey
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg text-justify">
            Founded with the vision to revolutionize India’s automotive world,
            <strong> Car Studio </strong> stands as a symbol of innovation,
            elegance, and trust. We bring together a seamless blend of advanced
            technology, performance, and design. From showcasing the latest
            models to upcoming electric marvels, our goal is to inspire every
            car enthusiast with knowledge, style, and sophistication.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg text-justify mt-6">
            Our platform curates the finest cars across brands — from luxurious
            sedans to powerful SUVs and futuristic EVs. Every page you explore
            is designed to give you an immersive experience — whether you’re
            dreaming, discovering, or deciding on your next drive.
          </p>
        </motion.div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 px-6 md:px-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Our Vision & Mission
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              At Car Studio, our mission is to connect passion with precision.
              We envision a future where driving is not just transportation but
              an emotion — powered by innovation, sustainability, and design
              excellence. Our mission is to empower every user with accurate car
              insights, modern comparisons, and cutting-edge automotive trends.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-[350px] md:h-[450px] rounded-3xl overflow-hidden shadow-xl"
          >
            <Image
              src="/img/about.jpg"
              alt="Car Vision"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="max-w-6xl mx-auto px-6 md:px-10 text-center">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-12"
          >
            Core Values That Drive Us
          </motion.h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: "Innovation",
                desc: "We constantly evolve with emerging automotive technologies, bringing futuristic concepts to life.",
              },
              {
                title: "Integrity",
                desc: "We believe in transparency, truth, and trust — the three pillars that define our brand identity.",
              },
              {
                title: "Customer Passion",
                desc: "Every feature, image, and design detail is curated for your love of cars and quality experiences.",
              },
              {
                title: "Excellence",
                desc: "From our visuals to our data, every pixel and every word meets a high standard of precision.",
              },
              {
                title: "Sustainability",
                desc: "We promote the evolution toward electric mobility and eco-friendly automotive innovation.",
              },
              {
                title: "Design",
                desc: "We believe beauty is power. Our layouts and animations reflect the sophistication of modern cars.",
              },
            ].map((val, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all"
              >
                <h4 className="text-2xl font-semibold mb-3 text-blue-600">
                  {val.title}
                </h4>
                <p className="text-gray-600">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <h3 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            A Glimpse of Our World
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "/img/about1.jpg",
              "/img/about2.jpg",
              "/img/about3.jpg",
              "/img/about4.jpg",
              "/img/about5.jpg",
              "/img/about6.jpg",
            ].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative h-[250px] md:h-[320px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl"
              >
                <Image
                  src={img}
                  alt="Car Studio Gallery"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-700"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <AboutPage />
    </div>
  );
}
