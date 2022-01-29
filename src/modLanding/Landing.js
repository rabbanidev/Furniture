import React from "react";
import Layout from "../components/layout/Layout";
import Banner from "./Banner";
import Footer from "./Footer";
import ProductCategory from "./ProductCategory";

const Landing = () => {
  return (
    <Layout>
      <Banner />
      <ProductCategory />
      <Footer />
    </Layout>
  );
};

export default Landing;
