/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    env: process.env.ENV,
  },
}

module.exports = nextConfig
