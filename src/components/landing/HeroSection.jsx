"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { heroSlides } from "@/utils/SiteData";
import { useEffect, useState } from "react";
import CarouselSlide from "./herosection/CarouselSlide";

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
    <div className="px-4 lg:mx-0 lg:pl-28">
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