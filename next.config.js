/** @type {import('next').NextConfig} */
const runtimeCaching = require("next-pwa/cache");
const withPWA = require("next-pwa");

const nextConfig = {
  reactStrictMode: false,
  trailingSlash: true,
  dest: "public",
  runtimeCaching,
  skipWaiting: true,
  register: true,
  env: {
    SECRET_KEY: process.env.CRYPTO_SECRET_KEY,
  },
};

module.exports = withPWA(nextConfig);
