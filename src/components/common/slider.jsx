// "use client";
// import React, { useState } from "react";
// import Image from "next/image";
// import NavigationButton from "./NavigationButton";
// import { testimonials } from "@/utils/SiteData";

// const TestimonialSlider = () => {
//   const [currentIndex, setCurrentIndex] = useState(2);
//   const [slideDirection, setSlideDirection] = useState("none");

//   const handlePrevious = () => {
//     setSlideDirection("right");
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
//     );
//   };

//   const handleNext = () => {
//     setSlideDirection("left");
//     setCurrentIndex((prevIndex) =>
//       prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const handleProfileClick = (index) => {
//     setSlideDirection(index > currentIndex ? "left" : "right");
//     setCurrentIndex(index);
//   };

//   const getSlideAnimation = () => {
//     if (slideDirection === "left") {
//       return "animate-slideLeft";
//     } else if (slideDirection === "right") {
//       return "animate-slideRight";
//     }
//     return "";
//   };

//   const getOrderedIndices = () => {
//     const indices = [];
//     const length = testimonials.length;
//     const sideItems = 2;

//     for (let i = -sideItems; i <= sideItems; i++) {
//       let index = currentIndex + i;
//       if (index < 0) index = length + index;
//       if (index >= length) index = index - length;
//       indices.push(index);
//     }

//     return indices;
//   };

//   const ProfileImages = ({ isMobile = false }) => (
//     <div
//       className={`relative h-24 ${
//         isMobile ? "block lg:hidden" : "hidden lg:block"
//       }`}
//     >
//       <div className="absolute left-1/2 -translate-x-1/2 flex items-center">
//         {getOrderedIndices().map((index, arrayPosition) => {
//           const testimonial = testimonials[index];
//           const isActive = index === currentIndex;
//           const position = arrayPosition - 2;

//           return (
//             <div
//               key={testimonial.id}
//               onClick={() => handleProfileClick(index)}
//               className={`transition-all duration-500 ease-in-out flex flex-col items-center cursor-pointer hover:opacity-100 ${
//                 isActive ? "scale-125 z-10" : "scale-100 opacity-70"
//               }`}
//               style={{
//                 transform: `translateX(${
//                   position * (isMobile ? 5 : 30)
//                 }px) scale(${isActive ? 1.25 : 1})`,
//                 marginLeft: isMobile ? "-8px" : "-10px",
//               }}
//             >
//               <div className="relative w-12 h-12">
//                 <Image
//                   src={testimonial.image}
//                   alt={testimonial.name}
//                   fill
//                   className={`rounded-full object-cover transition-transform duration-500 ease-in-out ${
//                     isMobile ? "scale-110" : ""
//                   }`}
//                   sizes="48px"
//                   priority={isActive}
//                 />
//               </div>
//               {isActive && (
//                 <p
//                   className={`text-center mt-2 font-medium transition-opacity duration-300 ease-in-out ${
//                     isMobile ? "text-xs md:text-sm" : "text-sm"
//                   }`}
//                 >
//                   {testimonial.name}
//                 </p>
//               )}
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );

//   return (
//     <div className="w-full lg:max-w-4xl mx-auto px-4 py-8 my-16">
//       <style jsx global>{`
//         @keyframes slideLeft {
//           0% {
//             transform: translateX(100%);
//             opacity: 0;
//           }
//           100% {
//             transform: translateX(0);
//             opacity: 1;
//           }
//         }
//         @keyframes slideRight {
//           0% {
//             transform: translateX(-100%);
//             opacity: 0;
//           }
//           100% {
//             transform: translateX(0);
//             opacity: 1;
//           }
//         }
//         .animate-slideLeft {
//           animation: slideLeft 0.5s ease-in-out forwards;
//         }
//         .animate-slideRight {
//           animation: slideRight 0.5s ease-in-out forwards;
//         }
//       `}</style>

//       <h2 className="text-3xl md:ml-56 font-extrabold">Good experience</h2>

//       <div className="relative">
//         <div className="w-full md:max-w-md flex flex-col  md:ml-32 lg:ml-64">
//           <div
//             className="bg-orange-400 text-white text-center mb-4 p-16 px-12"
//             style={{
//               borderRadius: "70% 70% 70% 70% / 70% 70% 70% 70%",
//             }}
//           >
//             <p
//               key={currentIndex}
//               className={`text-md mx-auto ${getSlideAnimation()}`}
//               onAnimationEnd={() => setSlideDirection("none")}
//             >
//               {testimonials[currentIndex].text}
//             </p>
//           </div>
//           <div className="bg-orange-400 rounded-full mb-4 w-8 h-8 mx-auto"></div>
//           <div className="bg-orange-400 rounded-full mb-4 w-4 h-4 ml-20 sm:ml-32 md:ml-48"></div>
//         </div>

//         {/* Hide navigation buttons on tablet */}
//         <div className="hidden xl:block">
//           <NavigationButton direction="prev" onClick={handlePrevious} />
//           <NavigationButton direction="next" onClick={handleNext} />
//         </div>

//         <ProfileImages isMobile={false} />
//         <ProfileImages isMobile={true} />
//       </div>
//     </div>
//   );
// };

// export default TestimonialSlider;

