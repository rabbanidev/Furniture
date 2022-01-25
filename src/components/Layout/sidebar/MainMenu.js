import React from "react";
import { NavLink } from "react-router-dom";

const MainMenu = ({ name, link, Icon }) => {
  return (
    <NavLink
      className="sidebar-menu-item"
      activeClassName="bg-darker text-gray-300"
      to={link}
    >
      <Icon size={20} />
      <span className="ml-2 text-sm font-medium">{name}</span>
    </NavLink>
  );
};

export default MainMenu;
