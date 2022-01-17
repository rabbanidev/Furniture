import React from "react";
import { Link } from "react-router-dom";
import Cart from "./cart/Cart";
import DesktopNavbar from "./DesktopNavbar";
import Search from "./search/Search";
import User from "./user/User";

const Header = () => {
  return (
    <div
      className={`px-3 bg-white w-full grid grid-cols-2 items-center shadow-sm z-50 lg:grid-cols-12 md:px-5 lg:px-10 xl:px-16 2xl:px-24`}
    >
      <div className="lg:col-span-2">
        <Link to="/">
          <img src={"/images/logo.png"} alt="Furniture" />
        </Link>
      </div>
      <div className="hidden lg:block lg:col-span-8">
        <DesktopNavbar />
      </div>
      <div className="flex justify-end gap-x-2 lg:col-span-2">
        <Search />
        <Cart />
        <User />
      </div>
    </div>
  );
};

export default Header;
// grid justify-between items-center
