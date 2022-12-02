/** @type {import('next').NextConfig} */
const runtimeCaching = require("next-pwa/cache");
const withPWA = require("next-pwa")({
  dest: "public",
  runtimeCaching,
});

const nextConfig = {
  reactStrictMode: false,
  trailingSlash: true,
  env: {
    SECRET_KEY: process.env.CRYPTO_SECRET_KEY,
  },
};

module.exports = withPWA(nextConfig);
