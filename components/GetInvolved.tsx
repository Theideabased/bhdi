"use client";

export default function GetInvolved() {
  const ways = [
    {
      icon: "💝",
      title: "Make a Donation",
      description: "Your contribution directly impacts lives. Every amount counts.",
      cta: "Donate",
    },
    {
      icon: "🤝",
      title: "Volunteer",
      description:
        "Join our team and make a hands-on difference in your community.",
      cta: "Volunteer",
    },
    {
      icon: "📢",
      title: "Spread the Word",
      description:
        "Share our mission with friends and family. Together we reach more people.",
      cta: "Share",
    },
    {
      icon: "🏢",
      title: "Partner With Us",
      description:
        "Corporations and organizations can create greater impact through partnerships.",
      cta: "Learn More",
    },
    {
      icon: "📬",
      title: "Subscribe",
      description:
        "Get monthly updates on our programs, stories, and impact in your inbox.",
      cta: "Subscribe",
    },
    {
      icon: "🎓",
      title: "Sponsor a Student",
      description:
        "Support a child's education and transform their future completely.",
      cta: "Sponsor",
    },
  ];

  return (
    <section id="involved" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Get Involved
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            There are many ways to support our mission and create meaningful change
            in communities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ways.map((way, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all hover:translate-y-[-4px]"
            >
              <div className="text-5xl mb-4">{way.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{way.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {way.description}
              </p>
              <button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-2 rounded-lg font-semibold transition-colors">
                {way.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              Stay Connected
            </h3>
            <p className="text-orange-100 mb-8">
              Sign up for our newsletter to receive updates on our latest projects,
              success stories, and how you can help.
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-300"
                required
              />
              <button
                type="submit"
                className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
            <p className="text-orange-100 text-sm mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
