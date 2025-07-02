'use client';
import React from 'react';

const CertificationSection = () => (
  <section className="py-20 bg-gray-100 text-center">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-gray-900 mb-6 animate-fade-in">
        Quality You Can Trust. Value You Deserve.
      </h2>
      <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-10 animate-fade-in delay-200">
        Every device undergoes rigorous inspection and certification to ensure it meets our high standards.
        Shop with peace of mind.
      </p>
      <button className="bg-gray-900 hover:bg-gray-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-gray-400 animate-fade-in delay-400">
        See Our Certification Process
      </button>
    </div>
  </section>
);

export default CertificationSection;
