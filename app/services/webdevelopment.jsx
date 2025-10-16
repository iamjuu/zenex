"use client";
import Button from "@/components/button";
import ServiceCards from "@/components/productcard";
import React from "react";

const WebDevelopment = () => {
  // Custom services data for web development page
  const webDevelopmentServices = [
  
    {
      id: "fullstack-development",
      title: "Full-Stack Development",
      description: "Complete web applications from frontend to backend integration.",
      icon: "🔗",
      image: "/assets/images/service3.jpg",
      features: [
        "End-to-End Solutions",
        "Database Integration",
        "Deployment & Hosting",
        "Maintenance & Support"
      ]
    },
    {
      id: "ecommerce-development",
      title: "E-commerce Development",
      description: "Custom online stores and marketplace solutions for your business.",
      icon: "🛒",
      image: "/assets/images/service1.jpg",
      features: [
        "Online Store Setup",
        "Payment Integration",
        "Inventory Management",
        "Order Processing"
      ]
    },
    {
      id: "cms-development",
      title: "CMS Development",
      description: "Content management systems for easy website administration.",
      icon: "📝",
      image: "/assets/images/service2.jpg",
      features: [
        "WordPress Development",
        "Custom CMS",
        "Content Management",
        "Admin Dashboard"
      ]
    },
    {
      id: "web-maintenance",
      title: "Web Maintenance",
      description: "Ongoing support and updates to keep your website running smoothly.",
      icon: "🔧",
      image: "/assets/images/service3.jpg",
      features: [
        "Regular Updates",
        "Security Patches",
        "Performance Monitoring",
        "Backup & Recovery"
      ]
    }
  ];

  return (
    <>
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        backgroundImage: `url("/assets/images/service3.jpg")`,
        backgroundSize: "cover", // Make the image cover the div
        backgroundPosition: "center", // Center the image
        backgroundRepeat: "no-repeat", // Prevent tiling
        backgroundAttachment: "fixed", // Optional: adds parallax feel
        textAlign: "center",
        color: "white",
      }}
    >
      {/* Overlay (optional, for better text readability) */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.5)", // dark overlay
          zIndex: 0,
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col gap-4 sm:gap-5 max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl px-4 sm:px-6 md:px-8 lg:px-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-5 drop-shadow-lg">
          This is Web Development
        </h1>

        <p
          style={{
            fontSize: "18px",
            lineHeight: "1.8",
            textShadow: "1px 1px 3px rgba(0,0,0,0.4)",
          }}
        >
          Web development is the process of designing, creating, and maintaining
          websites and web applications. It combines creativity and coding to
          deliver seamless user experiences across devices. From responsive
          layouts to robust backend systems, web development turns ideas into
          functional digital platforms that connect people and technology.
        </p>

        <div>
          <Button>Learn more</Button>
        </div>
      
      </div>
    </div>
    <div>
          <ServiceCards 
            services={webDevelopmentServices}
            title="Web Development Services"
            subtitle="Comprehensive web development solutions tailored to your business needs and requirements."
          />
        </div>
    </>
  );
};

export default WebDevelopment;
