import React from "react";
import { motion } from "framer-motion";

export default function MindBalancePage() {
  return (
    <motion.section
      className="min-h-screen px-6 py-16 text-center"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl text-lavender font-semibold mb-6">Daily Wellness & Self-Care ��</h2>
      <div className="bg-white/80 max-w-2xl mx-auto rounded-2xl p-8 shadow-md">
        <p className="mb-3">🧘 Try 5 minutes of mindfulness each morning.</p>
        <p className="mb-3">💧 Stay hydrated — small steps matter.</p>
        <p>🌿 Write one positive thing about yourself daily.</p>
      </div>
    </motion.section>
  );
}
