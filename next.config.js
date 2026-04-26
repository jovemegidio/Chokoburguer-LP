/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/Chokoburguer-LP',
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: 'https', hostname: 'anotaai.s3.us-west-2.amazonaws.com' },
      { protocol: 'https', hostname: 'client-assets.anota.ai' },
      { protocol: 'https', hostname: 'staginganotaai.s3.us-west-2.amazonaws.com' },
    ],
  },
}

module.exports = nextConfig
