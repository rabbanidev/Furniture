import React from "react";
import Layout from "../components/layout/Layout";
import Cart from "./Cart";
import CartTotal from "./CartTotal";

const ModCartList = () => {
  return (
    <Layout>
      <Cart />
      <CartTotal />
    </Layout>
  );
};

export default ModCartList;
