"use client";
import { motion } from "framer-motion";

export default function AboutPageAlt() {
  const features = [
    {
      icon: "🌱",
      title: "Eco-Friendly Focus",
      description: "Promoting electric and hybrid vehicles for a cleaner future"
    },
    {
      icon: "🤝",
      title: "Community Driven",
      description: "Building India's largest automotive enthusiast community"
    },
    {
      icon: "⚡",
      title: "Tech Innovation",
      description: "AI-powered recommendations and seamless digital experience"
    },
    {
      icon: "🎯",
      title: "Customer First",
      description: "24/7 support and personalized service for every customer"
    }
  ];

  const stats = [
    { number: "50K+", label: "Happy Customers" },
    { number: "15+", label: "Cities Across India" },
    { number: "500+", label: "Car Models" },
    { number: "24/7", label: "Customer Support" }
  ];

  const milestones = [
    { year: "2020", event: "CarStudio Founded", description: "Started with a vision to revolutionize car buying" },
    { year: "2021", event: "10K Customers", description: "Reached our first major milestone" },
    { year: "2022", event: "AI Integration", description: "Launched AI-powered car recommendations" },
    { year: "2023", event: "National Expansion", description: "Expanded to 15+ cities across India" },
    { year: "2024", event: "Green Initiative", description: "Committed to 60% electric vehicles by 2025" }
  ];

  return (
    <main className="min-h-screen ">
      {/* Features Grid - Now at the top */}
      <section className="py-16 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Building the future of mobility with innovation, sustainability, and community at our core
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                }}
                className="bg-white rounded-3xl p-6 md:p-8 shadow-lg border border-gray-100 hover:border-blue-200 transition-all duration-300 group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">{feature.description}</p>
              </motion.div>
            ))}
          </div>

   
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <span>🌍</span> Sustainable Future
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Leading The <span className="text-blue-600">Green Revolution</span>
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We believe mobility should help the planet as much as it helps people. CarStudio promotes 
                eco-friendly and electric cars, encourages responsible driving, and focuses on lowering 
                emissions across all our operations.
              </p>
              <div className="space-y-3 mb-8">
                {["Dedicated electric and hybrid car filters", "Real-time environmental impact analytics", "Carbon footprint tracking for every purchase"].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 text-gray-700">
                    <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                    <span className="text-sm md:text-base">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-white rounded-3xl p-6 md:p-8 shadow-2xl border border-green-200">
                <h3 className="text-2xl font-bold text-blue-600 mb-6">2025 Sustainability Goals</h3>
                <div className="space-y-4">
                  {[
                    { goal: "Electric & Hybrid Listings", target: "60%", color: "bg-green-500" },
                    { goal: "Green Supply Chain", target: "100%", color: "bg-emerald-500" },
                    { goal: "Carbon Neutral Operations", target: "75%", color: "bg-teal-500" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-blue-50 rounded-xl">
                      <span className="font-semibold text-sm md:text-base">{item.goal}</span>
                      <div className="flex items-center gap-3">
                        <span className="text-lg font-bold ">{item.target}</span>
                        <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Customer Support Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="flex justify-center order-2 lg:order-1"
            >
<img src="/img/about.jpg" alt="image not show" 
className="rounded-3xl object-cover w-full h-full"/>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-6">
                Always Here For You
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Car purchases should be confident—not confusing! Our support team goes above and beyond 
                whether you're comparing specs, arranging financing, or preparing for registration.
              </p>
              <div className="grid gap-3 md:gap-4">
                {[
                  "Proactive pre-sales consultation",
                  "Dedicated aftersales follow-up",
                  "Urgent callback hotline for emergencies",
                  "Expert financing guidance"
                ].map((service, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors"
                  >
                    <div className="w-6 h-6 md:w-8 md:h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs md:text-sm">✓</span>
                    </div>
                    <span className="text-gray-700 font-medium text-sm md:text-base">{service}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              From a simple idea to India's fastest-growing automotive platform
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line - Hidden on mobile, visible on medium screens and up */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 to-blue-300 h-full"></div>
            
            {/* Timeline items */}
            <div className="space-y-8 md:space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative"
                >
                  {/* Mobile Layout */}
                  <div className="md:hidden bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {milestone.year}
                      </div>
                      <div>
                        <div className="text-sm text-blue-600 font-semibold">{milestone.year}</div>
                        <h3 className="text-lg font-bold text-gray-900">{milestone.event}</h3>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm">{milestone.description}</p>
                  </div>

                  {/* Desktop Layout */}
                  <div className="hidden md:flex items-center">
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                        <div className="text-sm text-blue-600 font-semibold mb-2">{milestone.year}</div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.event}</h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </div>
                    </div>
                    
                    {/* Dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-500 rounded-full border-4 border-white shadow-lg z-10"></div>
                    
                    {/* Year marker */}
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pl-8' : 'pr-8 text-right'}`}>
                      <div className="text-2xl font-black text-gray-300">{milestone.year}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      
    </main>
  );
}