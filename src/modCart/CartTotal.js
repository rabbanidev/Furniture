import React from "react";
import { Link } from "react-router-dom";
import { total } from "../calculate";
import { useGlobalContext } from "../hooks/context";

const CartTotal = () => {
  const value = useGlobalContext();

  return (
    <div className="pb-16 md:flex justify-end">
      <div className="md:w-1/2">
        <div className="border border-gray-200 font-normal text-md">
          <div className="grid grid-cols-3 border-b border-gray-200">
            <div className="col-span-1 px-2 py-4 bg-aliceblue border-r border-gray-200">
              SUBTOTAL
            </div>
            <div className="col-span-2 px-2 py-4">
              AED {total(value.cartItems)}
            </div>
          </div>
          <div className="grid grid-cols-3 border-b border-gray-200">
            <div className="col-span-1 px-2 py-4 bg-aliceblue border-r border-gray-200">
              SHIPPING
            </div>
            <div className="col-span-2 px-2 py-4">Flexible Shipping (Free)</div>
          </div>
          <div className="grid grid-cols-3 border-b border-gray-200">
            <div className="col-span-1 px-2 py-4 bg-aliceblue border-r border-gray-200">
              TOTAL
            </div>
            <div className="col-span-2 px-2 py-4">
              AED {total(value.cartItems)}
            </div>
          </div>
        </div>
        <Link to="/checkout" className="mt-5 w-full text-center btn-secondary">
          PROCEED TO CHECKOUT
        </Link>
      </div>
    </div>
  );
};

export default CartTotal;
