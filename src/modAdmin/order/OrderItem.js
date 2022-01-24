import React from "react";
import { ListCol, ListHeader } from "../../components/ListCol";

const OrderItem = ({ orderItems }) => {
  return (
    <div className="list-wrapper">
      <div className="md:grid grid-cols-4 list-header">
        <ListHeader label="Name" />
        <ListHeader label="Quantity" />
        <ListHeader label="Price" />
        <ListHeader label="Total Price" />
      </div>
      {orderItems.map((item, index) => (
        <div key={index} className="grid grid-cols-1 md:grid-cols-4 list-body">
          <ListCol label="Name : " value={item.name} />
          <ListCol label="Quantity : " value={item.type} />
          <ListCol label="Price : " value={item.newPrice} />
          <ListCol label="Total Price : " value={item.newPrice} />
        </div>
      ))}
    </div>
  );
};

export default OrderItem;
