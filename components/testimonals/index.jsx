'use client'
import React, { useState, useEffect } from 'react'

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [direction, setDirection] = useState('next')
  const [isAnimating, setIsAnimating] = useState(false)
  const [selectedTestimonial, setSelectedTestimonial] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const testimonials = [
    {
      id: 1,
      text: "Zenex transformed our IT infrastructure with their exceptional server solutions. Their team designed and deployed a high-availability environment that has dramatically improved our system reliability. The expertise and professionalism they brought to the project exceeded our expectations.",
      name: "SARAH MITCHELL",
      service: "Server Solutions"
    },
    {
      id: 2,
      text: "The CCTV surveillance system installed by Zenex has given us complete peace of mind. The installation was seamless, and the monitoring capabilities are outstanding. Their team was professional, on time, and explained everything clearly. Highly recommend their security solutions!",
      name: "JAMES ANDERSON",
      service: "CCTV & Surveillance"
    },
    {
      id: 3,
      text: "Our company's digital transformation started with Zenex's web development services. They created a modern, high-performance website that perfectly represents our brand. The team was responsive, creative, and delivered exactly what we needed on time.",
      name: "MARIA RODRIGUEZ",
      service: "Web Development"
    },
    {
      id: 4,
      text: "Zenex's ERP implementation has streamlined our entire business operations. From finance to inventory management, everything is now integrated and efficient. Their customization and ongoing support have been invaluable to our growth.",
      name: "DAVID CHEN",
      service: "ERP Solutions"
    },
    {
      id: 5,
      text: "The access control and time attendance system from Zenex has revolutionized how we manage our facility security. The biometric integration and payroll sync work flawlessly. Professional installation and excellent after-sales support!",
      name: "FATIMA AHMED",
      service: "Access Control & Time Attendance"
    },
    {
      id: 6,
      text: "Zenex's cyber security audit identified critical vulnerabilities we weren't aware of. Their team implemented robust security measures and continuous monitoring that gives us confidence in our data protection. Outstanding service and expertise!",
      name: "ROBERT THOMPSON",
      service: "Cyber Security"
    }
  ]

  const nextSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setDirection('next')
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const prevSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setDirection('prev')
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const goToSlide = (index) => {
    if (isAnimating || index === currentSlide) return
    setIsAnimating(true)
    setDirection(index > currentSlide ? 'next' : 'prev')
    setCurrentSlide(index)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const openModal = (testimonial) => {
    setSelectedTestimonial(testimonial)
    setIsModalOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedTestimonial(null)
    document.body.style.overflow = 'unset'
  }

  return (
    <div className="" >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <p className="text-sm sm:text-base lg:text-[18px] font-normal text-gray-500 uppercase mb-3 sm:mb-4">
            TESTIMONIALS
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-[400] text-gray-800 px-4">
            Empowering Thousands of Users and Enterprises
          </h2>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            disabled={isAnimating}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-gray-200 hover:bg-gray-800 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed group"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            disabled={isAnimating}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-gray-200 hover:bg-gray-800 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed group"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Testimonial Cards */}
          <div className="relative overflow-hidden px-12 sm:px-0">
            <div 
              className="flex gap-4 sm:gap-6 lg:gap-8 transition-transform duration-500 ease-in-out"
              style={{
                transform: isMobile
                  ? `translateX(calc(-${currentSlide * 100}% - ${currentSlide * 1}rem))`
                  : `translateX(calc(-${currentSlide * 24}rem - ${currentSlide * 1.5}rem))`,
              }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="flex-shrink-0 w-full sm:w-96 bg-white/40 px-[12px] py-[15px] rounded-2xl shadow-lg transition-all duration-500"
                  style={{ maxHeight:"250px"}}
                >
                  {/* Quote Mark */}
                  <div className={`text-4xl sm:text-2xl font-bold text-gray-800 leading-none  transition-all duration-700 ${
                    isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
                  }`}>
                    "
                  </div>

                    {/* Customer Name */}
                    <div className={`transition-all duration-700 delay-200 ${
                    isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
                  }`}>
                    <p className="font-bold text-gray-800 text-[14px]">
                      {testimonial.name}
                    </p>
                  </div>
                  
                  {/* Service */}
                  <p className={`text-gray-600 mb-2 text-xs sm:text-sm transition-all duration-700 delay-300 ${
                    isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
                  }`}>
                    {testimonial.service}
                  </p>
                  
                  {/* Testimonial Text */}
                  <div className={` transition-all duration-700 delay-100 ${
                    isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
                  }`}>
                    <p className="text-gray-800 text-sm  leading-relaxed line-clamp-4">
                      {testimonial.text}
                    </p>
                    {testimonial.text.length > 180 && (
                      <button
                        onClick={() => openModal(testimonial)}
                        className="text-blue-600 hover:text-blue-800 text-sm font-medium mt-2 inline-flex items-center gap-1 transition-colors duration-200"
                      >
                        Show more
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    )}
                  </div>
                  
                
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-6 sm:mt-8 space-x-1.5 sm:space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                disabled={isAnimating}
                className={`rounded-full transition-all duration-300 hover:scale-125 active:scale-90 disabled:cursor-not-allowed ${
                  index === currentSlide 
                    ? 'bg-gray-800 w-6 sm:w-8 h-2.5 sm:h-3' 
                    : 'bg-gray-300 w-2.5 sm:w-3 h-2.5 sm:h-3 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedTestimonial && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/30 bg-opacity-50 backdrop-blur-sm animate-fadeIn"
          onClick={closeModal}
        >
          <div 
            className="bg-white rounded-2xl shadow-2xl max-w-[56rem] w-full max-h-[90vh] overflow-y-auto transform transition-all duration-300 animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between rounded-t-2xl">
              <h3 className="text-xl font-bold text-gray-800">Customer Testimonial</h3>
              <button
                onClick={closeModal}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors duration-200"
              >
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8">
              {/* Quote Mark */}
              <div className="text-6xl font-bold text-gray-800 leading-none mb-4">
                "
              </div>

              {/* Full Testimonial Text */}
              <p className="text-gray-800 text-base sm:text-lg leading-relaxed mb-6">
                {selectedTestimonial.text}
              </p>

              {/* Customer Info */}
              <div className="border-t border-gray-200 pt-4">
                <p className="font-bold text-gray-800 text-lg mb-1">
                  {selectedTestimonial.name}
                </p>
                <p className="text-blue-600 font-medium text-sm">
                  {selectedTestimonial.service}
                </p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="sticky bottom-0 bg-gray-50 px-6 py-4 rounded-b-2xl border-t border-gray-200">
              <button
                onClick={closeModal}
                className="w-full sm:w-auto px-6 py-2.5 bg-gray-800 hover:bg-gray-900 text-white font-medium rounded-lg transition-colors duration-200"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }

        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }
      `}</style>
    </div>
  )
}

export default Testimonials
