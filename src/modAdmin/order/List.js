import React from "react";

const List = ({ title, list }) => {
  return (
    <>
      <h3 className="text-xl font-normal block break-words">{title}</h3>
      <div className="rounded grid grid-cols-1 gap-1">
        {list.map((item, index) => (
          <div
            key={index}
            className="flex justify-between bg-gray-100 p-2 odd:bg-gray-200 hover:bg-gray-400 hover:text-white"
          >
            <span>{item.label}</span>
            <span>{item.value}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default List;
