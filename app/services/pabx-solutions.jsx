"use client";
import Button from "@/components/button";
import ServiceCards from "@/components/productcard";
import React from "react";

const PabxSolutions = () => {
  // Custom services data for PABX solutions page
  const pabxSolutionsServices = [
    {
      id: "ip-pbx-setup",
      title: "IP-PBX Setup",
      description: "Modern IP-based phone systems with advanced features and scalability.",
      icon: "📞",
      image: "/assets/images/service1.jpg",
      features: [
        "IP Phone Configuration",
        "Extension Management",
        "Call Routing",
        "System Administration"
      ]
    },
    {
      id: "sip-trunking",
      title: "SIP Trunking",
      description: "Cost-effective SIP trunking solutions for voice communications.",
      icon: "🌐",
      image: "/assets/images/service2.jpg",
      features: [
        "SIP Provider Setup",
        "Trunk Configuration",
        "Call Quality Optimization",
        "Failover Management"
      ]
    },
    {
      id: "ivr-systems",
      title: "IVR Systems",
      description: "Interactive Voice Response systems for automated call handling.",
      icon: "🎯",
      image: "/assets/images/service3.jpg",
      features: [
        "Custom IVR Menus",
        "Call Queuing",
        "Call Recording",
        "Integration APIs"
      ]
    },
    {
      id: "crm-integration",
      title: "CRM Integration",
      description: "Seamless integration with CRM and helpdesk systems.",
      icon: "🔗",
      image: "/assets/images/service1.jpg",
      features: [
        "Click-to-Call",
        "Call Logging",
        "Customer Data Sync",
        "Workflow Automation"
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
          backgroundImage: `url("/assets/images/happy-sales-representative-making-big-sale-work-excited-young-woman-with-headset-laughing-while-speaking-customer-call-center.jpg")`,
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
            PABX Solutions
          </h1>

          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.8",
              textShadow: "1px 1px 3px rgba(0,0,0,0.4)",
            }}
          >
            IP‑PBX setup, SIP trunking, call routing, IVR, call recording, and
            integrations with CRM/helpdesk systems.
          </p>

          <div>
            <a
              href="https://wa.me/971552773923?text=Hi! I'm interested in PABX Solutions services. Can you help me?"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp about PABX Solutions services"
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
          services={pabxSolutionsServices}
          title="PABX Solutions Services"
          subtitle="Comprehensive telephony solutions tailored to your business communication needs and requirements."
        />
      </div>
    </>
  );
};

export default PabxSolutions;


