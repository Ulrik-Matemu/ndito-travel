import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/quiz",
        destination: "/find-your-trip",
        permanent: true, // 301 Redirect
      },
      {
        source: "/safaris",
        destination: "/tanzania-safaris",
        permanent: true, // 301 Redirect
      },
      {
        source: "/kilimanjaro",
        destination: "/climbing-kilimanjaro",
        permanent: true, // 301 Redirect
      },
      {
        source: "/kilimanjaro/:path*",
        destination: "/climbing-kilimanjaro/:path*",
        permanent: true,
      },
      {
        source: "/safaris/:path*",
        destination: "/tanzania-safaris/:path*",
        permanent: true,
      },
    ];
  },
};

export default withNextIntl(nextConfig);



