import moment from "moment";
import React from "react";
import EditButton from "../../components/button/EditButton";
import Error from "../../components/Error";
import AdminLayout from "../../components/layout/AdminLayout";
import { ListCol, ListHeader } from "../../components/ListCol";
import { HashLoading } from "../../components/Loading";
import { useGetData } from "../../hooks/dataApi";

const MyOrder = () => {
  const {
    data: list,
    error,
    isLoading,
    isError,
  } = useGetData("myOrders", "/order-list/my-order");

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
      {list.data.length > 0 ? (
        <div className="card w-full max-w-screen-xl">
          <div className="flex justify-between px-0 pb-2">
            <h1 className="text-2xl font-medium">My Order</h1>
          </div>
          <div className="list-wrapper">
            <div className="md:grid grid-cols-7 list-header">
              <ListHeader label="Order Id" />
              <ListHeader label="Name" />
              <ListHeader label="Shipping Address" />
              <ListHeader label="Total Price" />
              <ListHeader label="Date" />
              <ListHeader label="Payment Type" />
              <ListHeader label="Action" />
            </div>
            {list.data.map((item) => {
              const {
                id,
                user,
                shippingAddress,
                totalPrice,
                paymentType,
                orderDate,
              } = item;

              return (
                <div
                  key={id}
                  className="grid grid-cols-1 md:grid-cols-7 list-body"
                >
                  <ListCol label="Order Id : " value={id} />
                  <ListCol label="Name : " value={user.fullName} />
                  <ListCol
                    label="Shipping Address : "
                    value={`${shippingAddress.streetAddress},${shippingAddress.city}, ${shippingAddress.country}`}
                  />
                  <ListCol label="Total Price : " value={`AED ${totalPrice}`} />
                  <ListCol
                    label="Date : "
                    value={moment.utc(orderDate).local().format("YYYY-MM-DD")}
                  />
                  <ListCol label="Status : " value={paymentType} />
                  <div>
                    <div className="flex justify-start space-x-2">
                      <EditButton path={`/user/my-order/details/${id}`} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <Error message="Your Order is empty." />
      )}
    </AdminLayout>
  );
};

export default MyOrder;
