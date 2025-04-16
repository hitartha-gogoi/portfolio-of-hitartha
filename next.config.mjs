/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["localhost", "blue-parental-mackerel-801.mypinata.cloud", "www.azuki.com", "expo.dev"], // ✅ Allow external images from GitHub
      },
};

export default nextConfig;
