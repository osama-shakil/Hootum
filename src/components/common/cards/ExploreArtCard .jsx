import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const ExploreArtCard = () => {
  return (
    <Card className="bg-white/50 backdrop-blur-md border-0 rounded-2xl">
      <CardContent className="p-8 space-y-4">
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-800">
          EXPLORE ART ON HOOTUM
        </h1>
        <hr className="border-gray-700" />
        <div className="space-y-2">
          <p className="text-gray-600">
            Empower artists and creators by embracing NFTs, where artistic 
            expression meets true ownership. Join a community that values and supports the unique visions 
            and talents that shape our digital world.
          </p>
        </div>
        <Button
          variant="link"
          className="p-0 h-auto font-semibold text-black hover:text-black/70 flex items-center"
        >
          Know more
          <ArrowRight className="ml-1 h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default ExploreArtCard;