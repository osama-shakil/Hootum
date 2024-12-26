"use client";

import * as React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import MobileFilterModal from "@/components/common/MobileFilterModal";

export default function FilterSection2() {
  const [open, setOpen] = React.useState(false); // Modal visibility state
  const [priceRange, setPriceRange] = React.useState([60000]);

  const handleSliderChange = (value) => {
    setPriceRange(value);
  };
  const toggle = state => setOpen(state);

  return (<>
    <div className="hidden md:flex flex-col p-4 md:flex-row md:items-center md:justify-between my-0 lg:my-2">
      {/* Price Filter */}
      <div className="hidden lg:flex flex-col space-y-1 lg:w-[280px]">
        <label className="text-sm font-medium">Price</label>
        <Select defaultValue="highest">
          <SelectTrigger className="w-[300px] lg:w-full">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="highest">Highest price</SelectItem>
            <SelectItem value="lowest">Lowest price</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Likes Filter */}
      <div className="flex flex-col space-y-1 lg:w-[280px]">
        <label className="text-sm font-medium">Likes</label>
        <Select defaultValue="most">
          <SelectTrigger className="w-[300px] lg:w-full">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="most">Most liked</SelectItem>
            <SelectItem value="least">Least liked</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Creator Filter */}
      <div className="hidden lg:flex flex-col space-y-1 lg:w-[280px]">
        <label className="text-sm font-medium">Creator</label>
        <Select defaultValue="verified">
          <SelectTrigger className="w-[300px] lg:w-full">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="verified">Verified only</SelectItem>
            <SelectItem value="all">All creators</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Price Range Slider */}
      <div className="flex flex-col space-y-1 lg:w-[285px] relative">
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium">Price range</label>
            {/* <span className="text-sm font-medium bg-black px-2 py-1 rounded-3xl text-white">
            {priceRange[0].toLocaleString()} BDT
          </span> */}
        </div>
        <div className="relative">
          <Slider
            value={priceRange}
            max={100000}
            min={5000}
            step={1000}
            onValueChange={handleSliderChange}
            className="w-full"
          />
          {/* Dynamic Bubble Above Slider Thumb */}
          <div
            className="absolute text-sm font-medium text-white bg-black px-3 py-1 rounded-full transform -translate-y-[59px] -translate-x-1/2 whitespace-nowrap"
            style={{
              left: `calc(${((priceRange[0] - 5000) / 95000) * 100}%)`,
            }}
          >
            {priceRange[0].toLocaleString()} BDT
            <div className="absolute bottom-0 left-1/2 h-2 w-3 -translate-x-1/2 translate-y-[80%] bg-black clip-pointer"></div>
          </div>
        </div>
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span className="text-black">5,000 BDT</span>
          <span className="text-black">100,000 BDT</span>
        </div>
      </div>
    </div>


    {/* Mobile Filter Section */}

    <div className="md:hidden flex flex-col p-2 items-center justify-between">
      {/* Price Filter */}
      <div className="flex flex-col">
        {/* <label className="text-sm font-medium">Price</label> */}
        <Select defaultValue="recentlyadded">
          <SelectTrigger className="w-[300px] font-normal">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="recentlyadded">Recently added</SelectItem>
            <SelectItem value="lowest">Lowest price</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex flex-col mt-4">
        {/* <label className="text-sm font-medium">Price</label> */}
        <Select defaultValue="allItems">
          <SelectTrigger className="w-[300px] font-normal">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="allItems">All items</SelectItem>
            <SelectItem value="lowest">Lowest price</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <button onClick={toggle} className="p-4 mt-8 w-[300px] font-normal rounded-full text-sm bg-black text-white">
      Advanced Filter
</button>
      </div>

      <MobileFilterModal open={open} toggle={toggle}/>
    </>
  );
}
