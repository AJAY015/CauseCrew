export default function AboutPage() {
    return (
      <main className="bg-[#fdf8f2] py-20 px-6 text-gray-800">
        <section className="text-center">
          <h2 className="text-4xl font-serif font-semibold mb-6">About Us</h2>
          <div className="max-w-4xl mx-auto text-lg space-y-6">
            <p>
              Cause Crew is a purpose-driven platform connecting college and IB students with verified NGOs for meaningful volunteering and transparent fundraising. We bridge the gap between students seeking impactful community service opportunities and organizations needing dedicated support.
            </p>
            <p>
              Our mission is simple: Connect. Contribute. Change. We empower young changemakers by providing structured volunteering roles, skill-based matching, and a seamless way to fulfil CAS and community service requirements. Through our digital network, students gain valuable leadership experience.
            </p>
            <p>
              NGOs receive consistent support to sustain and expand their impact. Cause Crew isn’t just a platform—it’s a movement. By fostering social responsibility and making community service more accessible, we’re creating a future where every student can contribute to change, one cause at a time.
            </p>
            <p className="font-semibold mt-8">Join the Crew. Make a Difference.</p>
          </div>
        </section>
  
        {/* Our Story */}
        <section className="mt-24 text-center">
          <h3 className="text-3xl font-serif font-semibold mb-4">Our Story</h3>
          <p className="max-w-3xl mx-auto text-lg mb-8">
            It all started with a simple goal: to make social impact accessible for students.
            We saw young changemakers eager to help but struggling to find structured opportunities. NGOs
            needed volunteers and funding, while schools sought better ways to track community service.
            Cause Crew emerged as the bridge between them.
          </p>
          <img
            src="/images/cause-crew-event.jpg"
            alt="Cause Crew Volunteering Event"
            className="w-full max-w-4xl mx-auto rounded-xl shadow-md"
          />
        </section>
  
        {/* Causes */}
        <section className="mt-24 text-center">
          <h3 className="text-3xl font-serif font-semibold mb-8">Cause We Work Towards</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 bg-gray-100 px-4 py-8 rounded-xl max-w-6xl mx-auto">
            {[
              { label: "Education", img: "/images/cause-education.jpg" },
              { label: "Health", img: "/images/cause-health.jpg" },
              { label: "Women and Children", img: "/images/cause-women.jpg" },
              { label: "Disability", img: "/images/cause-disability.jpg" },
            ].map((cause, index) => (
              <div key={index} className="text-center">
                <img src={cause.img} alt={cause.label} className="rounded-md w-full h-40 object-cover mb-2" />
                <p className="font-semibold text-gray-700">{cause.label}</p>
              </div>
            ))}
          </div>
        </section>
  
        {/* Meet the Team */}
        <section className="mt-24 text-center">
          <h3 className="text-3xl font-serif font-semibold mb-8">Meet the Team</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
            {[
              { name: "Harshvardhan Goradia", img: "/images/team-harsh.jpg" },
              { name: "Karissa Sanghvi", img: "/images/team-karissa.jpg" },
              { name: "Jia Kursija", img: "/images/team-jia.jpg" },
              { name: "Tanuj Bidnurkar", img: "/images/team-tanuj.jpg" },
              { name: "Yaseen Munshi", img: "/images/team-yaseen.jpg" },
            ].map((member, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-36 h-36 object-cover rounded-full mb-2 shadow-md"
                />
                <p className="font-semibold">{member.name}</p>
                <span className="text-sm text-gray-500">Founder</span>
              </div>
            ))}
          </div>
        </section>
      </main>
    );
  }
  