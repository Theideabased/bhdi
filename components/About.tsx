"use client";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            About BHDI
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            At Broad House Development Initiative, we are dedicated to transforming
            lives through a holistic approach that encompasses welfare support,
            education, empowerment, and responsive assistance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Vision */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                We envision a supportive environment where individuals and communities
                thrive, becoming self-sufficient and productive members of society.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide vital resources that improve the quality of life for all
                people, ensuring no one is left behind in their journey toward
                prosperity and dignity.
              </p>
            </div>
          </div>

          {/* Right Content - Core Values */}
          <div className="bg-gradient-to-br from-orange-50 to-red-50 p-10 rounded-2xl">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">
              Our Approach
            </h3>
            <div className="space-y-6">
              {[
                { icon: "🤝", title: "Welfare Support", desc: "Providing aid and assistance to those in immediate need" },
                { icon: "📚", title: "Education & Capacity", desc: "Fostering learning for all ages and skill development" },
                { icon: "⚡", title: "Empowerment", desc: "Enabling individuals toward self-reliance" },
                { icon: "🎯", title: "Responsive Support", desc: "Meeting communities where they are with tailored solutions" },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="text-3xl flex-shrink-0">{item.icon}</div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
