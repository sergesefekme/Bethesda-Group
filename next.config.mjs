/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // All imagery ships as self-contained CSS placeholders for now.
    // When real photos are added under /public/images, no remote hosts are needed.
    // To use remote images later, add entries to `remotePatterns` here.
    remotePatterns: [],
  },
};

export default nextConfig;
