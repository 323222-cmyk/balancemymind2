import React from "react";
import { motion } from "framer-motion";

export default function StressZonePage() {
  return (
    <motion.section
      className="min-h-screen px-6 py-16 text-center"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl text-lavender font-semibold mb-6">Stress Zone 😮‍💨</h2>
      <div className="bg-white/80 max-w-2xl mx-auto rounded-2xl p-8 shadow-md">
        <p className="mb-3">😮‍💨 Take 3 deep breaths when you feel overwhelmed.</p>
        <p className="mb-3">📔 Journal for 10 minutes to clear your thoughts.</p>
        <p>🕐 Balance study and rest — your brain needs breaks.</p>
      </div>
    </motion.section>
  );
}
