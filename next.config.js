const urlPrefix = process.env.BRANCH_NAME ? '/' + process.env.BRANCH_NAME : ''

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: urlPrefix,
  assetPrefix: urlPrefix,
}

module.exports = nextConfig
