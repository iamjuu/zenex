"use client";
import Button from "@/components/button";
import ServiceCards from "@/components/productcard";
import React from "react";

const DataRecovery = () => {
  // Custom services data for data recovery page
  const dataRecoveryServices = [
    {
      id: "hard-drive-recovery",
      title: "Hard Drive Recovery",
      description: "Professional recovery from failed HDDs and SSDs with advanced techniques.",
      icon: "💿",
      image: "/assets/images/service1.jpg",
      features: [
        "Physical Damage Repair",
        "Logical Recovery",
        "Bad Sector Recovery",
        "File System Repair"
      ]
    },
    {
      id: "raid-recovery",
      title: "RAID Recovery",
      description: "Specialized recovery services for RAID arrays and NAS systems.",
      icon: "🔧",
      image: "/assets/images/service2.jpg",
      features: [
        "RAID 0/1/5/6 Recovery",
        "NAS Data Recovery",
        "Controller Failure",
        "Array Rebuilding"
      ]
    },
    {
      id: "server-recovery",
      title: "Server Recovery",
      description: "Enterprise-level data recovery from server systems and databases.",
      icon: "🖥️",
      image: "/assets/images/service3.jpg",
      features: [
        "Database Recovery",
        "Exchange Recovery",
        "SQL Server Recovery",
        "Virtual Machine Recovery"
      ]
    },
    {
      id: "encrypted-recovery",
      title: "Encrypted Recovery",
      description: "Secure recovery from encrypted volumes and password-protected files.",
      icon: "🔐",
      image: "/assets/images/service1.jpg",
      features: [
        "BitLocker Recovery",
        "FileVault Recovery",
        "Encrypted Partition Recovery",
        "Password Recovery"
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
          backgroundImage: `url("/assets/images/datarecovery.jpg")`,
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
            Data Recovery
          </h1>

          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.8",
              textShadow: "1px 1px 3px rgba(0,0,0,0.4)",
            }}
          >
            Recovery for HDD/SSD, RAID/NAS, servers, and encrypted volumes with
            strict privacy and chain‑of‑custody practices.
          </p>

          <div>
            <a
              href="https://wa.me/971552773923?text=Hi! I'm interested in Data Recovery services. Can you help me?"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp about Data Recovery services"
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
          services={dataRecoveryServices}
          title="Data Recovery Services"
          subtitle="Professional data recovery solutions tailored to your critical data loss situations and requirements."
        />
      </div>
    </>
  );
};

export default DataRecovery;


