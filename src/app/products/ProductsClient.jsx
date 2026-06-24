'use client';

import { useEffect, useState } from 'react';
import { useProducts } from '../../app/api/hooks/useProducts';
import ProductGrid from '../../../components/Product/ProductGrid';
import { useQueryClient } from '@tanstack/react-query';

const CATEGORIES = [
  { value: '', label: 'All Products' },
  { value: 'development', label: 'Development' },
  { value: 'design', label: 'Design' },
  { value: 'consulting', label: 'Consulting' },
  { value: 'support', label: 'Support' },
];

const SORT_OPTIONS = [
  { value: 'default', label: 'Default' },
  { value: 'rating', label: 'Highest Rated' },
  { value: 'newest', label: 'Newest' },
];

export default function ProductsClient({ initialProducts, initialDataUpdatedAt }) {
  const [category, setCategory] = useState('');
  const [sort, setSort] = useState('default');
  const queryClient = useQueryClient();
  
  const { data, isLoading, error } = useProducts(
    { category, sort },
    { initialData: { data: initialProducts, source: 'server' }, initialDataUpdatedAt }
  );

  useEffect(() => {
    if (data?.data) {
      data.data.forEach((product) => {
        queryClient.setQueryData(['product', product.slug], product);
      });
    }
  }, [data, queryClient]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-200 via-gray-100 to-gray-300 text-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our comprehensive range of digital solutions built for modern businesses
          </p>
        </div>
      </section>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-wrap gap-4 items-center justify-between bg-white rounded-xl p-4 shadow-sm border border-gray-200">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setCategory(cat.value)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  category === cat.value
                    ? 'bg-gradient-to-r from-pink-500 to-yellow-400 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="px-4 py-2 rounded-lg border border-gray-300 text-sm focus:ring-2 focus:ring-blue-600"
          >
            {SORT_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Grid */}
      <ProductGrid products={data?.data} isLoading={isLoading} error={error} />
    </div>
  );
}