import React from "react";
import Header from "./header/Header";

const Layout = ({ children }) => {
  return (
    <div className="h-screen w-screen grid grid-cols-1 grid-rows-layout">
      <Header />
      <div className="grid grid-cols-1 overflow-hidden">
        <div className="overflow-y-auto">
          <div className="py-5 px-5 grid grid-cols-1 md:px-5 lg:px-10 xl:px-16 2xl:px-24">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
