import { Card } from "@/components/ui/card";
import Image from "next/image";
import CustomLabel from "../CustomLabel";

const CuratedRegularCard = ({ id, image, title, price }) => {
  return (
    <Card key={id} className="flex overflow-hidden bg-white h-full">
    <div className="relative w-48">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover p-2 border-r"
        priority
      />
    </div>
    <div className="flex flex-col justify-center p-4 flex-1">
      <h3 className="text-lg font-semibold">{title}</h3>
      <CustomLabel price={price} />

    </div>
  </Card>
  );
};

export default CuratedRegularCard;
