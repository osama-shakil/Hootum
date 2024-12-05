import React from 'react';
import Image from 'next/image';

const QuestionsSection = () => {
  return (
    <div className="relative min-h-[90vh]">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/backgrounds-images/Container.png" // Replace with your actual image path
          alt="Background"
          fill
          className="lg:object-fill  object-cover"
          priority
        />
      </div>
      
      {/* Content Container */}
      <div className="relative z-10 w-full h-full">
        {/* Your content goes here */}
      </div>
    </div>
  );
};

export default QuestionsSection;