import React from "react";
import Header from "./Header/Header";

const Layout = ({ children }) => {
  return (
    <div className="h-screen w-screen grid grid-cols-1 grid-rows-layout relative">
      <Header />
      <div className="grid grid-cols-1 overflow-hidden">
        <div className="overflow-y-auto">
          <div className="grid grid-cols-1">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
