import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://chocos.vercel.app/sitemap.xml",
    host: "https://chocos.vercel.app",
  };
}
