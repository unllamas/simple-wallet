/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    SECRET_KEY: process.env.CRYPTO_SECRET_KEY,
  },
};

module.exports = nextConfig;
