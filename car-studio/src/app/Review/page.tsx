


"use client";

import { useState, useMemo, useEffect } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviewsData = [
 {
    id: 1,
    userName: "Sarah Johnson",
    userImage:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    carModel: "Tesla Model S Plaid",
    rating: 5,
    date: "2024-01-15",
    review:
      "The Tesla Model S Plaid is absolutely incredible! The acceleration is mind-blowing and the build quality is exceptional. The autopilot features make long drives so much more relaxing.",
    likes: 42,
    comments: 8,
    verified: true,
  },
  {
    id: 2,
    userName: "Michael Chen",
    userImage:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    carModel: "Porsche Taycan Turbo S",
    rating: 5,
    date: "2024-01-14",
    review:
      "Pure driving pleasure! The Taycan combines Porsche's legendary handling with electric power. The interior quality is top-notch and the performance is simply breathtaking.",
    likes: 38,
    comments: 12,
    verified: true,
  },
  {
    id: 3,
    userName: "Emily Rodriguez",
    userImage:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    carModel: "Ford Mustang Mach-E GT",
    rating: 4,
    date: "2024-01-13",
    review:
      "Great electric SUV that maintains the Mustang spirit. The acceleration is impressive and the interior tech is modern. Only wish the range was slightly better for long trips.",
    likes: 29,
    comments: 5,
    verified: true,
  },
  {
    id: 4,
    userName: "David Park",
    userImage:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    carModel: "BMW i4 M50",
    rating: 5,
    date: "2024-01-12",
    review:
      "BMW has nailed the electric sports sedan. The i4 M50 delivers incredible performance while maintaining BMW's signature driving dynamics. The interior is luxurious and tech-packed.",
    likes: 31,
    comments: 7,
    verified: false,
  },
  {
    id: 5,
    userName: "Jessica Williams",
    userImage:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    carModel: "Rivian R1T",
    rating: 5,
    date: "2024-01-11",
    review:
      "The ultimate adventure vehicle! The R1T combines incredible off-road capability with daily driving comfort. The gear tunnel is genius and the performance is outstanding.",
    likes: 45,
    comments: 15,
    verified: true,
  },
  {
    id: 6,
    userName: "Kevin Thompson",
    userImage:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    carModel: "Hyundai Ioniq 6",
    rating: 4,
    date: "2024-01-10",
    review:
      "Amazing efficiency and unique design! The Ioniq 6 offers incredible range and the fast charging is a game-changer. The interior feels premium and the ride is very comfortable.",
    likes: 27,
    comments: 4,
    verified: true,
  },
  {
    id: 7,
    userName: "Robert Kim",
    userImage:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=150&h=150&fit=crop&crop=face",
    carModel: "Lucid Air Grand Touring",
    rating: 5,
    date: "2024-01-09",
    review:
      "Luxury redefined! The Lucid Air offers unmatched range and incredible performance. The interior space is massive and the build quality exceeds expectations. Truly a Tesla competitor.",
    likes: 39,
    comments: 9,
    verified: true,
  },
  {
    id: 8,
    userName: "Lisa Anderson",
    userImage:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    carModel: "Audi e-tron GT",
    rating: 4,
    date: "2024-01-08",
    review:
      "Stunning design meets electric performance. The e-tron GT turns heads everywhere and the driving experience is pure Audi - refined and sporty. Charging infrastructure could be better.",
    likes: 33,
    comments: 6,
    verified: false,
  },
  {
    id: 9,
    userName: "Alex Turner",
    userImage:
      "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=150&h=150&fit=crop&crop=face",
    carModel: "Mercedes-Benz EQS",
    rating: 5,
    date: "2024-01-07",
    review:
      "The ultimate luxury electric sedan. The Hyperscreen is incredible and the ride quality is unmatched. Mercedes has created a true flagship that sets new standards for EV luxury.",
    likes: 41,
    comments: 11,
    verified: true,
  },
  {
    id: 10,
    userName: "Maria Garcia",
    userImage:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
    carModel: "Volkswagen ID.4",
    rating: 4,
    date: "2024-01-06",
    review:
      "Excellent value for an electric SUV. The ID.4 offers great range, comfortable ride, and plenty of space. Perfect for families looking to go electric without breaking the bank.",
    likes: 28,
    comments: 3,
    verified: true,
  },
  {
    id: 11,
    userName: "James Wilson",
    userImage:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    carModel: "Kia EV6 GT",
    rating: 5,
    date: "2024-01-05",
    review:
      "Performance bargain! The EV6 GT delivers supercar-like acceleration at a fraction of the price. The design is futuristic and the interior tech is top-notch. Highly recommended!",
    likes: 36,
    comments: 8,
    verified: true,
  },
  {
    id: 12,
    userName: "Sophia Lee",
    userImage:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    carModel: "Polestar 2",
    rating: 4,
    date: "2024-01-04",
    review:
      "Scandinavian design excellence! The Polestar 2 offers a minimalist interior with premium materials. Performance is strong and the Google-based infotainment system works flawlessly.",
    likes: 30,
    comments: 5,
    verified: false,
  },
];

