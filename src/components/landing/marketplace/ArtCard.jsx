import React from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import CustomLabel from "@/components/common/CustomLabel";

// Separate Creator component for better reusability
const Creator = ({ creator, className }) => (
  <div className={className}>
    <Avatar className="border-2 border-white h-12 w-12">
      <AvatarImage src={creator.avatar} alt={creator.name} />
      <AvatarFallback>{creator.name[0]}</AvatarFallback>
    </Avatar>
    <p className="text-[12px] text-gray-400 mt-2">{creator.role}</p>
    <p className="text-[14px] font-semibold text-black whitespace-nowrap">{creator.name}</p>
    </div>
);

const ArtCard = ({ piece }) => (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300">
      <CardHeader className="p-0">
        <div className="aspect-square w-full h-74 p-2">
          <Image
            src={piece.image}
            alt={piece.title}
            width={400}
            height={400}
            className="object-cover w-full h-full"
            priority
          />
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <h3 className="text-2xl font-semibold mb-2 line-clamp-1">{piece.title}</h3>
        <CustomLabel price={piece.price} />
        <div className="grid grid-cols-2 mt-4 border-t pt-4 gap-4">
          <Creator creator={piece.creators[0]} />
          <Creator 
            creator={piece.creators[1]} 
            className="border-l pl-4"
          />
        </div>
      </CardContent>
    </Card>
  );

export default ArtCard
