/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
      remotePatterns: [
         {
            hostname: 'www.mspirit.co.il',
         },
      ],
   },
};

export default nextConfig;
