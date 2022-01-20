import React from "react";
import DeleteButton from "../../components/button/DeleteButton";
import EditButton from "../../components/button/EditButton";
import Error from "../../components/Error";
import AdminLayout from "../../components/layout/AdminLayout";
import { ListCol, ListHeader } from "../../components/ListCol";
import { HashLoading } from "../../components/Loading";
import TopHeader from "../../components/TopHeader";
import { useGetData } from "../../hooks/dataApi";

const ProductList = () => {
  const {
    data: list,
    error,
    isLoading,
    isError,
    refetch,
  } = useGetData("products", "/product-list");

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
          title="Product List"
          btnSave={true}
          path="/admin/product-list/add"
        />
        <div className="list-wrapper">
          <div className="md:grid grid-cols-6 list-header">
            <ListHeader label="Name" />
            <ListHeader label="Type" />
            <ListHeader label="New Price" />
            <ListHeader label="Old Price" />
            <ListHeader label="Discount" />
            <ListHeader label="Action" />
          </div>
          {list.data.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-1 md:grid-cols-6 list-body"
            >
              <ListCol label="Name : " value={item.name} />
              <ListCol label="Type : " value={item.type} />
              <ListCol label="New Price : " value={item.newPrice} />
              <ListCol label="Old Price : " value={item.oldPrice} />
              <ListCol label="Discount : " value={item.discount} />
              <div>
                <div className="flex justify-start space-x-2">
                  <EditButton path={`/admin/product-list/edit/${item.id}`} />
                  <DeleteButton action={refetch} path={`/product/${item.id}`} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
};

export default ProductList;
