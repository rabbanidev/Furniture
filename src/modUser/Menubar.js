import React from "react";
import { NavLink } from "react-router-dom";
import { userData } from "../data/header";

const Menubar = () => {
  return (
    <div className="text-darker">
      {userData.length > 0 &&
        userData.map((item, index) => (
          <div key={index}>
            <NavLink
              className="my-2 pr-5 py-1 lg:block"
              activeClassName="text-red-500"
              to={item.to}
            >
              <span className="text-sm font-medium">{item.label}</span>
            </NavLink>
          </div>
        ))}
    </div>
  );
};

export default Menubar;
