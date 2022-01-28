import React from "react";
import { admindashboard, userdashboard } from "../../../data/dashboard";
import { useGetDataWithLogin } from "../../../hooks/dataApi";
import Error from "../../Error";
import { HashLoading } from "../../Loading";
import MainMenu from "./MainMenu";

const role = process.env.REACT_APP_ROLE;

const Menu = () => {
  const {
    data: list,
    isLoading,
    isError,
    error,
  } = useGetDataWithLogin("userInfo", "/userinfo");

  if (isLoading) return <HashLoading />;

  if (isError) return <Error message={error.message} />;

  const data = list.data.role === role ? admindashboard : userdashboard;

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
