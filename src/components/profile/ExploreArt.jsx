// "use client";
// import React, { useState } from "react";
// import { Button } from "../ui/button";
// import Image from "next/image";
// import { Card, CardContent } from "../ui/card";
// import { ArrowRight } from "lucide-react";

// const ExploreArt = () => {
//   const [activeTab, setActiveTab] = useState("My Hootum");

//   const tabs = ["My Hootum", "Wallet", "My Assets", "Orders", "My Activites"];
//   return (
//     <>
//       <div className="py-6 md:container ">
//         <div className="flex flex-wrap  justify-center gap-2 p-4 ">
//           {tabs.map((tab) => (
//             <Button
//               key={tab}
//               variant={activeTab === tab ? "default" : "outline"}
//               className={`rounded-full ${
//                 activeTab === tab ? "bg-black text-white hover:bg-black/90" : ""
//               }`}
//               onClick={() => setActiveTab(tab)}
//             >
//               {tab}
//             </Button>
//           ))}
//         </div>
//       </div>
//       <div className="relative min-h-[90vh]">
//         {/* Background Image */}
//         <div className="absolute inset-0 w-full h-full z-0">
//           <Image
//             src="/backgrounds-images/Container.png" // Replace with your actual image path
//             alt="Background"
//             fill
//             className="lg:object-fill  object-cover"
//             priority
//           />
//         </div>

//         {/* Content Container */}
//         <div className="relative z-10 w-full h-full flex items-center justify-center">
//         <Card className="max-w-lg mx-auto bg-white/95 backdrop-blur-lg">
//           <CardContent className="p-6 space-y-4">
//             <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
//               EXPLORE ART ON HOOTUM
//             </h1>
//             <div className="space-y-2 text-muted-foreground">
//               <p>
//                 Empower artists and creators by embracing NFTs, where artistic
//                 expression meets true ownership.
//               </p>
//               <p>
//                 Join a community that values and supports the unique visions
//                 and talents that shape our digital world.
//               </p>
//             </div>
//             <Button
//               variant="link"
//               className="p-0 h-auto font-semibold text-black hover:text-black/70"
//             >
//               Know more
//               <ArrowRight className="ml-1 h-4 w-4" />
//             </Button>
//           </CardContent>
//         </Card>
//       </div>
//       </div>
//     </>
//   );
// };

// export default ExploreArt;

"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import ExploreArtCard from "../common/cards/ExploreArtCard ";

const ExploreArt = () => {
  const [activeTab, setActiveTab] = useState("My Hootum");
  const tabs = ["My Hootum", "Wallet", "My Assets", "Orders", "My Activites"];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Tabs Section */}
      <div className="py-6 md:container">
        <div className="flex flex-wrap justify-center gap-2 p-4">
          {tabs.map((tab) => (
            <Button
              key={tab}
              variant={activeTab === tab ? "default" : "outline"}
              className={`rounded-full ${
                activeTab === tab ? "bg-black text-white hover:bg-black/90" : ""
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </Button>
          ))}
        </div>
      </div>

      {/* Main Content Section */}
      <div className="flex-grow relative flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src="/backgrounds-images/Container.png" // Replace with your actual image path
            alt="Background"
            fill
            className="lg:object-fill  object-cover"
            priority
          />
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-lg px-4">
          <ExploreArtCard />
        </div>
      </div>
    </div>
  );
};

export default ExploreArt;
