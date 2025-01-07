"use client";

import { CarouselItem } from "@/components/ui/carousel";
import { spotlightProducts } from "@/utils/SiteData";
import CuratedFeaturedCard from "../common/cards/CuratedFeaturedCard";
import SectionHeader from "../common/SectionHeader";
import CarouselLayout from "./carousel/Carousel";

const Spotlight = () => {
  return (
    <>
      <SectionHeader title="SPOTLIGHT THIS WEEK" btnText={"View all"} />
      <CarouselLayout className="my-16">
        {spotlightProducts.map((product) => (
          <CarouselItem
            key={product.id}
            className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/4"
          >
            <CuratedFeaturedCard key={product.id} {...product} />
          </CarouselItem>
        ))}
      </CarouselLayout>
    </>
  );
};

export default Spotlight;
