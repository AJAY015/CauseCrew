'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/Button'; // Assuming your Button component is in a separate file
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here, handle login functionality and redirect after successful login
    // For now, we will just redirect to the profile page
    router.push('/profile');
  };

  return (
    <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/images/bg.jpg)' }}>
      {/* Form Container */}
      <div className="flex items-center justify-center min-h-screen bg-black bg-opacity-50">
        <motion.div
          className="w-full max-w-md p-8 bg-black bg-opacity-80 rounded-lg shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl text-white text-center mb-6">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-white text-sm mb-2">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="password" className="block text-white text-sm mb-2">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            <div className="flex justify-center">
              <Button type="submit" className="w-full py-2 text-white bg-[#FF5722] hover:bg-[#E64A19]">
                Log In
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default LoginPage;
