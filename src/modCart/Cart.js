import React from "react";
import { useGlobalContext } from "../hooks/context";
import Layout from "../components/layout/Layout";
import CartTotal from "./CartTotal";
import { Link } from "react-router-dom";
import CartProductList from "./CartProductList";

const Cart = () => {
  const value = useGlobalContext();
  return (
    <Layout>
      {value.cartItems.length > 0 ? (
        <>
          <CartProductList value={value} />
          <CartTotal />
        </>
      ) : (
        <div className="flex justify-center items-center h-96">
          <div>
            <center>
              <img
                src="/images/cart-empty.svg"
                alt="Empty Cart"
                className="w-56 h-56"
              />
              <h2 className="pb-5 font-medium text-4xl">Your Cart is Empty</h2>
              <Link to="/" className="btn-primary">
                <span className="pr-3">Go Back Shopping</span>
              </Link>
            </center>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Cart;
