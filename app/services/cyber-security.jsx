"use client";
import Button from "@/components/button";
import React from "react";

const CyberSecurity = () => {
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
        backgroundImage: `url("/assets/service/serviceThumb2_2.png")`,
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
  );
};

export default CyberSecurity
