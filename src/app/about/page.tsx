'use client';

import { useState, useEffect } from 'react';
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  // For fade-in animation on scroll
  const [isVisible, setIsVisible] = useState({
    story: false,
    mission: false,
    causes: false,
    team: false
  });

  useEffect(() => {
    const handleScroll = () => {
      const story = document.getElementById('story-section');
      const mission = document.getElementById('mission-section');
      const causes = document.getElementById('causes-section');
      const team = document.getElementById('team-section');

      if (story && window.scrollY > story.offsetTop - window.innerHeight * 0.75) {
        setIsVisible(prev => ({ ...prev, story: true }));
      }
      if (mission && window.scrollY > mission.offsetTop - window.innerHeight * 0.75) {
        setIsVisible(prev => ({ ...prev, mission: true }));
      }
      if (causes && window.scrollY > causes.offsetTop - window.innerHeight * 0.75) {
        setIsVisible(prev => ({ ...prev, causes: true }));
      }
      if (team && window.scrollY > team.offsetTop - window.innerHeight * 0.75) {
        setIsVisible(prev => ({ ...prev, team: true }));
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check in case elements are already in view
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Team members data
  const teamMembers = [
    { 
      name: "Harshvardhan Goradia", 
      role: "Founder & CEO", 
      img: "/images/Harshvardhan-Gondia.avif",
      bio: "Passionate about connecting students with meaningful volunteer opportunities."
    },
    { 
      name: "Karissa Sanghvi", 
      role: "Co-Founder & COO", 
      img: "/images/Karrisa-Sanghvi.avif",
      bio: "Dedicated to making social impact accessible for all students."
    },
    { 
      name: "Jia Kursija", 
      role: "Head of Partnerships", 
      img: "/images/Jia-Kursija.avif",
      bio: "Building bridges between NGOs and student volunteers."
    },
    { 
      name: "Tanuj Bidnurkar", 
      role: "Technical Lead", 
      img: "/images/Tanuj.avif",
      bio: "Developing innovative solutions for community service tracking."
    },
    { 
      name: "Yaseen Munshi", 
      role: "Outreach Director", 
      img: "/images/YaseenMunshi.avif",
      bio: "Expanding our impact to schools and communities worldwide."
    },
  ];

  // Causes we support
  const causes = [
    { label: "Education", img: "/images/Education.avif", link: "/activities/education", description: "Supporting access to quality education for all." },
    { label: "Health", img: "/images/cause-health.avif", link: "/activities/health", description: "Promoting wellbeing and healthcare initiatives." },
    { label: "Women and Children", img: "/images/WomenAndChildren.avif", link: "/activities/women-children", description: "Empowering women and protecting children's rights." },
    { label: "Disability", img: "/images/cause-disability.avif", link: "/activities/disability", description: "Creating inclusive environments for people with disabilities." },
  ];

  return (
    <main className="bg-[#fdf8f2] text-gray-800 min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-28 pb-20 px-6 md:px-12 lg:px-20 text-center bg-white shadow-md relative overflow-hidden">
        {/* Background patterns */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5 z-0">
          <div className="absolute top-0 left-0 w-32 h-32 rounded-full bg-yellow-500 -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-blue-500 translate-x-1/3 translate-y-1/3"></div>
        </div>
        
        <div className="relative z-10">
          <div className="flex justify-center mb-8 transition-transform duration-700 hover:scale-105">
            <Image
              src="/images/logo.png"
              alt="Cause Crew Logo"
              width={120}
              height={120}
              className="rounded-full shadow-lg"
              priority
            />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-red-600">
            About Cause Crew
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
            Cause Crew is a purpose-driven platform connecting college and IB students with verified NGOs for meaningful volunteering and transparent fundraising. We bridge the gap between students seeking impactful community service opportunities and organizations needing dedicated support.
          </p>
          <div className="mt-10">
            <Link 
              href="/join"
              className="px-8 py-3 bg-orange-600 text-white rounded-full font-medium hover:bg-orange-700 transition-colors duration-300 shadow-md"
            >
              Join Our Movement
            </Link>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-5xl font-bold mb-2">1000+</span>
            <span className="text-sm md:text-base">Students Engaged</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-5xl font-bold mb-2">50+</span>
            <span className="text-sm md:text-base">Partner NGOs</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-5xl font-bold mb-2">20K+</span>
            <span className="text-sm md:text-base">Volunteer Hours</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-5xl font-bold mb-2">15</span>
            <span className="text-sm md:text-base">Schools Partnered</span>
          </div>
        </div>
      </section>

      {/* Image Section with Parallax Effect */}
      {/* New Image Banner Section */}
      <section className="w-full text-center py-10 bg-gray-100">
  <Image
    src="/images/cause-crew-event.avif"
    alt="Cause Crew Event"
    width={1200}
    height={500}
    className="mx-auto rounded-lg object-cover"
  />
  <h2 className="mt-6 text-3xl font-serif font-bold text-gray-800">
    Making an Impact Together
  </h2>
</section>





      {/* Our Story Section */}
      <section id="story-section" className={`py-24 px-6 md:px-12 bg-[#fffaf4] text-center ${isVisible.story ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-1000`}>
        <div className="max-w-4xl mx-auto">
          <span className="text-orange-600 font-medium text-sm uppercase tracking-wider">Our Journey</span>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-8 mt-2">Our Story</h2>
          
          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              It all started with a simple goal: to make social impact accessible for students.
            </p>
            <p>
              We saw young changemakers eager to help but struggling to find structured opportunities. NGOs needed volunteers and funding, while schools sought better ways to track community service. Cause Crew bridges this gap.
            </p>
            <p>
              By connecting students with vetted NGOs, we make volunteering, fundraising, and CAS fulfilment seamless. More than a platform, we're a movement—empowering youth to take action and create real change.
            </p>
          </div>
          
          <div className="mt-12 p-6 bg-white rounded-xl shadow-md">
            <blockquote className="italic text-xl">
              "We believe every student has the power to change the world. We just provide the platform to make it happen."
            </blockquote>
            <cite className="block mt-4 text-gray-600">— Founding Team, Cause Crew</cite>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission-section" className={`py-24 px-6 md:px-12 bg-white text-center ${isVisible.mission ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-1000`}>
        <div className="max-w-4xl mx-auto">
          <span className="text-orange-600 font-medium text-sm uppercase tracking-wider">Our Purpose</span>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-8 mt-2">Our Mission</h2>
          
          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              Our mission is simple: <span className="font-semibold">Connect. Contribute. Change.</span> We empower young changemakers by providing structured volunteering roles, skill-based matching, and a seamless way to fulfil CAS and community service requirements.
            </p>
            <p>
              Through our digital network, students gain valuable leadership experience, while NGOs receive consistent support to sustain and expand their impact.
            </p>
            <p>
              Cause Crew isn't just a platform—it's a movement. By fostering social responsibility and making community service more accessible, we're creating a future where every student can contribute to change, one cause at a time.
            </p>
          </div>
          
          <div className="mt-10">
            <p className="font-semibold text-xl text-orange-600">Join the Crew. Make a Difference.</p>
          </div>
        </div>
      </section>

      {/* Causes Grid */}
      <section id="causes-section" className={`py-24 px-6 md:px-12 bg-[#f7f7f7] ${isVisible.causes ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-1000`}>
        <div className="max-w-6xl mx-auto">
          <span className="text-orange-600 font-medium text-sm uppercase tracking-wider text-center block">Areas of Impact</span>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-12 mt-2 text-center">Causes We Support</h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {causes.map((cause, index) => (
              <Link
                key={index}
                href={cause.link}
                className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={cause.img} 
                    alt={cause.label} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-xl mb-2 text-gray-800">{cause.label}</h3>
                  <p className="text-gray-600 text-sm">{cause.description}</p>
                  <span className="mt-4 inline-block text-orange-600 text-sm font-medium">Learn more →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team-section" className={`py-28 px-6 md:px-12 bg-white ${isVisible.team ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-1000`}>
        <div className="max-w-6xl mx-auto text-center">
          <span className="text-orange-600 font-medium text-sm uppercase tracking-wider">The People Behind Cause Crew</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-14 mt-2">Meet the Team</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="flex flex-col items-center text-center px-4 group">
                <div className="relative mb-6 overflow-hidden rounded-full w-40 h-40 shadow-md border-2 border-gray-200">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-1">{member.name}</h3>
                <span className="text-orange-600 font-medium text-sm mb-3">{member.role}</span>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 md:px-12 bg-gradient-to-r from-orange-600 to-red-600 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Ready to Make a Difference?</h2>
          <p className="text-lg md:text-xl mb-10 opacity-90">
            Join Cause Crew today and become part of a community dedicated to creating positive change through meaningful service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
                          <Link 
              href="/join" 
              className="px-8 py-3 bg-white text-orange-600 rounded-full font-medium hover:bg-gray-100 transition-colors duration-300 shadow-md"
            >
              Join as Student
            </Link>
            <Link 
              href="/ngos/register" 
              className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-full font-medium hover:bg-white/10 transition-colors duration-300"
            >
              Register as NGO
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 px-6 md:px-12 bg-[#fffaf4]">
        <div className="max-w-6xl mx-auto">
          <span className="text-orange-600 font-medium text-sm uppercase tracking-wider text-center block">What People Say</span>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-12 mt-2 text-center">Testimonials</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mr-4">
                  <span className="text-orange-600 text-xl font-serif">"</span>
                </div>
                <div>
                  <h4 className="font-semibold">Aisha Patel</h4>
                  <p className="text-sm text-gray-500">IB Student, DPS International</p>
                </div>
              </div>
              <p className="text-gray-700">
                "Cause Crew made it so easy to find meaningful volunteer work that aligns with my interests. The platform helped me track my CAS hours efficiently, and I've made connections with amazing organizations I would have never discovered otherwise."
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mr-4">
                  <span className="text-orange-600 text-xl font-serif">"</span>
                </div>
                <div>
                  <h4 className="font-semibold">Rahul Mehta</h4>
                  <p className="text-sm text-gray-500">Director, Teach For Tomorrow NGO</p>
                </div>
              </div>
              <p className="text-gray-700">
                "As a small educational NGO, finding consistent volunteers was always challenging. Cause Crew has transformed our operations by connecting us with passionate students who bring fresh energy and ideas to our projects. The platform streamlines everything."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1 md:col-span-2">
            <Image
              src="/images/logo.png"
              alt="Cause Crew Logo"
              width={80}
              height={80}
              className="rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold mb-3">Cause Crew</h3>
            <p className="text-gray-400 mb-6 max-w-md">
              Connecting students with verified NGOs for meaningful volunteering and transparent fundraising.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/ngos" className="text-gray-400 hover:text-white transition-colors">Our NGOs</Link></li>
              <li><Link href="/join" className="text-gray-400 hover:text-white transition-colors">Join Us</Link></li>
              <li><Link href="/impact" className="text-gray-400 hover:text-white transition-colors">Our Impact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Mumbai, India</li>
              <li>info@causecrew.org</li>
              <li>+91 98765 43210</li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto pt-8 mt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Cause Crew. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}