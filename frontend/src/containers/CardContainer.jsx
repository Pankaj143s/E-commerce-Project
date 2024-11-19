import React from "react";
import ProductCard from "../components/cards/ProductCard";
import { useProducts } from "../../context/ProductContext";
import { fetchProducts } from "../services/ProductService";
import MenPage from "../pages/MenPage";
import WomenPage from "../pages/WomenPage";
import Kids from "../pages/KidsPage";
import LaptopPage from "../pages/LaptopPage";
import MobilePage from "../pages/MobilePage";

const CardContainer = () => {
  const { products, loading, error } = useProducts();
  if (loading) {
    return <p>Loading products...</p>;
  }

  if (error) {
    return <p> Error: {error}</p>;
  }

  return (
    <>
      <MenPage products={products} />
      <WomenPage products={products} />
      <Kids products={products} />
      <LaptopPage products={products} />
      <MobilePage products={products} />
    </>
  );
};

export default CardContainer;
