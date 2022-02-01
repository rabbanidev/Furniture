import React from "react";
import { useParams } from "react-router-dom";
import Error from "../components/Error";
import { HashLoading } from "../components/Loading";
import { useGetData } from "../hooks/dataApi";
import SingleProduct from "./SingleProduct";

const ProductList = () => {
  const { category, subCategory, superCategory } = useParams();
  const type = superCategory || subCategory || category;
  const {
    data: list,
    isLoading,
    isError,
    error,
  } = useGetData("product-list", `/product-list/${type}`);

  if (isLoading) return <HashLoading />;

  if (isError) return <Error message={error.message} />;

  return (
    <div className="pb-16">
      <div className="my-5">
        <h1 className="pb-2 font-medium text-4xl uppercase">
          {type}
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {list.data.map((product) => (
          <SingleProduct key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
