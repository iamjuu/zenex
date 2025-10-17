import React from 'react'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

const ServiceCard = ({ service }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
      {/* Background Image */}
      <div 
        className="h-48 w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${service.image})` }}
      >
        {/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div> */}
      </div>
      
      {/* Content */}
      <div className="p-6">
        <div className="mb-4">
          <div className="mb-2 flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-blue-100 flex items-center justify-center">
              <span className="text-blue-600 text-lg">{service.icon}</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
        </div>
        
        {/* Features List */}
        <ul className="mb-6 space-y-2">
          {service.features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
              <div className="h-1.5 w-1.5 rounded-full bg-blue-500"></div>
              {feature}
            </li>
          ))}
        </ul>
        
        {/* Action Button */}
        {/* <Link 
          href={`/services/${service.id}`}
          className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium  transition-colors hover:bg-gradient-to-r from-[#3B82F6] to-[#A855F7] text-black hover:text-white"
        >
          Learn More
          <ChevronRight size={18} />
        </Link> */}
     <Link 
          href={`/`}
          className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium  transition-colors hover:bg-gradient-to-r from-[#3B82F6] to-[#A855F7] text-black hover:text-white"
        >
          Learn More
          <ChevronRight size={18} />
        </Link>
      </div>
    </div>
  )
}

const ServiceCards = ({ services, title = "Our Services", subtitle = "Comprehensive technology solutions to help your business grow and succeed in the digital world." }) => {
  // Default services data as fallback
  const defaultServices = [
    {
      id: "webdevelopment",
      title: "Web Development",
      description: "Modern, responsive websites and web applications built with cutting-edge technologies.",
      icon: "🌐",
      image: "/assets/images/service1.jpg",
      features: [
        "Responsive Design",
        "SEO Optimization", 
        "Fast Loading Speed",
        "Mobile-First Approach"
      ]
    },
    {
      id: "appdevelopment",
      title: "App Development",
      description: "Native and cross-platform mobile applications for iOS and Android devices.",
      icon: "📱",
      image: "/assets/images/service2.jpg",
      features: [
        "iOS & Android Apps",
        "Cross-Platform Solutions",
        "App Store Optimization",
        "Push Notifications"
      ]
    },
    {
      id: "softwaredevelopment",
      title: "Software Development",
      description: "Custom software solutions tailored to your business needs and requirements.",
      icon: "💻",
      image: "/assets/images/service3.jpg",
      features: [
        "Custom Software",
        "Database Design",
        "API Development",
        "System Integration"
      ]
    },
    {
      id: "digital-marketing",
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies to boost your online presence.",
      icon: "📈",
      image: "/assets/images/service1.jpg",
      features: [
        "SEO & SEM",
        "Social Media Marketing",
        "Content Marketing",
        "Analytics & Reporting"
      ]
    },
    {
      id: "cctv",
      title: "CCTV Solutions",
      description: "Advanced surveillance systems with professional installation and monitoring.",
      icon: "📹",
      image: "/assets/images/service2.jpg",
      features: [
        "HD Surveillance",
        "Remote Monitoring",
        "Professional Installation",
        "24/7 Support"
      ]
    },
    {
      id: "cyber-security",
      title: "Cyber Security",
      description: "Protect your digital assets with comprehensive security solutions and monitoring.",
      icon: "🔒",
      image: "/assets/images/service3.jpg",
      features: [
        "Security Audits",
        "Threat Monitoring",
        "Data Protection",
        "Compliance Support"
      ]
    }
  ];

  // Use provided services or fallback to default
  const servicesToRender = services || defaultServices;

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>
        
        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesToRender.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ServiceCards
