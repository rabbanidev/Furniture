import React from "react";
import { useParams } from "react-router-dom";
import Error from "../../components/Error";
import AdminLayout from "../../components/layout/AdminLayout";
import { HashLoading } from "../../components/Loading";
import TopHeader from "../../components/TopHeader";
import { useGetData } from "../../hooks/dataApi";
import OrderDetails from "./OrderDetails";
import OrderUpdate from "./OrderUpdate";

const OrderEdit = () => {
  const { id } = useParams();
  const {
    data: list,
    error,
    isLoading,
    isError,
    refetch,
  } = useGetData("orders", `/order/${id}`);

  if (isLoading)
    return (
      <AdminLayout>
        <HashLoading />
      </AdminLayout>
    );

  if (isError)
    return (
      <AdminLayout>
        <Error message={error.message} />
      </AdminLayout>
    );

  return (
    <AdminLayout>
      <div className="card w-full max-w-screen-xl">
        <TopHeader
          title="Order Edit"
          btnSave={false}
          path="/admin/order-list"
        />
        <OrderUpdate
          orderId={list.data.id}
          orderStatus={list.data.orderStatus}
          action={refetch}
        />
        <OrderDetails
          orderId={list.data.id}
          orderItems={list.data.orderItems}
          billingDetails={list.data.billingDetails}
          shipiingDetails={list.data.shippingAddress}
          userInfo={list.data.user}
          orderSummary={{
            orderDate: list.data.orderDate,
            shippingPrice: list.data.shippingPrice,
            taxPrice: list.data.taxPrice,
            totalPrice: list.data.totalPrice,
            paymentType: list.data.paymentType,
          }}
        />
      </div>
    </AdminLayout>
  );
};

export default OrderEdit;
