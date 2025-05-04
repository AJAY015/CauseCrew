'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar'; // Import the Navbar component

// Enhanced partners data with categories
const partners = [
  { name: "Pratham", category: "Education" },
  { name: "eVidyaloka", category: "Education" },
  { name: "Urmi Foundation", category: "Disability" },
  { name: "Simple Education Foundation", category: "Education" },
  { name: "Parikrma Humanity Foundation", category: "Education" },
  { name: "K.C. Mahindra Education Trust", category: "Education" },
  { name: "Educate Girls", category: "Education" },
  { name: "Aarti for Girls", category: "Women & Children" },
  { name: "Adhyayan Quality Education Foundation", category: "Education" },
  { name: "Teach For India", category: "Education" },
  { name: "AIM for Seva", category: "Rural Development" },
  { name: "Rural Health Care Foundation", category: "Healthcare" },
  { name: "The Minds Foundation", category: "Mental Health" },
  { name: "Child In Need Institute", category: "Women & Children" },
  { name: "Milaan Foundation", category: "Women & Children" },
  { name: "Concern India Foundation", category: "Rural Development" },
  { name: "Life Blood Council", category: "Healthcare" },
  { name: "Dignity Foundation", category: "Elderly Care" },
  { name: "E&H Foundation", category: "Education" },
  { name: "Sparsha Charitable Trust", category: "Women & Children" },
  { name: "Youth Education and Empowerment Foundation", category: "Education" },
  { name: "Light of Life Trust", category: "Rural Development" },
  { name: "Women for Women", category: "Women & Children" },
  { name: "My Choices Foundation", category: "Women & Children" },
  { name: "The Prajnya Trust", category: "Women & Children" },
  { name: "Nanhi Kali", category: "Education" },
  { name: "Ibtada", category: "Rural Development" },
  { name: "Guria India", category: "Women & Children" },
  { name: "CanKids KidsCan", category: "Healthcare" },
  { name: "I Was A Sari", category: "Women & Children" },
  { name: "Tisser", category: "Rural Development" },
  { name: "ARVI Trust", category: "Environment" },
  { name: "Sightsavers India", category: "Disability" },
  { name: "Amar Seva Sangam", category: "Disability" }
];

// Get unique categories for filtering
const categories = ["All", ...new Set(partners.map(partner => partner.category))];

export default function PartnersPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredPartners, setFilteredPartners] = useState(partners);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Filter partners based on selected category
    if (selectedCategory === "All") {
      setFilteredPartners(partners);
    } else {
      setFilteredPartners(partners.filter(partner => partner.category === selectedCategory));
    }
    
    // Mark as loaded for animations
    setIsLoaded(true);
  }, [selectedCategory]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-orange-50 text-gray-800">
      {/* Use the imported Navbar component */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="relative mb-8 inline-block">
            <Image
              src="/images/Logo.png"
              alt="Cause Crew Logo"
              width={120}
              height={120}
              className="mx-auto"
            />
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: isLoaded ? 1 : 0 }}
              transition={{ delay: 0.3, duration: 0.5, type: "spring" }}
              className="absolute -bottom-2 -right-2 bg-orange-500 text-white rounded-full px-3 py-1 text-xs font-bold"
            >
              {partners.length}+ Partners
            </motion.div>
          </div>
          
          <h1 className="text-5xl font-serif font-bold mb-6 bg-gradient-to-r from-orange-600 to-red-600 text-transparent bg-clip-text">Our NGO Partners</h1>
          
          <p className="text-lg mb-8 leading-relaxed">
            At Cause Crew, we collaborate with impact-driven NGOs that are dedicated to creating real change.
            Our trusted partners work across various causes, from education and women's empowerment to healthcare and disability support.
          </p>
          
          <motion.div 
            className="flex flex-wrap gap-3 justify-center items-center mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoaded ? 1 : 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-orange-500 text-white shadow-md"
                    : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Partners Grid */}
      <section className="py-12 px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-2 text-center">
            {selectedCategory === "All" 
              ? "All Partner Organizations" 
              : `${selectedCategory} Partners`}
          </h2>
          <p className="text-center text-gray-600 mb-10">
            Showing {filteredPartners.length} out of {partners.length} partner organizations
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredPartners.map((partner, idx) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05, duration: 0.4 }}
                whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
                className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 flex flex-col"
              >
                <div className="flex-grow flex flex-col">
                  <h3 className="font-semibold text-lg mb-3 leading-snug">{partner.name}</h3>
                  <div className="mt-auto pt-2">
                    <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-orange-100 text-orange-700">
                      {partner.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Become a Partner Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Become a Partner</h2>
          <p className="text-lg mb-8">
            Are you an NGO looking to collaborate with dedicated volunteers? 
            Join our network of impact-driven organizations and amplify your social impact.
          </p>
          <button className="bg-white text-orange-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-lg">
            Apply to Partner With Us
          </button>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Impact Together</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 text-center shadow-md">
              <div className="text-5xl font-bold text-orange-500 mb-2">35+</div>
              <div className="text-lg font-medium">Partner NGOs</div>
              <p className="text-gray-600 mt-3">Working across 7+ cause areas</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 text-center shadow-md">
              <div className="text-5xl font-bold text-orange-500 mb-2">1200+</div>
              <div className="text-lg font-medium">Student Volunteers</div>
              <p className="text-gray-600 mt-3">From 15+ educational institutions</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 text-center shadow-md">
              <div className="text-5xl font-bold text-orange-500 mb-2">25,000+</div>
              <div className="text-lg font-medium">Volunteer Hours</div>
              <p className="text-gray-600 mt-3">Creating meaningful impact</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">What Our Partners Say</h2>
          
          <div className="bg-white rounded-2xl p-8 shadow-md relative">
            <div className="text-5xl text-orange-200 absolute top-6 left-6">"</div>
            <p className="text-lg italic mb-6 relative z-10">
              Cause Crew has been instrumental in connecting us with dedicated student volunteers. 
              Their commitment to our mission has helped us expand our reach and impact in ways we 
              couldn't have imagined.
            </p>
            <div className="flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
              <div className="text-left">
                <div className="font-semibold">Priya Sharma</div>
                <div className="text-sm text-gray-600">Director, Educate Girls</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-gray-900 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <Image
              src="/images/Logo.png"
              alt="Cause Crew Logo"
              width={120}
              height={50}
              className="mb-4"
            />
            <p className="text-gray-400 mb-4">
              Connecting passionate student volunteers with impact-driven NGOs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"/></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z"/></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/partners" className="text-gray-400 hover:text-white transition-colors">NGO Partners</Link></li>
              <li><Link href="/activities" className="text-gray-400 hover:text-white transition-colors">Activities</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">For NGOs</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Become a Partner</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Partner Login</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Success Stories</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Resources</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">For Volunteers</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Join as Volunteer</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Volunteer Login</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Impact Reports</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Volunteer Guide</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 max-w-6xl mx-auto text-center">
          <p className="text-gray-400">&copy; 2025 Cause Crew. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}