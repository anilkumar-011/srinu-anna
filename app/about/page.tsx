'use client'; // Required for Next.js client components

import React from 'react';

const AboutUsPage = () => {
  return (
    <div className="font-['Inter'] antialiased bg-gray-50 text-gray-900 min-h-screen pt-20">
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4 animate-fade-in-up">
            About So Best Enterprises
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-10 animate-fade-in-up delay-200">
            Your Trusted Partner for Apple Products
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Our Story Section */}
          <div className="bg-white p-8 md:p-12 rounded-xl shadow-lg mb-12 animate-fade-in delay-300 flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h2 className="text-4xl font-bold text-gray-900 mb-6 border-b-2 border-blue-600 pb-2 inline-block">
                Our Story
              </h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Founded in 20XX (or specify your founding year), **So Best Enterprises** began with a simple passion: to make cutting-edge Apple technology accessible to everyone. Located in **Pedda Amberpet, Telangana, India**, we recognized the growing demand for reliable and high-quality Apple products in our community and beyond.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                From a humble beginning, we've grown into a trusted online destination, serving countless customers who share our enthusiasm for Apple's innovation. Our journey has been defined by a commitment to authenticity, customer satisfaction, and a deep understanding of the products we offer.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center items-center">
              {/* Replace with a relevant image for your story, e.g., team photo, local landmark */}
              <img
                src="https://placehold.co/600x400/CCCCCC/000000?text=Our+Story"
                alt="Our Story"
                width={600}
                height={400}
                className="rounded-lg shadow-md"
              />
            </div>
          </div>

          {/* Our Mission Section */}
          <div className="bg-white p-8 md:p-12 rounded-xl shadow-lg mb-12 animate-fade-in delay-500 flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="md:w-1/2">
              <h2 className="text-4xl font-bold text-gray-900 mb-6 border-b-2 border-blue-600 pb-2 inline-block">
                Our Mission
              </h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                At So Best Enterprises, our mission is to be the premier provider of Apple products, offering a seamless and trustworthy shopping experience. We strive to:
              </p>
              <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
                <li>**Provide Quality:** Ensure every product, new or refurbished, meets the highest standards of performance and reliability.</li>
                <li>**Ensure Accessibility:** Make Apple's innovative technology available to a wider audience with competitive pricing.</li>
                <li>**Deliver Exceptional Service:** Offer personalized support and guidance from pre-purchase questions to after-sales care.</li>
                <li>**Foster Community:** Build lasting relationships with our customers based on trust and mutual respect.</li>
              </ul>
            </div>
            <div className="md:w-1/2 flex justify-center items-center">
              {/* Replace with an image representing your mission, e.g., people using Apple products */}
              <img
                src="https://placehold.co/600x400/CCCCCC/000000?text=Our+Mission"
                alt="Our Mission"
                width={600}
                height={400}
                className="rounded-lg shadow-md"
              />
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div className="bg-white p-8 md:p-12 rounded-xl shadow-lg animate-fade-in delay-700">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center border-b-2 border-blue-600 pb-2 inline-block mx-auto block">
              Why Choose So Best Enterprises?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="p-4">
                <div className="text-blue-600 mb-4">
                  <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.001 12.001 0 002.92 12c0 3.072 1.22 5.961 3.204 8.163a13.003 13.003 0 007.034 2.126 13.003 13.003 0 007.034-2.126c1.984-2.202 3.204-5.091 3.204-8.163a12.001 12.001 0 00-3.098-8.996z"></path></svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Guaranteed Quality</h3>
                <p className="text-gray-700">
                  We rigorously test and inspect every product to ensure it meets the highest standards. Your satisfaction is our priority.
                </p>
              </div>
              <div className="p-4">
                <div className="text-blue-600 mb-4">
                  <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.592 1L21 12h-4m-7 0H3v8a2 2 0 002 2h14a2 2 0 002-2v-8h-4.592M14 10V6a2 2 0 00-2-2h-4a2 2 0 00-2 2v4"></path></svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Competitive Pricing</h3>
                <p className="text-gray-700">
                  Get the best value for your money with our competitive prices on all genuine Apple devices.
                </p>
              </div>
              <div className="p-4">
                <div className="text-blue-600 mb-4">
                  <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H2v-2a3 3 0 015.356-1.857M17 20v-2c0-.653-.16-1.267-.432-1.802M5.356 18.143A3.001 3.001 0 0112 15.75c1.144 0 2.202.394 3.044 1.05M4 4h16V3a1 1 0 00-1-1H5a1 1 0 00-1 1v1zm8 7V8m-4-1V5m8 2V5"></path></svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Expert Support</h3>
                <p className="text-gray-700">
                  Our knowledgeable team is always ready to assist you, from choosing the right product to after-sales support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tailwind CSS Custom Animations - Kept for consistency */}
      <style>
        {`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }

        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-700 { animation-delay: 0.7s; }
        `}
      </style>
    </div>
  );
};

export default AboutUsPage;