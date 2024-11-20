import React from "react";
import { useProducts } from "../../context/ProductContext";
import ProductCard from "../components/cards/ProductCard";

const ElectronicsPage = () => {
  const { products, loading, error, searchQuery } = useProducts();

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error: {error}</p>;

  const electronicsProducts = products.filter(
    (product) => product.category_id === 4
  );

  const searchFilter = electronicsProducts.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h2 className="text-4xl font-bold text-red-800 w-fit mx-auto mt-4">
        Electronics Page
      </h2>
      <div className="flex flex-col md:flex-row justify-center items-center flex-wrap gap-4 max-w-screen-2xl p-6 mx-auto">
        {searchFilter.map((product, index) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default ElectronicsPage;
