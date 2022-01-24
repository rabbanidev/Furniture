import React from "react";

const UserOrder = ({ userInfo }) => {
  const { fullName, email } = userInfo;
  return (
    <div className="col-span-3">
      <h3 className="text-xl font-normal block break-words">
        User Information
      </h3>
      <div className="rounded grid grid-cols-1 gap-1">
        <div className="flex justify-between bg-gray-100 p-2">
          <span>User Name</span>
          <span>{fullName}</span>
        </div>
        <div className="flex justify-between bg-gray-100 p-2">
          <span>E-mail</span>
          <span>{email}</span>
        </div>
      </div>
    </div>
  );
};

export default UserOrder;
