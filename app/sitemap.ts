import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: MetadataRoute.Sitemap = [
    {
      url: "",
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "/experience",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "/projects",
      changeFrequency: "weekly",
      priority: 0.5,
    },
  ];

  return routes.map(({ url, ...rest }) => ({
    ...rest,
    url: `https://chocoscoding.tech${url}`,
    lastModified: new Date(),
  }));
}
