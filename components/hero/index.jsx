"use client"
import React, { useState } from "react";
import Image from "next/image";
import { Backgound, TestHero } from "../../public/assets";
import AnimationText from "../../animation/text";
import Button from "../button";

const Index = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  return (
    <div className="flex w-full">
      <div className="max-w-7xl flex flex-col md:flex-row mx-auto">
        {/* Left Side - Text */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
          <div className="text-left p-6 md:p-8">
            <AnimationText
              text="Smarter Infrastructure. Safer Communities. Stronger Connections."
              delay={150}
              animateBy="words"
              direction="top"
              className="text-xl sm:text-2xl md:text-3xl mb-6 md:mb-8"
            />
            <AnimationText
              text="From power to protection, Tabdeel delivers the change you need — smarter, scalable, and future-ready IT & security solutions trusted across the UAE."
              delay={80}
              animateBy="words"
              direction="top"
              className="text-base md:text-lg text-gray-600"
            />
          </div>

          <div className="w-full gap-5 flex">
            <Button className="bg-[#FFCB05] text-white">Get Quote</Button>
            <Button className=" border border-[#FFCB05]">Contect us</Button>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="w-full z-[-1] md:w-1/2 flex items-center justify-center mt-6 md:mt-0 relative">
          {!imageLoaded && (
            <div className="absolute inset-0 m-0 rounded-lg bg-gray-200 animate-pulse" />
          )}
          <Image
            src={TestHero}
            alt="Background"
            onLoad={() => setImageLoaded(true)}
            className={`object-cover w-full h-auto max-h-[400px] md:max-h-full transition-opacity duration-300 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
