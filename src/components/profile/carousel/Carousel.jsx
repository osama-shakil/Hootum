"use client";

import CuratedFeaturedCard from "@/components/common/cards/CuratedFeaturedCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
} from "@/components/ui/carousel";
import { spotlightProducts } from "@/utils/SiteData";

const CarouselLayout = ({ children }) => {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full lg:max-w-6xl mx-auto my-16"
    >
      <CarouselContent className="-ml-2 md:-ml-4">
        {children}
      </CarouselContent>
      <CarouselNext className="hidden lg:block" />
    </Carousel>
  );
};

export default CarouselLayout;
