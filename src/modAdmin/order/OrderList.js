import moment from "moment";
import React from "react";
import EditButton from "../../components/button/EditButton";
import Error from "../../components/Error";
import AdminLayout from "../../components/layout/AdminLayout";
import { ListCol, ListHeader } from "../../components/ListCol";
import { HashLoading } from "../../components/Loading";
import { useGetData } from "../../hooks/dataApi";

const OrderList = () => {
  const {
    data: list,
    error,
    isLoading,
    isError,
    refetch,
  } = useGetData("orders", "/order-list");

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

  console.log("admin", list.data);

  return (
    <AdminLayout>
      <div className="card w-full max-w-screen-xl">
        <div className="flex justify-between px-0 pb-2">
          <h1 className="text-2xl font-medium">Order List</h1>
        </div>
        <div className="list-wrapper">
          <div className="md:grid grid-cols-7 list-header">
            <ListHeader label="Order Id" />
            <ListHeader label="Name" />
            <ListHeader label="Shipping Address" />
            <ListHeader label="Total Price" />
            <ListHeader label="Date" />
            <ListHeader label="Status" />
            <ListHeader label="Action" />
          </div>
          {list.data.map((item) => {
            const {
              id,
              user,
              shippingAddress,
              totalPrice,
              orderStatus,
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
                <ListCol label="Status : " value={orderStatus.type} />
                <div>
                  <div className="flex justify-start space-x-2">
                    <EditButton path={`/admin/order-list/edit/${id}`} />
                    {/* <DeleteButton
                      action={refetch}
                      path={`/product/${item.id}`}
                    /> */}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </AdminLayout>
  );
};

export default OrderList;
