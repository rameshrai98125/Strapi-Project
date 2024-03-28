import React from "react";
import { useNavigate } from "react-router-dom";

const Product = ({ products }) => {
  const navigate = useNavigate();
  return (
    <>
      {products?.map((product) => (
        <div
          onClick={() => navigate("/product/" + product.id)}
          key={product.id}
          className="max-w-sm  cursor-pointer transition duration-700 ease-in-out rounded hover:scale-105 overflow-hidden shadow-lg"
        >
          <div className="w-52 h-56">
            <img
              src={
                import.meta.env.VITE_APP_SERVER_BASE_URL +
                product.attributes.img.data[0].attributes.url
              }
              alt={product.attributes.title}
              className="w-full h-full   object-cover"
            />
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">
              {product.attributes.title}
            </div>
            <p className="text-gray-700 text-base">
              ${product.attributes.price}
            </p>
          </div>
          <div className="px-6 py-4">
            <button className="bg-blue-500 transition duration-700 ease-in-out hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default Product;
