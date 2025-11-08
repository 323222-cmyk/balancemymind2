import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import MindBalancePage from "./pages/MindBalancePage";
import StressZonePage from "./pages/StressZonePage";
import PositivityCornerPage from "./pages/PositivityCornerPage";
import AboutResourcesPage from "./pages/AboutResourcesPage";
import ProjectDescriptionPage from "./pages/ProjectDescriptionPage";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/mind" element={<MindBalancePage />} />
          <Route path="/stress" element={<StressZonePage />} />
          <Route path="/positivity" element={<PositivityCornerPage />} />
          <Route path="/about" element={<AboutResourcesPage />} />
          <Route path="/project" element={<ProjectDescriptionPage />} />
        </Routes>
      </div>
      <footer className="bg-gradient-to-r from-lavender to-peach text-white text-center py-3">
        © 2025 Mind & Balance | Take care of your mind 💫
      </footer>
    </div>
  );
}
