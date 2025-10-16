"use client";
import Button from "@/components/button";
import ServiceCards from "@/components/productcard";
import React from "react";
import { ServerSolutionsImage } from "@/public/assets";
const ServerSolutions = () => {
  // Custom services data for server solutions page
  const serverSolutionsServices = [
    {
      id: "server-deployment",
      title: "Server Deployment",
      description: "Complete server setup and configuration for optimal performance.",
      icon: "🖥️",
      image: "/assets/images/service1.jpg",
      features: [
        "Hardware Installation",
        "OS Configuration",
        "Network Setup",
        "Security Hardening"
      ]
    },
    {
      id: "virtualization",
      title: "Virtualization",
      description: "VMware and Hyper-V virtualization solutions for efficient resource utilization.",
      icon: "⚡",
      image: "/assets/images/service2.jpg",
      features: [
        "VM Creation & Management",
        "Resource Allocation",
        "High Availability",
        "Disaster Recovery"
      ]
    },
    {
      id: "server-monitoring",
      title: "Server Monitoring",
      description: "24/7 monitoring and alerting to ensure server uptime and performance.",
      icon: "📊",
      image: "/assets/images/service3.jpg",
      features: [
        "Performance Monitoring",
        "Alert Management",
        "Capacity Planning",
        "Proactive Maintenance"
      ]
    },
    {
      id: "server-maintenance",
      title: "Server Maintenance",
      description: "Regular maintenance and updates to keep servers running smoothly.",
      icon: "🔧",
      image: "/assets/images/service1.jpg",
      features: [
        "Patch Management",
        "Security Updates",
        "Performance Tuning",
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
          backgroundImage: `url("/assets/images/cable.jpg")`,
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
            Server Solutions
          </h1>

          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.8",
              textShadow: "1px 1px 3px rgba(0,0,0,0.4)",
            }}
          >
            Reliable on‑premises and hybrid server deployments, virtualization, monitoring,
            backup strategies, and proactive maintenance to keep your core systems
            fast, secure, and highly available.
          </p>

          <div>
            <a
              href="https://wa.me/971552773923?text=Hi! I'm interested in Server Solutions services. Can you help me?"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp about Server Solutions services"
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
          services={serverSolutionsServices}
          title="Server Solutions Services"
          subtitle="Comprehensive server solutions tailored to your business infrastructure needs and requirements."
        />
      </div>
    </>
  );
};

export default ServerSolutions;


