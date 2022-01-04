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
  const [headerClass, setHeaderClass] = useState("shadow h-20 text-black");

  useEffect(() => {
    if (pathname === "/") {
      setHeaderClass("text-white");
    }
  }, [pathname]);

  return (
    <div
      className={`px-20 grid grid-cols-12 items-center w-full z-50 ${headerClass}`}
    >
      <div className="col-span-2">
        <Link to="/">
          <img
            src={
              pathname === "/" ? "/images/whitelogo.png" : "/images/logo.png"
            }
            alt="Furniture"
          />
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
