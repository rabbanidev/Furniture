import React from "react";
import { useParams } from "react-router-dom";
import Error from "../components/Error";
import { HashLoading } from "../components/Loading";
import { useGetData } from "../hooks/dataApi";
import Product from "./Product";

const ProductList = () => {
  const { category, subCategory, superCategory } = useParams();
  const {
    data: list,
    isLoading,
    isError,
    error,
  } = useGetData("product-list", "/product-list");

  if (isLoading) return <HashLoading />;

  if (isError) return <Error message={error.message} />;

  return (
    <div className="pb-16">
      <div className="my-5">
        <h1 className="pb-2 font-medium text-4xl uppercase">
          {superCategory || subCategory || category}
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {list.data.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
