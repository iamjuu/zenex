"use client";
import Button from "@/components/button";
import ServiceCards from "@/components/productcard";
import React from "react";

const StructuredCabling = () => {
  // Custom services data for structured cabling page
  const structuredCablingServices = [
    {
      id: "network-cabling",
      title: "Network Cabling",
      description: "Professional installation of Cat6/Cat6a copper cabling for data networks.",
      icon: "🔌",
      image: "/assets/images/service1.jpg",
      features: [
        "Cat6/Cat6a Installation",
        "Cable Management",
        "Patch Panel Setup",
        "Testing & Certification"
      ]
    },
    {
      id: "fiber-installation",
      title: "Fiber Installation",
      description: "High-speed fiber optic cabling for enterprise and data center environments.",
      icon: "📡",
      image: "/assets/images/service2.jpg",
      features: [
        "Single/Multi-mode Fiber",
        "Fusion Splicing",
        "Fiber Testing",
        "Connector Installation"
      ]
    },
    {
      id: "voice-cabling",
      title: "Voice Cabling",
      description: "Telephone and VoIP cabling systems for business communications.",
      icon: "📞",
      image: "/assets/images/service3.jpg",
      features: [
        "POTS Installation",
        "VoIP Cabling",
        "PBX Connections",
        "Voice Testing"
      ]
    },
    {
      id: "cable-management",
      title: "Cable Management",
      description: "Professional cable management and organization solutions.",
      icon: "📋",
      image: "/assets/cctv/18.png",
      features: [
        "Rack Organization",
        "Cable Trays",
        "Labeling Systems",
        "Documentation"
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
          backgroundImage: `url("/assets/images/server.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          textAlign: "center",
          color: "white",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.5)",
            zIndex: 0,
          }}
        />

        <div className="relative z-10 flex flex-col gap-4 sm:gap-5 max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl px-4 sm:px-6 md:px-8 lg:px-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-5 drop-shadow-lg">
            Structured Cabling
          </h1>

          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.8",
              textShadow: "1px 1px 3px rgba(0,0,0,0.4)",
            }}
          >
            End‑to‑end design and installation for voice, data, and fiber networks
            with certification and documentation.
          </p>

          <div>
            <a
              href="https://wa.me/971552773923?text=Hi! I'm interested in Structured Cabling services. Can you help me?"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp about Structured Cabling services"
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
          services={structuredCablingServices}
          title="Structured Cabling Services"
          subtitle="Professional cabling solutions tailored to your network infrastructure needs and requirements."
        />
      </div>
    </>
  );
};

export default StructuredCabling;


