/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: process.env.NODE_ENV !== 'production' ? '' : '/app2',
}

module.exports = nextConfig
