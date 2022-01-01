import React from "react";
import { Link } from "react-router-dom";
import DesktopNavbar from "./DesktopNavbar";

const Header = () => {
  return (
    <div className="px-20 py-7 grid grid-cols-12 items-center w-full absolute top-0 left-0 z-50">
      <div className="col-span-2">
        <Link to="/">
          <img src="/images/logo.png" alt="Furniture" />
        </Link>
      </div>
      <DesktopNavbar />
      <div className="col-span-2 bg-red-400">Image</div>
    </div>
  );
};

export default Header;
