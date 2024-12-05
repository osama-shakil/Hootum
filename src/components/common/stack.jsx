"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

import { curatorsTestimonials, slidePosition } from "@/utils/SiteData";
import TestimonialCard from "./cards/TestimonialCard";
import NavigationButton from "./NavigationButton";



const StackedCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [stackedSlides, setStackedSlides] = useState([]);

  const getSlidePosition = useCallback((relativeIndex, totalSlides) => {
    if (relativeIndex === 0) return slidePosition.active;
    if (relativeIndex === 1) return slidePosition.rightFirst;
    if (relativeIndex === 2) return slidePosition.rightSecond;
    if (relativeIndex === totalSlides - 1) return slidePosition.leftFirst;
    if (relativeIndex === totalSlides - 2) return slidePosition.leftSecond;
    return slidePosition.hidden;
  }, []);

  const calculateStackedSlides = useCallback(() => {
    const totalSlides = curatorsTestimonials.length;
    return curatorsTestimonials.map((slide, index) => {
      const relativeIndex = (index - currentIndex + totalSlides) % totalSlides;
      const position = getSlidePosition(relativeIndex, totalSlides);
      return { ...slide, ...position, index };
    });
  }, [currentIndex, getSlidePosition]);

  useEffect(() => {
    setStackedSlides(calculateStackedSlides());
  }, [currentIndex, calculateStackedSlides]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % curatorsTestimonials.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex(
      (prev) => (prev - 1 + curatorsTestimonials.length) % curatorsTestimonials.length
    );
  }, []);

  return (
    <div className="relative w-full  md:max-w-4xl mx-auto min-h-[600px] px-20 mt-[150px] my-16">
      {/* Background Image */}
      <div className="absolute top-0 right-[100px] -z-10  ">
        <div className="relative w-[70%] h-[70%]">
          <Image
            src="/images/user/605.jpg"
            alt="Background pattern"
            fill
            className="rounded-full object-cover"
            priority
          />
        </div>
      </div>

      {/* Navigation container */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        <NavigationButton direction="prev" onClick={prevSlide} />
        <NavigationButton direction="next" onClick={nextSlide} />
      </div>

      {/* Cards container */}
      <div className="relative">
        {stackedSlides.map((slide) => (
          <TestimonialCard
            key={slide.index}
            slide={slide}
            onClick={() => setCurrentIndex(slide.index)}
          />
        ))}
      </div>
    </div>
  );
};

export default StackedCarousel;
