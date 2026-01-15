import React from "react";
import tammyPhoto from "../assets/tammy.jpg";

const SalesAgent = () => {
  return (
    <section className="py-20 lg:py-28 px-4 sm:px-6" style={{ backgroundColor: "#fff" }}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm sm:text-base font-bold tracking-widest mb-3" style={{ color: "#14b8a6", fontFamily: "'Lato', sans-serif", letterSpacing: "3px" }}>
            MEET OUR FOUNDER
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold" style={{ color: "#3c6a72", fontFamily: "'Playfair Display', serif", fontWeight: 900, letterSpacing: "-1px" }}>
            Your St. John Real Estate Expert
          </h2>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image Section */}
          <div className="order-2 lg:order-1 relative">
            {/* Background decorative element */}
            <div 
              className="absolute -inset-8 rounded-3xl opacity-10 blur-2xl"
              style={{ background: "linear-gradient(135deg, #14b8a6 0%, #0d9488 100%)" }}
            ></div>
            
            {/* Main image container */}
            <div className="relative">
              <div className="absolute inset-0 rounded-2xl" style={{ background: "linear-gradient(135deg, #14b8a6 0%, #0d9488 100%)", boxShadow: "0 30px 60px rgba(20, 184, 166, 0.3)" }}></div>
              <img 
                src={tammyPhoto} 
                alt="Tammy Donnelly" 
                className="relative w-full h-auto rounded-2xl object-cover shadow-2xl"
                style={{ boxShadow: "0 40px 80px rgba(20, 184, 166, 0.2)" }}
              />
              
              {/* Badge */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-2xl text-center" style={{ boxShadow: "0 20px 50px rgba(0, 0, 0, 0.15)" }}>
                <p className="text-3xl font-bold" style={{ color: "#14b8a6" }}>45+</p>
                <p className="text-sm font-semibold" style={{ color: "#3c6a72" }}>Years on St. John</p>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="order-1 lg:order-2">
            {/* Name and Title */}
            <div className="mb-8">
              <h3 className="text-3xl sm:text-4xl font-bold mb-2" style={{ color: "#3c6a72", fontFamily: "'Playfair Display', serif", fontWeight: 900, letterSpacing: "-0.5px" }}>
                Tammy Donnelly
              </h3>
              <p className="text-lg sm:text-xl font-semibold mb-2" style={{ color: "#14b8a6" }}>
                Broker/Owner/ABR®
              </p>
              <p className="text-base" style={{ color: "#999" }}>
                St. John, USVI
              </p>
            </div>

            {/* About Section */}
            <div className="mb-10 pb-8" style={{ borderBottom: "2px solid #e0f2f1" }}>
              <h4 className="text-lg font-bold mb-4" style={{ color: "#3c6a72", fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>
                About Tammy
              </h4>
              <p className="text-base leading-relaxed" style={{ color: "#666" }}>
                Tammy Donnelly has lived on St. John since 1978. Her first retail job was in 1979 – 1981 here at the Wharfside Village. Tammy has been a licensed real estate agent since 1989 and has owned 340 Real Estate Company since 1999. She specializes in residential sales and vacation rental management.
              </p>
            </div>

            {/* Areas of Expertise */}
            <div className="mb-10">
              <h4 className="text-lg font-bold mb-6" style={{ color: "#3c6a72", fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>
                Areas of Expertise
              </h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: "#14b8a6" }}></div>
                  <p style={{ color: "#555" }}>Residential Sales</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: "#14b8a6" }}></div>
                  <p style={{ color: "#555" }}>Vacation Rental Management</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: "#14b8a6" }}></div>
                  <p style={{ color: "#555" }}>Property Investment</p>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="bg-gradient-to-r from-blue-50 to-transparent rounded-xl p-6 border-l-4 transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1" style={{ borderLeftColor: "#14b8a6", boxShadow: "0 10px 30px rgba(20, 184, 166, 0.15)" }}>
              <p className="text-sm font-bold tracking-widest mb-6" style={{ color: "#14b8a6" }}>
                CONTACT DIRECTLY
              </p>
              
              <div className="space-y-5">
                {/* Email */}
                <div>
                  <p className="text-xs font-bold mb-2" style={{ color: "#3c6a72" }}>Email</p>
                  <a 
                    href="mailto:340realestateco@gmail.com"
                    className="text-base font-semibold transition-all duration-300 flex items-center gap-2"
                    style={{ color: "#14b8a6" }}
                    onMouseEnter={(e) => e.currentTarget.style.color = "#0d9488"}
                    onMouseLeave={(e) => e.currentTarget.style.color = "#14b8a6"}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                    340realestateco@gmail.com
                  </a>
                </div>

                {/* Phone */}
                <div>
                  <p className="text-xs font-bold mb-2" style={{ color: "#3c6a72" }}>Call or Text</p>
                  <a 
                    href="tel:+13406436068"
                    className="text-base font-semibold transition-all duration-300 flex items-center gap-2"
                    style={{ color: "#14b8a6" }}
                    onMouseEnter={(e) => e.currentTarget.style.color = "#0d9488"}
                    onMouseLeave={(e) => e.currentTarget.style.color = "#14b8a6"}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773c.26.559.934 1.42 2.478 2.964 1.545 1.545 2.405 2.218 2.964 2.478l.773-1.548a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2.694a1 1 0 01-.991-.899c-.49-4.954-4.743-9.207-9.697-9.697a1 1 0 01-.9-.99V3z"></path>
                    </svg>
                    +1 340-643-6068
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SalesAgent;
