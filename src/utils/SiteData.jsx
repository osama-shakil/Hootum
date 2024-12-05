const artPieces = [
  {
    id: 1,
    title: "Rabindra Oil Painting",
    price: 39000,
    image: "/marketplace/rabindra.png",
    creators: [
      {
        name: "MD. Shahabuddin",
        role: "Artist",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      {
        name: "Tarek",
        role: "Owner",
        avatar: "/placeholder.svg?height=32&width=32",
      },
    ],
  },
  {
    id: 2,
    title: "Amazing Satyajeet Art",
    price: 40300,
    image: "/marketplace/amazing.png",
    creators: [
      {
        name: "Jamaluddin shah",
        role: "Artist",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      {
        name: "Jalal khan",
        role: "Owner",
        avatar: "/placeholder.svg?height=32&width=32",
      },
    ],
  },
  {
    id: 3,
    title: "Digital Art",
    price: 25000,
    image: "/marketplace/digital.png",
    creators: [
      {
        name: "Shafiqul ahmed",
        role: "Artist",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      {
        name: "Azir mia",
        role: "Owner",
        avatar: "/placeholder.svg?height=32&width=32",
      },
    ],
  },
  {
    id: 4,
    title: "Rear Fossil Watch",
    price: 64500,
    image: "/marketplace/rear.png",
    creators: [
      {
        name: "Subhash sen",
        role: "Collector",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      {
        name: "Amit saha",
        role: "Owner",
        avatar: "/placeholder.svg?height=32&width=32",
      },
    ],
  },
  {
    id: 5,
    title: "Canvas Painting",
    price: 35500,
    image: "/marketplace/canvas.png",
    creators: [
      {
        name: "Tapan kumar dey",
        role: "Artist",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      {
        name: "Saju",
        role: "Owner",
        avatar: "/placeholder.svg?height=32&width=32",
      },
    ],
  },
  {
    id: 6,
    title: "Amazing Painting",
    price: 93500,
    image: "/marketplace/amazing-painting.png",
    creators: [
      {
        name: "Rocchu khan",
        role: "Artist",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      {
        name: "Dipoti das",
        role: "Owner",
        avatar: "/placeholder.svg?height=32&width=32",
      },
    ],
  },
  {
    id: 7,
    title: "Beautiful Portrait",
    price: 39800,
    image: "/marketplace/beautiful-portrait.png",
    creators: [
      {
        name: "Sudipto datta",
        role: "Artist",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      {
        name: "Tapan talukder",
        role: "Owner",
        avatar: "/placeholder.svg?height=32&width=32",
      },
    ],
  },
  {
    id: 8,
    title: "Rear Antiques",
    price: 34500,
    image: "/marketplace/rear-antiques.png",
    creators: [
      {
        name: "Akash ahmed",
        role: "Collector",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      {
        name: "Bimol ghosh",
        role: "Owner",
        avatar: "/placeholder.svg?height=32&width=32",
      },
    ],
  },
];

const heroSlides = [
  {
    id: 1,
    title: (
      <>
        WELCOME TO THE WORLD OF <span className="text-blue-500">PHYGITAL</span>{" "}
        <span className="text-purple-500">NFT</span>
      </>
    ),
    description:
      "Experience the perfect blend of physical and digital realms with our unique Phygital NFTs. Unlock exclusive content, tangible assets, and digital ownership like never before.",
    image: "/hero/welcome.png",
    stats: [
      { value: "98k+", label: "Assets" },
      { value: "12k+", label: "Auctions" },
      { value: "15k+", label: "Artist & Collectors" },
    ],
  },
  {
    id: 2,
    title: (
      <>
        DISCOVER COLLECTION OF <span className="text-[#98260b]">FANTASTIC</span>{" "}
        <span className="text-[#2c6133]">ART</span>
      </>
    ),
    description:
      "Experience the perfect blend of physical and digital realms with our unique Phygital NFTs. Unlock exclusive content, tangible assets, and digital ownership like never before.",
    image: "/hero/discover.png",
    stats: [
      { value: "98k+", label: "Artwork" },
      { value: "12k+", label: "Auctions" },
      { value: "15k+", label: "Artist" },
    ],
  },
  {
    id: 3,
    title: (
      <>
        <span className="text-[#c1ada3]">VINTAGE</span> CHARM, MODERN
        CONVENIENCE
      </>
    ),
    description:
      "Experience the charm of bygone eras with our vast selection of antiques. buy now and bring a piece of history into your home.",
    image: "/hero/vintage.png",
    stats: [
      { value: "78k+", label: "Collectables" },
      { value: "10k+", label: "Auctions" },
      { value: "8k+", label: "Collectors" },
    ],
  },
  {
    id: 4,
    title: (
      <>
        UNLEASH YOUR INNER
        <span className="text-[#532410]">COLLECTOR</span>
      </>
    ),
    description:
      "Experience the charm of bygone eras with our vast selection of antiques. buy now and bring a piece of history into your home.",
    image: "/hero/unleash.png",
    stats: [
      { value: "8k+", label: "Watches" },
      { value: "11k+", label: "Auctions" },
      { value: "14k+", label: "Collectors" },
    ],
  },
];
const spotlightProducts = [
  {
    id: 1,
    title: "Rear Omega Watch",
    price: 25000,
    image: "/spotlight/rear-omega.png",
  },
  {
    id: 2,
    title: "Antique Clock",
    price: 44200,
    image: "/spotlight/antique.png",
  },
  {
    id: 3,
    title: "Digital Narzul Portrait",
    price: 54700,
    image: "/spotlight/digital-narzul.png",
  },
  {
    id: 4,
    title: "Amazing Painting",
    price: 30400,
    image: "/spotlight/amazing-painting.png",
  },
  {
    id: 5,
    title: "Rear Omega Watch",
    price: 25000,
    image: "/spotlight/rear-omega.png",
  },
];



const popularCategories = [
  {
    id: 1,
    title: "Fine Art",
    
    image: "/popular/fine-art.png",
  },
  {
    id: 2,
    title: "Sculpture",
    image: "/popular/blank.png",
  },
  {
    id: 3,
    title: "Watches",
  
    image: "/popular/blank.png",
  },
  {
    id: 4,
    title: "Digital Art",

    image: "/popular/digit-product.png",
  },
  {
    id: 5,
    title: "Sculpture",
    image: "/popular/antique.png",
  },
];
export { artPieces, heroSlides, spotlightProducts , popularCategories };
