import React from "react";
import { Link } from "react-router-dom";
import Cart from "./Cart";
import DesktopNavbar from "./DesktopNavbar";
import Search from "./Search";
import User from "./User";

const Header = () => {
  return (
    <div className="px-20 py-7 grid grid-cols-12 items-center w-full absolute top-0 left-0 z-50 text-white">
      <div className="col-span-2">
        <Link to="/">
          <img src="/images/logo.png" alt="Furniture" />
        </Link>
      </div>
      <div className="col-span-4 md:col-span-8">
        <DesktopNavbar />
      </div>
      <div className="col-span-2 flex gap-x-2">
        <Search />
        <Cart />
        <User />
      </div>
    </div>
  );
};

export default Header;
