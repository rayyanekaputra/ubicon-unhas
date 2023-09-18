/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

// https://nextjs.org/docs/messages/next-image-unconfigured-host
module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'ubicon.unhas.ac.id',
          port: '',
          pathname: '/b-api/news/thumbnail/**',
        },
      ],
    },
  }