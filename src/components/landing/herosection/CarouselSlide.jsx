// import CustomButton from "@/components/common/CustomButton";
// import Image from "next/image";


// const CarouselSlide = ({    
//   slide, 
//   index, 
//   isActive, 
//   totalSlides, 
//   onSlideChange 
// }) => {
//   const StatisticsDisplay = ({ stats }) => {
//     return (
//       <div className="flex gap-12">
//         {stats.map((stat, index) => (
//           <div key={index}>
//             <div className="text-3xl font-bold">{stat.value}</div>
//             <div className="text-muted-foreground">{stat.label}</div>
//           </div>
//         ))}
//       </div>
//     );
//   };
  
//   return (
//     <div className="grid grid-cols-12 items-center  ">
//       {/* Content Section */}
//       <div className="col-span-12 lg:col-span-7 space-y-8 h-full py-24 ">
//         <h1 className="text-4xl lg:text-7xl font-semibold tracking-tight">
//           {slide.title}
//         </h1>

//         <p className="text-lg text-muted-foreground max-w-[600px]">
//           {slide.description}
//         </p>

//         <CustomButton 
//           text="Get started" 
//           className="w-[10vw] h-16" 
//         />

//         <div className="pt-12 lg:pt-28 relative">
//           {/* Dynamic Statistics */}
//           <StatisticsDisplay stats={slide.stats} />

//           {/* Carousel Indicators */}
//           <div className="absolute bottom-0 left-3/4 transform -translate-x-1/2 hidden lg:block">
//             <div className="flex justify-center gap-2 mt-8">
//               {Array.from({ length: totalSlides }).map((_, i) => (
//                 <button
//                   key={i}
//                   onClick={() => onSlideChange(i)}
//                   className={`h-3 rounded-full transition-all duration-300 cursor-pointer ${
//                     i === index ? "bg-black w-9" : "bg-gray-300 w-3 hover:bg-gray-400"
//                   }`}
//                   aria-label={`Go to slide ${i + 1}`}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Image Section */}
//       <div className="col-span-12 lg:col-span-5 lg:ml-4 relative min-h-52 lg:h-full">
//         <div className="absolute inset-0">
//           <Image
//             src={slide.image}
//             alt={`Slide ${index + 1}`}
//             fill
//             className="object-fill"
//             priority={index === 0}
//           />
//         </div>
//       </div>
//     </div>
//   )
// }

// export default CarouselSlide

import CustomButton from "@/components/common/CustomButton";
import Image from "next/image";

const CarouselSlide = ({
  slide,
  index,
  isActive,
  totalSlides,
  onSlideChange
}) => {
  const StatisticsDisplay = ({ stats }) => {
    return (
      <div className="flex gap-12">
        {stats.map((stat, index) => (
          <div key={index}>
            <div className="text-3xl font-bold">{stat.value}</div>
            <div className="text-muted-foreground">{stat.label}</div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="grid grid-cols-12 items-center min-h-[60vh]">
      {/* Content Section */}
      <div className="col-span-12 lg:col-span-7 space-y-8 h-full py-24">
        <h1 className="text-4xl lg:text-7xl font-semibold tracking-tight">
          {slide.title}
        </h1>

        <p className="text-lg text-muted-foreground max-w-[600px]">
          {slide.description}
        </p>

        <CustomButton
          text="Get started"
          className="w-[10vw] h-16"
        />

        <div className="pt-12 lg:pt-28 relative">
          {/* Dynamic Statistics */}
          <StatisticsDisplay stats={slide.stats} />

          {/* Carousel Indicators */}
          <div className="absolute bottom-0 left-3/4 transform -translate-x-1/2 hidden lg:block">
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: totalSlides }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => onSlideChange(i)}
                  className={`h-3 rounded-full transition-all duration-300 cursor-pointer ${
                    i === index ? "bg-black w-9" : "bg-gray-300 w-3 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Image Section with Full Height */}
      <div className="col-span-12 lg:col-span-5 lg:ml-4 h-full relative">
        <div className="relative h-full w-full">
          <Image
            src={slide.image}
            alt={`Slide ${index + 1}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={index === 0}
          />
        </div>
      </div>
    </div>
  );
};

export default CarouselSlide;