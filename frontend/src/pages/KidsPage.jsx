import React from "react";
import { useProducts } from "../../context/ProductContext";
import ProductCard from "../components/cards/ProductCard";

const KidsPage = () => {
  const { products, loading, error } = useProducts();

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error: {error}</p>;

  const kidsProducts = products.filter((product) => product.category_id === 3);

  return (
    <div>
      <h2 className="text-4xl font-bold text-red-800 w-fit mx-auto mt-4">
        Kids's Page
      </h2>
      <div className="flex flex-col md:flex-row justify-center items-center flex-wrap gap-4 max-w-screen-2xl p-6 mx-auto">
        {kidsProducts.map((product, index) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default KidsPage;