'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import NavigationButton from './NavigationButton';
import { testimonials } from '@/utils/SiteData';

const TestimonialSlider = () => {
	const [currentIndex, setCurrentIndex] = useState(2);
	const [slideDirection, setSlideDirection] = useState('none');

	const handlePrevious = () => {
		setSlideDirection('right');
		setCurrentIndex(prevIndex =>
			prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
		);
	};

	const handleNext = () => {
		setSlideDirection('left');
		setCurrentIndex(prevIndex =>
			prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
		);
	};

	const handleProfileClick = index => {
		setSlideDirection(index > currentIndex ? 'left' : 'right');
		setCurrentIndex(index);
	};

	const getSlideAnimation = () => {
		if (slideDirection === 'left') {
			return 'animate-slideLeft';
		} else if (slideDirection === 'right') {
			return 'animate-slideRight';
		}
		return '';
	};

	const getOrderedIndices = () => {
		const indices = [];
		const length = testimonials.length;
		const sideItems = 2;

		for (let i = -sideItems; i <= sideItems; i++) {
			let index = currentIndex + i;
			if (index < 0) index = length + index;
			if (index >= length) index = index - length;
			indices.push(index);
		}

		return indices;
	};

  const ProfileImages = ({ isMobile = false }) => (
    <div
      className={`relative h-[8rem] ${
        isMobile ? 'block lg:hidden' : 'hidden lg:block'
      }`}
    >
      <div className="absolute left-1/2 -translate-x-1/2 flex items-center space-x-[35px] ml-[-15px]">
        {getOrderedIndices().map((index) => {
          const testimonial = testimonials[index];
          const isActive = index === currentIndex;
  
          return (
            <div
              key={testimonial.id}
              onClick={() => handleProfileClick(index)}
              className="transition-all duration-500 ease-in-out flex flex-col items-center cursor-pointer"
            >
              <div
                className={`relative ${
                  isActive ? 'w-[105px] h-[105px]' : 'w-[60px] h-[60px]'
                }`}
              >
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  fill
                  className="rounded-full object-cover"
                  sizes="100px"
                  priority={isActive}
                />
              </div>
              {isActive && (
                <p
                  className={`text-center mt-2 font-medium transition-opacity duration-300 ease-in-out ${
                    isMobile ? 'text-xs' : 'text-sm'
                  }`}
                >
                  {testimonial.name}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
  
  

	return (
		<div className='w-full lg:max-w-4xl mx-auto px-4 py-8 my-16'>
			<style jsx global>{`
				@keyframes slideLeft {
					0% {
						transform: translateX(100%);
						opacity: 0;
					}
					100% {
						transform: translateX(0);
						opacity: 1;
					}
				}
				@keyframes slideRight {
					0% {
						transform: translateX(-100%);
						opacity: 0;
					}
					100% {
						transform: translateX(0);
						opacity: 1;
					}
				}
				.animate-slideLeft {
					animation: slideLeft 0.5s ease-in-out forwards;
				}
				.animate-slideRight {
					animation: slideRight 0.5s ease-in-out forwards;
				}
			`}</style>

			<h2 className='font-dm-sans font-bold text-[36px] leading-[46.87px] text-center md:text-left md:ml-[10rem]'>
				Good experience
			</h2>

			<div className='relative'>
				{/* Testimonial Content Container */}
				<div className='w-full md:max-w-md flex flex-col mx-auto md:mx-0 md:ml-32 lg:ml-64 transition-all duration-300'>
					{/* Main Testimonial Bubble */}
					<div
						className='text-white text-center relative mb-1 p-8 sm:p-12 md:p-16 px-6 sm:px-8 md:px-12 mx-auto'
						style={{
							width: '455px', // Setting the width to 455px
							height: '250px', // Setting the height to 250px
							backgroundColor: '#FFB800', // Applying the color code
							borderRadius: '50%', // Makes it an ellipse
						}}
					>
						<p
							key={currentIndex}
							className={`text-sm sm:text-base md:text-md mx-auto ${getSlideAnimation()}`}
							onAnimationEnd={() => setSlideDirection('none')}
						>
							{testimonials[currentIndex].text}
						</p>
					</div>

					{/* Decorative Circles */}
					<div className='flex flex-col items-center relative w-full'>
						{/* First Circle */}
						<div
							className='rounded-full 
              w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 
              mb-1 md:mb-1'
							style={{ backgroundColor: '#FFB800' }}
						></div>

						{/* Second Circle */}
						<div
							className='rounded-full
              w-2 h-2 sm:w-3.5 sm:h-3.5 md:w-3 md:h-3
              self-start
              mx-auto md:ml-[35%] lg:ml-[43%] lg:mt-[3px]
              transition-all duration-300'
							style={{ backgroundColor: '#FFB800' }}
						></div>
					</div>
				</div>

				{/* Navigation Buttons */}
				<div className='hidden xl:block'>
					<NavigationButton
						direction='prev'
						onClick={handlePrevious}
					/>
					<NavigationButton direction='next' onClick={handleNext} />
				</div>

				{/* Profile Images */}
				<ProfileImages isMobile={false} />
				<ProfileImages isMobile={true} />
			</div>
		</div>
	);
};

export default TestimonialSlider;
