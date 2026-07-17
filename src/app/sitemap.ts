import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const BASE_URL = "https://selfy.photo";

const SERVICE_ROUTES = [
  "/services/brand-activations",
  "/services/corporate-events",
  "/services/exhibitions",
  "/services/private-parties",
  "/services/weddings",
];

const SECONDARY_ROUTES = [
  "/about",
  "/blog",
  "/careers",
  "/contact",
  "/faq",
  "/partners",
  "/press",
  "/support",
  "/work",
];

const LEGAL_ROUTES = [
  "/cookies-policy",
  "/privacy-policy",
  "/refund-policy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: BASE_URL,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    ...SERVICE_ROUTES.map((route) => ({
      url: `${BASE_URL}${route}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    ...SECONDARY_ROUTES.map((route) => ({
      url: `${BASE_URL}${route}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: route === "/contact" || route === "/work" ? 0.7 : 0.5,
    })),
    ...LEGAL_ROUTES.map((route) => ({
      url: `${BASE_URL}${route}`,
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    })),
  ];
}
