"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const newsData = [
  {
    id: 1,
    title: "Tesla Unveils New Model 3 with Enhanced Range",
    excerpt: "Tesla announces major updates to Model 3 with 400+ mile range and faster charging capabilities.",
    content: "Tesla has officially unveiled the refreshed Model 3 with significant improvements in battery technology, offering over 400 miles of range and reducing charging time by 30%. The new model features upgraded interior materials and advanced autonomous driving capabilities.",
    category: "Electric Vehicles",
    author: "Sarah Johnson",
    date: "2024-01-15",
    readTime: "3 min read",
    image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&h=500&fit=crop",
    tags: ["Tesla", "Electric", "Innovation"]
  },
  {
    id: 2,
    title: "Porsche Announces All-Electric 718 Boxster",
    excerpt: "Porsche confirms the 718 Boxster and Cayman will go fully electric by 2025.",
    content: "Porsche has confirmed that the next generation of 718 Boxster and Cayman models will be exclusively electric. The new models will feature Porsche's latest electric powertrain technology and maintain the brand's signature driving dynamics while offering zero emissions.",
    category: "Sports Cars",
    author: "Michael Chen",
    date: "2024-01-14",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1606011334315-027e4b6d370c?w=800&h=500&fit=crop",
    tags: ["Porsche", "Electric", "Sports"]
  },
  {
    id: 3,
    title: "Ford F-150 Lightning Breaks Sales Records",
    excerpt: "Ford's electric pickup truck exceeds sales expectations in first year of production.",
    content: "The Ford F-150 Lightning has become the best-selling electric pickup in America, with over 150,000 units sold in its first year. Ford is ramping up production to meet overwhelming demand and plans to introduce new variants including a performance edition.",
    category: "Electric Trucks",
    author: "Emily Rodriguez",
    date: "2024-01-13",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1627404760619-3b4d58c56d73?w=800&h=500&fit=crop",
    tags: ["Ford", "Truck", "Electric"]
  },
  {
    id: 4,
    title: "BMW i7 Receives Luxury Car of the Year Award",
    excerpt: "BMW's flagship electric sedan wins prestigious automotive award for innovation and luxury.",
    content: "The BMW i7 has been named Luxury Car of the Year by Automotive Excellence Magazine. The electric flagship sedan impressed judges with its revolutionary theater screen, autonomous driving features, and sustainable luxury interior materials.",
    category: "Luxury Cars",
    author: "David Park",
    date: "2024-01-12",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=500&fit=crop",
    tags: ["BMW", "Luxury", "Award"]
  },
  {
    id: 5,
    title: "Rivian R2 Platform Revealed with Surprising Features",
    excerpt: "Rivian unveils its next-generation platform with innovative storage solutions and off-road capabilities.",
    content: "Rivian has pulled the covers off its R2 platform, showcasing revolutionary features including a gear tunnel that converts to a camp kitchen and enhanced off-road capabilities. The new platform will underpin more affordable models starting at $45,000.",
    category: "Adventure Vehicles",
    author: "Jessica Williams",
    date: "2024-01-11",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1632765859135-4fe7c6beb541?w=800&h=500&fit=crop",
    tags: ["Rivian", "Adventure", "Innovation"]
  },
  {
    id: 6,
    title: "Hyundai Ioniq 6 Achieves World's Most Aerodynamic Production Car",
    excerpt: "Hyundai's electric sedan sets new benchmark for aerodynamic efficiency in production vehicles.",
    content: "The Hyundai Ioniq 6 has achieved a drag coefficient of just 0.21, making it the most aerodynamic production car in the world. This breakthrough in design translates to significantly improved range and efficiency without compromising on style.",
    category: "Electric Vehicles",
    author: "Kevin Thompson",
    date: "2024-01-10",
    readTime: "3 min read",
    image: "https://images.unsplash.com/photo-1695048138202-21d1e4ec45f5?w=800&h=500&fit=crop",
    tags: ["Hyundai", "Aerodynamics", "Efficiency"]
  },
  {
    id: 7,
    title: "Lucid Air Sapphire Breaks Nürburgring Record",
    excerpt: "Lucid's performance variant sets new lap record for production electric sedans.",
    content: "The Lucid Air Sapphire has set a new lap record at the Nürburgring for production electric sedans, completing the circuit in 7:15. The tri-motor setup producing over 1,200 horsepower demonstrates Lucid's technological leadership in EV performance.",
    category: "Performance",
    author: "Robert Kim",
    date: "2024-01-09",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1632661331327-59ec66390a99?w=800&h=500&fit=crop",
    tags: ["Lucid", "Performance", "Record"]
  },
  {
    id: 8,
    title: "Mercedes-Benz Unveils Autonomous Driving Subscription",
    excerpt: "Mercedes introduces Level 3 autonomous driving as subscription service in eligible markets.",
    content: "Mercedes-Benz has launched its DRIVE PILOT Level 3 autonomous driving system as a subscription service. The system allows hands-free, eyes-off driving in certain conditions and will be available initially in Germany and California with more markets to follow.",
    category: "Autonomous Driving",
    author: "Lisa Anderson",
    date: "2024-01-08",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?w=800&h=500&fit=crop",
    tags: ["Mercedes", "Autonomous", "Technology"]
  }
];

