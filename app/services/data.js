import Webdevelopment from "./webdevelopment";
import DigitalMarketing from "./digital-marketing";
import CCTV from "./cctv";
import CyberSecurity from "./cyber-security";
import ServerSolutions from "./server-solutions";
import CloudBackupSolutions from "./cloud-backup-solutions";
import DataRecovery from "./data-recovery";
import StructuredCabling from "./structured-cabling";
import PabxSolutions from "./pabx-solutions";
import AccessControlTimeAttendance from "./access-control-time-attendance";
import ERPSolutions from "./erp-solutions";
import PCWorkstationSupport from "./pc-workstation-support";

export const services = [
    {
  id: "server-solutions",
  title: "Server Solutions",
  description: "Design, deploy, and maintain secure, high‑availability server environments.",
  components:<ServerSolutions/>
},
{
  id: "cloud-backup-solutions",
  title: "Cloud & Backup Solutions",
  description: "Cloud migrations, backups, and DR to safeguard business continuity.",
  components:<CloudBackupSolutions/>
},
{
  id: "data-recovery",
  title: "Data Recovery",
  description: "Professional recovery for HDD/SSD, RAID/NAS, and servers.",
  components:<DataRecovery/>
},

{
  id: "erp-solutions",
  title: "ERP Solutions",
  description: "Implementation and customization across finance, inventory, HR, and CRM.",
  components:<ERPSolutions/>
},
{
  id: "access-control-time-attendance",
  title: "Access Control & Time Attendance",
  description: "RFID/biometric access with centralized logs and payroll sync.",
  components:<AccessControlTimeAttendance/>
},
{
  id: "pabx-solutions",
  title: "PABX Solutions",
  description: "IP‑PBX, SIP trunking, IVR, and CRM telephony integrations.",
  components:<PabxSolutions/>
},
{
  id: "pc-workstation-support",
  title: "PC & Workstation Support",
  description: "Proactive maintenance, rollouts, and rapid break‑fix support.",
  components:<PCWorkstationSupport/>
},
{
  id: "cctv",
  title: "CCTV",
  description: "End‑to‑end surveillance solutions with installation and monitoring.",
  components:<CCTV/>
},
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
    id: "cyber-security",
    title: "Cyber Security",
    description: "Protect your systems with audits, hardening, and continuous monitoring.",
    components:<CyberSecurity/>
  },



  {
    id: "structured-cabling",
    title: "Structured Cabling",
    description: "Certified copper and fiber installations with documentation.",
    components:<StructuredCabling/>
  },

 


];

export function getServiceById(id) {
  return services.find((s) => s.id === id);
}

export function getAllServiceIds() {
  return services.map((s) => s.id);
}



