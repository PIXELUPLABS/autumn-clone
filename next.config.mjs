/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ["*.ngrok-free.dev"],
  experimental: {
    optimizePackageImports: ["framer-motion", "motion"],
    optimizeCss: true,
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://vercel.live",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: blob:",
              "font-src 'self' data:",
              "media-src 'self'",
              "connect-src 'self' https://*.vercel.app https://vitals.vercel-insights.com",
              "frame-ancestors 'none'",
            ].join("; "),
          },
          {
            key: "Cross-Origin-Opener-Policy",
            value: "same-origin",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
