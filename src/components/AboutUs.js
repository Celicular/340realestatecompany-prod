import React from "react";
import teamAbout from "../assets/teamabout.jpg";

const AboutUs = () => {
  return (
    <section className="py-20 lg:py-28 px-4 sm:px-6" style={{ backgroundColor: "#f8fbfc" }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight" style={{ color: "#3c6a72", fontFamily: "'Playfair Display', serif", fontWeight: 900, letterSpacing: "-1px" }}>
            About <span style={{ color: "#14b8a6" }}>St. John</span> Real Estate Specialists
          </h2>
          <div className="w-20 h-1 rounded-full mx-auto mb-6" style={{ background: "linear-gradient(135deg, #14b8a6 0%, #0d9488 100%)" }}></div>
          <p className="text-base sm:text-lg max-w-2xl mx-auto" style={{ color: "#666" }}>
            Your trusted partner in finding exceptional properties on the beautiful island of St. John
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-16">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            {/* Features */}
            <div className="space-y-5 mb-10">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: "#14b8a6" }}>
                  <span className="text-white font-bold text-lg">✓</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1" style={{ color: "#3c6a72", fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>15+ Years Experience</h3>
                  <p style={{ color: "#666" }}>Deep expertise in St. John's unique real estate market and local dynamics</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: "#14b8a6" }}>
                  <span className="text-white font-bold text-lg">✓</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1" style={{ color: "#3c6a72", fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>Personalized Service</h3>
                  <p style={{ color: "#666" }}>We tailor our approach to match your unique needs and goals</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: "#14b8a6" }}>
                  <span className="text-white font-bold text-lg">✓</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1" style={{ color: "#3c6a72", fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>Market Experts</h3>
                  <p style={{ color: "#666" }}>Stay ahead with real-time market insights and property updates</p>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg mb-6 leading-relaxed font-light" style={{ color: "#555" }}>
              We are a dedicated team of real estate professionals committed to helping you find your perfect property on the beautiful island of St. John. With over 15 years of experience in the local market, we understand the unique opportunities and challenges of island living.
            </p>
            <p className="text-base sm:text-lg mb-10 leading-relaxed font-light" style={{ color: "#555" }}>
              Whether you're looking to buy, sell, or invest in property, our team is here to guide you through every step of the process. We pride ourselves on our personalized service and deep knowledge of St. John's real estate market.
            </p>

            {/* CTA Button */}
            <button 
              className="px-7 sm:px-8 py-3 text-base font-bold rounded-lg transition-all duration-300 shadow-lg"
              style={{ 
                color: "#fff", 
                background: "linear-gradient(135deg, #14b8a6 0%, #0d9488 100%)",
                boxShadow: "0 10px 30px rgba(20, 184, 166, 0.4)"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "linear-gradient(135deg, #0d9488 0%, #0a7a6f 100%)";
                e.currentTarget.style.boxShadow = "0 15px 40px rgba(20, 184, 166, 0.6)";
                e.currentTarget.style.transform = "translateY(-3px) scale(1.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "linear-gradient(135deg, #14b8a6 0%, #0d9488 100%)";
                e.currentTarget.style.boxShadow = "0 10px 30px rgba(20, 184, 166, 0.4)";
                e.currentTarget.style.transform = "translateY(0) scale(1)";
              }}
            >
              Explore Properties Now
            </button>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div 
                className="absolute inset-0 rounded-2xl blur-3xl opacity-20" 
                style={{ background: "linear-gradient(135deg, #14b8a6 0%, #0d9488 100%)" }}
              ></div>
              <img 
                src={teamAbout} 
                alt="St. John Real Estate Team" 
                className="relative w-full h-auto rounded-2xl shadow-2xl object-cover"
                style={{ boxShadow: "0 20px 60px rgba(20, 184, 166, 0.15)" }}
              />
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 mt-16 pt-16" style={{ borderTop: "2px solid #e0f2f1" }}>
          <div className="text-center p-6 rounded-xl bg-white transition-all duration-300 hover:shadow-2xl hover:-translate-y-1" style={{ boxShadow: "0 15px 40px rgba(20, 184, 166, 0.12)" }}>
            <p className="text-3xl lg:text-4xl font-bold" style={{ color: "#14b8a6", fontFamily: "'Playfair Display', serif", fontWeight: 900 }}>500+</p>
            <p className="text-sm lg:text-base mt-2 font-medium" style={{ color: "#666", fontFamily: "'Lato', sans-serif" }}>Properties Sold</p>
          </div>
          <div className="text-center p-6 rounded-xl bg-white transition-all duration-300 hover:shadow-2xl hover:-translate-y-1" style={{ boxShadow: "0 15px 40px rgba(20, 184, 166, 0.12)" }}>
            <p className="text-3xl lg:text-4xl font-bold" style={{ color: "#14b8a6", fontFamily: "'Playfair Display', serif", fontWeight: 900 }}>15+</p>
            <p className="text-sm lg:text-base mt-2 font-medium" style={{ color: "#666", fontFamily: "'Lato', sans-serif" }}>Years Serving</p>
          </div>
          <div className="text-center p-6 rounded-xl bg-white transition-all duration-300 hover:shadow-2xl hover:-translate-y-1" style={{ boxShadow: "0 15px 40px rgba(20, 184, 166, 0.12)" }}>
            <p className="text-3xl lg:text-4xl font-bold" style={{ color: "#14b8a6", fontFamily: "'Playfair Display', serif", fontWeight: 900 }}>99%</p>
            <p className="text-sm lg:text-base mt-2 font-medium" style={{ color: "#666", fontFamily: "'Lato', sans-serif" }}>Happy Clients</p>
          </div>
          <div className="text-center p-6 rounded-xl bg-white transition-all duration-300 hover:shadow-2xl hover:-translate-y-1" style={{ boxShadow: "0 15px 40px rgba(20, 184, 166, 0.12)" }}>
            <p className="text-3xl lg:text-4xl font-bold" style={{ color: "#14b8a6", fontFamily: "'Playfair Display', serif", fontWeight: 900 }}>24/7</p>
            <p className="text-sm lg:text-base mt-2 font-medium" style={{ color: "#666", fontFamily: "'Lato', sans-serif" }}>Support Ready</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
