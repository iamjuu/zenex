"use client";
import ServiceCards from "@/components/productcard";
import { Button } from "@/components/ui/moving-border";
import React from "react";

const CCTV = () => {
  // Custom services data for CCTV page
  const cctvServices = [
    {
      id: "cctv-installation",
      title: "CCTV Installation",
      description: "Professional installation of high-quality surveillance systems for your property.",
      icon: "📹",
      image: "/assets/images/service1.jpg",
      features: [
        "HD Camera Setup",
        "Professional Wiring",
        "System Configuration",
        "Testing & Calibration"
      ]
    },
    {
      id: "night-vision-cameras",
      title: "Night Vision Cameras",
      description: "Advanced cameras with infrared technology for 24/7 surveillance capabilities.",
      icon: "🌙",
      image: "/assets/images/service2.jpg",
      features: [
        "Infrared Technology",
        "Low Light Performance",
        "Motion Detection",
        "Weather Resistant"
      ]
    },
    {
      id: "remote-monitoring",
      title: "Remote Monitoring",
      description: "Access your surveillance system from anywhere with mobile and web applications.",
      icon: "📱",
      image: "/assets/images/service3.jpg",
      features: [
        "Mobile App Access",
        "Web Dashboard",
        "Real-time Alerts",
        "Cloud Storage"
      ]
    },
    {
      id: "access-control",
      title: "Access Control Systems",
      description: "Secure entry management with key cards, biometrics, and digital locks.",
      icon: "🔐",
      image: "/assets/images/service1.jpg",
      features: [
        "Key Card Systems",
        "Biometric Access",
        "Digital Locks",
        "Visitor Management"
      ]
    },
    {
      id: "alarm-systems",
      title: "Alarm Systems",
      description: "Comprehensive alarm systems with sensors and automated notifications.",
      icon: "🚨",
      image: "/assets/images/service2.jpg",
      features: [
        "Motion Sensors",
        "Door/Window Sensors",
        "Siren Systems",
        "Emergency Alerts"
      ]
    },
    {
      id: "maintenance-support",
      title: "Maintenance & Support",
      description: "Ongoing maintenance and technical support to keep your system running smoothly.",
      icon: "🔧",
      image: "/assets/images/service3.jpg",
      features: [
        "Regular Maintenance",
        "24/7 Support",
        "System Updates",
        "Repair Services"
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
          backgroundImage: `url("/assets/images/cctv.jpg")`,
          backgroundSize: "cover",        // Make the image cover the div
          backgroundPosition: "center",   // Center the image
          backgroundRepeat: "no-repeat",  // Prevent tiling
          backgroundAttachment: "fixed",  // Optional: adds parallax feel
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
        <div
         className="relative z-10 flex flex-col gap-4 sm:gap-5 max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl px-4 sm:px-6 md:px-8 lg:px-12">
          <h1
           className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-5 drop-shadow-lg">
            This is CCTV Services
          </h1>

          <p 
          className="text-[12px] sm:text-base md:text-lg lg:text-xl leading-relaxed drop-shadow-md">
            CCTV surveillance systems provide comprehensive security solutions for 
            businesses and homes. Our professional installation and monitoring services 
            ensure 24/7 protection with high-definition cameras, night vision capabilities, 
            and real-time alerts. From installation to ongoing support, we deliver 
            reliable security systems that keep your property safe and secure.
          </p>

          <div className="mt-4 sm:mt-6">
         
            <a
              href="https://wa.me/971552773923?text=Hi! I'm interested in CCTV services. Can you help me?"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp about CCTV services"
            >
              <Button>
                Learn More
              </Button>
            </a>
          
          </div>
        </div>
      </div>
      <div>
        <ServiceCards 
          services={cctvServices}
          title="CCTV & Security Services"
          subtitle="Comprehensive surveillance and security solutions to protect your property and ensure peace of mind."
        />
      </div>
    </>
  );
};

export default CCTV
