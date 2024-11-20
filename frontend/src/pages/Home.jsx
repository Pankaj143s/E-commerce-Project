import React from "react";
import { useProducts } from "../../context/ProductContext";
import ProductCard from "../components/cards/ProductCard";

const Home = () => {
  const { products, loading, error, searchQuery } = useProducts();

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error: {error}</p>;

  // Filter products based on the search query
  const filterProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h2 className="text-4xl font-bold text-red-800 w-fit mx-auto mt-4">
        All Products
      </h2>
      <div className="flex flex-col md:flex-row justify-center items-center flex-wrap gap-4 max-w-screen-2xl p-6 mx-auto">
        {filterProducts.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
