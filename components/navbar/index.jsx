"use client";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import Button from "../button";
import { Menu, X, Phone, Mail, Instagram, Linkedin } from "lucide-react"; // Import Lucide icons
import { Logo } from "../../public/assets";
import Image from "next/image";
import { services } from "../../app/services/data";

const navLinks = [
  { href: "/#hero", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/services", label: "services" },
  { href: "/#solution", label: "Solution" },
  { href: "/#project", label: "Projects" },
  { href: "/#blog", label: "Blog" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  return (

    <div>
<div className="fixed top-0 left-0 w-full bg-white text-[#135fa5] text-[12px] z-[60]">
  <div className="max-w-7xl mx-auto flex items-center justify-between h-10 px-4">
    <div className="flex items-center gap-6">
      <span className="hidden sm:inline">Dubai -</span>
      <a href="tel:+971552773923" className="flex items-center gap-2 hover:opacity-90">
        <Phone className="w-4 h-4" />
        <span>+971 55 277 3923</span>
      </a>
      <a
        href="mailto:zenex.techllc@gmail.com"
        className="hidden sm:flex items-center gap-2 hover:opacity-90"
      >
        <Mail className="w-4 h-4" />
        <span>zenex.techllc@gmail.com</span>
      </a>
    </div>
    <div className="flex items-center gap-4">
      <a
        href="https://www.instagram.com/zenexcomputerservicesllc"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="hover:opacity-90"
      >
        <Instagram className="w-4 h-4" />
      </a>
      <a
        href="https://www.linkedin.com/company/zenex-computer-services-llc/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="hover:opacity-90"
      >
        <Linkedin className="w-4 h-4" />
      </a>
    </div>
  </div>
</div>

    <header  className=" z-50 py-5 w-full bg-transparent mt-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex">
            <Link href="/" className="flex items-center">
              <Image
                data-aos="fade-up"
                data-aos-delay={100}
                src={Logo}
                alt="logo"
                className="w-36 "
              
              
              />
            </Link>
          </div>

          {/* Desktop Navigation Menu */}
          <nav className="hidden md:flex items-center gap-[72px]">
            {navLinks.map((link, index) => (
              link.href === "/services" ? (
                <div key={link.label} className="relative group" data-aos="flip-down" data-aos-delay={index * 400}>
                  <span
                    className="cursor-default relative text-[14px] font-medium duration-700 delay-200 hover:text-[#3B82F6] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-gradient-to-r after:from-[#3B82F6] after:to-[#A855F7] after:content-[''] after:transition-transform after:duration-300"
                  >
                    {link.label}
                  </span>
                  <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 absolute left-0 top-full mt-3 bg-white border border-gray-100 shadow-lg rounded-md min-w-56 z-[70]">
                    <div className="py-2">
                      {services.map((svc) => (
                        <Link
                          key={svc.id}
                          href={`/services/${svc.id}`}
                          className="block px-4 py-2 text-[13px] text-gray-700 hover:bg-gray-50 hover:text-[#3B82F6]"
                        >
                          {svc.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="relative text-[14px] font-medium duration-700 delay-200 hover:text-[#3B82F6] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-gradient-to-r after:from-[#3B82F6] after:to-[#A855F7] after:content-[''] after:transition-transform after:duration-300 hover:after:scale-x-100"
                  data-aos="flip-down"
                  data-aos-delay={index * 400}
                >
                  {link.label}
                </Link>
              )
            ))}
          </nav>

          {/* Desktop Contact Button */}
          <div
            className="hidden md:flex  items-center"
            data-aos="flip-up"
            data-aos-delay={1000}
          >
            <Button
              href="/#contact"
              className="flex items-center px-4 py-1    rounded-[8px] text-gray-700 hover:bg-gradient-to-r hover:from-[#3B82F6] hover:to-[#A855F7] hover:text-white font-medium transition-all duration-200"
            >
              Contact Us
            </Button>
          </div>

          <div className="md:hidden">
            <Button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-[8px] text-gray-700 hover:text-gray-900 hover:bg-gray-100"
            >
              {isMenuOpen ? (
                <X color="black" className="h-6 w-6" />
              ) : (
                <Menu color="black" className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <>
          {/* Backdrop overlay with blur */}
          <div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm md:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
          <div className="md:hidden bg-white border-t border-gray-100 fixed top-4 left-0 w-full shadow-lg z-50">
            {/* Close button at the top */}
            <div className="flex justify-end border-b border-gray-100">
              <Button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 rounded-[8px] text-gray-700 hover:text-gray-900 hover:bg-gray-100"
              >
                <X color="black" className="h-5 w-5" />
              </Button>
            </div>
            <nav className="flex flex-col space-y-2 px-4 pt-2 pb-4">
              {navLinks.map((link, index) => (
                link.href === "/services" ? (
                  <div key={link.label} className="px-1" data-aos="flip-down" data-aos-delay={index * 100}>
                    <button
                      type="button"
                      onClick={() => setIsServicesOpen((p) => !p)}
                      className="w-full flex items-center justify-between px-3 py-2 rounded-md text-[12px] font-medium text-gray-700 hover:text-[#3B82F6]"
                    >
                      <span>{link.label}</span>
                      <span className={`transition-transform ${isServicesOpen ? "rotate-180" : "rotate-0"}`}>▾</span>
                    </button>
                    {isServicesOpen && (
                      <div className="mt-1 ml-2 border-l border-gray-100">
                        {services.map((svc) => (
                          <Link
                            key={svc.id}
                            href={`/services/${svc.id}`}
                            onClick={() => setIsMenuOpen(false)}
                            className="block pl-4 pr-3 py-2 text-[12px] text-gray-700 rounded-md hover:bg-gray-50 hover:text-[#3B82F6]"
                          >
                            {svc.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center hover:text-[#3B82F6] space-x-3 px-3 py-2 rounded-md text-[12px] font-medium text-gray-700"
                    data-aos="flip-down"
                    data-aos-delay={index * 100}
                  >
                    <span>{link.label}</span>
                  </Link>
                )
              ))}
              <Link
                href="/#contact"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center space-x-3 px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#3B82F6] hover:bg-gray-50 transition-all duration-500 ease-in-out delay-100 hover:scale-105 hover:shadow-sm"
                data-aos="flip-down"
              >
                <Phone color="black" className="w-5 h-5" />
                <span>Contact Us</span>
              </Link>
            </nav>
          </div>
        </>
      )}
    </header>
    </div>
  );
};

export default Header;
