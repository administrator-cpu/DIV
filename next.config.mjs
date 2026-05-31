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
      // You can add more domains here later if you use other image hosts
    ],
  },
};

export default nextConfig;