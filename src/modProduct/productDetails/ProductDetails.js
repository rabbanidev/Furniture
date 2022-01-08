import React from "react";
import { useParams } from "react-router-dom";
import Error from "../../components/Error";
import Layout from "../../components/layout/Layout";
import { HashLoading } from "../../components/Loading";
import { useGetData } from "../../hooks/dataApi";
import Description from "./Description";
import Details from "./Details";
import Image from "./Image";
import Information from "./Information";

const ProductDetails = () => {
  const { productId } = useParams();
  const {
    data: list,
    isLoading,
    isError,
    error,
  } = useGetData("product-list", `/product-list/${productId}`);

  const {
    title,
    shortDes,
    setincludes,
    productImages,
    outStock,
    oldPrice,
    newPrice,
    name,
    information,
    inStock,
    discount,
    description,
  } = list?.data || {};

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
      <div className="pb-16 mt-5 grid grid-cols-1 gap-8 text-gray-900 lg:grid-cols-2">
        <Image productImages={productImages} />
        <Details
          productId={productId}
          name={name}
          oldPrice={oldPrice}
          newPrice={newPrice}
          discount={discount}
          title={title}
          setincludes={setincludes}
          shortDes={shortDes}
          inStock={inStock}
          outStock={outStock}
        />
        <Description description={description} />
        <Information information={information} />
      </div>
    </Layout>
  );
};

export default ProductDetails;
