import React from "react";
import { motion } from "framer-motion";

export default function PositivityCornerPage() {
  return (
    <motion.section
      className="min-h-screen px-6 py-16 text-center"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl text-lavender font-semibold mb-6">Positivity Corner ✨</h2>
      <div className="bg-white/80 max-w-2xl mx-auto rounded-2xl p-8 shadow-md">
        <p className="mb-3">“You are enough, just as you are.”</p>
        <p className="mb-3">“Every storm passes — keep going.”</p>
        <input
          type="text"
          placeholder="Type something uplifting!"
          className="mt-4 p-3 rounded-full border w-3/4"
        />
      </div>
    </motion.section>
  );
}
