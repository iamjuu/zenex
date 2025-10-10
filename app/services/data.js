export const services = [
  {
    id: "webdevelopment",
    title: "Web Development",
    description: "Modern, performant websites and web apps tailored to your business.",
    components:""
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    description: "SEO, social media, and campaigns that drive measurable growth.",
  },
  {
    id: "cctv",
    title: "CCTV",
    description: "End‑to‑end surveillance solutions with installation and monitoring.",
  },
  {
    id: "cyber-security",
    title: "Cyber Security",
    description: "Protect your systems with audits, hardening, and continuous monitoring.",
  },
];

export function getServiceById(id) {
  return services.find((s) => s.id === id);
}

export function getAllServiceIds() {
  return services.map((s) => s.id);
}


