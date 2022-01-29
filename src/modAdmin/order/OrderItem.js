import React from "react";
import { Link } from "react-router-dom";
import { subTotal } from "../../calculate";
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
      {orderItems.map((item, index) => {
        const { product, quantity } = item;
        const productTotal = subTotal(product.newPrice, quantity);
        return (
          <div
            key={product._id}
            className="grid grid-cols-1 md:grid-cols-4 list-body"
          >
            <ListCol
              label="Name : "
              value={<Link to={`/product/${product._id}`}>{product.name}</Link>}
            />
            <ListCol label="Quantity : " value={quantity} />
            <ListCol label="Price : " value={`AED ${product.newPrice}`} />
            <ListCol label="Total Price : " value={`AED ${productTotal}`} />
          </div>
        );
      })}
    </div>
  );
};

export default OrderItem;
