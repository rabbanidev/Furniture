/* eslint-disable jsx-a11y/alt-text */
import React from "react";

const ProductList = () => {
  return (
    <div className="grid grid-cols-4 gap-8">
      {[1, 2, 3, 4].map((product, index) => (
        <div
          key={index}
          className="group transform duration-300 cursor-pointer bg-gray-700 hover:-translate-y-1"
        >
          <div className="relative overflow-hidden max-h-96">
            <img
              className="absolute"
              src="https://i.ibb.co/YQSj1Mc/download.png"
            />
            <img
              className="relative transform duration-500 group-hover:opacity-0"
              src="https://www.royalfurniture.ae/wp-content/uploads/2021/12/1000-X1000-1-35-600x600.jpg"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
