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

export default function FilterSection2() {
  const [priceRange, setPriceRange] = React.useState([60000]);

  const handleSliderChange = (value) => {
    setPriceRange(value);
  };

  return (
    <div className="flex flex-col p-4 md:flex-row md:items-center md:justify-between my-0 lg:my-2">
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
          {/* Dynamic Value Above Slider Thumb */}
          <div
            className="absolute text-sm font-medium text-white bg-black px-2 py-1 rounded-3xl -translate-y-[60px] transform whitespace-nowrap"
            style={{
              left: `calc(${((priceRange[0] - 5000) / 95000) * 100}% - 20px)`,
            }}
          >
            {priceRange[0].toLocaleString()} BDT
          </div>
        </div>
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span className="text-black">5,000 BDT</span>
          <span className="text-black">100,000 BDT</span>
        </div>
      </div>
    </div>
  );
}
