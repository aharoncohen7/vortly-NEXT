/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
      remotePatterns: [
         {
            hostname: 'www.mspirit.co.il',
            hostname: 'www.breslev.org',
         },
      ],
   },
};

export default nextConfig;
