"use client";
import Button from "@/components/button";
import ServiceCards from "@/components/productcard";
import React from "react";

const AccessControlTimeAttendance = () => {
  // Custom services data for access control time attendance page
  const accessControlServices = [
    {
      id: "rfid-systems",
      title: "RFID Systems",
      description: "Radio Frequency Identification access control systems for secure entry.",
      icon: "🏷️",
      image: "/assets/images/service1.jpg",
      features: [
        "Card-based Access",
        "Proximity Readers",
        "Door Controllers",
        "Access Logs"
      ]
    },
    {
      id: "biometric-systems",
      title: "Biometric Systems",
      description: "Fingerprint and facial recognition systems for enhanced security.",
      icon: "👆",
      image: "/assets/images/service2.jpg",
      features: [
        "Fingerprint Readers",
        "Facial Recognition",
        "Iris Scanning",
        "Multi-factor Authentication"
      ]
    },
    {
      id: "time-attendance",
      title: "Time Attendance",
      description: "Automated time tracking and attendance management systems.",
      icon: "⏰",
      image: "/assets/images/service3.jpg",
      features: [
        "Clock In/Out Systems",
        "Shift Management",
        "Overtime Tracking",
        "Report Generation"
      ]
    },
    {
      id: "visitor-management",
      title: "Visitor Management",
      description: "Comprehensive visitor tracking and management solutions.",
      icon: "👥",
      image: "/assets/images/service1.jpg",
      features: [
        "Visitor Registration",
        "Badge Printing",
        "Escort Management",
        "Visitor Logs"
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
          backgroundImage: `url("/assets/images/accesscontroll.jpg")`,
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
            Access Control & Time Attendance
          </h1>

          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.8",
              textShadow: "1px 1px 3px rgba(0,0,0,0.4)",
            }}
          >
            RFID, biometric, and smart‑card systems with centralized management,
            visitor logs, and payroll integrations.
          </p>

          <div>
            <a
              href="https://wa.me/971552773923?text=Hi! I'm interested in Access Control & Time Attendance services. Can you help me?"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp about Access Control & Time Attendance services"
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
          services={accessControlServices}
          title="Access Control & Time Attendance Services"
          subtitle="Comprehensive security and attendance solutions tailored to your business access management needs and requirements."
        />
      </div>
    </>
  );
};

export default AccessControlTimeAttendance;


