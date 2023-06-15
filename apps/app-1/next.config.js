/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  rewrites: async () => {
    return [
      {
        source: '/app2/:match*',
        destination: 'https://vercel-multiple-app.vercel.app/:match*',
      },
    ]
  },
}

module.exports = nextConfig
