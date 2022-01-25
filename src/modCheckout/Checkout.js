import React, { useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import BillingDetails from "./BillingDetails";
import CheckoutPayment from "./CheckoutPayment";
import Order from "./Order";
import ShippingAddress from "./ShippingAddress";
import { useGlobalContext } from "../hooks/context";
import { total } from "../calculate";
import { usePostData } from "../hooks/dataApi";
import toast from "react-hot-toast";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const schema = yup.object().shape({
  firstName: yup.string().required("First name is required").min(4).max(10),
  lastName: yup.string().required("Last name is required").min(4).max(10),
  country: yup.string().required("Country is required"),
  streetAddress: yup.string().required("Street address is required"),
  city: yup.string().required("City is required"),
  phone: yup
    .string()
    .required("Phone is required")
    .matches(phoneRegExp, "Phone number is not valid"),
  email: yup
    .string()
    .email("Please enter a valid email address.")
    .required("Email is required"),
  // Shipping diffrent address schema
  // shippingFirstName: yup
  //   .string()
  //   .required("First name is required")
  //   .min(4)
  //   .max(10),
  // shippingLastName: yup
  //   .string()
  //   .required("Last name is required")
  //   .min(4)
  //   .max(10),
  // shippingCountry: yup.string().required("Country is required"),
  // shippingStreetAddress: yup.string().required("Street address is required"),
  // shippingCity: yup.string().required("City is required"),
  // shippingDistrict: yup.string().required("District is required"),
});

const Checkout = () => {
  const value = useGlobalContext();
  const { mutateAsync } = usePostData();
  const [submitting, setSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    const billingDetails = {
      firstName: data.firstName,
      lastName: data.lastName,
      companyName: data.companyName,
      country: data.country,
      streetAddress: data.streetAddress,
      apartment: data.apartment,
      city: data.city,
      state: data.state,
      phone: data.phone,
      email: data.email,
    };
    const shippingAddress = {
      firstName: data.shippingFirstName,
      lastName: data.shippingLastName,
      companyName: data.shippingCompanyName,
      country: data.shippingCountry,
      streetAddress: data.shippingStreetAddress,
      apartment: data.shippingApartment,
      city: data.shippingCity,
      district: data.shippingDistrict,
      postalCode: data.shippingPostalCode,
      orderNotes: data.shippingOrderNotes,
    };
    const formData = {
      cartItems: value.cartItems,
      billingDetails,
      shippingAddress,
      taxPrice: 0,
      shippingPrice: 0,
      totalPrice: Number(total(value.cartItems)),
    };
    setSubmitting(true);
    try {
      const { status, data } = await mutateAsync({
        path: "/add-order",
        formData: formData,
      });
      if (status === 201) {
        console.log(data);
        toast.success(data.message);
        reset();
      }
    } catch (error) {
      if (error.response) {
        toast.error("Response : " + error.response.data.message);
      } else if (error.request) {
        toast.error("Request : " + error.message);
      } else {
        toast.error("Error :", error.message);
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="pb-16 mt-5 text-gray-600">
        <div className="mb-6">
          <h1 className="pb-2 font-medium text-4xl uppercase">Checkout</h1>
        </div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <BillingDetails register={register} errors={errors} />
          <Order />
          <ShippingAddress register={register} errors={errors} />
          <CheckoutPayment submitting={submitting} />
        </div>
      </div>
    </form>
  );
};

export default Checkout;
