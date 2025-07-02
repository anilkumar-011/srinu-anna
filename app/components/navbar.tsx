'use client';
import React, { useState, FC } from 'react';

// ✅ Types
interface MenuLink {
  name: string;
  href: string;
}

interface MenuProps {
  links: MenuLink[];
  toggle?: () => void;
}

interface ToggleProps {
  isOpen: boolean;
  toggle: () => void;
}

// ✅ JSON: Menu Links
const menuLinks: MenuLink[] = [
  { name: 'iPhone', href: '/products/iphone/' },
  { name: 'Mac', href: '#' },
  { name: 'Watch', href: '#' },
  { name: 'Accessories', href: '#' },
  { name: 'Support', href: '#' },
];

// ✅ Component: Logo
import Link from 'next/link';

const Logo: FC = () => (
  <Link href="/" className="text-2xl font-extrabold text-gray-900 tracking-tight">
    So Best Enterprises
  </Link>
);


// ✅ Component: Desktop Menu
const DesktopMenu: FC<MenuProps> = ({ links }) => (
  <div className="hidden md:flex space-x-10 items-center">
    {links.map((link, idx) => (
      <a
        key={idx}
        href={link.href}
        className="text-gray-700 hover:text-gray-900 transition-colors duration-200 text-base font-medium"
      >
        {link.name}
      </a>
    ))}
  </div>
);

// ✅ Component: Mobile Menu Overlay
const MobileMenu: FC<MenuProps> = ({ links, toggle }) => (
  <div className="md:hidden bg-white bg-opacity-95 backdrop-blur-md py-4 shadow-inner animate-fade-in-down">
    <div className="flex flex-col items-center space-y-4">
      {links.map((link, idx) => (
        <a
          key={idx}
          href={link.href}
          onClick={toggle}
          className="text-gray-800 hover:text-blue-600 transition-colors duration-200 text-lg font-medium"
        >
          {link.name}
        </a>
      ))}
      <hr className="w-1/2 border-gray-300 my-2" />
      <a href="#" className="text-gray-800 hover:text-blue-600 text-lg font-medium" onClick={toggle}>
        Search
      </a>
      <a href="#" className="text-gray-800 hover:text-blue-600 text-lg font-medium" onClick={toggle}>
        Cart
      </a>
    </div>
  </div>
);

// ✅ Component: Menu Toggle Button (Hamburger/Close)
const MenuToggle: FC<ToggleProps> = ({ isOpen, toggle }) => (
  <button
    onClick={toggle}
    className="md:hidden text-gray-600 hover:text-gray-900 focus:outline-none"
    aria-expanded={isOpen}
    aria-controls="mobile-menu"
  >
    <svg
      className="w-6 h-6"
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

// ✅ Main Navbar Component
const Navbar: FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen(prev => !prev);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-90 backdrop-blur-md shadow-lg border-b border-gray-200">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Logo />
        <DesktopMenu links={menuLinks} />
        <div className="flex items-center space-x-6">
          <button className="text-gray-600 hover:text-gray-900">Search</button>
          <button className="text-gray-600 hover:text-gray-900">Cart</button>
          <MenuToggle isOpen={isMobileMenuOpen} toggle={toggleMobileMenu} />
        </div>
      </div>

      {isMobileMenuOpen && <MobileMenu links={menuLinks} toggle={toggleMobileMenu} />}

      {/* Animation Styles */}
      <style>
        {`
          @keyframes fadeInDown {
            from { opacity: 0; transform: translateY(-20px); }
            to { opacity: 1; transform: translateY(0); }
          }

          .animate-fade-in-down {
            animation: fadeInDown 0.3s ease-out forwards;
          }
        `}
      </style>
    </nav>
  );
};

export default Navbar;
