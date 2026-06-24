import React, { createContext, useMemo, useState, useCallback, useContext } from 'react';
import { handleAsync } from '../handleAsync';
import { getAllProducts } from './ProductData';

export const Product = createContext(null);

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const getServiceProducts = useCallback(async () => {
    const [error, data] = await handleAsync(getAllProducts());

    if (error) {
      console.error("Failed to fetch products:", error.message);
      return null; 
    }

    setProducts(data);
    return data;
  }, []);

  const contextValue = useMemo(
    () => ({
      products,
      getServiceProducts
    }),
    [products, getServiceProducts]
  );

  return (
    <Product.Provider value={contextValue}>
      {children}
    </Product.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(Product);
  if (!context) {
    throw new Error("useProducts must be used within a ProductProvider");
  }
  return context;
};

export default ProductProvider;