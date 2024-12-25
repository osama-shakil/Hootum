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
      <div className="relative bg-white rounded-3xl shadow-lg w-[85%] md:w-[620px] md:h-[385px] pt-16 mx-auto border-[1.5px] border-gray-300 mt-16 pb-4">
  <div
    className="absolute left-1/2 md:-top-20 -top-16 transition-all duration-300 ease-out"
    style={{
      zIndex: slide.zIndex + 1,
      opacity: slide.imageOpacity,
      transform: `translate(-50%, 0) scale(${slide.imageScale})`,
      visibility: slide.imageVisibility,
    }}
  >
    <Avatar className="w-[132px] h-[132px] border-4 border-white">
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
      <h3 className="text-[20px] md:text-[24px] font-semibold mt-4 md:mt-0 text-gray-900">
        {slide.title}
      </h3>
      <p className="text-[16px] md:text-[18px] text-gray-500">{slide.subtitle}</p>
      <hr className="my-4" />
      <div className="flex-1 overflow-auto px-6">
        <p className="text-[14px] md:text-[16px] text-gray-600 leading-relaxed text-start scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent pt-2">
          {slide.description}
        </p>
      </div>
    </div>
  </div>
</div>

    </div>
  );

export default TestimonialCard
