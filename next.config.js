/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'omnitechsolutions.website',
      },
    ],
  },
}

module.exports = nextConfig
