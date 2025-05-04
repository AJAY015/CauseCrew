'use client';

import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

const activities = [
  {
    title: "Education",
    desc: "Explore our educational initiatives and contribute to supporting students and schools.",
    img: "/images/Education.jpg",
    link: "/activities/education" // Add the link to the new Education page
  },
  {
    title: "Women and Children",
    desc: "Explore our fundraising initiatives and contribute to supporting women and children.",
    img: "/images/WomenAndChildren.jpg",
    link: "/activities/women-children" // Add the link for Women and Children page
  },
  {
    title: "Health",
    desc: "Organizing donation and awareness drives on campuses.",
    img: "/images/Health.jpg",
    link: "/activities/health" // Add the link for Health page
  },
  {
    title: "Disability",
    desc: "Social media takeovers and storytelling for a cause.",
    img: "/images/Disability.jpg",
    link: "/activities/disability" // Add the link for Disability page
  }
];

export default function ActivitiesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-orange-50 text-gray-800 scroll-smooth">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-16 px-6 text-center">
        <Image
          src="/images/Logo.png"
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
            <Link key={idx} href={item.link}>
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
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
            </Link>
          ))}
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-10 text-center">
        <p>&copy; 2025 Cause Crew. All rights reserved.</p>
      </footer>
    </main>
  );
}
