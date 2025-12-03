"use client";

export default function Impact() {
  return (
    <section id="impact" className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Our Impact</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Through collective action and your support, we've made a measurable
            difference in thousands of lives.
          </p>
        </div>

        {/* Impact Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            { stat: "50,000+", label: "Lives Impacted" },
            { stat: "25+", label: "Communities Served" },
            { stat: "10,000+", label: "Students Educated" },
            { stat: "500+", label: "Jobs Created" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8 text-center hover:bg-white/20 transition-all"
            >
              <div className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent mb-2">
                {item.stat}
              </div>
              <p className="text-gray-300">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Stories Section */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center mb-12">Success Stories</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Education Transforms Futures",
                story:
                  "Our scholarship program has helped 500+ students pursue higher education, breaking cycles of poverty in rural communities.",
                icon: "🎓",
              },
              {
                title: "Sustainable Livelihoods",
                story:
                  "Women entrepreneurs trained through our vocational programs now run successful micro-enterprises supporting their families.",
                icon: "💼",
              },
              {
                title: "Community Health Initiatives",
                story:
                  "Mobile health camps have provided free medical services to 20,000+ individuals in underserved areas.",
                icon: "⚕️",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white/10 border border-white/20 rounded-xl p-8 hover:bg-white/20 transition-all"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                <p className="text-gray-400 leading-relaxed">{item.story}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Efficiency Banner */}
        <div className="mt-16 bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-12 text-center">
          <h3 className="text-3xl font-bold mb-4">We're Efficient & Transparent</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <p className="text-orange-100">Of funds go directly to programs</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">Real-time</div>
              <p className="text-orange-100">Impact tracking & reporting</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">Certified</div>
              <p className="text-orange-100">By independent auditors</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
