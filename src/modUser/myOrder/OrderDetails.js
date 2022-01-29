import React from "react";
import { useParams } from "react-router-dom";
import Error from "../../components/Error";
import AdminLayout from "../../components/layout/AdminLayout";
import OrderDetailsPage from "../../modAdmin/order/OrderDetails";
import { HashLoading } from "../../components/Loading";
import { useGetData } from "../../hooks/dataApi";
import Steps from "../../components/Steps";

const OrderDetails = () => {
  const { id } = useParams();
  const {
    data: list,
    error,
    isLoading,
    isError,
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
        <h1 className="text-2xl font-medium">Order Details</h1>
        <Steps orderStatus={list.data.orderStatus} />
        <OrderDetailsPage
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

export default OrderDetails;
