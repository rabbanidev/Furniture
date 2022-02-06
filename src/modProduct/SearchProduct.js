import React from "react";
import { useParams } from "react-router-dom";
import Error from "../components/Error";
import Layout from "../components/layout/Layout";
import { HashLoading } from "../components/Loading";
import { useGetData } from "../hooks/dataApi";
import ProductList from "./ProductList";

const SearchProduct = () => {
  const { keyword } = useParams();
  const {
    data: list,
    isLoading,
    isError,
    error,
  } = useGetData("product-list", `/product-list?name=${keyword}`);

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
      <ProductList items={list.data} type="" />
    </Layout>
  );
};

export default SearchProduct;
