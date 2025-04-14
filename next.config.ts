import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "placehold.co",
      },
    ],
    dangerouslyAllowSVG: true,
  },
}

export default nextConfig
