"use client";
import { Button } from "@/components/ui/moving-border";
import ServiceCards from "@/components/productcard";
import React from "react";

const ERPSolutions = () => {
  // Custom services data for ERP solutions page
  const erpSolutionsServices = [
    {
      id: "erp-implementation",
      title: "ERP Implementation",
      description: "Complete ERP system implementation and configuration for your business.",
      icon: "⚙️",
      image: "/assets/images/service1.jpg",
      features: [
        "System Configuration",
        "Module Setup",
        "Data Migration",
        "User Training"
      ]
    },
    {
      id: "finance-module",
      title: "Finance Module",
      description: "Comprehensive financial management and accounting solutions.",
      icon: "💰",
      image: "/assets/images/service2.jpg",
      features: [
        "General Ledger",
        "Accounts Payable",
        "Accounts Receivable",
        "Financial Reporting"
      ]
    },
    {
      id: "inventory-management",
      title: "Inventory Management",
      description: "Advanced inventory tracking and management systems.",
      icon: "📦",
      image: "/assets/images/service3.jpg",
      features: [
        "Stock Tracking",
        "Purchase Orders",
        "Warehouse Management",
        "Inventory Reports"
      ]
    },
    {
      id: "hr-management",
      title: "HR Management",
      description: "Human resources management and payroll processing systems.",
      icon: "👥",
      image: "/assets/images/service1.jpg",
      features: [
        "Employee Records",
        "Payroll Processing",
        "Leave Management",
        "Performance Tracking"
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
          backgroundImage: `url("/assets/images/erp.jpg")`,
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
            ERP Solutions
          </h1>

          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.8",
              textShadow: "1px 1px 3px rgba(0,0,0,0.4)",
            }}
          >
            Implementation, customization, and support across finance, inventory,
            HR, CRM, and operations with training and data migration.
          </p>

          <div>
            <a
              href="https://wa.me/971552773923?text=Hi! I'm interested in ERP Solutions services. Can you help me?"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp about ERP Solutions services"
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
          services={erpSolutionsServices}
          title="ERP Solutions Services"
          subtitle="Comprehensive ERP solutions tailored to your business process management needs and requirements."
        />
      </div>
    </>
  );
};

export default ERPSolutions;


