import React, { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import Modal from "../../../Modal";

const Search = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        className="px-2 py-1 relative flex justify-center items-center"
        onClick={() => setOpen(true)}
      >
        <IoSearchSharp size={25} />
      </button>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        modalPosition="w-10/12 h-40 absolute top-24 right-10 mx-auto md:right-14 md:w-10/12 lg:w-8/12 lg:right-48 xl:w-5/12 xl:w-8/12 xl:right-64 2xl:right-96"
      >
        <form>
          <h3 className="font-medium text-sm uppercase text-gray-400">
            SEARCH WWW.FURNITURE.COM
          </h3>
          <div className="form-col">
            <input
              className="w-full py-3 border-b border-gray-400 placeholder-gray-500 text-gray-900 focus:outline-none sm:text-sm"
              name="text"
              type="email"
              placeholder="Type to search"
              register=""
            />
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default Search;
