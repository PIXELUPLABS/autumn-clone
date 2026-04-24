/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ["*.ngrok-free.dev"],
  experimental: {
    optimizePackageImports: ["framer-motion", "motion"],
  },
};

export default nextConfig;
