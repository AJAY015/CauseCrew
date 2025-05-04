'use client';

import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

const activities = [
  {
    title: "Fundraising Campaigns",
    desc: "Students create and lead campaigns to support NGO projects.",
    img: "/images/activity-fundraising.jpg"
  },
  {
    title: "Skill-Based Volunteering",
    desc: "Students offer design, tech, marketing and writing support.",
    img: "/images/activity-volunteering.jpg"
  },
  {
    title: "Community Drives",
    desc: "Organizing donation and awareness drives on campuses.",
    img: "/images/activity-drives.jpg"
  },
  {
    title: "Creative Campaigns",
    desc: "Social media takeovers and storytelling for a cause.",
    img: "/images/activity-creative.jpg"
  }
];

export default function ActivitiesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-orange-50 text-gray-800 scroll-smooth">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-16 px-6 text-center">
        <Image
          src="/images/logo.png"
          alt="Cause Crew Logo"
          width={100}
          height={100}
          className="mx-auto mb-6"
        />
        <h1 className="text-5xl font-serif font-bold mb-4">Fundraising & Volunteering Activities</h1>
        <p className="max-w-2xl mx-auto text-lg">
          From raising funds to hands-on volunteering, our students contribute meaningfully through every initiative. Here’s how we make impact happen on the ground.
        </p>
      </section>

      {/* Activities Grid */}
      <section className="py-16 px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {activities.map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <Image
                src={item.img}
                alt={item.title}
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-10 text-center">
        <p>&copy; 2025 Cause Crew. All rights reserved.</p>
      </footer>
    </main>
  );
}