'use client'; // Required for Next.js client components

import React, { useState, FC } from 'react';
import Link from 'next/link';

// --- Interfaces ---
interface MenuLink {
  name: string;
  href: string;
}

interface MenuProps {
  links: MenuLink[];
  onLinkClick?: () => void; // Optional callback for when a link is clicked (e.g., close mobile menu)
}

interface ToggleProps {
  isOpen: boolean;
  toggle: () => void;
}

// --- Data ---
const menuLinks: MenuLink[] = [
  { name: 'iPhone', href: '/products/iphones' },
  { name: 'Mac', href: '/products/macs' },
  { name: 'Watch', href: '/products/watches' },
  { name: 'Accessories', href: '/products/accessories' },
  { name: 'Support', href: '/support' },
];

// --- Components ---

/**
 * Renders the brand logo as a clickable link.
 */
const Logo: FC = () => (
  <Link href="/" className="text-2xl font-extrabold text-gray-900 tracking-tight transition-colors duration-200 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md">
    So Best Enterprises
  </Link>
);

/**
 * Renders the desktop navigation menu.
 */
const DesktopMenu: FC<MenuProps> = ({ links }) => (
  <div className="hidden md:flex items-center space-x-8 lg:space-x-12"> {/* Increased spacing for desktop */}
    {links.map((link, idx) => (
      <Link
        key={idx}
        href={link.href}
        className="text-gray-700 hover:text-blue-600 focus:text-blue-600 transition-colors duration-200 text-base font-medium py-2 px-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        {link.name}
      </Link>
    ))}
  </div>
);

/**
 * Renders the mobile navigation menu.
 */
const MobileMenu: FC<MenuProps> = ({ links, onLinkClick }) => (
  <div
    id="mobile-menu"
    className="md:hidden absolute top-full left-0 right-0 bg-white bg-opacity-95 backdrop-blur-md shadow-lg py-6 z-40 animate-fade-in-down border-t border-gray-100"
    role="menu"
    aria-orientation="vertical"
  >
    <div className="flex flex-col items-center space-y-5"> {/* Increased vertical spacing */}
      {links.map((link, idx) => (
        <Link
          key={idx}
          href={link.href}
          onClick={onLinkClick}
          className="text-gray-800 hover:text-blue-600 transition-colors duration-200 text-lg font-medium"
        >
          {link.name}
        </Link>
      ))}
      <hr className="w-1/3 border-gray-300 my-4" /> {/* Thicker separator */}
      <button
        onClick={onLinkClick} // Trigger close menu on button click
        className="text-gray-800 hover:text-blue-600 focus:text-blue-600 text-lg font-semibold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex items-center space-x-2"
        role="menuitem"
      >
        <SearchIcon className="w-5 h-5" />
        <span>Search</span>
      </button>
      <button
        onClick={onLinkClick} // Trigger close menu on button click
        className="text-gray-800 hover:text-blue-600 focus:text-blue-600 text-lg font-semibold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex items-center space-x-2"
        role="menuitem"
      >
        <ShoppingCartIcon className="w-5 h-5" />
        <span>Cart</span>
      </button>
    </div>
  </div>
);

/**
 * Renders the hamburger menu toggle button for mobile.
 */
const MenuToggle: FC<ToggleProps> = ({ isOpen, toggle }) => (
  <button
    onClick={toggle}
    className="md:hidden text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md p-1"
    aria-expanded={isOpen}
    aria-controls="mobile-menu"
    aria-label={isOpen ? "Close menu" : "Open menu"}
  >
    <svg
      className="w-7 h-7" // Slightly larger for better touch target
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      {isOpen ? (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
      ) : (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
      )}
    </svg>
  </button>
);

// --- Icons (Simple SVG examples) ---
const SearchIcon: FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
  </svg>
);

const ShoppingCartIcon: FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
  </svg>
);

// --- Main Navbar Component ---
const Navbar: FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen(prev => !prev);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-90 backdrop-blur-md shadow-md border-b border-gray-100"> {/* Stronger shadow, lighter border */}
      <div className="container mx-auto px-6 md:px-8 py-4 flex justify-between items-center h-16"> {/* Consistent height */}
        <Logo />
        <DesktopMenu links={menuLinks} />
        <div className="flex items-center space-x-4 md:space-x-6"> {/* Adjusted spacing */}
          {/* Desktop Search & Cart buttons, hidden on mobile for cleaner look in header */}
          <button
            className="hidden md:flex text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md p-1"
            aria-label="Search"
          >
            <SearchIcon className="w-6 h-6" />
          </button>
          <button
            className="hidden md:flex text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md p-1"
            aria-label="Shopping Cart"
          >
            <ShoppingCartIcon className="w-6 h-6" />
          </button>
          <MenuToggle isOpen={isMobileMenuOpen} toggle={toggleMobileMenu} />
        </div>
      </div>

      {isMobileMenuOpen && <MobileMenu links={menuLinks} onLinkClick={toggleMobileMenu} />}

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fade-in-down {
          animation: fadeInDown 0.3s ease-out forwards;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;