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
      <div className="flex gap-6 text-center lg:gap-12">
        {stats.map((stat, index) => (
          <div key={index}>
            <div className="text-2xl lg:text-3xl font-bold">{stat.value}</div>
            <div className="text-muted-foreground">{stat.label}</div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="grid grid-cols-12 min-h-screen pb-4 md:pb-0">
    {/* Content Section */}
    <div className="col-span-12 md:pl-2 lg:col-span-7 space-y-4 md:space-y-8 py-8 md:py-24 flex flex-col justify-between">
      <h1 className="text-[20px] md:text-4xl lg:text-7xl font-bold md:font-semibold tracking-tight text-shadow-custom">
        {slide.title}
      </h1>
  
      <p className="text-[16px] md:text-lg text-muted-foreground max-w-[600px]">
        {slide.description}
      </p>
  
      <CustomButton text="Get started" className="w-[150px] h-12 md:h-16" />
  
      <div className="pt-4 md:pt-12 lg:pt-28 relative">
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
  
    {/* Image Section */}
    <div className="col-span-12 lg:col-span-5 relative flex justify-center items-center">
      <div className="relative w-full h-[200px] md:h-full">
        <Image
          src={slide.image}
          alt={`Slide ${index + 1}`}
          layout="fill"
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