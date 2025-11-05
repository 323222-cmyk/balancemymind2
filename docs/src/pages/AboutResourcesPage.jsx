import React from "react";
import { motion } from "framer-motion";

export default function AboutResourcesPage() {
  return (
    <motion.section
      className="min-h-screen px-6 py-16 text-center"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl text-lavender font-semibold mb-6">About & Resources 💚</h2>
      <div className="bg-white/80 max-w-2xl mx-auto rounded-2xl p-8 shadow-md">
        <p className="mb-4">
          Created by a student passionate about helping teens manage stress and promote mental wellness.
        </p>
        <p className="font-semibold mb-3">Trusted Resources:</p>
        <ul className="space-y-2">
          <li>📞 988 Suicide & Crisis Lifeline</li>
          <li>💬 Teen Line: text TEEN to 839863</li>
          <li>🌐 NAMI Teens: nami.org</li>
        </ul>
      </div>
    </motion.section>
  );
}
