import ProductDetailClient from './ProductDetailClient';
import { notFound } from 'next/navigation';

async function getProduct(slug) {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api/v1';
    const res = await fetch(`${apiUrl}/services/${slug}`, { cache: 'no-store' });
    
    if (!res.ok) return null;
    
    const data = await res.json();
    return {
      product: data.data,
      fetchedAt: Date.now(),
    };
  } catch (error) {
    console.error('Failed to fetch product:', error);
    return null;
  }
}

export async function generateMetadata({ params }) {
  // ✅ Await params before accessing
  const { slug } = await params;
  const result = await getProduct(slug);
  
  if (!result) return { title: 'Product Not Found' };
  
  return {
    title: `${result.product.title} - DIV Products`,
    description: result.product.description?.substring(0, 160),
  };
}

export default async function ProductDetailPage({ params }) {
  // ✅ Await params before accessing
  const { slug } = await params;
  const result = await getProduct(slug);
  
  if (!result || !result.product) {
    notFound();
  }

  return <ProductDetailClient product={result.product} initialDataUpdatedAt={result.fetchedAt} />;
}