import React from "react";
import Image from "next/image";
import ExploreArtCard from "../common/cards/ExploreArtCard";

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
        {/* <div className="absolute top-36 left-1/2 ">
          <ExploreArtCard
            title="FAQ"
            description="Shizuka vision is to elevate the fine arts community"
            text="Discover more"
          />
        </div>
        <div className="absolute top-36 left-44 ">
          <ExploreArtCard
            title="FAQ"
            description="Shizuka vision is to elevate the fine arts community"
            text="Discover more"
          />
        </div>
        <div className="absolute bottom-36 left-1/2 ">
          <ExploreArtCard
            title="FAQ"
            description="Shizuka vision is to elevate the fine arts community"
            text="Discover more"
          />
        </div> */}
    </div>
  );
};

export default QuestionsSection;
