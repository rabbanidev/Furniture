import React from "react";
import { IoCartSharp } from "react-icons/io5";

const Cart = () => {
  return (
    <div>
      <button className="px-2 py-1 relative flex justify-center items-center">
        <IoCartSharp size={25} />
        <div className="w-5 h-5 text-sm rounded-full bg-red-300 text-white flex items-center justify-center">
          1
        </div>
      </button>
    </div>
  );
};

export default Cart;
