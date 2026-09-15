import { MetadataRoute } from 'next';
import { services } from '@/lib/data/services';
import { projects } from '@/lib/data/projects';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ['', '/about', '/services', '/projects', '/quotation', '/contact'].map(
    (path) => ({
      url: `${siteUrl}${path}`,
      lastModified: new Date()
    })
  );

  const serviceRoutes = services.map((s) => ({
    url: `${siteUrl}/services/${s.slug}`,
    lastModified: new Date()
  }));

  const projectRoutes = projects.map((p) => ({
    url: `${siteUrl}/projects/${p.slug}`,
    lastModified: new Date()
  }));

  return [...staticRoutes, ...serviceRoutes, ...projectRoutes];
}
