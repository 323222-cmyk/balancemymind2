import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <motion.section
      className="min-h-screen grid place-items-center text-center px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="bg-white/70 rounded-2xl p-10 shadow-lg max-w-3xl">
        <h2 className="text-3xl font-bold text-lavender mb-4">
          Welcome to Mind & Balance 🌸
        </h2>
        <p className="text-lg mb-6">
          Your safe space for mental wellness and positivity. Here, teens can explore healthy ways to manage stress, find motivation, and discover self-care ideas that truly work for them.
        </p>
        <Link to="/mind" className="bg-peach px-6 py-3 rounded-full font-semibold hover:bg-mint-green transition">
          Explore Wellness
        </Link>
      </div>
    </motion.section>
  );
}
