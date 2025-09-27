import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'files.worldwildlife.org',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i0.wp.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'sfa.gov.sg',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.apartmenttherapy.info',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'help.gardeningexpress.co.uk',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.theconversation.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
