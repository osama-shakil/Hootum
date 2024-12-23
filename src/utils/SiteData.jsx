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
        <span className="text-[#532410]">{" "}COLLECTOR</span>
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



const slidePosition = {
  active: {
    zIndex: 40,
    opacity: 1,
    scale: 1,
    translateX: "0%",
    translateY: "-3%",
    imageTranslateX: "0%",
    imageOpacity: 1,
    imageScale: 1,
    imageVisibility: "visible",
    height: "2px",
  },
  rightFirst: {
    zIndex: 25,
    opacity: 0.8,
    scale: 0.95,
    translateX: "5%",
    translateY: "0%",
    imageTranslateX: "15%",
    imageOpacity: 0,
    imageScale: 0,
    imageVisibility: "hidden",
    height: "0",
  },
  rightSecond: {
    zIndex: 20,
    opacity: 0.6,
    scale: 0.9,
    translateX: "10%",
    translateY: "3%",
    imageTranslateX: "30%",
    imageOpacity: 0,
    imageScale: 0,
    imageVisibility: "hidden",
    height: "0",
  },
  leftFirst: {
    zIndex: 25,
    opacity: 0.8,
    scale: 0.95,
    translateX: "-5%",
    translateY: "0%",
    imageTranslateX: "-15%",
    imageOpacity: 0,
    imageScale: 0,
    imageVisibility: "hidden",
    height: "0",
  },
  leftSecond: {
    zIndex: 20,
    opacity: 0.6,
    scale: 0.9,
    translateX: "-10%",
    translateY: "3%",
    imageTranslateX: "-30%",
    imageOpacity: 0,
    imageScale: 0,
    imageVisibility: "hidden",
    height: "0",
  },
  hidden: {
    zIndex: 10,
    opacity: 0,
    scale: 0.85,
    translateX: "0%",
    translateY: "0%",
    imageTranslateX: "0%",
    imageOpacity: 0,
    imageScale: 0,
    imageVisibility: "hidden",
    height: "0",
  },
};



const curatorsTestimonials = [
  {
    image: "/Curators testimonial/Ellipse 13.png",
    title: "Azad hossain",
    subtitle: "Artist",
    description:
      "The NFT art marketplace is not just a platform for buying and selling art; it is a thriving community. Artists, collectors, and enthusiasts come together, fostering a sense of collaboration and mutual appreciation. The interactions and connections I've made in this space are invaluable. Engaging with the community through discussions, exhibitions, and collaborations has enriched my perspective and deepened my appreciation for the digital art revolution.",
  },
  {
    image: "/Curators testimonial/Ellipse 13.png",
    title: "John Smith",
    subtitle: "Designer",
    description:
      "Creating unique digital experiences through innovative design solutions.",
  },
  {
    image: "/Curators testimonial/Ellipse 13.png",
    title: "Emma Wilson",
    subtitle: "Developer",
    description:
      "Full-stack developer passionate about building scalable applications.",
  },
  {
    image: "/Curators testimonial/Ellipse 13.png",
    title: "Michael Brown",
    subtitle: "Product Manager",
    description:
      "Leading product strategies and driving innovation in digital products.",
  },
  {
    image: "/Curators testimonial/Ellipse 13.png",
    title: "Sarah Chen",
    subtitle: "UX Researcher",
    description: "Creating user-centered designs through research and testing.",
  },
  {
    image: "/Curators testimonial/Ellipse 13.png",
    title: "James Wilson",
    subtitle: "Marketing Lead",
    description:
      "Developing strategic marketing campaigns for digital products.",
  },
];

const testimonials = [
  {
    id: 1,
    name: 'Sarah Chen',
    text: '"As an artist, Shizuka has given me a platform to showcase my work without the traditional barriers of entry. The supportive community and promotional tools have helped me build my brand and gain visibility."',
    image: "/testimonial/profile (3).png",
  },
  {
    id: 2,
    name: 'David Tom',
    text: '"The platform has been instrumental in helping me reach art collectors globally. The tools and community support make it easy to manage my portfolio and conect with buyers."',
    image: "/testimonial/profile (4).png",
  },
  {
    id: 3,
    name: 'Michael Ross',
    text: '"I appreciate how the platform makes art accessible to everyone. It\'s transformed how I share and sell my artwork, reaching audiences I never thought possible."',
    image: "/testimonial/profile (2).png",
  },
  {
    id: 4,
    name: 'James Wilson',
    text: '"The community aspect of the platform is amazing. I\'ve connected with fellow artists and collectors, leading to collaborative opportunities and sales."',
    image: "/testimonial/profile (1).png",
  },
  {
    id: 5,
    name: 'Emma Davis',
    text: '"This platform has revolutionized how I present my artwork. The professional tools and global reach have helped me establish myself as a serious artist."',
    image: "/testimonial/profile (5).png",
  }
];
export { artPieces, heroSlides, spotlightProducts , popularCategories ,slidePosition,testimonials,curatorsTestimonials};
