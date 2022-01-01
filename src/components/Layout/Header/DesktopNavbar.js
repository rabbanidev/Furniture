import React from "react";
import { Link } from "react-router-dom";
import { navbarData } from "../../../data/header";
import SubMenu from "./SubMenu";

const DesktopNavbar = () => {
  return (
    <div className="col-span-8 ">
      <nav className="relative px-2 py-2">
        <ul className="flex items-center">
          {navbarData.map((item, index) => (
            <div key={index}>
              {!item.categories ? (
                <li className="py-1 relative group">
                  <Link className="nav-item" to="/">
                    {item.title}
                  </Link>
                </li>
              ) : (
                <SubMenu item={item} />
              )}
            </div>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default DesktopNavbar;
