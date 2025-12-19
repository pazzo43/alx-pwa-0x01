next.config.mjs

public

import withPWAInit from "@ducanh2912/next-pwa";

/** @type {import('next').NextConfig} */

// Initialize the PWA plugin
const withPWA = withPWAInit({
  dest: "public",         // The destination folder for the service worker and workbox files
  cacheOnFrontEndNav: true, // Enable caching for front-end navigation
  aggressiveFrontEndNavCaching: true, // Aggressive caching for smoother navigation
  reloadOnOnline: true,    // Force reload when going back online
  swcMinify: true,         // Use SWC to minify the service worker
});

const nextConfig = {
  reactStrictMode: true,
  images: {
    // Allows loading movie posters from external Amazon domains
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
        pathname: '/images/**',
      },
    ],
  },
};

// Export the combined configuration
export default withPWA(nextConfig);

npm run build

sw.js

workbox-*.js

/public

