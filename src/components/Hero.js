import React, { useState, useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.css";
import "./Hero.css";
import logo from "../assets/logo.png";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    require("../assets/homehero/hero1.jpeg"),
    require("../assets/homehero/hero2.jpg"),
    require("../assets/homehero/hero3.jpg"),
    require("../assets/homehero/hero4.jpg"),
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const socialLinks = [
    {
      icon: "fab fa-facebook-f",
      label: "Facebook",
      url: "https://facebook.com",
    },
    {
      icon: "fab fa-instagram",
      label: "Instagram",
      url: "https://instagram.com",
    },
    { icon: "fab fa-x-twitter", label: "X", url: "https://x.com" },
    { icon: "fab fa-whatsapp", label: "WhatsApp", url: "https://whatsapp.com" },
    { icon: "fab fa-youtube", label: "YouTube", url: "https://youtube.com" },
  ];

  return (
    <div className="relative w-full h-screen overflow-hidden font-sans">
      {/* Slideshow Background */}
      <div className="absolute w-full h-full top-0 left-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute w-full h-full bg-cover bg-center transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${slide})` }}
          />
        ))}
        <div className="absolute w-full h-full bg-black/25 z-10" />
      </div>

      {/* Logo and Name - Top Left */}
      <div className="absolute top-0 left-0 z-20 p-8">
        <div className="flex items-center gap-4">
          <img
            src={logo}
            alt="340 Real Estate Logo"
            className="w-20 h-20 object-contain drop-shadow-lg"
          />
          <div className="flex flex-col gap-1">
            <span
              className="text-2xl font-bold tracking-widest drop-shadow-md font-serif"
              style={{ color: "#ede4de" }}
            >
              340 REAL ESTATE
            </span>
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 text-center w-11/12 max-w-4xl">
        <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight drop-shadow-lg animate-fadeInUp font-serif" style={{ textShadow: "0 8px 30px rgba(0, 0, 0, 0.5), 0 0 50px rgba(20, 184, 166, 0.3)", fontFamily: "'Playfair Display', serif", fontWeight: 900, letterSpacing: "-2px" }}>
          Discover Your Paradise in The US Virgin Islands
        </h1>
        <h2
          className="text-2xl md:text-4xl font-light tracking-widest drop-shadow-md animate-fadeInUp animation-delay-200 font-sans mb-12"
          style={{ color: "white", fontFamily: "'Lato', sans-serif", fontWeight: 300, textShadow: "0 4px 15px rgba(0, 0, 0, 0.4)" }}
        >
          ST. JOHN REAL ESTATE SPECIALISTS
        </h2>
        
        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center animate-fadeInUp animation-delay-400">
          <a
            href="https://340realestate.com/#/properties"
            className="group relative px-6 py-2.5 text-base font-bold tracking-wide text-white transition-all duration-300 inline-block border-2 border-white rounded-lg overflow-hidden"
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "white";
              e.currentTarget.style.color = "#3c6a72";
              e.currentTarget.style.boxShadow = "0 10px 30px rgba(255, 255, 255, 0.2)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "white";
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <span className="relative z-10">Buy Properties</span>
          </a>
          <a
            href="https://340realestate.com/#/landproperties"
            className="group relative px-6 py-2.5 text-base font-bold tracking-wide text-white transition-all duration-300 inline-block border-2 border-white rounded-lg overflow-hidden"
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "white";
              e.currentTarget.style.color = "#3c6a72";
              e.currentTarget.style.boxShadow = "0 10px 30px rgba(255, 255, 255, 0.2)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "white";
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <span className="relative z-10">Buy Land</span>
          </a>
          <a
            href="https://340realestate.com/#/mls"
            className="group relative px-6 py-2.5 text-base font-bold tracking-wide text-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 inline-block"
            style={{ 
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
            <span className="relative z-10">Search MLS</span>
          </a>
        </div>
      </div>

      {/* Social Media Floating Icons - Fixed Position */}
      <div className="fixed bottom-10 right-10 z-30 flex flex-col gap-4" style={{ opacity: "1", transition: "opacity 0.3s ease" }}>
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="social-float w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg"
            style={{
              backgroundColor: "#ede4de",
              color: "#3c6a72",
              animationDelay: `${index * 0.1}s`,
            }}
            title={social.label}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#14b8a6";
              e.currentTarget.style.color = "white";
              e.currentTarget.style.transform = "scale(1.15) translateX(-8px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#ede4de";
              e.currentTarget.style.color = "#3c6a72";
              e.currentTarget.style.transform = "translateY(0px)";
            }}
          >
            <i className={`${social.icon} text-lg`}></i>
          </a>
        ))}
      </div>

      {/* Slide Indicators */}
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-3 px-8 py-4 rounded-full backdrop-blur-sm"
        style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
      >
        {slides.map((_, index) => (
          <button
            key={index}
            className="transition-all duration-300"
            style={{
              width: index === currentSlide ? "32px" : "12px",
              height: "12px",
              borderRadius: index === currentSlide ? "6px" : "50%",
              backgroundColor:
                index === currentSlide ? "#14b8a6" : "transparent",
              border: `2px solid ${
                index === currentSlide ? "#14b8a6" : "rgba(255, 255, 255, 0.5)"
              }`,
              cursor: "pointer",
            }}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
