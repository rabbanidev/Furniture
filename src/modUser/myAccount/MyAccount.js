import React from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { FiArrowRight } from "react-icons/fi";
import PrimaryButton from "../../components/button/PrimaryButton";
import Error from "../../components/Error";
import Input from "../../components/Input";
import Layout from "../../components/layout/Layout";
import { HashLoading } from "../../components/Loading";
import { useGetData, usePostData } from "../../hooks/dataApi";
import Menubar from "../Menubar";
import PasswordForm from "./PasswordForm";
import { useState } from "react";

const schema = yup.object({
  fullName: yup.string().required("Full Name is required"),
});

const MyAccount = () => {
  const { mutateAsync } = usePostData();
  const [submitting, setSubmitting] = useState(false);
  const {
    data: list,
    isLoading,
    isError,
    error,
  } = useGetData("userInfo", "/userinfo");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { fullName } = errors;

  const onSubmit = async (data) => {
    console.log("data", data);
    // try {
    //   const { status, data } = await mutateAsync({
    //     path: path,
    //     formData: formData,
    //   });
    //   if (status === 201) {
    //     toast.success(data.message);
    //     reset();
    //   }
    //   if (status === 204) {
    //     toast.success("Update successful!");
    //     history.push(returnPath);
    //   }
    // } catch (error) {
    //   if (error.response) {
    //     toast.error("Response : " + error.response.data.message);
    //   } else if (error.request) {
    //     toast.error("Request : " + error.message);
    //   } else {
    //     toast.error("Error :", error.message);
    //   }
    // } finally {
    //   action();
    //   setSubmitting(false);
    // }
  };

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

  // console.log("list", list.data);

  return (
    <Layout>
      <div className="grid gap-4 lg:grid-cols-6">
        <Menubar />
        <div className="card w-full max-w-screen-xl lg:col-span-5">
          <div className="flex justify-between px-0 pb-2">
            <h1 className="text-2xl font-medium">My Profile</h1>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <h5 className="mb-2 font-medium font-lg">User Information</h5>
            <div className="form-col">
              <div className="grid md:grid-cols-2">
                <Input
                  name="fullName"
                  type="text"
                  placeholder="Full Name *"
                  register={register}
                  defaultValue={list.data.fullName}
                  errorMessage={fullName?.message}
                />
              </div>
              <div className="grid md:grid-cols-2">
                <Input
                  name="email"
                  type="email"
                  placeholder="Email address *"
                  register={register}
                  defaultValue={list.data.email}
                  disabled={true}
                />
              </div>
              <PrimaryButton
                btnText="SAVE"
                Icon={FiArrowRight}
                type="submit"
                btnWidth="w-24"
                // disabled={submitting}
              />
            </div>
          </form>
          <PasswordForm />
        </div>
      </div>
    </Layout>
  );
};

export default MyAccount;
