import React from "react";
import logo4 from "../assets/logo/logo4.png";
import logo5 from "../assets/logo/logo5.png";
import abrLogo from "../assets/logo/abr.png";

const Contact = () => {
  return (
    <section className="py-20 lg:py-28 px-4 sm:px-6" style={{ background: "linear-gradient(135deg, #f0f9f8 0%, #fafbfc 100%)" }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" style={{ color: "#3c6a72", fontFamily: "'Playfair Display', serif", fontWeight: 900, letterSpacing: "-1px" }}>
            Get In <span style={{ color: "#14b8a6" }}>Touch</span>
          </h2>
          <p className="text-base sm:text-lg max-w-3xl mx-auto mb-4" style={{ color: "#666" }}>
            Licensed US Virgin Islands Real Estate Broker / Owner / ABR®
          </p>
          <p className="text-sm sm:text-base max-w-3xl mx-auto" style={{ color: "#999" }}>
            340 Real Estate Company Property, Sales, and Management on St John US Virgin Islands
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-16">
          {/* Office Address */}
          <div className="p-8 rounded-2xl bg-white border border-blue-100 transition-all duration-300 hover:shadow-2xl" style={{ boxShadow: "0 25px 50px rgba(20, 184, 166, 0.15), 0 10px 20px rgba(0, 0, 0, 0.08)" }}>
            <div className="w-14 h-14 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: "#14b8a6" }}>
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4" style={{ color: "#3c6a72", fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>Office Address</h3>
            <p className="text-base leading-relaxed" style={{ color: "#666" }}>
              <strong>340 Real Estate Company</strong><br />
              PO Box 766<br />
              St John, VI 00831<br />
              United States Virgin Islands
            </p>
          </div>

          {/* Email */}
          <div className="p-8 rounded-2xl bg-white border border-blue-100 transition-all duration-300 hover:shadow-2xl" style={{ boxShadow: "0 25px 50px rgba(20, 184, 166, 0.15), 0 10px 20px rgba(0, 0, 0, 0.08)" }}>
            <div className="w-14 h-14 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: "#14b8a6" }}>
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4" style={{ color: "#3c6a72", fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>Email Address</h3>
            <a 
              href="mailto:340realestateco@gmail.com"
              className="text-base font-semibold transition-all duration-300"
              style={{ color: "#14b8a6" }}
              onMouseEnter={(e) => e.currentTarget.style.color = "#0d9488"}
              onMouseLeave={(e) => e.currentTarget.style.color = "#14b8a6"}
            >
              340realestateco@gmail.com
            </a>
            <p className="text-sm mt-3" style={{ color: "#999" }}>
              We'll respond within 24 hours
            </p>
          </div>

          {/* Phone Number */}
          <div className="p-8 rounded-2xl bg-white border border-blue-100 transition-all duration-300 hover:shadow-2xl" style={{ boxShadow: "0 25px 50px rgba(20, 184, 166, 0.15), 0 10px 20px rgba(0, 0, 0, 0.08)" }}>
            <div className="w-14 h-14 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: "#14b8a6" }}>
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4" style={{ color: "#3c6a72", fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>Phone Number</h3>
            <a 
              href="tel:+13406436068"
              className="text-base font-semibold transition-all duration-300"
              style={{ color: "#14b8a6" }}
              onMouseEnter={(e) => e.currentTarget.style.color = "#0d9488"}
              onMouseLeave={(e) => e.currentTarget.style.color = "#14b8a6"}
            >
              +1 340-643-6068
            </a>
            <p className="text-sm mt-3" style={{ color: "#999" }}>
              Available Monday - Saturday
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="my-16" style={{ borderTop: "2px solid #e0f2f1" }}></div>

        {/* Trust Logos Section */}
        <div className="text-center">
          <p className="text-lg font-semibold mb-12" style={{ color: "#3c6a72", fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.5rem" }}>
            Trusted Credentials & Certifications
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
            {/* Logo 4 */}
            <div className="transform transition-transform duration-300 hover:scale-110">
              <img 
                src={logo4} 
                alt="340 Real Estate Logo 4" 
                className="h-20 sm:h-24 lg:h-28 object-contain"
              />
            </div>
            
            {/* Logo 5 */}
            <div className="transform transition-transform duration-300 hover:scale-110">
              <img 
                src={logo5} 
                alt="340 Real Estate Logo 5" 
                className="h-20 sm:h-24 lg:h-28 object-contain"
              />
            </div>
            
            {/* ABR Logo */}
            <div className="transform transition-transform duration-300 hover:scale-110">
              <img 
                src={abrLogo} 
                alt="ABR - Accredited Buyer Representative" 
                className="h-20 sm:h-24 lg:h-28 object-contain"
              />
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-base sm:text-lg mb-8" style={{ color: "#666" }}>
            Ready to find your dream property on St. John?
          </p>
          <a 
            href="https://340realestate.com/#/properties"
            className="inline-block px-8 sm:px-10 py-3 text-base font-bold rounded-lg transition-all duration-300 shadow-lg"
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
            Start Your Search Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
