import React from "react";
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";

const AdminLayout = ({ children }) => {
  return (
    <div className="w-screen h-screen text-white overflow-hidden">
      <div className="grid lg:grid-cols-layout w-full h-screen max-w-screen-3xl mx-auto">
        <div className="hidden lg:block">
          <Sidebar />
        </div>
        <div className="grid grid-rows-layout w-full h-screen overflow-hidden bg-light text-dark">
          <Header />
          <div className="overflow-y-auto">
            <div className="grid grid-cols-1 p-4">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
