"use client";
import Button from "@/components/button";
import ServiceCards from "@/components/productcard";
import React from "react";

const CyberSecurity = () => {
  // Custom services data for cyber security page
  const cyberSecurityServices = [
    {
      id: "vulnerability-assessment",
      title: "Vulnerability Assessment",
      description: "Comprehensive security audits to identify and assess potential vulnerabilities in your systems.",
      icon: "🔍",
      image: "/assets/images/service1.jpg",
      features: [
        "Security Scanning",
        "Penetration Testing",
        "Risk Analysis",
        "Compliance Audits"
      ]
    },
    {
      id: "system-hardening",
      title: "System Hardening",
      description: "Strengthen your system security by implementing best practices and security configurations.",
      icon: "🛡️",
      image: "/assets/images/service2.jpg",
      features: [
        "OS Hardening",
        "Network Security",
        "Access Controls",
        "Security Policies"
      ]
    },
    {
      id: "continuous-monitoring",
      title: "Continuous Monitoring",
      description: "24/7 security monitoring and threat detection to protect your infrastructure.",
      icon: "👁️",
      image: "/assets/images/service3.jpg",
      features: [
        "Real-time Monitoring",
        "Threat Detection",
        "Incident Response",
        "Security Alerts"
      ]
    },
    {
      id: "compliance-management",
      title: "Compliance Management",
      description: "Ensure your organization meets industry standards and regulatory requirements.",
      icon: "📋",
      image: "/assets/images/service1.jpg",
      features: [
        "GDPR Compliance",
        "ISO 27001",
        "SOC 2",
        "HIPAA Compliance"
      ]
    },
    {
      id: "security-training",
      title: "Security Training",
      description: "Educate your team on cybersecurity best practices and threat awareness.",
      icon: "🎓",
      image: "/assets/images/service2.jpg",
      features: [
        "Phishing Awareness",
        "Security Workshops",
        "Incident Response Training",
        "Best Practices"
      ]
    },
    {
      id: "incident-response",
      title: "Incident Response",
      description: "Rapid response and recovery services for security incidents and breaches.",
      icon: "🚨",
      image: "/assets/images/service3.jpg",
      features: [
        "Emergency Response",
        "Forensic Analysis",
        "Recovery Planning",
        "Post-Incident Review"
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
          backgroundImage: `url("/assets/images/service2.jpg")`,
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
         className="relative z-10 flex flex-col gap-4 sm:gap-5 max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl px-4 sm:px-6 md:px-8 lg:px-12"
        >
          <h1
                   className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-5 drop-shadow-lg">

            This is Cyber Security
          </h1>

          <p
                 className="text-[12px] sm:text-base md:text-lg lg:text-xl leading-relaxed drop-shadow-md">

            Cyber security protects your digital assets from evolving threats and 
            vulnerabilities. Our comprehensive security solutions include vulnerability 
            assessments, system hardening, continuous monitoring, and compliance management. 
            We provide 24/7 protection with advanced threat detection, incident response, 
            and security awareness training to keep your organization secure.
          </p>

          
          <div>

          <Button>

              Learn more
          </Button>
          </div>
        </div>
      </div>
      <div>
        <ServiceCards 
          services={cyberSecurityServices}
          title="Cyber Security Services"
          subtitle="Comprehensive security solutions to protect your digital assets and ensure business continuity."
        />
      </div>
    </>
  );
};

export default CyberSecurity
