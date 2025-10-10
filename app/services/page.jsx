import React from 'react'
import Navbar from "../../components/navbar"
import Footer from "../../components/footer"
import Link from 'next/link'

const ServicesPage = () => {
  const services = [
    {
      id: "webdevelopment",
      title: "Software Services",
      description: "Software services encompass a wide range of",
      icon: "💻",
      image: "/placeholder-software.jpg"
    },
    {
      id: "digital-marketing", 
      title: "IT Consultancy",
      description: "We provide new and emerging technologies",
      icon: "⚙️",
      image: "/placeholder-it.jpg"
    },
    {
      id: "cctv",
      title: "Access Control System", 
      description: "Web development is the work involved in",
      icon: "</>",
      image: "/placeholder-access.jpg"
    },
    {
      id: "cyber-security",
      title: "Database Security",
      description: "Database security is the processes, tools",
      icon: "🗄️", 
      image: "/placeholder-database.jpg"
    }
  ]

  return (
    <div className="min-h-screen bg-white pt-[120px]">
      <Navbar />
      
      {/* Header Section */}
      <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 min-h-[60vh] flex items-center justify-center z-[-1] overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-32 w-1 h-1 bg-blue-300 rounded-full animate-pulse delay-100"></div>
          <div className="absolute bottom-32 left-40 w-3 h-3 bg-blue-500 rounded-full animate-pulse delay-200"></div>
          <div className="absolute bottom-20 right-20 w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-300"></div>
          <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-blue-300 rounded-full animate-pulse delay-500"></div>
          <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-blue-500 rounded-full animate-pulse delay-700"></div>
        </div>
        
        {/* Circuit Lines */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 1000 600">
            <defs>
              <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#3b82f6" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
            <line x1="100" y1="100" x2="300" y2="200" stroke="#3b82f6" strokeWidth="2" opacity="0.3"/>
            <line x1="300" y1="200" x2="500" y2="150" stroke="#3b82f6" strokeWidth="2" opacity="0.3"/>
            <line x1="500" y1="150" x2="700" y2="300" stroke="#3b82f6" strokeWidth="2" opacity="0.3"/>
            <line x1="200" y1="300" x2="400" y2="400" stroke="#3b82f6" strokeWidth="2" opacity="0.3"/>
            <line x1="400" y1="400" x2="600" y2="350" stroke="#3b82f6" strokeWidth="2" opacity="0.3"/>
            <line x1="600" y1="350" x2="800" y2="450" stroke="#3b82f6" strokeWidth="2" opacity="0.3"/>
          </svg>
        </div>

        {/* Padlock Icon */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-20">
          <div className="w-32 h-32 bg-blue-500 rounded-lg flex items-center justify-center">
            <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
            </svg>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Services 02</h1>
          <nav className="text-lg">
            <span className="text-blue-300">Home</span>
            <span className="mx-2">&gt;&gt;</span>
            <span>Services 02</span>
          </nav>
        </div>
      </div>

      {/* Services Cards Section */}
      <div className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={service.id} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
                {/* Service Image */}
                <div className="h-48 bg-gray-200 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                    <div className="text-6xl text-gray-600">
                      {service.icon}
                    </div>
                  </div>
                  {/* Placeholder for actual image */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
                </div>

                {/* Service Icon */}
                <div className="px-6 pt-6">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-lg mb-4">
                    {service.icon}
                  </div>
                </div>

                {/* Service Content */}
                <div className="px-6 pb-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-[12px] mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <Link 
                    href={`/services/${service.id}`}
                    className="inline-flex items-center text-gray-700 hover:text-purple-600 transition-colors duration-200 font-medium"
                  >
                    Read More →
                  </Link>
                </div>

                {/* Background Icon */}
                <div className="absolute bottom-4 right-4 opacity-5">
                  <div className="text-6xl text-purple-600">
                    {service.icon}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default ServicesPage
