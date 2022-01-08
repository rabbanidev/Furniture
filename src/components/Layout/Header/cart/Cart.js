import React from "react";
import { IoCartSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../../../hooks/context";

const Cart = () => {
  const value = useGlobalContext();
  return (
    <div>
      <Link
        to="/cart"
        className="px-2 py-1 relative flex justify-center items-center"
      >
        <IoCartSharp size={25} />
        <div className="w-5 h-5 text-sm rounded-full bg-red-300 text-white flex items-center justify-center">
          {value.cartItems.length}
        </div>
      </Link>
    </div>
  );
};

export default Cart;
