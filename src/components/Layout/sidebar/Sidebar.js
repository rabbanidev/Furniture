import React from "react";
import { FiLogIn } from "react-icons/fi";
import { useGlobalContext } from "../../../hooks/context";
import Menu from "./Menu";

const Sidebar = () => {
  const value = useGlobalContext();
  return (
    <div className="grid grid-rows-layout w-60 h-screen overflow-hidden bg-dark">
      <div></div>
      {/* <div className="grid place-content-center bg-darker shadow-lg">
        <Link to="/">
          <img className="h-12" src="/images/logo.png" alt="logo" />
        </Link>
      </div> */}
      <div className="overflow-y-auto">
        <div className="grid grid-cols-1 place-items-center p-2">
          <Menu />
        </div>
        <button
          className="py-2 px-5 flex gap-x-3 items-center absolute bottom-5 text-md font-medium"
          onClick={value.signOut}
        >
          <FiLogIn size={20} />
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
