import React from "react";
import CreatorAndCollector from "@/components/landing/CreatorAndCollector";
import CuratedItems from "@/components/landing/CuratedItems";
import CuratorsTestimonial from "@/components/landing/CuratorsTestimonial";
import DiscoverMarketplace from "@/components/landing/DiscoverMarketplace";
import FeaturedSection from "@/components/landing/FeaturedSection";
import HeadLine from "@/components/landing/HeadLine";
import HeroSection from "@/components/landing/HeroSection";
import QuestionsSection from "@/components/landing/QuesitonsSecrtion";
import TestimonialSection from "@/components/landing/TestimonialSection";

const page = () => {
  return (
    <div className="flex flex-col min-h-screen ">
      <HeroSection />
      <HeadLine />
      <QuestionsSection />
      <FeaturedSection />
      <CreatorAndCollector />
      <CuratedItems />
      <TestimonialSection />
      <CuratorsTestimonial />
      <DiscoverMarketplace />
    </div>
  );
};

export default page;
