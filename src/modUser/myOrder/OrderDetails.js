import React from "react";
import { useParams } from "react-router-dom";
import Error from "../../components/Error";
import OrderDetailsPage from "../../modAdmin/order/OrderDetails";
import { HashLoading } from "../../components/Loading";
import { useGetData } from "../../hooks/dataApi";
import Steps from "../../components/Steps";
import Layout from "../../components/layout/Layout";
import Menubar from "../Menubar";

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
      <Layout>
        <HashLoading />
      </Layout>
    );

  if (isError)
    return (
      <Layout>
        <Error message={error.message} />
      </Layout>
    );

  return (
    <Layout>
      <div className="grid gap-4 lg:grid-cols-6">
        <Menubar />
        <div className="card w-full max-w-screen-xl lg:col-span-5">
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
        </div>
      </div>
    </Layout>
  );
};

export default OrderDetails;
