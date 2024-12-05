import { Card } from "@/components/ui/card";
import Image from "next/image";
import CustomLabel from "../CustomLabel";

const CuratedFeaturedCard = ({ id, image, title, price }) => {
  console.log('image: ', image);
  return (
    <Card key={id} className="overflow-hidden bg-white col-span-1 h-full">
      <div className="relative aspect-square">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover p-2 border-b"
          priority
        />
      </div>
      <div className="p-4 space-y-2">
        <h3 className="text-xl font-semibold">{title}</h3>
        <CustomLabel price={price} />
      </div>
    </Card>
  );
};

export default CuratedFeaturedCard;
