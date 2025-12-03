"use client";

export default function WhatWeDo() {
  const objectives = [
    {
      number: "01",
      title: "Provide Aid to Those in Need",
      description:
        "We deliver emergency relief and essential support to vulnerable populations, ensuring no one faces hardship alone.",
      icon: "🤲",
    },
    {
      number: "02",
      title: "Enhance Community Infrastructure",
      description:
        "We build essential amenities that improve living standards and create lasting positive change in communities.",
      icon: "🏗️",
    },
    {
      number: "03",
      title: "Foster Education & Development",
      description:
        "We invest in quality education for children and professional development for teachers and adults.",
      icon: "📖",
    },
    {
      number: "04",
      title: "Advocate for Social Causes",
      description:
        "We raise awareness and advocate for critical social issues affecting the most vulnerable members of society.",
      icon: "📢",
    },
    {
      number: "05",
      title: "Empower Toward Self-Reliance",
      description:
        "We equip individuals with skills and resources to achieve economic independence and dignity.",
      icon: "💪",
    },
    {
      number: "06",
      title: "Host Wellness-Focused Events",
      description:
        "We organize health and wellness initiatives that promote physical, mental, and community well-being.",
      icon: "❤️",
    },
  ];

  return (
    <section id="whatwedo" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            What We Do
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our six core objectives guide everything we do. From emergency aid to
            long-term empowerment, we're committed to creating lasting change.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {objectives.map((obj, idx) => (
            <div
              key={idx}
              className="group bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:border-orange-300"
            >
              {/* Number Background */}
              <div className="absolute top-4 right-4 text-6xl font-bold text-orange-100 opacity-50 group-hover:opacity-100 transition-opacity">
                {obj.number}
              </div>

              {/* Icon */}
              <div className="text-5xl mb-6 w-fit">{obj.icon}</div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 pr-16">
                {obj.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">{obj.description}</p>

              {/* Bottom Accent */}
              <div className="mt-6 w-12 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full group-hover:w-16 transition-all"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
