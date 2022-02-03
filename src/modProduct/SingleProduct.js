import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../hooks/context";

const SingleProduct = ({ product }) => {
  const value = useGlobalContext();
  const { id, name, images, oldPrice, newPrice, discount, isNew } = product;

  const cartHandler = () => {
    const currentProduct = {
      productId: product.id,
      name,
      oldPrice,
      newPrice,
      image: images[0].url,
      quantity: 1,
    };
    value.addToCart(currentProduct);
  };

  return (
    <div className="w-full h-96 bg-white group transform duration-300 overflow-hidden hover:-translate-x-1">
      <div className="h-56 relative overflow-hidden max-h-96">
        <img
          className="w-full h-full absolute"
          src={images[0].url}
          alt={name}
        />
        <img
          className="w-full h-full relative transform duration-500 group-hover:opacity-0"
          src={images[1] ? images[1].url : images[0].url}
          alt={name}
        />
      </div>
      <div className="px-3 py-5 text-gray-900 border-t group-hover:border-gray-300">
        <Link
          to={`/product/${id}`}
          className="text-xl font-normal uppercase block break-words"
        >
          {name}
        </Link>
        <div className="flex justify-between py-4">
          <div className="flex gap-x-1">
            <span className="line-through">AED{oldPrice}</span>
            <span>AED {newPrice}</span>
          </div>
          <div className="px-2 text-xs py-0.5 bg-red-500 text-white flex justify-center items-center">
            {discount}
          </div>
        </div>
        <div className="">
          <button
            className="py-1.5 px-2 text-gray-800 text-xs border border-gray-300 hover:bg-gray-800 hover:text-white"
            onClick={cartHandler}
          >
            ADD TO CART
          </button>
        </div>
        {isNew && (
          <div className="absolute top-0 right-0">
            <div className="px-2 text-xs py-0.5 bg-red-500 text-white flex justify-center items-center">
              NEW
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleProduct;
