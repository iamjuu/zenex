"use client";
import { Button } from "@/components/ui/moving-border";
import ServiceCards from "@/components/productcard";
import React from "react";

const DigitalMarketing = () => {
  // Custom services data for digital marketing page
  const digitalMarketingServices = [
    {
      id: "seo-optimization",
      title: "SEO Optimization",
      description: "Improve your website's visibility and ranking in search engine results.",
      icon: "🔍",
      image: "/assets/images/service1.jpg",
      features: [
        "Keyword Research",
        "On-Page SEO",
        "Technical SEO",
        "Local SEO"
      ]
    },
    {
      id: "social-media-marketing",
      title: "Social Media Marketing",
      description: "Build your brand presence and engage with customers across social platforms.",
      icon: "📱",
      image: "/assets/images/service2.jpg",
      features: [
        "Content Strategy",
        "Community Management",
        "Paid Advertising",
        "Analytics & Reporting"
      ]
    },
    {
      id: "ppc-advertising",
      title: "PPC Advertising",
      description: "Drive targeted traffic and conversions through paid search and display ads.",
      icon: "💰",
      image: "/assets/images/service3.jpg",
      features: [
        "Google Ads",
        "Facebook Ads",
        "Campaign Management",
        "ROI Optimization"
      ]
    },
    {
      id: "email-marketing",
      title: "Email Marketing",
      description: "Nurture leads and retain customers with personalized email campaigns.",
      icon: "📧",
      image: "/assets/images/service1.jpg",
      features: [
        "Email Automation",
        "Newsletter Design",
        "Segmentation",
        "Performance Tracking"
      ]
    },
    {
      id: "content-marketing",
      title: "Content Marketing",
      description: "Create valuable content that attracts and converts your target audience.",
      icon: "📝",
      image: "/assets/images/service2.jpg",
      features: [
        "Blog Writing",
        "Video Content",
        "Infographics",
        "Content Strategy"
      ]
    },
    {
      id: "analytics-reporting",
      title: "Analytics & Reporting",
      description: "Track performance and measure ROI with comprehensive analytics and reporting.",
      icon: "📊",
      image: "/assets/images/service3.jpg",
      features: [
        "Performance Tracking",
        "Custom Dashboards",
        "ROI Analysis",
        "Monthly Reports"
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

            This is Digital Marketing
          </h1>

          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.8",
              textShadow: "1px 1px 3px rgba(0,0,0,0.4)",
            }}
          >
            Digital marketing drives business growth through strategic online campaigns 
            and data-driven approaches. Our comprehensive services include SEO optimization, 
            social media marketing, PPC advertising, and email marketing. We create targeted 
            campaigns that reach your audience, boost engagement, and deliver measurable 
            results for sustainable business success.
          </p>

          
          <div>

          <a
              href="https://wa.me/971552773923?text=Hi! I'm interested in Digital Marketing services. Can you help me?"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp about Digital Marketing services"
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
          services={digitalMarketingServices}
          title="Digital Marketing Services"
          subtitle="Comprehensive digital marketing strategies to boost your online presence and drive business growth."
        />
      </div>
    </>
  );
};

export default DigitalMarketing
