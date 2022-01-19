import React from "react";
import { dashboard } from "../../../data/adminDashboard";
import MainMenu from "./MainMenu";

const Menu = () => {
  const data = dashboard;
  return (
    <div className="flex flex-col w-56 items-center h-full overflow-hidden text-gray-400">
      <div className="">
        <div className="flex flex-col items-center">
          {data.length > 0 &&
            data.map((item, index) => (
              <MainMenu
                key={index}
                name={item.name}
                link={item.link}
                Icon={item.Icon}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
