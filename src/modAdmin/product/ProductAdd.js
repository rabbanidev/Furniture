import React from "react";
import AdminLayout from "../../components/layout/AdminLayout";
import TopHeader from "../../components/TopHeader";
import ProductForm from "./ProductForm";

const ProductAdd = () => {
  const defaultValues = {
    name: "",
    type: "",
    oldPrice: 0,
    newPrice: 0,
    inStock: Boolean,
    outStock: Boolean,
    title: "",
    setincludes: "",
    information: {
      shipping: "",
      sizeing: "",
      assistance: "",
      storeMail: "",
    },
    shortDes: [],
    description: "",
  };
  return (
    <AdminLayout>
      <div className="card w-full max-w-screen-xl">
        <TopHeader
          title="Product Add"
          btnSave={false}
          path="/admin/product-list"
        />
        <ProductForm
          defaultValues={defaultValues}
          action={() => {}}
          btnText="সেভ"
          path="/product"
          returnPath="/admin/product-list"
        />
      </div>
    </AdminLayout>
  );
};

export default ProductAdd;
