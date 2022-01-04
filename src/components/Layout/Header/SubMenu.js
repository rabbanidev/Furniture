import React from "react";
import { Link } from "react-router-dom";

const SubMenu = ({ item }) => {
  return (
    <li className="py-1 relative group">
      <Link className="nav-item" to={item.to}>
        {item.title}
      </Link>
      <ul className="sub-nav shadow">
        <div className={`px-8 grid grid-cols-${item.categories.length}`}>
          {item.categories.map((category, index) => (
            <div key={index}>
              <Link to={category.to} className="text-black font-medium">
                {category.title}
              </Link>
              <ul>
                {category.subCategories.length > 0 &&
                  category.subCategories.map((subCategory, idx) => (
                    <li key={idx}>
                      <Link
                        to={subCategory.to}
                        className="text-black block py-2"
                      >
                        {subCategory.title}
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
