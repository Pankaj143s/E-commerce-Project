import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "../../../context/ProductContext";

const ProductDetailsCard = () => {
  const { productId } = useParams();
  const { products } = useProducts();

  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState("");

  useEffect(() => {
    const selectedProduct = products.find(
      (product) => product.id === parseInt(productId)
    );
    if (selectedProduct) {
      setProduct(selectedProduct);
      setMainImage(selectedProduct.image_url);
    }
  }, [productId, products]);
  if (!product) {
    return <p>loading product details</p>;
  }

  return (
    <div className="bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap -mx-4">
          {/* Product Images */}
          <div className="w-full md:w-1/2 px-4 mb-8 ">
            <img
              src={mainImage}
              alt="Product"
              className="w-full h-[350px] md:h-[600px] object-cover rounded-lg shadow-md mb-4 mx-auto"
            />
            <div className="flex gap-4 py-4 justify-center overflow-x-auto">
              {product.thumbnails?.map((thumbnail, index) => (
                <img
                  key={index}
                  src={thumbnail}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-16 h-16 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                  onClick={() => setMainImage(thumbnail)}
                />
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="w-full md:w-1/2 px-4">
            <h2 className="text-3xl font-bold mb-2">{product.name}</h2>
            <p className="text-gray-600 mb-4">SKU: {product.sku || "N/A"}</p>
            <div className="mb-4">
              <span className="text-2xl font-bold mr-2">${product.price}</span>
              {product.originalPrice && (
                <span className="text-gray-500 line-through">
                  ${product.originalPrice}
                </span>
              )}
            </div>
            <div className="flex items-center mb-4">
              <span className="text-yellow-500 text-lg flex items-center">
                ⭐⭐⭐⭐⭐
              </span>
              <span className="ml-2 text-gray-600">(120 reviews)</span>
            </div>
            <p className="text-gray-700 mb-6">{product.description}</p>

            <div className="mb-6">
              <label
                htmlFor="quantity"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Quantity:
              </label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                min="1"
                defaultValue="1"
                className="w-12 text-center rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>

            <div className="flex space-x-4 mb-6">
              <button className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                Add to Cart
              </button>
              <button className="bg-gray-200 text-gray-800 px-6 py-2 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
                Wishlist
              </button>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Key Features:</h3>
              <ul className="list-disc list-inside text-gray-700">
                {product.features?.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsCard;
