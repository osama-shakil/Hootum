"use client";
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import CarouselSlide from "./herosection/CarouselSlide";
import { useCarousel } from "@/components/ui/carousel";
import { heroSlides } from "@/utils/SiteData";

const HeroSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [api, setApi] = useState();



  // Auto-slide effect
  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 8000);

    return () => clearInterval(interval);
  }, [api]);

  // Handle slide change
  const handleSlideChange = (index) => {
    setActiveSlide(index);
    api?.scrollTo(index);
  };

  return (
    <div className="pl-28">
      <Carousel
        className="w-full h-full"
        setApi={setApi}
        onSelect={(index) => setActiveSlide(index)}
        opts={{
          align: "start",
          duration: 100,
        }}
      >
        <CarouselContent className="w-full h-full">
          {heroSlides.map((slide, index) => (
            <CarouselItem key={slide.id}>
              <CarouselSlide
                slide={slide}
                index={index}
                isActive={index === activeSlide}
                totalSlides={heroSlides.length}
                onSlideChange={handleSlideChange}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default HeroSection;
// "use client";
// import { useEffect, useState } from "react";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
// } from "@/components/ui/carousel";
// import CarouselSlide from "./herosection/CarouselSlide";
// import Autoplay from "embla-carousel-autoplay";
// import { heroSlides } from "@/utils/SiteData";

// const HeroSection = () => {
//   const [activeSlide, setActiveSlide] = useState(0);
//   const [api, setApi] = useState();

//   // Create autoplay plugin instance
//   const plugin = Autoplay({
//     delay: 8000,
//     stopOnInteraction: false,
//     stopOnMouseEnter: true,
//     rootNode: (emblaRoot) => emblaRoot.parentElement,
//   });

//   // Handle slide change
//   const handleSlideChange = (index) => {
//     if (api) {
//       api.scrollTo(index, true);
//       setActiveSlide(index);
//     }
//   };

//   // Update active slide when carousel moves
//   useEffect(() => {
//     if (!api) return;

//     api.on("select", () => {
//       setActiveSlide(api.selectedScrollSnap());
//     });

//     // Cleanup
//     return () => {
//       api.off("select");
//     };
//   }, [api]);

//   return (
//     <div className="pl-28">
//       <Carousel
//         className="w-full h-full"
//         setApi={setApi}
//         plugins={[plugin]}
//         opts={{
//           // align: "start",
//           loop: true,
//           skipSnaps: false,
//           duration: 5,
//         }}
//       >
//         <CarouselContent className="w-full h-full transition-transform duration-1000 ease-in-out">
//           {heroSlides.map((slide, index) => (
//             <CarouselItem
//               key={slide.id}
//               className="transition-opacity duration-1000 ease-in-out"
//             >
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