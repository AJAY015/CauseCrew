const partners = [
    { name: "EduAid", focus: "Education" },
    { name: "Health4All", focus: "Health" },
    { name: "WomenFirst", focus: "Women and Children" },
    { name: "EqualAccess", focus: "Disability" },
  ];
  
  export default function PartnersPage() {
    return (
      <main className="py-16 px-6 text-gray-800">
        <h2 className="text-3xl font-semibold mb-8 text-center">Our NGO Partners</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {partners.map((partner, i) => (
            <div key={i} className="bg-white shadow rounded-xl p-6 text-center">
              <h3 className="text-xl font-bold mb-2">{partner.name}</h3>
              <p className="text-sm">Focus: {partner.focus}</p>
            </div>
          ))}
        </div>
      </main>
    );
  }
  