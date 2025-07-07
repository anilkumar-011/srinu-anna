'use client'
import { macs } from "../../products"

const MacBookSellingPage = () => {

  return (
    <div className="font-['Inter'] antialiased bg-gray-50 text-gray-900 min-h-screen pt-20">
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4 animate-fade-in-up">
            Mac Collection
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-10 animate-fade-in-up delay-200">
            Discover our range of powerful MacBooks, iMacs, and other Mac devices.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {macs.map((mac, index) => (
              <div
                key={mac.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-fade-in delay-500"
                style={{ animationDelay: `${500 + index * 100}ms` }}
              >
                <img
                  src={mac.imageUrl}
                  alt={mac.name}
                  className="w-full h-56 object-cover object-center"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                    {mac.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-1">
                    <span className="font-medium">Year Introduced:</span> {mac.year_introduced}
                  </p>
                  <p className="text-gray-600 text-sm mb-3">
                    <span className="font-medium">Storage Options:</span> {mac.storage_options.join(', ')}
                  </p>
                  <p className="text-gray-700 text-base mb-4 line-clamp-3">
                    {mac.description}
                  </p>
                  <button className="w-full bg-gray-900 hover:bg-gray-700 text-white py-2.5 rounded-lg font-medium transition-colors duration-200">
                    Click Here to customise and buy
                  </button>
                </div>
              </div>
            ))}
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

        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradientShift 10s ease infinite;
        }

        .delay-200 { animation-delay: 0.2s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        `}
      </style>
    </div>
  );
};

export default MacBookSellingPage;