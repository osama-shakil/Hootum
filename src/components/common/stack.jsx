

'use client'
import React, { useState, useEffect } from 'react';

const StackedCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [stackedSlides, setStackedSlides] = useState([]);

  const slides = [
    {
      image: "/Curators testimonial/Ellipse 13.png",
      title: "Azad hossain",
      subtitle: "Artist",
      description: "The NFT art marketplace is not just a platform for buying and selling art; it is a thriving community. Artists, collectors, and enthusiasts come together."
    },
    {
      image: "/Curators testimonial/Ellipse 13.png",
      title: "John Smith",
      subtitle: "Designer",
      description: "Creating unique digital experiences through innovative design solutions."
    },
    {
      image: "/Curators testimonial/Ellipse 13.png",
      title: "Emma Wilson",
      subtitle: "Developer",
      description: "Full-stack developer passionate about building scalable applications."
    },
    {
      image: "/Curators testimonial/Ellipse 13.png",
      title: "Michael Brown",
      subtitle: "Product Manager",
      description: "Leading product strategies and driving innovation in digital products."
    },
    {
      image: "/Curators testimonial/Ellipse 13.png",
      title: "Sarah Chen",
      subtitle: "UX Researcher",
      description: "Creating user-centered designs through research and testing."
    },
    {
      image: "/Curators testimonial/Ellipse 13.png",
      title: "James Wilson",
      subtitle: "Marketing Lead",
      description: "Developing strategic marketing campaigns for digital products."
    }
  ];

  useEffect(() => {
    const getStackedSlides = () => {
      const totalSlides = slides.length;
      return slides.map((slide, index) => {
        const relativeIndex = (index - currentIndex + totalSlides) % totalSlides;
        let position = {};

        if (relativeIndex === 0) {
          // Active slide
          position = {
            zIndex: 40,
            opacity: 1,
            scale: 1,
            translateX: '0%',
            translateY: '-3%',
            imageTranslateX: '0%',
            imageOpacity: 1,
            height:'2px'
          };
        } else if (relativeIndex === 1) {
          // First right stack
          position = {
            zIndex: 25,
            opacity: 0.8,
            scale: 0.95,
            translateX: '5%',
            translateY: '0%',
            imageTranslateX: '15%',
            imageOpacity: 0.5,
            height:'0'
          };
        } else if (relativeIndex === 2) {
          // Second right stack
          position = {
            zIndex: 20,
            opacity: 0.6,
            scale: 0.9,
            translateX: '10%',
            translateY: '3%',
            imageTranslateX: '30%',
            imageOpacity: 0.3,
            height:'0'
          };
        } else if (relativeIndex === totalSlides - 1) {
          // First left stack
          position = {
            zIndex: 25,
            opacity: 0.8,
            scale: 0.95,
            translateX: '-5%',
            translateY: '0%',
            imageTranslateX: '-15%',
            imageOpacity: 0.5,
            height:'0'
          };
        } else if (relativeIndex === totalSlides - 2) {
          // Second left stack
          position = {
            zIndex: 20,
            opacity: 0.6,
            scale: 0.9,
            translateX: '-10%',
            translateY: '3%',
            imageTranslateX: '-30%',
            imageOpacity: 0.3,
            height:'0'
          };
        } else {
          // Hidden slides
          position = {
            zIndex: 10,
            opacity: 0,
            scale: 0.85,
            translateX: '0%',
            translateY: '0%',
            imageTranslateX: '0%',
            imageOpacity: 0,
            height:'0'
          };
        }

        return {
          ...slide,
          ...position,
          index
        };
      });
    };

    setStackedSlides(getStackedSlides());
  }, [currentIndex]);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative w-full max-w-3xl mx-auto min-h-[400px] px-8 mt-[150px] ">
      {/* Yellow background shape */}
      <div className="relative">
      <div className="absolute top-0 right-[100px] bg-[url('/images/user/605.jpg')]  bg-cover  w-[670px]   h-[670px] bg-yellow-400 rounded-full -z-10 transform translate-x-1/4 -translate-y-1/4" />
      </div>

      {/* Navigation buttons */}
      <div className="absolute left-2 right-2 flex justify-between top-1/2 -translate-y-1/2 z-50 ">
        <button
          onClick={prevSlide}
          className="bg-white rounded-full absolute left-[-90px] w-8 h-8 flex items-center justify-center shadow-lg hover:bg-gray-50 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="bg-white rounded-full w-8 h-8 absolute right-[-90px] flex items-center justify-center shadow-lg hover:bg-gray-50 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Profile Images Container - Separate from cards for proper stacking */}
      <div className="relative pt-16 pb-8">
        {stackedSlides.map((slide) => (
          <div
            key={`image-${slide.index}`}
            className="absolute left-1/2 -top-4 transform -translate-x-1/2 transition-all duration-200 ease-out"
            style={{
              transform: `translate(calc(-50% ), 20px)`,
              zIndex: slide.zIndex + 1,
              opacity: slide.imageOpacity,
            }}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-26 h-26 rounded-full object-cover ring-2 ring-white"
            />
          </div>
        ))}

        {/* Cards */}
        {stackedSlides.map((slide) => (
          <div
            key={slide.index}
            className="absolute w-full transition-all duration-500 ease-out cursor-pointer overflow-hidden"
            style={{
              transform: `translate(${slide.translateX}, ${slide.translateY}) scale(${slide.scale})`,
              zIndex: slide.zIndex,
              opacity: slide.opacity,
            }}
            onClick={() => setCurrentIndex(slide.index)}
          >
            <div className="bg-white rounded-3xl shadow-lg h-[300px] pt-12 mx-auto border-[1.5px] border-gray-300">
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="space-y-1">
                  <div className='relative mt-3'>

                  <h3 className="text-lg font-semibold text-gray-900">{slide.title}</h3>
                  <p className="text-sm text-gray-500 h-[30px] overflow-hidden   ">{slide.subtitle}</p>
                  <div className={`absolute   border-gray-300 left-[-300px]  w-[2000px]`} style={{ borderWidth: slide.height }}></div>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed max-w-xl text-start py-4   h-[100px] overflow-hidden">
                    {slide.description} {slide.height}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StackedCarousel;