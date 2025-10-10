import React from "react";
import { Service1, Service2, Service3 } from "../../public/assets";
import Image from "next/image";
const index = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Title - Centered */}

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16">
          {/* Left Content */}
          <div
            className="flex flex-col justify-center "
            data-aos="fade-down"
          >
            <>
              <h1 className="text-[24px]">Our Commitment to You</h1>
              <p className="text-gray-600 text-base sm:text-lg lg:text-xl leading-relaxed">
                With Monthly 2 Regular Visits, Unlimited Remote Support, and a
                dedicated technical team, Zenex ensures your IT never skips a
                beat. Every solution is built around efficiency, transparency,
                and expert care.{" "}
              </p>
            </>
          </div>

          {/* Right Content - Images Grid */}
          <div className="relative" data-aos="fade-up">
            <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4 lg:gap-6">
              {/* Large Exterior Design Image - Bottom Left (spans 2 rows) */}
              <div className="row-span-2 col-span-1">
                <div className="relative aspect-[3/4] sm:aspect-[4/5] md:aspect-[3/4] lg:aspect-[4/5] rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl group hover:shadow-2xl sm:hover:shadow-3xl transition-all duration-500">
                  <Image
                    src={Service1}
                    alt="Modern exterior design with contemporary architecture"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                </div>
              </div>

              {/* Bedroom Image - Top Right */}
              <div className="col-span-1">
                <div className="relative aspect-square sm:aspect-[4/3] md:aspect-square lg:aspect-[4/3] rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl group hover:shadow-2xl sm:hover:shadow-3xl transition-all duration-500">
                  <Image
                    src={Service2}
                    alt="Elegant bedroom interior design"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                </div>
              </div>

              {/* Living Room Interior Design Image - Bottom Right */}
              <div className="col-span-1">
                <div className="relative aspect-square sm:aspect-[4/3] md:aspect-square lg:aspect-[4/3] rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl group hover:shadow-2xl sm:hover:shadow-3xl transition-all duration-500">
                  <Image
                    src={Service3}
                    alt="Modern living room interior design"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
