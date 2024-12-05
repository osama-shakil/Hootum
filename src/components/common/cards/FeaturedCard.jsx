import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import Image from 'next/image'

const FeaturedCard = ({ id, title, description, image}) => {
  return (
    <Card className="w-full overflow-hidden hover:shadow-lg transition-shadow duration-300 p-4 space-y-4">
      <div className="w-full h-44 ">
        <Image
          src={image}
          alt="Trading card collection featuring various holographic cards"
          width={500}
          height={300}
          className="w-full h-full object-cover border border-gray-200 rounded-lg"
          priority
        />
      </div>
      <CardContent className="px-0">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <hr></hr>
        <p className="text-gray-600 text-sm mt-2">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}

export default FeaturedCard