import React from "react";
import { IoSearchSharp } from "react-icons/io5";

const Search = () => {
  return (
    <div>
      <button className="px-2 py-1 relative flex justify-center items-center">
        <IoSearchSharp size={25} />
      </button>
    </div>
  );
};

export default Search;
