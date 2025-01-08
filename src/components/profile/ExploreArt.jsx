
"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import ExploreArtCard from "../common/cards/ExploreArtCard";

const ExploreArt = () => {
  const [activeTab, setActiveTab] = useState("My Hootum");
  const tabs = ["My Hootum", "Wallet", "My Assets", "Orders", "My Activites"];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Tabs Section */}
      <div className="py-2 md:container">
        <div className="flex flex-wrap justify-center gap-2 p-4">
          {tabs.map((tab) => (
            <Button
              key={tab}
              variant={activeTab === tab ? "default" : "outline"}
              className={`rounded-full ${
                activeTab === tab ? "bg-black text-white hover:bg-black/90" : ""
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </Button>
          ))}
        </div>
      </div>

      {/* Main Content Section */}
      <div className="flex-grow relative flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src="/backgrounds-images/Container.svg" // Replace with your actual image path
            alt="Background"
            fill
            className="lg:object-cover  object-cover"
            priority
          />
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-lg px-4">
        <ExploreArtCard
          title="EXPLORE ART ON HOOTUM"
          description="Empower artists and creators by embracing NFTs, where artistic 
            expression meets true ownership. Join a community that values and supports the unique visions 
            and talents that shape our digital world."
          text=" Know more"
        />
        </div>
      </div>
    </div>
  );
};

export default ExploreArt;
