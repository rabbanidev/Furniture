import React from "react";
import { useParams } from "react-router-dom";
import Error from "../components/Error";
import { HashLoading } from "../components/Loading";
import { useGetData } from "../hooks/dataApi";
import Layout from "../components/layout/Layout";
import ProductList from "./ProductList";

const Product = () => {
  const { category, subCategory, superCategory } = useParams();
  const type = superCategory || subCategory || category;
  const {
    data: list,
    isLoading,
    isError,
    error,
  } = useGetData("product-list", `/product-list/${type}`);

  if (isLoading)
    return (
      <Layout>
        <HashLoading />
      </Layout>
    );
  if (isError)
    return (
      <Layout>
        <Error message={error.message} />
      </Layout>
    );

  return (
    <Layout>
      <ProductList items={list.data} type={type} />
    </Layout>
  );
};

export default Product;
