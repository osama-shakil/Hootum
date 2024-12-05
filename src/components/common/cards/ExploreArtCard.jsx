import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const ExploreArtCard = ({title,description ,text,className}) => {
  return (
    <Card className={`bg-white/50 backdrop-blur-md border-0 rounded-2xl ${className}`}>
      <CardContent className="p-8 space-y-4">
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-800">
          {title}
        </h1>
        <hr className="border-gray-700" />
        <div className="space-y-2">
          <p className="text-gray-600">
            {description}
          </p>
        </div>
        <Button
          variant="link"
          className="p-0 h-auto font-semibold text-black hover:text-black/70 flex items-center"
        >
          {text}
          <ArrowRight className="ml-1 h-4 w-4 -rotate-45" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default ExploreArtCard;