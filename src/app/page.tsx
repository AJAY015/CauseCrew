// Redesigned CauseCreww Homepage (React + Tailwind)

'use client';
import { motion } from 'framer-motion';

const Button = ({ children, className = "", ...props }) => (
  <button
    className={`px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 ${className}`}
    {...props}
  >
    {children}
  </button>
);

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-800 scroll-smooth">
      {/* Hero Section with Background */}
      <section className="relative min-h-screen bg-cover bg-center text-white" style={{ backgroundImage: "url('/images/LeafImage.jpg')" }}>
        {/* NavBar */}
        <nav className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-gray-300/60 backdrop-blur-md rounded-full px-6 py-2 flex gap-6 z-10">
          <a href="/" className="text-white font-medium hover:underline">Home</a>
          <a href="/about" className="text-white font-medium hover:underline">About Us</a>
          <a href="/partners" className="text-white font-medium hover:underline">NGO Partners</a>
          <a href="/activities" className="text-white font-medium hover:underline">Activities</a>
        </nav>

        <div className="flex flex-col items-center justify-center h-screen px-4 text-center bg-black/40">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-5xl font-bold mb-4">Cause Crew</motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }} className="text-xl mb-2">Connect. Contribute. Change</motion.p>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }} className="text-md max-w-xl">Your OneStop Solution for all your Fundraiser and Community Service Needs</motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}>
            <Button className="mt-6 border border-white text-white hover:bg-white hover:text-black">Your Profile</Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10 text-center">
        <p>&copy; 2025 CauseCreww. All rights reserved.</p>
      </footer>
    </main>
  );
}
