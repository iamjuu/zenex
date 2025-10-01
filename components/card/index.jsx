import { AnimatedTestimonials } from "@/ui/card/card";
import {Card1,Card2,Card3,Card4,Card5,Card6} from "../../public/assets"
export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "Affordable, compliant, high-speed Wi-Fi with unlimited usage and 24/7 support — built for labour accommodations across the UAE.",
      name: "Labour Camp Wi-Fi",
      designation: "Smart Connectivity",
      src: Card1,
    },
    {
      quote:
        " Reliable Wi-Fi solutions for staff housing with 99.9% uptime, modern equipment, and cost-effective digital access systems.",
      name: "Staff Accommodation Wi-Fi",
      designation: "Staff Accommodation Wi-Fi Smart Connectivity",
      src: Card2,    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Emily Watson",
      designation: "Operations Director at CloudScale",
      src: Card3,    },
    {
      quote:
        "HV & LV electrical installations and maintenance for commercial, industrial, and residential projects — safe, compliant, and reliable across the UAE.",
      name: "Electrical Works",
      designation: "Smart Infrastructure",
      src: Card4,    },
    {
      quote:
        " 24/7 surveillance and advanced access control systems to keep your people, property, and assets secure.",
      name: "CCTV & Security",
      designation: "Smart Protection",
      src: Card5,    },
      {
        quote:
          " Structured cabling, VoIP, and telephone solutions that keep your business connected without interruptions.",
        name: "Networking & Telephone",
        designation: "Smart Connectivity",
        src: Card6,    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
