import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { About2old, AboutImage, AboutThumb1_1, TestHero } from '../../public/assets'
import { Code, Megaphone, Camera, Shield } from 'lucide-react'

const features = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern technologies',
    href: '/services/webdevelopment'
  },
  {
    icon: Megaphone,
    title: 'Digital Marketing',
    description: 'Strategic online marketing solutions to grow your business',
    href: '/services/digital-marketing'
  },
  {
    icon: Camera,
    title: 'CCTV',
    description: 'Professional surveillance systems for enhanced security',
    href: '/services/cctv'
  },
  {
    icon: Shield,
    title: 'Cyber Security',
    description: 'Comprehensive protection against digital threats and vulnerabilities',
    href: '/services/cyber-security'
  }
]

const index = () => {
  return (
<div className="w-full">
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
    {/* Left: Image + Right: Features */}
        <div className="w-full flex flex-col md:flex-row gap-6" data-aos="fade-up">
      {/* Image */}
          <div className="w-full  md:w-[40%] flex justify-center md:justify-start" data-aos="zoom-in" data-aos-delay="100">
        <Image
          src={AboutThumb1_1}
          alt="About zenex"
          className="w-full max-w-xs md:w-96 rounded-xl object-cover"
          priority
        />
      </div>

      {/* Feature list */}
          <div className="w-full md:w-[60%]" data-aos="fade-down" data-aos-delay="150">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map(({ icon: Icon, title, description, href }, idx) => (
          <Link
          key={idx}
          href={href}
          className="relative flex items-start gap-5 rounded-xl p-[1px] transition-shadow hover:shadow-md cursor-pointer"
          data-aos="fade-up"
          data-aos-delay={(idx % 2 === 0 ? 0 : 100) + Math.floor(idx / 2) * 100}
        >
          <div className="flex items-start gap-5 w-full h-full rounded-xl backdrop-blur-md p-5 shadow-sm hover:shadow-lg transition-shadow">
            <div className="shrink-0 rounded-full bg-green-100 text-green-700 p-3">
              <Icon className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">{title}</h3>
              <p className="text-[12px] text-gray-600">{description}</p>
            </div>
          </div>
        </Link>
        
          ))}
        </div>
      </div>
    </div>

    {/* Bottom paragraph */}
        <div className="w-full mt-4 md:mt-8" data-aos="fade-up" data-aos-delay="150">
            <div className=' px-2 md:px-20 '>
          <p className="relative w-full py-10 rounded-xl  backdrop-blur-md p-6 text-center text-[30px] leading-relaxed text-gray-700 shadow-sm">
  We Provide Exclusive Service For Your Business
</p>

      </div>
    </div>
  </div>
</div>

  )
}

export default index
