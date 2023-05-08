/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: process.env.BRANCH_NAME || '',
  basePath: process.env.BRANCH_NAME || '',
}

module.exports = nextConfig
