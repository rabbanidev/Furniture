import React from "react";
import Error from "../../components/Error";
import Layout from "../../components/layout/Layout";
import { HashLoading } from "../../components/Loading";
import { useGetData } from "../../hooks/dataApi";
import CheckoutForm from "./CheckoutForm";

const Checkout = () => {
  const {
    data: list,
    isLoading,
    isError,
    error,
  } = useGetData("userAddress", "/user-address-book");

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

  const { billingDetails, shippingAddress } = list.data;
  const defaultValues = {
    firstName: billingDetails.firstName,
    lastName: billingDetails.lastName,
    companyName: billingDetails.companyName,
    country: billingDetails.country,
    streetAddress: billingDetails.streetAddress,
    apartment: billingDetails.apartment,
    city: billingDetails.city,
    state: billingDetails.state,
    phone: billingDetails.phone,
    email: billingDetails.email,

    shippingFirstName: shippingAddress.firstName,
    shippingLastName: shippingAddress.lastName,
    shippingCompanyName: shippingAddress.companyName,
    shippingCountry: shippingAddress.country,
    shippingStreetAddress: shippingAddress.streetAddress,
    shippingApartment: shippingAddress.apartment,
    shippingCity: shippingAddress.city,
    shippingDistrict: shippingAddress.district,
    shippingPostalCode: shippingAddress.postalCode,
  };

  return (
    <Layout>
      <CheckoutForm defaultValues={defaultValues} />
    </Layout>
  );
};

export default Checkout;
