import React from "react";

const ProductCard = ({ product }) => {
  return (
    <>
      <div className="w-full max-w-xs p-4  bg-red-100 rounded-md space-y-3 overflow-hidden ">
        <div className="overflow-hidden">
          <img
            src={product.image_url}
            className="w-full rounded-md  hover:scale-110 transition-all duration-500 ease-in-out "
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
