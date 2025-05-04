'use client';

import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

const educationFundraisers = [
  {
    title: "Support The First Deaf Woman Curator From India",
    desc: "Be a Part of This Change. This is not just my journey - it is a step toward making the art world inclusive for millions of Deaf individuals in India. Your contribution, no matter how small, will help break centuries-old barriers and create a future where Deaf professionals are seen, heard, and valued in museums and exhibitions. I am determined to make history, but I cannot do this alone. Will you help me break barriers and create change? Donate now and be part of this movement!",
    link: "https://www.ketto.org/fundraiser/help-akanksha-a-deaf-indian-artist-pursue-curatorial-studies-in-italy", // External link to the donation page
    img: "/images/WnC2.jpg",
  },
  {
    title: "Pledge Your Period 2025: Dignity For Every Women And Girls",
    desc: "We’re in 2025 – Why is Period Still a Problem? Every month, millions of girls in rural India face more than just a biological change — they face shame, stigma, and silence. “No pads. No privacy. No education.” Because they bleed, many are forced to drop out of school, risk infections, and live without dignity. This Menstrual Hygiene Day (May 28), it’s time to rewrite that story. It’s time to #PledgeYourPeriod and support 1,000 rural women and girls with period education, dignity, and access to sanitary pads.",
    link: "https://www.ketto.org/fundraiser/pledge-your-period-2025-dignity-for-every-women-and-girls", // External link to the donation page
    img: "/images/WnC1.jpg",
  },
  {
    title: "Need Help For Women Aritsans Like Anjana, Struggles To Sustain Traditions",
    desc: "This 12-month program equips women with skills to start their own businesses or collaborate for sustainable income. It combines theoretical and practical learning to empower financial independence. The training and promotion total cost for six students, including individual sewing machines, is INR 4,97,000. Your generous contributions can empower these women to continue their artistry, become financially independent, and pass down their skills to future generations. Every donation, big or small, will stitch a brighter future for them. Join us in keeping the handmade quilt tradition alive!",
    link: "https://www.ketto.org/fundraiser/need-help-for-women-aritsans-like-anjana-struggles-to-sustain-traditions", // External link to the donation page
    img: "/images/WnC3.jpg",
  },
];

export default function EducationPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-orange-50 text-gray-800 scroll-smooth">
      <Navbar />
      
      {/* Header */}
      <section className="pt-32 pb-16 px-6 text-center">
        <h1 className="text-5xl font-serif font-bold mb-4">Women and Children Fundraisers</h1>
        <p className="max-w-2xl mx-auto text-lg">
        Uplift futures—help provide safety, education, and health for women and children.
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
