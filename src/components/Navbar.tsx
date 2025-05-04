'use client';

import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  
  // Track scroll position to add background opacity
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 
        ${scrolled ? 'bg-gray-900/95' : 'bg-gray-900/85'} 
        backdrop-blur-md rounded-full px-4 sm:px-8 py-3 flex gap-4 sm:gap-6 items-center z-50 
        shadow-lg text-white text-sm sm:text-base transition-all duration-300`}
    >
      <Link href="/" className={`font-semibold transition-colors duration-200 ${pathname === '/' ? 'text-orange-300' : 'hover:text-orange-300'}`}>
        Home
      </Link>
      <Link href="/about" className={`font-semibold transition-colors duration-200 ${pathname === '/about' ? 'text-orange-300' : 'hover:text-orange-300'}`}>
        About Us
      </Link>
      <Link href="/partners" className={`font-semibold transition-colors duration-200 ${pathname === '/partners' ? 'text-orange-300' : 'hover:text-orange-300'}`}>
        NGO Partners
      </Link>
      <Link href="/activities" className={`font-semibold transition-colors duration-200 ${pathname === '/activities' ? 'text-orange-300' : 'hover:text-orange-300'}`}>
        Activities
      </Link>
      <motion.span 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="ml-4 sm:ml-6 italic text-gray-300 hidden sm:inline-block font-light"
      >
        Connect. Contribute. Change.
      </motion.span>
    </motion.nav>
  );
}