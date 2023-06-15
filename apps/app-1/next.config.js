/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  rewrites: async () => {
    return [
      {
        source: '/app2/:match*',
        destination: 'https://app2.052hide.com/:match*',
      },
    ]
  },
}

module.exports = nextConfig
