/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.microlink.io",
        port: "",
      },
      {
        protocol: "https",
        hostname: "prod-files-secure.s3.us-west-2.amazonaws.com",
        port: "",
      },
    ],
    dangerouslyAllowSVG: true, // Allow SVGs
  },
  reactStrictMode: true,
};

export default nextConfig;
