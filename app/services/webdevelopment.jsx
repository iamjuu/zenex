"use client";
import Button from "@/components/button";
import React from "react";

const WebDevelopment = () => {
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
        backgroundImage: `url("/assets/service/serviceThumb2_3.png")`,
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
      className="flex flex-col gap-5"
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "800px",
          padding: "0 20px",
        }}
      >
        <h1
          style={{
            fontSize: "48px",
            fontWeight: "700",
            marginBottom: "20px",
            textShadow: "2px 2px 6px rgba(0,0,0,0.6)",
          }}
        >
          This is Web Development
        </h1>

        <p
          style={{
            fontSize: "18px",
            lineHeight: "1.8",
            textShadow: "1px 1px 3px rgba(0,0,0,0.4)",
          }}
        >
          Web development is the process of designing, creating, and maintaining
          websites and web applications. It combines creativity and coding to
          deliver seamless user experiences across devices. From responsive
          layouts to robust backend systems, web development turns ideas into
          functional digital platforms that connect people and technology.
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

export default WebDevelopment;
