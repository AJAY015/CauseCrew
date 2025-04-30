"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// TEMP fallback components — replace if you’ve created these as shared components
const Card = ({ children, className = "" }) => (
  <div className={`bg-white rounded-xl p-4 shadow ${className}`}>{children}</div>
);
const CardContent = ({ children }) => <div>{children}</div>;
const Button = ({ children, className = "", ...props }) => (
  <button className={`px-4 py-2 rounded-lg bg-blue-600 text-white ${className}`} {...props}>
    {children}
  </button>
);

export default function HomePage() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-white text-gray-800 scroll-smooth">
      {/* Hero Section */}
      <section
        className="relative min-h-screen bg-cover bg-center text-white"
        style={{ backgroundImage: "url('../public/images/LeafImage.jpg')" }}
      >
        <nav className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-gray-300/60 backdrop-blur-md rounded-full px-6 py-2 flex gap-6 z-10">
          {["home", "about", "partners", "activities"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="text-white font-medium hover:underline"
            >
              {item.charAt(0).toUpperCase() + item.slice(1).replace("-", " ")}
            </button>
          ))}
        </nav>

        <div id="home" className="flex flex-col items-center justify-center h-screen px-4 text-center bg-black/40">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl font-bold mb-4"
          >
            Cause Crew
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-xl mb-2">
            Connect. Contribute. Change
          </motion.p>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="text-md max-w-xl">
            Your OneStop Solution for all your Fundraiser and Community Service Needs
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}>
            <Button className="mt-6 border border-white text-white hover:bg-white hover:text-black">Your Profile</Button>
          </motion.div>
        </div>
      </section>

      {/* NGO Partners */}
      <section id="partners" className="py-16 px-6">
        <h2 className="text-2xl font-semibold mb-6 text-center">Our NGO Partners</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <Card key={i}>
              <CardContent>
                <h3 className="text-xl font-bold mb-2">NGO Name {i}</h3>
                <p className="text-sm">Focus: Education, Health, or Women Empowerment</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Impact */}
      <section id="about" className="bg-gray-100 py-16 text-center">
        <h2 className="text-2xl font-semibold mb-4">Our Impact</h2>
        <p className="mb-8 max-w-xl mx-auto">Over 500 volunteers have supported 30+ NGOs, organizing 100+ events that made a real difference.</p>
        <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div><h3 className="text-xl font-bold">500+</h3><p>Volunteers</p></div>
          <div><h3 className="text-xl font-bold">30+</h3><p>NGO Partners</p></div>
          <div><h3 className="text-xl font-bold">100+</h3><p>Fundraising Events</p></div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="activities" className="py-16 px-6">
        <h2 className="text-2xl font-semibold mb-6 text-center">Volunteer Voices</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {["Life-changing experience!", "Made amazing friends.", "Felt empowered to help."].map((quote, idx) => (
            <Card key={idx}>
              <CardContent>
                <p className="italic text-sm">"{quote}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10 text-center">
        <p>&copy; 2025 CauseCreww. All rights reserved.</p>
      </footer>
    </main>
  );
}
