import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleGoToProduct = () => {
    // const productId = product.id;
    // console.log(productId);
    navigate(`/products/${product.id}`);
  };

  return (
    <>
      <div
        className="w-full max-w-xs p-4  bg-red-100 rounded-md space-y-3 overflow-hidden "
        onClick={handleGoToProduct}
      >
        <div className="overflow-hidden">
          <img
            src={product.image_url}
            className="w-full h-72 object-cover rounded-md  hover:scale-110 transition-all duration-500 ease-in-out "
            alt=""
          />
        </div>
        <h2 className=" text-red-800 font-semibold">{product.name}</h2>
        <p className="text-sm text-red-800 opacity-60">{product.description}</p>
        <div className="flex justify-between items-center">
          <p className="font-bold text-lg text-red-800">${product.price}</p>
          <button className="bg-red-200 hover:bg-red-500 hover:text-red-50 transition-all ease-in-out duration-500 p-2 rounded-md text-red-800   font-bold  text-base">
            Add to cart
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
