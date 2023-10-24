/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['epic-projects.nyc3.digitaloceanspaces.com', 'files.stripe.com', 'https://www.sharonmycreations.com', 'http://localhost:3001']}
}

module.exports = nextConfig
