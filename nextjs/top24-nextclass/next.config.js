/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  images: {
    domains: [
      "https://rickandmortyapi.com"
    ]
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: 'rickandmortyapi.com',
    //     port: '',
    //   },
    // ],
  },
}

module.exports = nextConfig
