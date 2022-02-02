import React from "react";
import { Link } from "react-router-dom";

const SubMenu = ({ item }) => {
  return (
    <li className="py-1 relative group">
      <Link className="nav-item" to={item.to}>
        {item.title}
      </Link>
      <ul className="sub-nav shadow">
        <div className={`px-8 grid grid-cols-${item.children.length}`}>
          {item.children.map((subItem, index) => (
            <div key={index}>
              <Link to={subItem.to} className="text-black font-medium">
                {subItem.title}
              </Link>
              <ul>
                {subItem.children.length > 0 &&
                  subItem.children.map((superItem, idx) => (
                    <li key={idx}>
                      <Link to={superItem.to} className="text-black block py-2">
                        {superItem.title}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </ul>
    </li>
  );
};

export default SubMenu;
