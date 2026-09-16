import type { MetadataRoute } from 'next';
import { services } from '@/lib/data/services';
import { getPublishedProjects } from '@/lib/data/projects';
import { siteUrl } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${siteUrl}`, lastModified: now, changeFrequency: 'monthly', priority: 1 },
    { url: `${siteUrl}/services`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${siteUrl}/projects`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${siteUrl}/about`, lastModified: now, changeFrequency: 'yearly', priority: 0.7 },
    { url: `${siteUrl}/our-impact`, lastModified: now, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${siteUrl}/safety`, lastModified: now, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${siteUrl}/maintenance`, lastModified: now, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${siteUrl}/quotation`, lastModified: now, changeFrequency: 'yearly', priority: 0.8 },
    { url: `${siteUrl}/contact`, lastModified: now, changeFrequency: 'yearly', priority: 0.8 },
    { url: `${siteUrl}/privacy`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${siteUrl}/terms`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${siteUrl}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  // Only published projects — draft records must not be advertised to crawlers.
  const projectRoutes: MetadataRoute.Sitemap = getPublishedProjects().map((p) => ({
    url: `${siteUrl}/projects/${p.slug}`,
    lastModified: now,
    changeFrequency: 'yearly',
    priority: 0.6,
  }));

  return [...staticRoutes, ...serviceRoutes, ...projectRoutes];
}
