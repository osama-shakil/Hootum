import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import React from 'react'

const PopularCategoryCard = ({ id, title, image}) => {
  return (
    <Card className="overflow-hidden max-w-sm">
    <CardContent className="p-0">
      <div className="p-4">
        <h3 className="font-medium text-lg">{title}</h3>
      </div>
      <div className="relative aspect-square">
        <Image
          src={image}
          alt="Digital illustration of medical eye treatment"
          fill
          className="object-cover"
          priority
        />
      </div>
     
    </CardContent>
  </Card>
  )
}

export default PopularCategoryCard
