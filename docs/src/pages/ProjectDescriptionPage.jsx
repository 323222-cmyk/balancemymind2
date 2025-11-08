import React from "react";
import { motion } from "framer-motion";

export default function ProjectDescriptionPage() {
  return (
    <motion.section
      className="min-h-screen px-6 py-16 text-center"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl text-lavender font-semibold mb-6">Project Description 🌼</h2>
      <div className="bg-white/80 max-w-3xl mx-auto rounded-2xl p-8 shadow-md text-left">
        <p className="mb-3">
          This website was designed to promote teen mental wellness through a calm and uplifting experience.
        </p>
        <p className="mb-3"><strong>Colors:</strong> light blue, mint green, lavender, peach, cream.</p>
        <p className="mb-3"><strong>Layout:</strong> clean centered sections with soft pastel gradients and rounded cards.</p>
        <p className="mb-3"><strong>Animations:</strong> gentle fade-ins and smooth scrolling.</p>
        <p className="mb-3"><strong>UI / UX:</strong> friendly fonts, easy navigation, positive tone.</p>
        <p><strong>Features:</strong> quick links, wellness exercises, motivational quotes, Stress Zone, and help resources (988, Teen Line, NAMI Teens).</p>
      </div>
    </motion.section>
  );
}
