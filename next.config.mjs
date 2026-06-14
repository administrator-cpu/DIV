/** @type {import('next').NextConfig} */
const nextConfig = {
  // 1. Your existing image configuration
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
  
  // 2. The new API proxy rewrites
  async rewrites() {
    return [
      {
        // Whenever the frontend calls /api/anything...
        source: '/api/:path*',
        // ...proxy it to your Express backend running on port 5000
        destination: 'http://localhost:5000/api/:path*', 
      },
    ];
  },
};

export default nextConfig;