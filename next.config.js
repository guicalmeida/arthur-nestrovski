/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.graphcms.com',
      },
    ],
  },
  staticPageGenerationTimeout: 10000,
  experimental: {
    cpus: 1,
    workerThreads: false,
  },
}
