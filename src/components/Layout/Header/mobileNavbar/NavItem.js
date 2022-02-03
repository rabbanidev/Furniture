import React from "react";
import NavItemHeader from "./NavItemHeader";

const NavItem = ({ item }) => {
  const { title, to, children } = item;

  if (children) {
    return <NavItemHeader item={item} />;
  }

  return (
    <a href={to} className="mt-0.5 text-md block capitalize font-medium">
      {title}
    </a>
  );
};

export default NavItem;
