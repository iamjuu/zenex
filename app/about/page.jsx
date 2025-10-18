'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Button from "../../components/button";
import { Backgound } from "../../public/assets";

const AboutPage = () => {
  const features = [
    {
      title: "Local Expertise, Global Standards",
      description: "Based in Dubai, we combine deep regional knowledge with international best practices in IT support and infrastructure.",
      icon: "🌍"
    },
    {
      title: "Proactive Maintenance & Support",
      description: "With custom Annual Maintenance Contracts (AMC) and 24/7 helpdesk monitoring, downtime isn't just fixed — it's avoided.",
      icon: "🛡️"
    },
    {
      title: "Tailored Solutions",
      description: "We recognise that every business is unique. Our network setups, cloud migrations, security systems and AMCs are crafted to match your needs.",
      icon: "⚙️"
    },
    {
      title: "Partnership Mindset",
      description: "We don't just deliver services — we build relationships. Our goal is to be your long-term IT partner, helping you adapt and grow.",
      icon: "🤝"
    }
  ];

  return (
    <div
      style={{
        backgroundImage: `url(${Backgound.src})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
      className="min-h-screen px-2"
    >
      <Navbar />
      
      {/* Hero Section */}
      <section 
        className="pt-32 md:pt-40 pb-16 px-4 sm:px-6 lg:px-8"
        data-aos="fade-in"
      >
        <div className="max-w-7xl mx-auto text-center">
          <h1 
            className="text-4xl sm:text-5xl lg:text-4xl font-bold mb-6 text-gray-900"
            data-aos="fade-down"
            data-aos-delay="100"
          >
            About <span className="text-[#135fa5]">Zenex Technologies</span>
          </h1>
          <p 
            className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Dubai's premier IT solutions firm, delivering technology infrastructure you can trust
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div 
            className="bg-white/50 backdrop-blur-sm rounded-2xl shadow-xl p-8 sm:p-12 mb-12"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
              At Zenex Technologies, Dubai's premier IT solutions firm, we believe that your technology infrastructure should be a <span className="font-semibold text-[#135fa5]">strategic asset</span> — not an ongoing headache. We're passionate about delivering IT services you can trust, so your business stays secure, connected and future-ready.
            </p>
          </div>

          {/* Story & Mission Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Our Story */}
            <div
              className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500"
              data-aos="fade-right"
              data-aos-delay="150"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#135fa5] rounded-lg flex items-center justify-center text-2xl mr-4">
                  📖
                </div>
                <h2 className="text-xl sm:text-xl font-bold text-gray-800">Our Story</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Founded in the heart of the UAE, Zenex Technologies was established with a clear vision: to become the region's leading IT solutions provider. Over the years, we've partnered with diverse businesses — from fast-growing startups to established enterprises — helping each one strengthen their IT backbone with reliable, scalable and tailored services.
              </p>
            </div>

            {/* Our Mission */}
            <div
              className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500"
              data-aos="fade-left"
              data-aos-delay="150"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#135fa5] rounded-lg flex items-center justify-center text-2xl mr-4">
                  🎯
                </div>
                <h2 className="text-xl sm:text-xl font-bold text-gray-800">Our Mission</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To provide smart, dependable IT infrastructure, support and maintenance that empowers organisations to focus on their growth — knowing their systems are safe, stable and seamless by design.
              </p>
            </div>
          </div>

          {/* Our Vision */}
          <div
            className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 sm:p-12 mb-16 shadow-2xl "
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-[#135fa5] rounded-lg flex items-center justify-center text-2xl mr-4">
                🚀
              </div>
              <h2 className="text-xl sm:text-xl font-bold text-gray-800">Our Vision</h2>
            </div>
            <p className="text-lg sm:text-xl leading-relaxed text-gray-600">
              To be recognised across the UAE and beyond as the most trusted partner for IT solutions and managed services — one where technology becomes a catalyst for business excellence.
            </p>
          </div>

          {/* What Sets Us Apart */}
          <div className="mb-16">
            <h2 
              className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-12"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              What Sets Us <span className="text-[#135fa5]">Apart</span>
            </h2>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group"
                  data-aos="fade-up"
                  data-aos-delay={100 + (index * 50)}
                >
                  <div className="text-[32px] mb-4 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                  <h3 className="text-lg sm:text-[18px] font-bold text-gray-800 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-[14px] text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Our Promise */}
          <div
            className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 sm:p-12 shadow-2xl  mb-16"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 bg-[#135fa5] rounded-lg flex items-center justify-center text-3xl mr-4">
                💎
              </div>
              <h2 className="text-xl  md:text-xl font-bold text-gray-800">Our Promise</h2>
            </div>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
              When you choose Zenex Technologies, you're choosing an IT partner committed to <span className="text-[#135fa5] font-semibold">reliability, innovation, and support excellence</span>. We promise to keep your systems optimised, secure and aligned with your business goals — so you can focus on what matters most: running and growing your business.
            </p>
          </div>

          {/* CTA Section */}
          <div
            className="text-center mb-16"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
              Ready to Transform Your IT Infrastructure?
            </h3>
            <Button
              as="a"
              href="https://wa.me/971552773923?text=How%20can%20I%20help%20you%3F"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="text-lg py-4 px-8"
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;

