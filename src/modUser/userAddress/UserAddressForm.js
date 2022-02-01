import React from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { usePostData } from "../../hooks/dataApi";
import { useState } from "react";
import SecondaryButton from "../../components/button/SecondaryButton";
import toast from "react-hot-toast";
import BillingDetails from "../../modCheckout/billingDetails/BillingDetails";
import ShippingAddress from "../../modCheckout/shippingAddress/ShippingAddress";

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
});

const UserAddressForm = ({ defaultValues }) => {
  const { mutateAsync } = usePostData();
  const [submitting, setSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: defaultValues,
    resolver: yupResolver(schema),
  });

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
      billingDetails,
      shippingAddress,
    };

    setSubmitting(true);
    try {
      const { status } = await mutateAsync({
        path: "/user/address-book/add",
        formData: formData,
      });
      if (status === 204) {
        toast.success("Update successfully.");
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
      <div className="mt-5 grid grid-cols-1 gap-8 lg:grid-cols-2">
        <BillingDetails register={register} errors={errors} />
        <ShippingAddress register={register} errors={errors} show={true} />
      </div>
      <SecondaryButton btnText="SAVE" type="submit" disabled={submitting} />
    </form>
  );
};

export default UserAddressForm;
