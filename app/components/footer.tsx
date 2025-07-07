'use client';

import Link from 'next/link';
import { useState } from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Define quick links
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
  ];

  // Define shop categories
  const shopCategories = [
    { name: 'iPhones', href: '/product/iphones' },
    { name: 'Mac', href: '/product/macs' },
    { name: 'Apple Watch', href: '/product/watches' },
    { name: 'Accessories', href: '/product/accessories' },
  ];

  // Define support links
  const supportLinks = [
    { name: 'Contact Us', href: '/support' },
    { name: 'FAQs', href: '/support#faqs' },
    { name: 'Returns & Exchange', href: '/support#returns-policy' },
    { name: 'Warranty Info', href: '/support#warranty-information' },
  ];

  // Define social media links
  const socialMediaLinks = [
    { iconClass: 'fab fa-facebook-f', href: 'https://www.facebook.com/apple', name: 'Facebook' },
    { iconClass: 'fab fa-twitter', href: 'https://www.twitter.com/apple', name: 'Twitter' },
    { iconClass: 'fab fa-instagram', href: 'https://www.instagram.com/apple', name: 'Instagram' },
    { iconClass: 'fab fa-linkedin-in', href: 'https://www.linkedin.com/company/apple', name: 'LinkedIn' },
  ];

  // State to manage open/closed status of collapsible sections on mobile
  const [openSection, setOpenSection] = useState<string | null>(null); // 'quickLinks', 'shopCategories', 'supportLinks'

  interface SectionNameType {
    quickLinks: string;
    shopCategories: string;
    supportLinks: string;
    [key: string]: string;
  }

  type SectionName = keyof SectionNameType | null;

  const toggleSection = (sectionName: string): void => {
    setOpenSection(openSection === sectionName ? null : sectionName);
  };

  // Reusable component for each footer link section
  type FooterLinkSectionProps = {
    title: string;
    links: { name: string; href: string }[];
    sectionName: string;
  };

  const FooterLinkSection = ({ title, links, sectionName }: FooterLinkSectionProps) => (
    <div className="md:col-span-1"> {/* Ensures correct grid spanning on desktop */}
      <button
        className="flex justify-between items-center w-full text-white text-lg font-semibold py-2 md:py-0 md:cursor-default focus:outline-none"
        onClick={() => toggleSection(sectionName)}
        aria-expanded={openSection === sectionName}
        aria-controls={`footer-menu-${sectionName}`}
      >
        <h3 className="mb-0 md:mb-4">{title}</h3> {/* No bottom margin on mobile button for tighter look */}
        <svg
          className={`w-5 h-5 text-gray-400 transition-transform duration-300 md:hidden ${
            openSection === sectionName ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>

      {/* Content for mobile (collapsible) and desktop (always visible) */}
      <div
        id={`footer-menu-${sectionName}`}
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          openSection === sectionName ? 'max-h-60 opacity-100 mt-2' : 'max-h-0 opacity-0 md:max-h-full md:opacity-100'
        } md:block`}
      >
        <ul className="space-y-2">
          {links.map((link) => (
            <li key={link.name}>
              <Link href={link.href} className="text-gray-400 hover:text-white transition-colors duration-200">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-4 mb-8"> {/* Adjusted gap-y for mobile */}
          {/* Section 1: Logo & Slogan (Always visible) */}
          <div className="pb-4 md:pb-0">
            <Link href="/" className="flex items-center mb-4">
              <span className="text-white text-3xl font-bold">So Best Enterprises</span>
            </Link>
            <p className="text-gray-400 text-sm">
              Your one-stop destination for the latest Apple products and accessories.
              Quality, innovation, and unparalleled customer service.
            </p>
          </div>

          {/* Other sections using the reusable component */}
          <FooterLinkSection title="Quick Links" links={quickLinks} sectionName="quickLinks" />
          <FooterLinkSection title="Shop" links={shopCategories} sectionName="shopCategories" />
          <FooterLinkSection title="Support" links={supportLinks} sectionName="supportLinks" />
        </div>

        {/* Separator */}
        <hr className="border-gray-700 my-8" />

        {/* Bottom Section: Copyright & Social Media */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p className="mb-4 md:mb-0 text-center md:text-left">
            &copy; {currentYear} So Best Enterprises. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {socialMediaLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="hover:text-white transition-colors duration-200"
              >
                <i className={`${social.iconClass} text-lg`}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;