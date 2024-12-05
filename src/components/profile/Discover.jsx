import React from "react";
import ExploreArtCard from "../common/cards/ExploreArtCard";
import Image from "next/image";

const Discover = () => {
  return (
    <div className="flex-grow relative flex items-center justify-center h-[80vh]">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/backgrounds-images/discover-bg.png" // Replace with your actual image path
          alt="Background"
          fill
          className="lg:object-fill  object-cover"
          priority
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-lg px-4">
        <ExploreArtCard
          title="DISCOVER OUR STORY"
          description="Shizuka vision is to elevate the fine arts community
by bringing renowned artists & art lovers together
onto an online marketplace built on Trust and
Convenience. Our blockchain powered platform
ensures that every artwork is authenticated and
every transaction is secured so that both artists
and art collectors have the best experience."
          text="Discover more"
        />
      </div>
    </div>
  );
};

export default Discover;
