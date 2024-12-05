import React from "react";
import SectionHeader from "../common/SectionHeader";
import CarouselLayout from "./carousel/Carousel";
import { CarouselItem } from "../ui/carousel";
import PopularCategoryCard from "../common/cards/PopularCategoryCard";
import { popularCategories } from "@/utils/SiteData";

const PopularCategories = () => {
  return (
    <>
      <SectionHeader title="POPULAR BY CATEGORIES" btnText={"View all"} />
      <CarouselLayout>
        {popularCategories.map((product) => (
          <CarouselItem
            key={product.id}
            className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/4"
          >
            <PopularCategoryCard key={product.id} {...product} />
          </CarouselItem>
        ))}
      </CarouselLayout>
    </>
  );
};

export default PopularCategories;
