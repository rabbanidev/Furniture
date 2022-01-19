import React from "react";
import { Link } from "react-router-dom";

const MainMenu = ({ name, link, Icon }) => {
  return (
    <Link className="sidebar-menu-item" to={link}>
      <Icon size={20} />
      <span className="ml-2 text-sm font-medium">{name}</span>
    </Link>
  );
};

export default MainMenu;
