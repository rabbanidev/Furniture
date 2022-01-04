import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/layout/Layout";
import ProductList from "./ProductList";

const ModProductList = () => {
  const { category, subCategory } = useParams();

  console.log("params: " + category, subCategory);

  return (
    <Layout>
      <ProductList />
    </Layout>
  );
};

export default ModProductList;
