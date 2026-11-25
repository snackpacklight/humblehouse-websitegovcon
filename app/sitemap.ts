import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["/", "/about", "/services", "/experience", "/capability-statement", "/contact"].map((path) => ({
    url: `https://humblehouseusa.com${path}`,
  }));
}
