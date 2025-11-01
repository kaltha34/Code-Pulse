/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    dirs: ['app', 'components', 'lib', 'pages'],
    ignoreDuringBuilds: false,
  },
}

module.exports = nextConfig