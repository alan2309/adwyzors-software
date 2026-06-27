import { MetadataRoute } from "next";
import { siteConfig, blogPosts } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  // Static routes
  const staticPaths = [
    "",
    "/about",
    "/blog",
    "/contact",
    "/industries",
    "/portfolio",
    "/privacy",
    "/process",
    "/solutions",
    "/terms",
  ];

  const staticRoutes: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "daily",
    priority: path === "" ? 1.0 : 0.8,
  }));

  // Dynamic blog routes
  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...blogRoutes];
}