// Animated Number
function AnimatedNumber({ value, duration = 1, format }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const totalFrames = Math.round(duration * 60);
    let frame = 0;

    const animate = () => {
      frame++;
      const progress = Math.min(frame / totalFrames, 1);
      const currentValue = start + (end - start) * progress;
      setCount(format ? format(currentValue) : Math.floor(currentValue));

      if (progress < 1) requestAnimationFrame(animate);
    };
    animate();
  }, [value]);

  return <span>{count}</span>;
}

export default function ReviewsPage() {
  const [filter, setFilter] = useState("all");
  const [sortBy, setSortBy] = useState("newest");

  // Stats Calculation
  const stats = useMemo(() => {
    const total = reviewsData.length;
    const avgRating =
      total > 0
        ? reviewsData.reduce((a, b) => a + b.rating, 0) / total
        : 0;

    const wouldRecommend = Math.round(
      (reviewsData.filter((r) => r.rating >= 4).length / total) * 100
    );

    const uniqueModels = new Set(reviewsData.map((r) => r.carModel)).size;

    return [
      {
        number: avgRating,
        label: "Average Rating",
        postfix: "",
        format: (v) => v.toFixed(1),
      },
      {
        number: total,
        label: "Reviews",
        postfix: "+",
        format: (v) => `${Math.floor(v)}+`,
      },
      {
        number: wouldRecommend,
        label: "Would Recommend",
        postfix: "%",
        format: (v) => `${Math.floor(v)}%`,
      },
      {
        number: uniqueModels,
        label: "Car Models",
        postfix: "",
        format: (v) => `${Math.floor(v)}`,
      },
    ];
  }, []);

  // Filter + Sort
  const filtered = reviewsData.filter((r) => {
    if (filter === "all") return true;
    if (filter === "5-stars") return r.rating === 5;
    if (filter === "4-stars") return r.rating === 4;
    if (filter === "verified") return r.verified;
    return true;
  });

  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === "newest")
      return new Date(b.date) - new Date(a.date);
    if (sortBy === "likes") return b.likes - a.likes;
    if (sortBy === "rating") return b.rating - a.rating;
    return 0;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* HERO SECTION */}
      <section
        className="relative py-16 md:py-24 text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,.6), rgba(0,0,0,.6)),
          url("https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1600&q=80")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="text-center container mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold"
          >
            USER <span className="text-white">REVIEWS</span>
          </motion.h1>

          {/* Animated Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-12"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + i * 0.1 }}
                className="p-4 bg-white/10 border border-white/20 rounded-2xl"
              >
                <div className="text-3xl font-bold">
                  <AnimatedNumber value={stat.number} format={stat.format} />
                  {stat.postfix}
                </div>
                <p className="text-blue-200 mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FILTER + SORT SECTION */}
      <section className="py-8 bg-blue-50 border-b border-blue-200">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-4">
          {/* Filters */}
          <div className="flex gap-3 flex-wrap">
            {[
              { key: "all", label: "All Reviews" },
              { key: "5-stars", label: "5 Stars" },
              { key: "4-stars", label: "4 Stars" },
              { key: "verified", label: "Verified Owners" },
            ].map((f) => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={`px-4 py-2 rounded-full border font-medium transition 
                  ${
                    filter === f.key
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-white text-black border-blue-300"
                  }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Sort */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 bg-white border border-blue-300 rounded-lg"
          >
            <option value="newest">Newest First</option>
            <option value="likes">Most Liked</option>
            <option value="rating">Highest Rated</option>
          </select>
        </div>
      </section>

      {/* REVIEWS LIST SECTION */}
      <section className="py-12">
        <div className="container mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sorted.map((rev) => (
            <motion.div
              key={rev.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-5 bg-white shadow-md hover:shadow-lg rounded-2xl border"
            >
              <div className="flex items-center gap-3">
                <img
                  src={rev.userImage}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-gray-800">
                    {rev.userName}
                  </h3>
                  <p className="text-sm text-gray-500">{rev.carModel}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mt-3">
                {Array.from({ length: rev.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>

              <p className="text-gray-700 text-sm mt-3">{rev.review}</p>

              <div className="flex justify-between mt-4 text-sm text-gray-500">
                <span>👍 {rev.likes}</span>
                <span>💬 {rev.comments}</span>
                {rev.verified && (
                  <span className="text-blue-600 font-semibold">
                    ✔ Verified
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
