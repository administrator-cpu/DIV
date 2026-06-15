export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/', '/api/'], // Blocks crawlers from hitting your backend routes directly
    },
    sitemap: 'https://thediv.in/sitemap.xml', // Replace with your domain
  }
}