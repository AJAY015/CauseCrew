'use client';

import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

const educationFundraisers = [
  {
    title: "'Gift A Brick' To Build A Disability Centre In Karjat",
    desc: "2025 marks a new beginning for Samaaveshi. After operating from a 4-room rented space in Kashele village (Karjat) since 2018, we have acquired a 16-guntha (17,000 sq ft) land to establish an 'Inclusive Learning & Disability Resource Centre (ILDRC)'. The ILDRC project will help expand our reach and impact on early disability intervention, teacher-training and inclusive education services across 200+ villages of Karjat tribal block of Maharashtra (India).",
    link: "https://www.ketto.org/fundraiser/SPF-DRC", // External link to the donation page
    img: "/images/disability1.jpg",
  },
  {
    title: "Gift Mobility To People With Disabilities",
    desc: "Hello! I, Pooja a friend of proVISION ASIA and I’m participating in “The Champions with Disability Run” category in the TCS World 10K event. I'm reaching out to you for support as I take on the TCS World 10k Run to raise funds for a cause that truly matters. We are running to help raise funds for 3 wheelchairs. Your donation will give the gift of mobility and enable us to provide wheelchairs to adults with disabilities.",
    link: "https://www.ketto.org/fundraiser/gift-mobility-to-people-with-disabilities-998361", // External link to the donation page
    img: "/images/disability2.jpg",
  },
  {
    title: "Support Program For People With Physical Disabilities In Rural Communities",
    desc: "Together, We Can Make a Difference. By supporting Sankalp Social Trust, you can play an integral role in transforming the lives of millions of disabled individuals who deserve a better future. With your donation, you are giving them not just financial support, but hope, dignity, and a chance to lead a more independent life. Let’s come together and make a meaningful change in the lives of those who need us the most.",
    link: "https://www.ketto.org/fundraiser/your-support-for-disabilities", // External link to the donation page
    img: "/images/disability3.jpg",
  },
];

export default function EducationPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-orange-50 text-gray-800 scroll-smooth">
      <Navbar />
      
      {/* Header */}
      <section className="pt-32 pb-16 px-6 text-center">
        <h1 className="text-5xl font-serif font-bold mb-4">Disability Fundraisers</h1>
        <p className="max-w-2xl mx-auto text-lg">
        Empower every ability—support inclusive opportunities for people with disabilities.
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
