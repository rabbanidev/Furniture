import React from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaSignInAlt } from "react-icons/fa";
import { useHistory, useLocation } from "react-router-dom";
import { useGlobalContext } from "../../../../hooks/context";
import { usePostData } from "../../../../hooks/dataApi";
import PrimaryButton from "../../../button/PrimaryButton";
import Input from "../../../Input";
import ToggleMode from "./ToggleMode";
import toast from "react-hot-toast";

const schema = yup.object().shape({
  fullName: yup.string().required("Full Name is required."),
  email: yup
    .string()
    .email("Please enter a valid email address.")
    .required("Email is required"),
  password: yup.string().required("Password is required").min(8).max(16),
});

const SignUp = ({ setToggle }) => {
  const history = useHistory();
  const location = useLocation();
  const value = useGlobalContext();
  const { mutateAsync } = usePostData();
  const [submitting, setSubmitting] = useState(false);

  let { from } = location.state || { from: { pathname: "/user/my-account" } };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: { email: "admin@gmail.com", password: "12345678" },
    resolver: yupResolver(schema),
  });

  const { fullName, email, password } = errors;

  const onSubmit = async (formData) => {
    setSubmitting(true);
    try {
      const { status, data } = await mutateAsync({
        path: "/auth/signup",
        formData: formData,
      });
      if (status === 201) {
        reset();
        toast.success(data.message);
        value.setUser(data.token);
        history.push(from);
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
    <div>
      <h3 className="font-medium text-md uppercase text-gray-800">
        CREATE ACCOUNT
      </h3>
      <form className="my-7" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-col">
          <Input
            name="fullName"
            type="text"
            placeholder="Full Name *"
            register={register}
            errorMessage={fullName?.message}
          />
          <Input
            name="email"
            type="email"
            placeholder="Email address*"
            register={register}
            errorMessage={email?.message}
          />
          <Input
            name="password"
            type="password"
            placeholder="Password*"
            register={register}
            errorMessage={password?.message}
          />
          <PrimaryButton
            btnText="SIGN UP"
            Icon={FaSignInAlt}
            type="submit"
            btnWidth="w-32"
            disabled={submitting}
          />
        </div>
      </form>
      {setToggle && (
        <ToggleMode
          toogleArray={[
            { label: "LOGIN", value: "signin" },
            { label: "FORGET PASSWORD", value: "forgetpassword" },
          ]}
          setToggle={setToggle}
        />
      )}
    </div>
  );
};

export default SignUp;
