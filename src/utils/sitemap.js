import { deals } from '../data/deals'

export const generateSitemap = () => {
  const baseUrl = 'https://sheerid.fastdiscountfinder.com'
  const currentDate = new Date().toISOString().split('T')[0]
  
  const staticPages = [
    { url: '', priority: '1.0', changefreq: 'weekly' },
    { url: '/deals', priority: '0.9', changefreq: 'daily' },
    { url: '/about', priority: '0.8', changefreq: 'monthly' },
    { url: '/contact', priority: '0.7', changefreq: 'monthly' }
  ]
  
  const dealPages = deals.map(deal => ({
    url: `/deal/${deal.id}`,
    priority: '0.8',
    changefreq: 'weekly'
  }))
  
  const checkoutPages = deals.map(deal => ({
    url: `/checkout/${deal.id}`,
    priority: '0.6',
    changefreq: 'monthly'
  }))
  
  const allPages = [...staticPages, ...dealPages, ...checkoutPages]
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`
  
  return sitemap
}

export const generateRobotsTxt = () => {
  return `User-agent: *
Allow: /

# Sitemap
Sitemap: https://sheerid.fastdiscountfinder.com/sitemap.xml

# Crawl-delay for respectful crawling
Crawl-delay: 1

# Allow all major search engines
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Slurp
Allow: /

User-agent: DuckDuckBot
Allow: /`
}

