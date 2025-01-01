import CreatorCard from "../common/cards/CreatorCard";
import SectionHeader from "../common/SectionHeader";

const profiles = [
  {
    id: 1,
    name: "Shourav",
    role: "Graphics designer",
    image: "/creator/shourav.png",
    badgeColor: "bg-blue-500",
    icon: "trophy",
  },
  {
    id: 3,
    name: "Rocky",
    role: "Painter",
    image: "/creator/rocky.png",
    badgeColor: "bg-green-500",
    icon: "zap",
  },
  {
    id: 4,
    name: "Reshmi",
    role: "Fashion designer",
    image: "/creator/reshmi.svg",
    badgeColor: "bg-gray-800",
    icon: "target",
  },
  {
    id: 2,
    name: "Janvi",
    role: "Tattoo designer",
    image: "/creator/janvi.png",
    badgeColor: "bg-purple-500",
    icon: "palette",
  },

  {
    id: 5,
    name: "Sruti",
    role: "Artist",
    image: "/creator/sruti.png",
    badgeColor: "bg-gray-500",
    icon: "target",
  },
  {
    id: 6,
    name: "Devan",
    role: "Artist",
    image: "/creator/shourav.png",
    badgeColor: "bg-blue-500",
    icon: "trophy",
  },
  {
    id: 7,
    name: "Shaikat",
    role: "Content artist",
    image: "/creator/rocky.png",
    badgeColor: "bg-purple-500",
    icon: "palette",
  },
  {
    id: 8,
    name: "Abir",
    role: "Collector",
    image: "/creator/reshmi.svg",
    badgeColor: "bg-green-500",
    icon: "zap",
  },
  {
    id: 9,
    name: "Jolly",
    role: "Designer",
    image: "/creator/janvi.png",
    badgeColor: "bg-gray-800",
    icon: "target",
  },
  {
    id: 10,
    name: "Rekhi",
    role: "Collector",
    image: "/creator/sruti.png",
    badgeColor: "bg-gray-500",
    icon: "target",
  },
];

const CreatorAndCollector = () => {
  return (
    <div>
      <SectionHeader
        title="Creator & collector Spotlight"
        // btnText="Explore more"
      />

      {/* Mobile: Horizontal scroll container */}
      <div className="md:hidden overflow-x-auto my-12 ">
        <div className="flex gap-4 p-4 min-w-max">
          {profiles.map((profile) => (
            <CreatorCard key={profile.id} {...profile} />
          ))}
        </div>
      </div>
      {/* Desktop: Grid layout */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 md:container my-16">
        {profiles.map((profile) => (
          <CreatorCard key={profile.id} {...profile} />
        ))}

      </div>
        <div className="hidden md:flex justify-center gap-2 mb-16">
          <div className="w-3 h-3 rounded-full bg-black"></div>
          <div className="w-3 h-3 rounded-full bg-gray-300 "></div>
        </div>
    </div>
  );
};

export default CreatorAndCollector;
