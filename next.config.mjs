/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tailkits.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;