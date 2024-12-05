import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Zap, Target, Palette } from "lucide-react";

const CreatorCard = ({ id, name, role, image, badgeColor, icon }) => {
  const IconComponent = ({ icon }) => {
    const icons = {
      trophy: Trophy,
      zap: Zap,
      target: Target,
      palette: Palette,
    };
    const Icon = icons[icon];
    return <Icon className="h-4 w-4" />;
  };

  return (
    <Card key={id} className="w-60 md:w-auto">
      <div className="pt-3 pb-2 px-3">
        <div className="flex justify-center my-4">
          <Badge
            className={`${badgeColor} text-white border-0 flex gap-2 items-center px-42py-2 text-base`}
          >
            <IconComponent icon={icon} />#{id}
          </Badge>
        </div>
      </div>
      <hr className="mx-4" />
      <CardContent className="pt-8 pb-6 flex flex-col items-center text-center">
        <Avatar className="h-20 w-20 mb-4">
          <AvatarImage src={image} alt={name} />
          <AvatarFallback>{name[0]}</AvatarFallback>
        </Avatar>
        <h3 className="font-semibold text-lg mb-1">{name}</h3>
        <p className="text-sm text-muted-foreground">{role}</p>
      </CardContent>
    </Card>
  );
};

export default CreatorCard;