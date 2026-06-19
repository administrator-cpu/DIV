import ProductsClient from './ProductsClient';

async function getProducts() {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api/v1';
    const res = await fetch(`${apiUrl}/services`, { cache: 'no-store' });
    const data = await res.json();
    return {
      products: data.data || [],
      fetchedAt: Date.now(),
    };
  } catch {
    return { products: [], fetchedAt: Date.now() };
  }
}

export const metadata = {
  title: 'Products - DIV',
  description: 'Explore our comprehensive range of digital products and business solutions.',
};

export default async function ProductsPage() {
  const { products, fetchedAt } = await getProducts();
  return <ProductsClient initialProducts={products} initialDataUpdatedAt={fetchedAt} />;
}