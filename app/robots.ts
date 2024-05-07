import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://chocoscoding.tech/sitemap.xml",
    host: "https://chocoscoding.tech",
  };
}
