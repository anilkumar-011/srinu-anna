'use client'; import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-center overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 animate-gradient-shift" />
      <div className="relative z-10 p-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight mb-6 animate-fade-in-up">
          Your Next Favorite Device, Reimagined.
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-8 animate-fade-in-up delay-200">
          Discover premium pre-owned Apple products with confidence and exceptional value.
        </p>
        <div className="flex justify-center space-x-4 animate-fade-in-up delay-400">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300">
            Shop Now
          </button>
          <button className="bg-transparent border border-gray-400 text-gray-800 hover:bg-gray-100 font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-gray-300">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
