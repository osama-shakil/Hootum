/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,

  // async redirects() {
  //   return [
  //     // Basic redirect
  //     {
  //       source: "/",
  //       destination: "/main/home",
  //       permanent: false,
  //     },
  //   ];
  // },
  
  images: {
    domains: [
      "firebasestorage.googleapis.com",
     
    ],
  },
};

export default nextConfig;
