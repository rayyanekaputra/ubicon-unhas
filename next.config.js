/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

// https://nextjs.org/docs/messages/next-image-unconfigured-host
module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'ubi-api.onrender.com',
          port: '',
          pathname: '/news/thumbnail/**',
        },
      ],
    },
  }