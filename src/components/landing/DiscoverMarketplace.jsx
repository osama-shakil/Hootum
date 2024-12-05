import { artPieces } from "@/utils/SiteData";
import SectionHeader from "../common/SectionHeader";
import ArtCard from "./marketplace/ArtCard";
import FilterSection1 from "./marketplace/FilterSection1";
import FilterSection2 from "./marketplace/FilterSection2";

const DiscoverMarketplace = () => {
  return (
    <div className=" ">
      <SectionHeader title="Discover Marketplace" />
      <div className="md:container my-16">
        <FilterSection1 />
        <FilterSection2 />
        <div className="grid grid-cols-1  md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 my-12">
          {artPieces.map((piece) => (
            <ArtCard key={piece.id} piece={piece} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DiscoverMarketplace;
