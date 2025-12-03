"use client";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg
          className="w-full h-full"
          viewBox="0 0 1200 600"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern
              id="grid"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" opacity="0.1" />
            </pattern>
          </defs>
          <rect width="1200" height="600" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl sm:text-6xl font-bold leading-tight mb-4">
                Transform Lives,{" "}
                <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                  Build Communities
                </span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                Every day, together with you, BHDI saves lives and helps millions
                of people find the way to a better life through welfare support,
                education, and empowerment.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Donate Today
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                Learn More
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-700">
              <div>
                <div className="text-3xl font-bold text-orange-400">50K+</div>
                <p className="text-sm text-gray-400">Lives Impacted</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-400">25+</div>
                <p className="text-sm text-gray-400">Communities</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-400">100%</div>
                <p className="text-sm text-gray-400">Transparent</p>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative h-96 hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-2xl blur-3xl"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl opacity-10 transform hover:scale-105 transition-transform"></div>
            <div className="relative h-full flex items-center justify-center">
              <div className="w-64 h-64 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl opacity-20 blur-2xl"></div>
            </div>
          </div>
        </div>

        {/* Call to Action Banner */}
        <div className="mt-16 bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Emergency Relief Needed</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Families need food, water, shelter, and hope. Your donation can make 2X
            the impact today with our matching grant program.
          </p>
          <button className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
            Give Now
          </button>
        </div>
      </div>
    </section>
  );
}
