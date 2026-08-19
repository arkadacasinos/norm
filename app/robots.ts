import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://evacasino83.vercel.app/sitemap.xml',
    host: 'https://evacasino83.vercel.app/',
  }
}
