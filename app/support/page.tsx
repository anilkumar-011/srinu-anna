'use client'; // Required for Next.js client components

import { useState } from 'react';

const SupportPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null); 

  const faqs = [
    {
      id: 1,
      question: 'What is your return policy?',
      answer: 'We offer a 14-day return policy for most products from the date of delivery. Items must be in their original condition with all packaging and accessories. Please check our full Returns Policy for exceptions and details.',
    },
    {
      id: 2,
      question: 'How can I track my order?',
      answer: 'Once your order is shipped, you will receive an email with a tracking number and a link to the courier\'s website. You can also log into your account and view your order history to find tracking information.',
    },
    {
      id: 3,
      question: 'Do you offer warranty on your products?',
      answer: 'All new Apple products come with Apple\'s standard one-year limited warranty. For pre-owned or refurbished items, specific warranty details will be provided on the product page. Extended warranty options may also be available for purchase.',
    },
    {
      id: 4,
      question: 'What payment methods do you accept?',
      answer: 'We accept major credit cards (Visa, MasterCard, American Express), debit cards, and secure online payment options like Apple Pay and Google Pay. Bank transfers may also be available for larger purchases.',
    },
    {
      id: 5,
      question: 'Can I change or cancel my order after it\'s placed?',
      answer: 'Orders are processed quickly. If you need to change or cancel, please contact us immediately at support@yourappleshop.com. We\'ll do our best to accommodate your request, but cannot guarantee changes once processing begins.',
    },
  ];

interface Faq {
    id: number;
    question: string;
    answer: string;
}

const toggleFaq = (id: number): void => {
    setOpenFaq(openFaq === id ? null : id);
};

  return (
    <div className="font-['Inter'] antialiased bg-gray-50 text-gray-900 min-h-screen pt-20">
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4 animate-fade-in-up">
            Customer Support
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-10 animate-fade-in-up delay-200">
            How can we help you today?
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* FAQs Section */}
            <div className="bg-white p-8 rounded-xl shadow-lg mb-10 animate-fade-in delay-300">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                Frequently Asked Questions
              </h2>
              {faqs.map((faq) => (
                <div key={faq.id} className="border-b border-gray-200 py-4">
                  <button
                    className="flex justify-between items-center w-full text-left focus:outline-none"
                    onClick={() => toggleFaq(faq.id)}
                  >
                    <span className="text-xl font-semibold text-gray-800">
                      {faq.question}
                    </span>
                    <svg
                      className={`w-6 h-6 transform transition-transform duration-200 ${
                        openFaq === faq.id ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </button>
                  {openFaq === faq.id && (
                    <p className="mt-4 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* Contact Information Section */}
            <div className="bg-white p-8 rounded-xl shadow-lg mb-10 animate-fade-in delay-500">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                Contact Us
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center md:text-left">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Email Support</h3>
                  <p className="text-gray-600">
                    For general inquiries or order support, please email us at:
                  </p>
                  <a
                    href="mailto:support@yourappleshop.com"
                    className="text-blue-600 hover:text-blue-800 font-medium mt-1 inline-block"
                  >
                    support@yourappleshop.com
                  </a>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Phone Support</h3>
                  <p className="text-gray-600">
                    Speak directly with our support team:
                  </p>
                  <a
                    href="tel:+911234567890" // Example India number
                    className="text-blue-600 hover:text-blue-800 font-medium mt-1 inline-block"
                  >
                    +91 12345 67890 (India)
                  </a>
                  <p className="text-gray-500 text-sm mt-1">
                    Available: Mon - Fri, 9:00 AM - 6:00 PM IST
                  </p>
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Address</h3>
                  <p className="text-gray-600">
                    [Your Shop Name/Company Name]<br />
                    [Your Street Address]<br />
                    Pedda Amberpet, Telangana, India - [Your Pincode]
                  </p>
                </div>
              </div>
            </div>

            {/* Live Chat & Policy Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg animate-fade-in delay-700">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                  Live Chat
                </h2>
                <p className="text-gray-700 text-center mb-4">
                  Need immediate assistance? Our live chat agents are ready to help!
                </p>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-bold transition-colors duration-200 shadow-md">
                  Start Live Chat
                </button>
                <p className="text-gray-500 text-sm mt-2 text-center">
                  (Available during business hours)
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg animate-fade-in delay-900">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                  Policies & Information
                </h2>
                <ul className="text-gray-700 space-y-3">
                  <li>
                    <a href="/returns-policy" className="text-blue-600 hover:text-blue-800 font-medium">
                      Returns & Refunds Policy &rarr;
                    </a>
                  </li>
                  <li>
                    <a href="/warranty-information" className="text-blue-600 hover:text-blue-800 font-medium">
                      Warranty Information &rarr;
                    </a>
                  </li>
                  <li>
                    <a href="/shipping-info" className="text-blue-600 hover:text-blue-800 font-medium">
                      Shipping Information &rarr;
                    </a>
                  </li>
                  <li>
                    <a href="/privacy-policy" className="text-blue-600 hover:text-blue-800 font-medium">
                      Privacy Policy &rarr;
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tailwind CSS Custom Animations */}
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
        .delay-900 { animation-delay: 0.9s; }
        `}
      </style>
    </div>
  );
};

export default SupportPage;