"use client";
import Button from "@/components/button";
import ServiceCards from "@/components/productcard";
import React from "react";

const PCWorkstationSupport = () => {
  // Custom services data for PC workstation support page
  const pcWorkstationServices = [
    {
      id: "hardware-support",
      title: "Hardware Support",
      description: "Comprehensive hardware maintenance and repair services for PCs and workstations.",
      icon: "🔧",
      image: "/assets/images/service1.jpg",
      features: [
        "Hardware Diagnostics",
        "Component Replacement",
        "Performance Optimization",
        "Preventive Maintenance"
      ]
    },
    {
      id: "software-installation",
      title: "Software Installation",
      description: "Professional software installation and configuration services.",
      icon: "💿",
      image: "/assets/images/service2.jpg",
      features: [
        "OS Installation",
        "Application Setup",
        "Driver Installation",
        "Software Updates"
      ]
    },
    {
      id: "network-troubleshooting",
      title: "Network Troubleshooting",
      description: "Network connectivity and configuration troubleshooting services.",
      icon: "🌐",
      image: "/assets/images/service3.jpg",
      features: [
        "Connectivity Issues",
        "Network Configuration",
        "Wireless Setup",
        "Security Configuration"
      ]
    },
    {
      id: "data-backup",
      title: "Data Backup",
      description: "Secure data backup and recovery solutions for workstations.",
      icon: "💾",
      image: "/assets/images/service1.jpg",
      features: [
        "Automated Backups",
        "Data Recovery",
        "Cloud Backup",
        "Backup Verification"
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
          backgroundImage: `url("/assets/images/pcworkstation.jpg")`,
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
            PC & Workstation Support
          </h1>

          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.8",
              textShadow: "1px 1px 3px rgba(0,0,0,0.4)",
            }}
          >
            Proactive maintenance, imaging, software rollouts, security hardening,
            and rapid break‑fix to keep teams productive.
          </p>

          <div>
            <a
              href="https://wa.me/971552773923?text=Hi! I'm interested in PC & Workstation Support services. Can you help me?"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp about PC & Workstation Support services"
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
          services={pcWorkstationServices}
          title="PC & Workstation Support Services"
          subtitle="Comprehensive PC and workstation support solutions tailored to your business productivity needs and requirements."
        />
      </div>
    </>
  );
};

export default PCWorkstationSupport;


