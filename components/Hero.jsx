"use client";

import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
        
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
          Build Powerful Digital <br />
          Solutions for Your Business
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          We help startups and local businesses grow with modern websites,
          scalable web apps, and smart tech solutions.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <Link
            href="/contact"
            className="px-6 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
          >
            Get Started
          </Link>

          <Link
            href="/services"
            className="px-6 py-3 rounded-xl border border-gray-300 text-gray-800 font-medium hover:bg-gray-100 transition"
          >
            View Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
