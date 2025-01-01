// "use client";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
// } from "@/components/ui/carousel";
// import { heroSlides } from "@/utils/SiteData";
// import { useEffect, useState } from "react";
// import CarouselSlide from "./herosection/CarouselSlide";

// const HeroSection = () => {
//   const [activeSlide, setActiveSlide] = useState(0);
//   const [api, setApi] = useState();



//   // Auto-slide effect
//   useEffect(() => {
//     if (!api) return;

//     const interval = setInterval(() => {
//       api.scrollNext();
//     }, 10000);

//     return () => clearInterval(interval);
//   }, [api]);

//   // Handle slide change
//   const handleSlideChange = (index) => {
//     setActiveSlide(index);
//     api?.scrollTo(index);
//   };

//   return (
//     <div className="px-4 md:px-0 lg:mx-0 lg:pl-14">
//       <Carousel
//         className="w-full h-full"
//         setApi={setApi}
//         onSelect={(index) => setActiveSlide(index)}
//         opts={{
//           // align: "start",
//           // duration: 100,
//           loop:true,
//         }}
//       >
//         <CarouselContent className="w-full h-full">
//           {heroSlides.map((slide, index) => (
//             <CarouselItem key={slide.id}>
//               <CarouselSlide
//                 slide={slide}
//                 index={index}
//                 isActive={index === activeSlide}
//                 totalSlides={heroSlides.length}
//                 onSlideChange={handleSlideChange}
//               />
//             </CarouselItem>
//           ))}
//         </CarouselContent>
//       </Carousel>
//     </div>
//   );
// };

// export default HeroSection;
// 

//   //  //    swiper module    //  //  //


// "use client";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, Navigation, EffectFade } from 'swiper/modules';
// import { heroSlides } from "@/utils/SiteData";
// import CarouselSlide from "./herosection/CarouselSlide";
// import 'swiper/css';
// import 'swiper/css/effect-fade';

// const HeroSection = () => {
//   return (
//     <div className="px-4 md:px-0 lg:mx-0 lg:pl-14">
//       <Swiper
//         modules={[Autoplay, Navigation, EffectFade]}
//         effect="fade"
//         fadeEffect={{
//           crossFade: true
//         }}
//         autoplay={{
//           delay: 10000,
//           disableOnInteraction: false,
//         }}
//         speed={2000}
//         loop={true}
//         className="w-full h-full"
//       >
//         {heroSlides.map((slide, index) => (
//           <SwiperSlide key={slide.id}>
//             {({ isActive }) => (
//               <CarouselSlide
//                 slide={slide}
//                 index={index}
//                 isActive={isActive}
//                 totalSlides={heroSlides.length}
//                 onSlideChange={(index) => {
//                   const swiper = document.querySelector('.swiper')?.swiper;
//                   swiper?.slideTo(index);
//                 }}
//               />
//             )}
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default HeroSection;


"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectFade } from "swiper/modules";
import { heroSlides } from "@/utils/SiteData";
import CarouselSlide from "./herosection/CarouselSlide";
import "swiper/css";
import "swiper/css/effect-fade";

const HeroSection = () => {
  const [activeSlide, setActiveSlide] = useState(null);

  const handleSlideChange = (swiper, index) => {
    setActiveSlide(index);
  };

  return (
    <div className="px-4 md:px-0 lg:mx-0 lg:pl-14">
      <Swiper
        modules={[Autoplay, Navigation, EffectFade]}
        effect="fade"
        fadeEffect={{
          crossFade: true,
        }}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        speed={2000}
        loop={true}
        className="w-full h-full"
        onSlideChange={(swiper) => handleSlideChange(swiper, swiper.realIndex)}
      >
        {heroSlides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            {({ isActive }) => (
              <div
                className={`${
                  isActive ? "active-slide fly-in-right" : "fly-out-right"
                }`}
              >
                <CarouselSlide
                  slide={slide}
                  index={index}
                  isActive={isActive}
                  totalSlides={heroSlides.length}
                  onSlideChange={(index) => {
                    const swiper = document.querySelector(".swiper")?.swiper;
                    swiper?.slideTo(index);
                  }}
                />
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSection;
