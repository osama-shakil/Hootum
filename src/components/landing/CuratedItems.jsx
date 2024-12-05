import React from "react";
import SectionHeader from "../common/SectionHeader";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import CustomLabel from "../common/CustomLabel";
import CuratedRegularCard from "../common/cards/CuratedRegularCard";
import CuratedFeaturedCard from "../common/cards/CuratedFeaturedCard";
import Curators from "./comp/Curators";

const curatedProducts = [
  {
    id: 1,
    title: "Sketch of tree",
    price: 89800,
    image: "/Curated/sketch.png",
    featured: true,
  },
  {
    id: 2,
    title: "Women Painting",
    price: 59200,
    image: "/Curated/women.png",
  },
  {
    id: 3,
    title: "Antique M.Player",
    price: 41500,
    image: "/Curated/antique.png",
  },
  {
    id: 4,
    title: "Seiko Watch",
    price: 32500,
    image: "/Curated/seiko.png",
  },
];

const CuratedItems = () => {
  const featuredProducts = curatedProducts.filter((p) => p.featured);
  const regularProducts = curatedProducts.filter((p) => !p.featured);

  return (
    <>
      <SectionHeader title="Curated Items" btnText="Discover more" />
      <div className="grid grid-cols-1 lg:grid-cols-12 md:gap-12 gap-y-12  md:p-4 p-2 my-16 md:container">
        {/* Products Section - 8 columns */}
        <div className="md:col-span-8 col-span-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
            {/* Featured Product */}
            {featuredProducts.map((product) => (
              <CuratedFeaturedCard key={product.id} {...product} />
            ))}

            {/* Regular Products */}
            <div className="grid grid-rows-3 gap-4 h-full">
              {regularProducts.map((product) => (
                <CuratedRegularCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </div>

        {/* Curators Section - 4 columns */}
        <div className="md:col-span-4 col-span-12 ">
          <Curators />
        </div>
      </div>
    </>
  );
};

export default CuratedItems;
