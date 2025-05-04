'use client';

import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

const educationFundraisers = [
  {
    title: "Support Ananya’s Campaign! Help give school kits to children who need them most. Your contribution can make learning easier and brighter for every child. Be the reason a child smiles today!",
    desc: "Be the Reason for Their Joy! Many children in government schools don’t have basic school supplies. They come to class with torn bags, few notebooks, and no stationery. You can help! At Yuva Bengaluru Trust, we want to support these kids by giving them full school kits. This year, our goal is to give 600+ kits to students from low-income families. Together, let’s help them learn with confidence!Pratham is an innovative learning organization created to improve the quality of education in India. As one of the largest non-governmental organizations in the country, Pratham focuses on high-quality, low-cost and replicable interventions to address gaps in the education system.",
    link: "https://www.ketto.org/fundraiser/Ananya-for-Yuva-Bengaluru-Trust-999060", // External link to the donation page
    img: "/images/education1.jpg",
  },
  {
    title: "Support Shanthav’s Campaign! Help provide school supplies to children in need. Your support gives them the tools to learn, grow, and succeed. Together, let's build a brighter future!",
    desc: "Be the Reason for Their Joy! Many children in government schools don’t have things like bags, notebooks, or pens. This makes it hard for them to learn. Shanthav is raising money to support Yuva Bengaluru Trust, which helps these children. This year, the goal is to give 600+ school kits to kids from low-income families. Each kit will help a child go to school with confidence and learn better. Let’s make a difference together!",
    link: "https://www.ketto.org/fundraiser/Shanthav-for-Yuva-Bengaluru-Trust-999063", // External link to the donation page
    img: "/images/education2.jpg",
  },
  {
    title: "Gift a School Kit, Gift a Smile! Help provide school kits to children who need them the most. Your contribution can make learning easier, brighter, and more joyful for every child. Be the reason a child smiles today!",
    desc: "Be the Reason for Their Joy! Many children in government schools don't have basic supplies like bags, notebooks, or pens. This makes learning hard for them. At Yuva Bengaluru Trust, we want to help these kids by giving them full school kits. This year, our goal is to provide 600+ kits to children from low-income families. You can make a difference!",
    link: "https://www.ketto.org/fundraiser/Sunil-BV-for-Yuva-Bengaluru-Trust-995711", // External link to the donation page
    img: "/images/education3.jpg",
  },
];

export default function EducationPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-orange-50 text-gray-800 scroll-smooth">
      <Navbar />
      
      {/* Header */}
      <section className="pt-32 pb-16 px-6 text-center">
        <h1 className="text-5xl font-serif font-bold mb-4">Education Fundraisers</h1>
        <p className="max-w-2xl mx-auto text-lg">
          Explore our educational initiatives and contribute to supporting students and schools.
        </p>
      </section>

      {/* Activities Grid */}
      <section className="py-16 px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {educationFundraisers.map((item, idx) => (
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
                <Link href={item.link} passHref>
                  <button className="mt-4 px-6 py-2 rounded-lg bg-[#FF5722] text-white hover:bg-[#E64A19] transition">
                    Donate Now
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10 text-center">
        <p>&copy; 2025 Cause Crew. All rights reserved.</p>
      </footer>
    </main>
  );
}
