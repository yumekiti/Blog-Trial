/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: process.env.GITHUB_ACTIONS && "/Blog-Trial",
  trailingSlash: true,
}

module.exports = nextConfig
