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
import { ChevronDown } from "lucide-react";

export default function FilterSection2() {
  const [priceRange, setPriceRange] = React.useState([60000]);

  return (
    <div className="flex flex-col p-4 md:flex-row md:items-center md:justify-between my-0 lg:my-2">
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

      <div className="flex flex-col space-y-1 lg:w-[280px]">
        <label className="text-sm font-medium">likes</label>
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

      <div className="flex flex-col space-y-1 lg:w-[285px]">
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium">Price range</label>
          <span className="text-sm font-medium bg-black px-2 py-1 rounded-3xl text-white">
            {priceRange[0].toLocaleString()} BDT
          </span>
        </div>
        <Slider
          value={priceRange}
          max={100000}
          min={5000}
          step={1000}
          onValueChange={setPriceRange}
          className="w-full"
        />
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>5,000 BDT</span>
          <span>100,000 BDT</span>
        </div>
      </div>
    </div>
  );
}
