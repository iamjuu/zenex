import React from 'react'
import Image from 'next/image'
import { About2old, AboutImage, AboutThumb1_1, TestHero } from '../../public/assets'
import { Zap, ShieldCheck, Clock3, MapPin, Server } from 'lucide-react'
import { icon } from '@fortawesome/fontawesome-svg-core'

const features = [
  {
    icon: Zap,
    title: 'Software Services',
    description: 'Setup, optimization & proactive monitoring for peak performance'
  },
  {
    icon: ShieldCheck,
    title: 'Server Solutions',
    description: 'We provide new and emerging technologies'
  },
  {
    icon: Clock3,
    title: 'Cloud & Backup Solutions',
    description: 'Secure, scalable storage with guaranteed data safety'
  },
  {
    icon: MapPin,
    title: 'Data Recovery',
    description: 'Fast, reliable restoration when it matters most'
  },

  {
    icon:Server,
    titile:'Structured Cabling',
    description:'Organized, future-ready networks for smooth connectivity',
  },
  {
    icon:Server,
    titile:'PABX Solutions',
    description:'Advanced communication systems for seamless collaboration',
  },
  {
    icon:Server,
    titile:'Access Control & Time Attendance',
    description:'Smart security for smarter workplaces',
  },
  {
    icon:Server,
    titile:'ERP Solutions',
    description:'Streamlined business management from one dashboard',
  },
  {
    icon:Server,
    titile:'PC & Workstation Support',
    description:' End-user support that keeps productivity high',
  },
  {
    icon:Server,
    titile:'CCTV Solutions',
    description:'Surveillance you can depend on',
  },



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
          alt="About Tabdeel"
          className="w-full max-w-xs md:w-96 rounded-xl object-cover"
          priority
        />
      </div>

      {/* Feature list */}
          <div className="w-full md:w-[60%]" data-aos="fade-down" data-aos-delay="150">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map(({ icon: Icon, title, description }, idx) => (
          <div
          key={idx}
          className="relative flex items-start gap-5 rounded-xl p-[1px] bg-gradient-to-r from-[#3B82F6] to-[#A855F7] transition-shadow hover:shadow-md"
          data-aos="fade-up"
          data-aos-delay={(idx % 2 === 0 ? 0 : 100) + Math.floor(idx / 2) * 100}
        >
          <div className="flex items-start gap-5 w-full h-full rounded-xl bg-white p-5 shadow-sm">
            <div className="shrink-0 rounded-full bg-green-100 text-green-700 p-3">
              <Icon className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">{title}</h3>
              <p className="text-sm text-gray-600">{description}</p>
            </div>
          </div>
        </div>
        
          ))}
        </div>
      </div>
    </div>

    {/* Bottom paragraph */}
        <div className="w-full mt-4 md:mt-8" data-aos="fade-up" data-aos-delay="150">
            <div className=' px-2 md:px-20 '>
         <p className="relative w-full py-10 rounded-xl bg-white p-6 text-center text-[30px] leading-relaxed text-gray-700 shadow-sm before:absolute before:inset-0 before:rounded-xl before:p-[2px] before:bg-gradient-to-r before:from-[#3B82F6] before:to-[#A855F7] before:-z-10 before:content-['']">
  We Provide Exclusive Service For Your Business
</p>

      </div>
    </div>
  </div>
</div>

  )
}

export default index
