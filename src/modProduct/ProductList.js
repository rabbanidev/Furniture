import React from "react";
import SingleProduct from "./SingleProduct";

const ProductList = ({ items, type }) => {
  return (
    <div className="pb-16">
      <div className="my-5">
        <h1 className="pb-2 font-medium text-4xl uppercase">{type}</h1>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {items.map((product) => (
          <SingleProduct key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
