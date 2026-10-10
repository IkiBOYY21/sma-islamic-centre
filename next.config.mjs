/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "www.smaislamiccentre.sch.id" },
    ],
  },
};

export default nextConfig;
