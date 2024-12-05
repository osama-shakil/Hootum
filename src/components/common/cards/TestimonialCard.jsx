import React from 'react'
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";


const TestimonialCard = ({ slide, onClick }) => (
    <div
      className="absolute w-full transition-all duration-500 ease-out cursor-pointer overflow-visible thin-scrollbar"
      style={{
        transform: `translate(${slide.translateX}, ${slide.translateY}) scale(${slide.scale})`,
        zIndex: slide.zIndex,
        opacity: slide.opacity,
      }}
      onClick={onClick}
    >
      <div className="relative bg-white rounded-3xl shadow-lg h-[400px] pt-16 mx-auto border-[1.5px] border-gray-300 mt-16">
        <div
          className="absolute left-1/2 md:-top-20 -top-10 -translate-x-1/2 transition-all duration-300 ease-out"
          style={{
            zIndex: slide.zIndex + 1,
            opacity: slide.imageOpacity,
            transform: `translate(-50%, 0) scale(${slide.imageScale})`,
            visibility: slide.imageVisibility,
          }}
        >
          <Avatar className="md:w-32 w-24 md:h-32 h-24 border-4 border-white">
            <AvatarImage
              src={slide.image}
              alt={slide.title}
              className="object-cover"
              priority={slide.imageOpacity === 1}
            />
            <AvatarFallback>
              {slide.title
                .split(" ")
                .map((word) => word[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
        </div>
  
        <div className="flex flex-col items-center text-center space-y-3 w-full h-full">
          <div className="space-y-1 w-full h-full flex flex-col">
            <h3 className="text-lg font-semibold text-gray-900">{slide.title}</h3>
            <p className="text-sm text-gray-500">{slide.subtitle}</p>
            <hr className="my-4" />
            <div className="flex-1 overflow-auto px-6">
              <p className="text-md text-gray-600 leading-relaxed text-start scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
                {slide.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

export default TestimonialCard
