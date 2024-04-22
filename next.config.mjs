/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", //enables static export
  distDir: "dist",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
