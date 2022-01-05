import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { useGetData } from "../hooks/dataApi";

const ProductDetails = () => {
  const { productId } = useParams();
  const { category, subCategory, superCategory } = useParams();
  const {
    data: list,
    isLoading,
    isError,
    error,
  } = useGetData("product-list", `/product-list/${productId}`);

  const {
    title,
    shortDes,
    setincludes,
    productImage,
    outStock,
    oldPrice,
    newPrice,
    name,
    isNew,
    information,
    inStock,
    discount,
    description,
  } = list?.data || {};

  return (
    <Layout>
      <div className="pb-16 mt-5 grid grid-cols-2 gap-8 text-gray-900">
        <div className="">Image</div>
        <div className="">
          <h2 className="font-medium text-3xl uppercase">{name}</h2>
          <div className="py-5 flex gap-x-5">
            <span className="line-through text-2xl">AED {oldPrice}</span>
            <span className="text-2xl text-red-500">AED {newPrice}</span>
            <div className="px-5 text-md bg-red-500 text-white flex justify-center items-center">
              {discount}
            </div>
          </div>
          <div className="mb-4">
            <p className="text-md font-medium">{title}</p>
            <p className="mt-4 text-md">{setincludes}</p>
          </div>
        </div>
        <div className="">
          <h2 className="font-medium text-3xl uppercase mb-5">{name}</h2>
          <p>{description}</p>
        </div>
        <div className="">Information</div>
      </div>
    </Layout>
  );
};

export default ProductDetails;
