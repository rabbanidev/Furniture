import React from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";

const Sidebar = () => {
  return (
    <div className="grid grid-rows-layout w-60 h-screen overflow-hidden bg-dark">
      <div className="grid place-content-center bg-darker shadow-lg">
        <Link to="/">
          <img className="h-12" src="/images/logo.png" alt="logo" />
        </Link>
      </div>
      <div className="overflow-y-auto">
        <div className="grid grid-cols-1 place-items-center p-2">
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
