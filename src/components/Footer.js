import React from "react";
import logo from "../assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 relative">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-20">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 pb-12" style={{ borderBottom: "1px solid rgba(20, 184, 166, 0.2)" }}>
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="340 Real Estate" className="w-12 h-12 object-contain" />
              <div>
                <p className="font-bold text-white" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>
                  340 Real Estate
                </p>
                <p className="text-xs" style={{ color: "#14b8a6" }}>St. John, USVI</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              In 1917 the United States bought St. John from Denmark. By the 1930s, news of the beautiful American island quickly spread...
            </p>
            <div className="flex gap-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-gray-800 hover:bg-tropical-500 transition-colors flex items-center justify-center text-xs" style={{ backgroundColor: "rgba(20, 184, 166, 0.1)" }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#14b8a6"} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "rgba(20, 184, 166, 0.1)"}>
                <i className="fab fa-facebook-f text-white"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-gray-800 hover:bg-tropical-500 transition-colors flex items-center justify-center text-xs" style={{ backgroundColor: "rgba(20, 184, 166, 0.1)" }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#14b8a6"} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "rgba(20, 184, 166, 0.1)"}>
                <i className="fab fa-instagram text-white"></i>
              </a>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-gray-800 hover:bg-tropical-500 transition-colors flex items-center justify-center text-xs" style={{ backgroundColor: "rgba(20, 184, 166, 0.1)" }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#14b8a6"} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "rgba(20, 184, 166, 0.1)"}>
                <i className="fab fa-x-twitter text-white"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="hover:text-tropical-500 transition-colors text-sm">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-tropical-500 transition-colors text-sm">
                  About St. John
                </a>
              </li>
              <li>
                <a href="#privacy" className="hover:text-tropical-500 transition-colors text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-tropical-500 transition-colors text-sm">
                  Contact
                </a>
              </li>
              <li>
                <a href="#terms" className="hover:text-tropical-500 transition-colors text-sm">
                  Terms of Use
                </a>
              </li>
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>
              Explore
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="https://340realestate.com/#/rentals" className="hover:text-tropical-500 transition-colors text-sm">
                  Villa Rentals
                </a>
              </li>
              <li>
                <a href="https://340realestate.com/#/sales-history" className="hover:text-tropical-500 transition-colors text-sm">
                  Sales History
                </a>
              </li>
              <li>
                <a href="https://340realestate.com/#/for-sale" className="hover:text-tropical-500 transition-colors text-sm">
                  For Sale
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>
              Contact Info
            </h3>
            <div className="space-y-4 text-sm">
              <div>
                <p className="text-gray-400 mb-1">Address</p>
                <p>PO Box 766, St John, VI 00831</p>
              </div>
              <div>
                <p className="text-gray-400 mb-1">Phone</p>
                <div className="flex items-center gap-2">
                  <a href="tel:+13406436068" className="hover:text-tropical-500 transition-colors">
                    +1 340-643-6068
                  </a>
                  <span>|</span>
                  <a href="tel:+13407794478" className="hover:text-tropical-500 transition-colors">
                    +1 340-779-4478
                  </a>
                </div>
              </div>
              <div>
                <p className="text-gray-400 mb-1">Email</p>
                <a href="mailto:340realestateco@gmail.com" className="hover:text-tropical-500 transition-colors">
                  340realestateco@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Information Note */}
        <div className="bg-gray-800 rounded-lg p-6 mb-8" style={{ borderLeft: "4px solid #14b8a6" }}>
          <p className="text-sm text-gray-300 leading-relaxed">
            <span className="font-semibold text-white">Information on this site</span> is believed to be accurate but not guaranteed. 340 Real Estate Co LLC is a member of the St. John Board of Realtors, St Thomas Board of Realtors and the Multiple Listing Service.
          </p>
        </div>

        {/* Bottom Section - Copyright */}
        <div className="text-center pt-8" style={{ borderTop: "1px solid rgba(20, 184, 166, 0.2)" }}>
          <p className="text-sm text-gray-400">
            © {currentYear} 340 Real Estate St. John. All rights reserved.
          </p>
          <p className="text-xs text-gray-500 mt-3">
            Licensed Real Estate Broker | Member of St. John & St. Thomas Board of Realtors
          </p>
        </div>
      </div>

      {/* Floating Social Icons Fade Area */}
      <div 
        className="absolute bottom-0 right-0 w-32 h-40 pointer-events-none"
        style={{ 
          background: "linear-gradient(180deg, transparent 0%, rgba(17, 24, 39, 0.8) 100%)" 
        }}
      ></div>
    </footer>
  );
};

export default Footer;
