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
        backgroundPosition: "bottom",
        backgroundSize: "full",
        backgroundRepeat: "repeat",
      }}
      className="min-h-screen  px-2 "
    >
      <div className="flex flex-col ">
        <div>
          <Navbar />
        </div>
        <div id="hero">
          <Hero />
        </div>

        <div id="solution">
          <About />
        </div>
        <div id="project">
          <Support />
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
      </div>
    </div>
  );
}
