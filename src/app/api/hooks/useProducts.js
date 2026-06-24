'use client';

import { useQuery } from '@tanstack/react-query';
import api from '../../../../lib/axios';

export const fetchProducts = async ({ queryKey }) => {
  const [, { category, sort }] = queryKey;
  const params = {};
  if (category) params.category = category;
  if (sort) params.sort = sort;
  
  const response = await api.get('/services', { params });
  console.log(response.data)

  return response.data;
};

export const fetchProductBySlug = async (slug) => {
  const response = await api.get(`/services/${slug}`);
  console.log(response.data)
  return response.data.data;
};

export function useProducts(filters = {}, options = {}) {
  const { initialData, initialDataUpdatedAt, ...restOptions } = options;

  return useQuery({
    queryKey: ['products', filters],
    queryFn: fetchProducts,
    staleTime: 2 * 60 * 1000,
    ...(initialData && { initialData, initialDataUpdatedAt }),
    ...restOptions,
  });
}

export function useProduct(slug, options = {}) {
  const { initialData, initialDataUpdatedAt, ...restOptions } = options;

  return useQuery({
    queryKey: ['product', slug],
    queryFn: () => fetchProductBySlug(slug),
    enabled: !!slug,
    staleTime: 5 * 60 * 1000,
    ...(initialData && { initialData, initialDataUpdatedAt }),
    ...restOptions,
  });
}