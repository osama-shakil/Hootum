

'use client'
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Chen',
    text: '"As an artist, Shizuka has given me a platform to showcase my work without the traditional barriers of entry. The supportive community and promotional tools have helped me build my brand and gain visibility."',
    image: "/testimonial/profile.png",
  },
  {
    id: 2,
    name: 'David Tom',
    text: '"The platform has been instrumental in helping me reach art collectors globally. The tools and community support make it easy to manage my portfolio and conect with buyers."',
    image: "/testimonial/profile.png",
  },
  {
    id: 3,
    name: 'Michael Ross',
    text: '"I appreciate how the platform makes art accessible to everyone. It\'s transformed how I share and sell my artwork, reaching audiences I never thought possible."',
    image: "/testimonial/profile.png",
  },
  {
    id: 4,
    name: 'James Wilson',
    text: '"The community aspect of the platform is amazing. I\'ve connected with fellow artists and collectors, leading to collaborative opportunities and sales."',
    image: "/testimonial/profile.png",
  },
  {
    id: 5,
    name: 'Emma Davis',
    text: '"This platform has revolutionized how I present my artwork. The professional tools and global reach have helped me establish myself as a serious artist."',
    image: "/testimonial/profile.png",
  }
];


const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(2);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      // prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Helper function to get array indices centered around current index
  const getOrderedIndices = () => {
    const indices = [];
    const length = testimonials.length;

    // Calculate how many items we want on each side
    const itemsToShow = 5; // Total items to show
    const sideItems = Math.floor((itemsToShow - 1) / 2);

    for (let i = -sideItems; i <= sideItems; i++) {
      let index = currentIndex + i;
      // Handle wrapping around the array
      if (index < 0) index = length + index;
      if (index >= length) index = index - length;
      indices.push(index);
    }

    return indices;
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-3xl text-center mb-6 font-extrabold text-black">Good experience</h2>

      <div className="relative">
        {/* Main testimonial */}
        <div className='flex justify-center'>

          <div className="bg-orange-400 rounded-[100%]   text-white text-center mb-12 relative w-[65%]  lg:!ml-auto  p-[76px] px-[45px] min-h-[150px]">
            <p className="text-lg h-[120px]   overflow-hidden">{testimonials[currentIndex].text}</p>
          </div>
        </div>

        {/* Navigation buttons */}
        <button
          onClick={handlePrevious}
          className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center border shadow-sm hover:bg-gray-50"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-0 lg:right-[-30px] top-1/2 -translate-y-1/2 w-10 h-10 bg-black rounded-full flex items-center justify-center text-white hover:bg-gray-900"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Profile images */}
        <div className="relative h-24 hidden lg:block">
          <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-4">
            {getOrderedIndices().map((index, arrayPosition) => {
              const testimonial = testimonials[index];
              const isActive = index === currentIndex;
              const position = arrayPosition - Math.floor(getOrderedIndices().length / 2);

              return (
                <>
                  <div
                    key={testimonial.id}
                    className={` transition-all  flex duration-300  flex-col items-center ${isActive ? 'scale-125 z-10' : 'scale-100 opacity-70'
                      }`}
                    style={{
                      transform: ` translateX(${position * 60}px) scale(${isActive ? 1.25 : 1})`,
                      transition: 'all 0.3s ease-in-out'
                    }}
                  >
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    {isActive && (
                      <p className="text-center mt-2 text-sm font-medium">
                        {testimonial.name}
                      </p>
                    )}
                  </div>


                </>
              );
            })}
          </div>
        </div>
        <div className="relative h-24 block lg:hidden">
          <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-4">
            {getOrderedIndices().map((index, arrayPosition) => {
              const testimonial = testimonials[index];
              const isActive = index === currentIndex;
              const position = arrayPosition - Math.floor(getOrderedIndices().length / 2);

              return (
                <div
                  key={testimonial.id}
                  className={`transition-all duration-300 flex lg:!hidden flex-col items-center ${isActive ? 'scale-125 z-10' : 'scale-100 opacity-70'
                    }`}
                  style={{
                    transform: ` translateX(${position * 10}px) scale(${isActive ? 1.25 : 1})`,
                    transition: 'all 0.3s ease-in-out'
                  }}
                >
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="scale-110  rounded-[100%] object-cover"
                  />
                  {isActive && (
                    <p className="text-center text-[12px] lg:text-[18px] mt-2 text-sm md:font-medium">
                      {testimonial.name}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;