export default function NewsPage() {
  const [selectedNews, setSelectedNews] = useState<typeof newsData[0] | null>(null);
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  // Get unique categories for filter
  const categories = ["all", ...new Set(newsData.map(news => news.category))];

  // Filter news based on category and search term
  const filteredNews = newsData.filter(news => {
    const matchesCategory = filter === "all" || news.category === filter;
    const matchesSearch = news.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         news.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         news.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const openNewsDetail = (news: typeof newsData[0]) => {
    setSelectedNews(news);
  };

  const closeNewsDetail = () => {
    setSelectedNews(null);
  };

  // Category colors
  const categoryColors: { [key: string]: string } = {
    "Electric Vehicles": "bg-green-500",
    "Sports Cars": "bg-red-500",
    "Electric Trucks": "bg-blue-500",
    "Luxury Cars": "bg-purple-500",
    "Adventure Vehicles": "bg-orange-500",
    "Performance": "bg-pink-500",
    "Autonomous Driving": "bg-cyan-500"
  };

  return (
    <div className="min-h-screen mt-15">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 text-white overflow-hidden">
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
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            AUTO NEWS
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl  mb-8 max-w-4xl mx-auto leading-relaxed"
          >
            Stay updated with the latest automotive news, innovations, and industry developments
          </motion.p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white/10 backdrop-blur-sm sticky top-0 z-30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
          

            {/* Category Filter */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex flex-wrap justify-center gap-3"
            >
              {categories.map((category) => (
                <motion.button
                  key={category}
                  whileHover={{ 
                    scale: 1.05,
                    y: -2
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setFilter(category)}
                  className={`px-5 py-2.5 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                    filter === category
                      ? "bg-blue-500 text-white shadow-lg shadow-blue-500/30"
                      : "bg-white/10 text-blue-600 hover:bg-white/20"
                  }`}
                >
                  {category === "all" ? (
                    "All News"
                  ) : (
                    <>
                      <div className={`w-2 h-2 rounded-full ${categoryColors[category]}`}></div>
                      {category}
                    </>
                  )}
                </motion.button>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredNews.map((news, index) => (
            <motion.article
              key={news.id}
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
              className="group bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 hover:border-blue-600 transition-all duration-500 shadow-2xl hover:shadow-cyan-500/20 cursor-pointer"
              onClick={() => openNewsDetail(news)}
            >
              {/* News Image */}
              <div className="relative h-48 overflow-hidden">
                <motion.img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  whileHover={{ scale: 1.1 }}
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`${categoryColors[news.category]} text-white px-3 py-1 rounded-full text-sm font-bold backdrop-blur-sm`}>
                    {news.category}
                  </span>
                </div>

                {/* Date Badge */}
                <div className="absolute top-4 right-4">
                  <span className="bg-black/50 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                    {new Date(news.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                  </span>
                </div>

                {/* Hover Read More */}
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <div className=" backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                    <span className="text-white font-semibold text-sm">Read Full Story →</span>
                  </div>
                </div>

                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent  to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              </div>

              {/* News Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-blue-600 text-sm font-medium">{news.readTime}</span>
                  <span className="text-gray-400 text-sm">{news.author}</span>
                </div>

                <h2 className="text-xl font-bold  mb-3 line-clamp-2 text-blue-500 transition-colors">
                  {news.title}
                </h2>

                <p className=" text-sm leading-relaxed mb-4 line-clamp-3">
                  {news.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {news.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="b text-blue-600 px-3 py-1 rounded-full text-xs border border-blue-600"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredNews.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-16"
          >
            <div className="text-cyan-200 text-xl mb-4">No news articles found</div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setFilter("all");
                setSearchTerm("");
              }}
              className="bg-cyan-500 text-white px-8 py-3 rounded-full hover:bg-cyan-600 transition-colors shadow-lg"
            >
              Show All News
            </motion.button>
          </motion.div>
        )}
      </section>

      {/* News Detail Modal */}
     <div >
       <AnimatePresence>
        {selectedNews && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto "
            onClick={closeNewsDetail}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, rotateY: 10 }}
              animate={{ scale: 1, opacity: 1, rotateY: 0 }}
              exit={{ scale: 0.9, opacity: 0, rotateY: -10 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden my-8 "
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1, backgroundColor: "rgba(0,0,0,0.8)" }}
                whileTap={{ scale: 0.9 }}
                onClick={closeNewsDetail}
                className="absolute top-4 right-4 bg-black/50 text-white p-3 rounded-full backdrop-blur-sm border border-white/20 z-10 "
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>

              {/* News Image */}
              <div className="relative h-64 md:h-80   mt-20">
                <img
                  src={selectedNews.image}
                  alt={selectedNews.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`${categoryColors[selectedNews.category]} text-white px-3 py-2 rounded-full text-sm font-bold backdrop-blur-sm`}>
                    {selectedNews.category}
                  </span>
                </div>
              </div>

              {/* News Content */}
              <div className="p-6 md:p-8  ">
                <div className="flex flex-wrap items-center justify-between mb-6">
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      {selectedNews.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {new Date(selectedNews.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {selectedNews.readTime}
                    </span>
                  </div>
                </div>

                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  {selectedNews.title}
                </h1>

                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  {selectedNews.excerpt}
                </p>

                <div className="prose prose-lg max-w-none mb-8">
                  <p className="text-gray-700 leading-relaxed">
                    {selectedNews.content}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {selectedNews.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-blue-200 text-blue-600 px-4 py-2 rounded-full text-sm border border-blue-600 font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-6 border-t border-gray-200">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                    </svg>
                    Like
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                    Share
                  </motion.button>
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