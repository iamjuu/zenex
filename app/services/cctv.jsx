"use client";
import Button from "@/components/button";
import React from "react";

const CCTV = () => {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        backgroundImage: `url("/assets/service/serviceThumb2_1.png")`,
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
          <Button>
            Learn more
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CCTV
