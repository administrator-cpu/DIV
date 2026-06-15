import { DIV_PRODUCTS } from '../constants/productsData';

export default function sitemap() {
  const baseUrl = 'https://thediv.in'; // Replace with your production domain

  // 1. Define all your static routes
  const staticRoutes = [
    '',
    '/about',
    '/services',
    '/products',
    '/careers',
    '/support',
    '/contact',
    '/privacy',
    '/terms',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }));

  // 2. Dynamically pull your products (Samadhan, Bahi Khata, Connect CRM)
  const productRoutes = DIV_PRODUCTS.map((product) => ({
    url: `${baseUrl}/products/${product.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.9, // High priority for your money pages
  }));

  return [...staticRoutes, ...productRoutes];
}