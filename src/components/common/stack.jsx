"use client";

import Image from "next/image";
import { useState, useRef, useCallback, useEffect } from "react";
import { curatorsTestimonials, slidePosition } from "@/utils/SiteData";
import TestimonialCard from "./cards/TestimonialCard";
import NavigationButton from "./NavigationButton";

const StackedCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [stackedSlides, setStackedSlides] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragDelta, setDragDelta] = useState(0);

  const sliderRef = useRef(null);

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
      (prev) =>
        (prev - 1 + curatorsTestimonials.length) % curatorsTestimonials.length
    );
  }, []);

  const handleDragStart = (e) => {
    setIsDragging(true);
    setDragStartX(e.type === "touchstart" ? e.touches[0].clientX : e.clientX);
  };

  const handleDragMove = (e) => {
    if (!isDragging) return;

    const currentX = e.type === "touchmove" ? e.touches[0].clientX : e.clientX;
    setDragDelta(currentX - dragStartX);
  };

  const handleDragEnd = () => {
    setIsDragging(false);

    if (dragDelta > 50) {
      prevSlide(); // Swipe right -> previous slide
    } else if (dragDelta < -50) {
      nextSlide(); // Swipe left -> next slide
    }

    setDragDelta(0);
  };

  return (
    <div
      className="relative w-[95%] md:w-full md:max-w-4xl mx-auto min-h-[560px] px-2 md:px-20 md:mt-[150px] my-16"
      onMouseDown={handleDragStart}
      onMouseMove={handleDragMove}
      onMouseUp={handleDragEnd}
      onMouseLeave={handleDragEnd}
      onTouchStart={handleDragStart}
      onTouchMove={handleDragMove}
      onTouchEnd={handleDragEnd}
    >
      {/* Background Image */}
      <Image
        className="hidden lg:block absolute lg:top-[-10%] lg:right-[36px]"
        src="/backgrounds-images/Vector.svg"
        alt="Background pattern"
        width={600}
        height={650}
        priority
      />

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
