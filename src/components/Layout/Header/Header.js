import React from "react";
import { Link } from "react-router-dom";
import { useGetDataWithLogin } from "../../../hooks/dataApi";
import MobileSidebar from "../sidebar/MobileSidebar";
import Cart from "./cart/Cart";
import DesktopNavbar from "./desktopNavabar";
import MobileNavbar from "./mobileNavbar";
import Search from "./search/Search";
import User from "./user/User";

const envRole = process.env.REACT_APP_ROLE;

const Header = () => {
  const { data: list } = useGetDataWithLogin("userInfo", "/userinfo");

  return (
    <div
      className={`px-3 bg-white w-full grid grid-cols-2 items-center shadow-sm z-50 md:px-5 lg:grid-cols-12 lg:px-10 xl:px-16 2xl:px-24`}
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
        <Cart role={list?.data.role} envRole={envRole} />
        <User />
        <div className="lg:hidden">
          <MobileSidebar />
          <MobileNavbar />
        </div>
        {list?.data.role === envRole && (
          <Link
            to="/admin/dashboard"
            className="font-semibold mt-1 hover:underline"
          >
            Admin
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
