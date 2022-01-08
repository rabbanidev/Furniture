import React, { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import Cart from "./cart/Cart";
import DesktopNavbar from "./DesktopNavbar";
import Search from "./search/Search";
import User from "./user/User";

const Header = () => {
  const { pathname } = useLocation();
  const [headerClass, setHeaderClass] = useState(
    "bg-white shadow h-20 text-black"
  );

  useEffect(() => {
    if (pathname === "/") {
      setHeaderClass("bg-white text-black");
    }
  }, [pathname]);

  return (
    <div
      className={`px-3 w-full grid grid-cols-2 items-center z-50 lg:grid-cols-12 md:px-5 lg:px-10 xl:px-16 2xl:px-24 ${headerClass}`}
    >
      <div className="lg:col-span-2">
        <Link to="/">
          <img
            src={
              pathname === "/" ? "/images/whitelogo.png" : "/images/logo.png"
            }
            alt="Furniture"
          />
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
