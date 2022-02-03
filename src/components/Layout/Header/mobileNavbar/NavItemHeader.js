import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa";

const NavItemHeader = (props) => {
  const { item } = props;
  const { title, children } = item;
  const [expanded, setExpand] = useState(false);

  const onExpandChange = (e) => {
    e.preventDefault();
    setExpand((expanded) => !expanded);
  };

  return (
    <>
      <button
        type="button"
        className="w-full flex items-center gap-x-1"
        onClick={onExpandChange}
      >
        <span className="my-0.5 text-md uppercase font-medium">{title}</span>
        <FaChevronRight size={8} />
      </button>

      {expanded && (
        <div className="ml-2">
          {children.map((item, index) => {
            const { title, children } = item;

            if (children) {
              return (
                <div key={index}>
                  <NavItemHeader
                    item={{
                      ...item,
                      to: item.to,
                    }}
                  />
                </div>
              );
            }

            return (
              <a
                key={index}
                href={item.to}
                className="mt-0.5 text-md block capitalize font-medium"
              >
                {title}
              </a>
            );
          })}
        </div>
      )}
    </>
  );
};

export default NavItemHeader;
