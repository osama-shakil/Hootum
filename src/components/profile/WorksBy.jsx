import React from 'react'
import SectionHeader from '../common/SectionHeader'
import CarouselLayout from './carousel/Carousel'
import { CarouselItem } from '../ui/carousel'
import CuratedFeaturedCard from '../common/cards/CuratedFeaturedCard'
import { spotlightProducts } from '@/utils/SiteData'

const WorksBy = () => {
  return (
    <>
    <SectionHeader title="WORKS BY CURATED PICK’S" btnText={"View all"} />
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
  )
}

export default WorksBy
