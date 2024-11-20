import { createContext, useContext, useEffect, useState } from "react";
import { fetchProducts } from "../src/services/ProductService";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]); // state to hold fetched products
  const [loading, setLoading] = useState(true); //Loading state
  const [error, setError] = useState(null); //Error state
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts(); // Fetch products from the API
        setProducts(data); //Store products in state
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false); //stop loading
      }
    };
    loadProducts();
  }, []); // Empty dependency array ensures this runs only once when mounted

  return (
    <ProductContext.Provider
      value={{ products, loading, error, searchQuery, setSearchQuery }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => {
  return useContext(ProductContext);
};
