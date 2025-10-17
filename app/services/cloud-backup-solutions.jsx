"use client";
import Button from "@/components/button";
import ServiceCards from "@/components/productcard";
import React from "react";

const CloudBackupSolutions = () => {
  // Custom services data for cloud backup solutions page
  const cloudBackupServices = [
    {
      id: "cloud-migration",
      title: "Cloud Migration",
      description: "Seamless migration of your infrastructure to cloud platforms.",
      icon: "☁️",
      image: "/assets/images/service1.jpg",
      features: [
        "AWS/Azure Migration",
        "Data Transfer",
        "Application Migration",
        "Cost Optimization"
      ]
    },
    {
      id: "backup-strategies",
      title: "Backup Strategies",
      description: "Comprehensive backup solutions for data protection and recovery.",
      icon: "💾",
      image: "/assets/images/service2.jpg",
      features: [
        "Automated Backups",
        "Incremental Backups",
        "Cross-Platform Sync",
        "Retention Policies"
      ]
    },
    {
      id: "disaster-recovery",
      title: "Disaster Recovery",
      description: "Complete disaster recovery planning and implementation.",
      icon: "🔄",
      image: "/assets/images/service3.jpg",
      features: [
        "DR Planning",
        "Failover Systems",
        "Recovery Testing",
        "Business Continuity"
      ]
    },
    {
      id: "cloud-monitoring",
      title: "Cloud Monitoring",
      description: "24/7 monitoring of your cloud infrastructure and applications.",
      icon: "📈",
      image: "/assets/images/service1.jpg",
      features: [
        "Performance Monitoring",
        "Cost Tracking",
        "Security Alerts",
        "Automated Scaling"
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
          backgroundImage: `url("/assets/images/pexels-julio-lopez-75309646-34258667.jpg")`,
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
            Cloud & Backup Solutions
          </h1>

          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.8",
              textShadow: "1px 1px 3px rgba(0,0,0,0.4)",
            }}
          >
            Cloud migrations, off‑site and hybrid backups, disaster recovery (DR),
            and automated retention policies to protect your critical data.
          </p>

          <div>
            <a
              href="https://wa.me/971552773923?text=Hi! I'm interested in Cloud & Backup Solutions services. Can you help me?"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp about Cloud & Backup Solutions services"
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
          services={cloudBackupServices}
          title="Cloud & Backup Solutions Services"
          subtitle="Comprehensive cloud and backup solutions tailored to your business data protection needs and requirements."
        />
      </div>
    </>
  );
};

export default CloudBackupSolutions;


