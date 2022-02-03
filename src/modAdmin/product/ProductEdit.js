import React from "react";
import { useParams } from "react-router-dom";
import Error from "../../components/Error";
import AdminLayout from "../../components/layout/AdminLayout";
import { HashLoading } from "../../components/Loading";
import TopHeader from "../../components/TopHeader";
import { useGetData } from "../../hooks/dataApi";
import ProductForm from "./ProductForm";

const ProductEdit = () => {
  const { id } = useParams();
  const {
    data: list,
    error,
    isLoading,
    isError,
    refetch,
  } = useGetData("products", `/product/${id}`);

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

  const {
    name,
    type,
    oldPrice,
    newPrice,
    inStock,
    title,
    setincludes,
    shortDes,
    information,
    description,
  } = list.data;

  const defaultValues = {
    name: name,
    type: type,
    oldPrice: oldPrice,
    newPrice: newPrice,
    inStock: inStock,
    title: title,
    setincludes: setincludes,
    shortDes: shortDes,
    shipping: information.shipping,
    sizeing: information.sizeing,
    assistance: information.assistance,
    storeMail: information.storeMail,
    description: description,
    files: null,
  };

  return (
    <AdminLayout>
      <div className="card w-full max-w-screen-xl">
        <TopHeader
          title="Product Edit"
          btnSave={false}
          path="/admin/product-list"
        />
        <ProductForm
          defaultValues={defaultValues}
          action={refetch}
          btnText="Edit"
          path={`/product/edit/${id}`}
          returnPath="/admin/product-list"
        />
      </div>
    </AdminLayout>
  );
};

export default ProductEdit;
