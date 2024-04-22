/** @type {import('next').NextConfig} */
const isProd = (process.env.NODE_ENV = "production");

const nextConfig = {
  basePath: isProd ? "/beanmommo-portfolio" : "",
  output: "export", //enables static export
  distDir: "dist",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
