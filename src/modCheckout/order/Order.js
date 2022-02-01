import React from "react";
import { Link } from "react-router-dom";
import { subTotal, total } from "../../calculate";
import { useGlobalContext } from "../../hooks/context";

const Order = () => {
  const value = useGlobalContext();
  const { cartItems } = value;

  return (
    <div className="text-xs font-medium">
      <p className="text-sm font-medium text-gray-700 mb-4">YOUR ORDER</p>
      <div className="px-5 py-6 grid grid-cols-2 bg-gray-200">
        <div>PRODUCT</div>
        <div>SUB TOTAL</div>
      </div>
      {cartItems.map((cartItem) => (
        <div
          key={cartItem.productId}
          className="px-5 py-4 grid grid-cols-2 border border-t-0 border-gray-200"
        >
          <div>
            <Link
              to={`/product/${cartItem.productId}`}
              className="hover:underline"
            >
              {cartItem.name}
            </Link>
            <span className="pl-3 text-gray-900 font-bold">
              x {cartItem.quantity}
            </span>
          </div>
          <div>AED {subTotal(cartItem.newPrice, cartItem.quantity)}</div>
        </div>
      ))}
      <div className="px-5 py-6 grid grid-cols-2 bg-aliceblue">
        <div className="pb-6">SUB TOTAL</div>
        <div className="pb-6">AED {total(cartItems)}</div>
        <div className="pb-6">SHIPPING</div>
        <div className="pb-6">Flexible Shipping (Free)</div>
      </div>
      <div className="px-5 py-6 grid grid-cols-2 bg-gray-200">
        <div>TOTAL</div>
        <div className="text-gray-900 font-bold text-sm">
          AED {total(cartItems)}
        </div>
      </div>
    </div>
  );
};

export default Order;
