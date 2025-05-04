'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, className = '', ...props }) => (
  <button
    className={`px-6 py-2 rounded-lg bg-[#FF5722] text-white hover:bg-[#E64A19] transition ${className}`}
    {...props}
  >
    {children}
  </button>
);

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[url('/images/bg.jpg')] bg-no-repeat bg-top bg-contain text-gray-800 scroll-smooth">

      
      {/* NAVBAR */}
      <nav className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-gray-900/80 backdrop-blur-md rounded-full px-6 py-2 flex gap-6 z-50">
        <Link href="/" className="text-white font-medium hover:underline">Home</Link>
        <Link href="/about" className="text-white font-medium hover:underline">About Us</Link>
        <Link href="/partners" className="text-white font-medium hover:underline">NGO Partners</Link>
        <Link href="/activities" className="text-white font-medium hover:underline">Activities</Link>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen text-black flex flex-col items-center justify-center px-6 text-center overflow-hidden">
        {/* Floating Shapes */}
        <motion.div
          className="absolute top-10 left-10 w-32 h-32 bg-blue-100 rounded-full blur-2xl opacity-50"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-24 h-24 bg-pink-200 rounded-full blur-2xl opacity-40"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 7, repeat: Infinity }}
        />

        {/* <Image
          src="/images/logo.png"
          alt="Cause Crew Logo"
          width={160}
          height={160}
          className="mb-6 rounded-full shadow-xl border-4 border-white"
        /> */}

        {/* <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl font-extrabold tracking-tight mb-4"
        >
          Cause Crew
        </motion.h1> */}

        {/* <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-2xl text-gray-700 font-medium mb-2"
        >
          Connect. Contribute. Change.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-lg text-gray-600 max-w-xl mb-6"
        >
          Your one-stop solution for all your fundraiser and community service needs.
        </motion.p> */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-125"
        >
          <Link href="/login">
  <Button className="text-lg font-medium shadow-md hover:scale-105">
    Your Profile
  </Button>
</Link>


        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-6 animate-bounce"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-gray-500"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12.75L12 20.25 4.5 12.75" />
          </svg>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10 text-center">
        <p>&copy; 2025 Cause Crew. All rights reserved.</p>
      </footer>
    </main>
  );
}