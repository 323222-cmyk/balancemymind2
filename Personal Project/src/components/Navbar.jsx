import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="bg-gradient-to-r from-light-blue to-lavender shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3 text-white">
        <h1 className="text-2xl font-semibold">Mind & Balance</h1>
        <div className="space-x-4">
          <Link to="/" className="hover:text-cream">Home</Link>
          <Link to="/mind" className="hover:text-cream">Mind & Balance</Link>
          <Link to="/stress" className="hover:text-cream">Stress Zone</Link>
          <Link to="/positivity" className="hover:text-cream">Positivity Corner</Link>
          <Link to="/about" className="hover:text-cream">About & Resources</Link>
          <Link to="/project" className="hover:text-cream">Project Description</Link>
        </div>
      </nav>
    </header>
  );
}
