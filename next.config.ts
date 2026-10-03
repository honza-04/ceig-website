import type { NextConfig } from "next";

// Pages from the previous Wix site at ceig.cz. Search engines and old links
// still point at them, so send each one to the matching section of the new
// single-page site instead of a 404.
const services = [
  "stavebni-a-prepravni-stroje",
  "stavebni-a-prepravni-stroje-copy",
  "osobni-a-dodavkove-vozy-copy",
  "nakladni-vozy-a-autobusy-copy",
  "financovani-technologii-a-stroju-co",
];

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/elektromobilita", destination: "/#eu-funding", permanent: true },
      { source: "/contact", destination: "/#contact", permanent: true },
      { source: "/portfolio", destination: "/#partners", permanent: true },
      ...services.map((slug) => ({
        source: `/${slug}`,
        destination: "/#services",
        permanent: true,
      })),
    ];
  },
};

export default nextConfig;
