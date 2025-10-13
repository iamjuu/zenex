"use client"
import { useState,useEffect  } from "react";
import Image from "next/image";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Support from "@/components/support";
import Carousel from "@/components/caroseal";
import { Backgound } from "@/public/assets";
import Service from "@/components/service";
import Footer from "@/components/footer";
import QuickAnswer from "@/components/quickanswer";
import Contact from "@/components/contect";
import { Bolt, Users, LineChart, Clock, Ticket, Database } from "lucide-react";
export default function Home() {
  const whatsappNumber =  "971564407700"; // E.164 format, e.g., 15551234567
  const whatsappText = encodeURIComponent("How can i help you ?");
  const [isBouncing, setIsBouncing] = useState(false);


  useEffect(() => {
    const triggerBounce = () => {
      setIsBouncing(true);
      const timeoutId = setTimeout(() => setIsBouncing(false), 1200);
      return timeoutId;
    };
    let timeoutId = triggerBounce();
    const intervalId = setInterval(() => {
      timeoutId = triggerBounce();
    }, 10000);
  }, []);


  const items = [
    {
      icon: <Bolt />,
      title: "Increased Productivity",
      description:
        "Streamline operations with reliable IT and infrastructure solutions that keep your business running without downtime.",
    },
    {
      icon: <Users />,
      title: "Better Customer Experience",
      description:
        "Deliver smarter, faster, and more secure services that enhance satisfaction and build long-term loyalty.",
    },
    {
      icon: <LineChart />,
      title: "Scalability & Growth",
      description:
        "Flexible solutions that grow with your business, supporting expansion across Dubai and the UAE.",
    },

    {
      icon: <Clock />,
      title: "24/7 Availability",
      description:
        "Round-the-clock support and monitoring ensure your business is always connected and protected.",
    },
    {
      icon: <Ticket />,
      title: "Cost Reduction",
      description:
        "Cut operational costs with efficient, scalable systems designed to maximize ROI.",
    },
    {
      icon: <Database />,
      title: "Data-Driven Insights​",
      description:
        "Gain real-time visibility and smarter decision-making through connected, automated systems.",
    },
  ];
  return (
    <div
      style={{
        backgroundImage: `url(${Backgound.src})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
      className="min-h-screen px-2 "
    >
      <div className="flex flex-col ">
        <div>
          <Navbar />
        </div>
        <div className="  pt-0 md:pt-36" id="hero">
          <Hero />
        </div>

        {/* <div id="solution">
          <About />
        </div> */}
        <div className="flex flex-col gap-3" id="project">
          <Support />
          <About />
        </div>
        <div id="blog">
          <Carousel items={items} />
        </div>
        <div id="contact">
          <Contact />
        </div>
        <div id="about">
          <Service />
        </div>
        <div>
          <QuickAnswer />
        </div>
        <Footer />

        <a
        href={`https://wa.me/${whatsappNumber}?text=${whatsappText}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className={`fixed z-50 bottom-24 right-5 transition-transform hover:scale-105 active:scale-95 ${
          isBouncing ? "animate-bounce" : ""
        }`}
      >
        <Image
        width={100}
        height={100}
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          className="w-16  drop-shadow-xl"
        />
      </a>


      </div>
    </div>
  );
}
