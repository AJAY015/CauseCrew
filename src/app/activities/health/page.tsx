'use client';

import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

const educationFundraisers = [
  {
    title: "Offer a Helping Hand: Support BSF Jawan’s Son Vishwanath in His Urgent Kidney Transplant Battle",
    desc: "We are deeply concerned about our colleague, Vishwanath, a 25-year-old Business Analyst who has been battling a life-threatening kidney condition since birth. Vishwanath’s kidneys have never worked, and his only kidney transplant is now failing. He urgently needs dialysis and a kidney transplant to survive. Sadly, his father, a BSF jawan, is also critically ill with liver failure. Vishwanath has no medical insurance and has been paying for his treatments out of pocket. His family is in a financial crisis, and he needs our help. Please donate and share to help save Vishwanath’s life. Every contribution counts.",
    link: "https://harshvardhangoradi.wixsite.com/causecreww/health-2", // External link to the donation page
    img: "/images/health1.jpeg.avif",
  },
  {
    title: "My Son Is Fighting For His Life And We Need Your Support To Save",
    desc: "Jayant Kumar, born on 13th November 2018, was diagnosed with West Syndrome, a rare neurological disorder that affects his brain and development. For the past 6 years, he has required intensive treatment, costing ₹25,000 to ₹30,000 per month. Despite spending a significant amount, his family now urgently needs ₹5,00,000 to continue his care at Asian Hospital. With his father, Kundan Kumar, as the only earning member, they are reaching out for help. Every donation will make a big difference in Jayant's life and his chance at a better future.",
    link: "https://www.ketto.org/fundraiser/my-son-is-fighting-for-his-life-and-we-need-your-support-to-save-him-999342", // External link to the donation page
    img: "/images/health2.jpeg.avif",
  },
  {
    title: "My Father Is Suffering from Complete Heart Block. We Need Your Help for His Treatment! Help us provide the urgent care my father needs for his severe heart condition. Your support can make a life-changing difference.",
    desc: "Kasula Shanker, a father undergoing a critical health battle, has had multiple surgeries in recent months. In January, he underwent open-heart surgery due to three blockages in his heart. Unfortunately, complications from a persistent cough caused his stitches to loosen, leading to a second surgery just a week later. To add to the challenges, it was discovered that his bone was broken, requiring a third surgery. Now, doctors have informed the family that Kasula Shanker requires one more highly critical and rare surgery. This procedure comes with high medical expenses, with an estimated cost of 10 Lakhs. He is currently receiving care at Yashoda Malakpet Hospital.",
    link: "https://www.ketto.org/fundraiser/my-father-is-suffering-from-complete-heart-block-we-need-your-help-to-provide-for-his-treatment-998060", // External link to the donation page
    img: "/images/health3.avif",
  },
];

export default function EducationPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-orange-50 text-gray-800 scroll-smooth">
      <Navbar />
      
      {/* Header */}
      <section className="pt-32 pb-16 px-6 text-center">
        <h1 className="text-5xl font-serif font-bold mb-4">Health Fundraisers</h1>
        <p className="max-w-2xl mx-auto text-lg">
        Give the gift of wellness—join us in making healthcare accessible for all.
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
