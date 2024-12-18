"use client"

import { artPieces } from "@/utils/SiteData";
import SectionHeader from "../common/SectionHeader";
import ArtCard from "./marketplace/ArtCard";
import FilterSection1 from "./marketplace/FilterSection1";
import FilterSection2 from "./marketplace/FilterSection2";
import MarketplaceModal from "../common/MarketplaceModal";
import { useState } from "react";

const DiscoverMarketplace = () => {
  const [open,setOpen] = useState(true);
  const toggle = () => setOpen(!open);
  const onAgreed=()=>{

  }

  return (
    <div className=" ">
      <SectionHeader title="Discover Marketplace" />
      <div className="md:container my-16">
        <FilterSection1 />
        <FilterSection2 />
         
        {/* Mobile: Horizontal scroll container */}
        <div className="md:hidden overflow-x-auto my-12 ">
          <div className="flex gap-4 p-4 min-w-max">
            {artPieces.map((piece) => (
              <div className="w-64" key={piece.id}>
                <ArtCard piece={piece} />
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: Grid layout */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 p-4 my-12">
          {artPieces.map((piece) => (
            <ArtCard key={piece.id} piece={piece} />
          ))}
        </div>
      </div>
      <MarketplaceModal open={open} toggle={toggle}  onAgreed={onAgreed} />
    </div>
  );
};

export default DiscoverMarketplace;
