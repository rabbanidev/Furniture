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

  const { shipping, sizeing, assistance, storeMail } =
    list.data.information || {};

  const defaultValues = {
    name: list.data.name,
    type: list.data.type,
    oldPrice: list.data.oldPrice,
    newPrice: list.data.newPrice,
    inStock: list.data.inStock,
    title: list.data.title,
    setincludes: list.data.setincludes,
    shortDes: list.data.shortDes,
    information: {
      // shipping: list.data.information.shipping,
      // sizeing: list.data.information.sizeing,
      // assistance: list.data.information.assistance,
      // storeMail: list.data.information.storeMail,
    },
    description: list.data.description,
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
