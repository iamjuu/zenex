import Webdevelopment from "./webdevelopment";
import DigitalMarketing from "./digital-marketing";
import CCTV from "./cctv";
import CyberSecurity from "./cyber-security";

export const services = [
  {
    id: "webdevelopment",
    title: "Web Development",
    description: "Modern, performant websites and web apps tailored to your business.",
    components:<Webdevelopment/>
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    description: "SEO, social media, and campaigns that drive measurable growth.",
    components:<DigitalMarketing/>
  },
  {
    id: "cctv",
    title: "CCTV",
    description: "End‑to‑end surveillance solutions with installation and monitoring.",
    components:<CCTV/>
  },
  {
    id: "cyber-security",
    title: "Cyber Security",
    description: "Protect your systems with audits, hardening, and continuous monitoring.",
    components:<CyberSecurity/>
  },
];

export function getServiceById(id) {
  return services.find((s) => s.id === id);
}

export function getAllServiceIds() {
  return services.map((s) => s.id);
}


