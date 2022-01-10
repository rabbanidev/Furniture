import React from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { FaSignInAlt } from "react-icons/fa";
import PrimaryButton from "../../../button/PrimaryButton";
import Input from "../../../Input";
import ToggleMode from "./ToggleMode";
import { useHistory, useLocation } from "react-router-dom";
import { useGlobalContext } from "../../../../hooks/context";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email address.")
    .required("Email is required"),
  password: yup.string().required("Password is required").min(6).max(12),
});

const SignIn = ({ setToggle }) => {
  const history = useHistory();
  const location = useLocation();
  const value = useGlobalContext();

  let { from } = location.state || { from: { pathname: "/user/profile" } };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: { email: "abc@gmail.com", password: "12045678" },
    resolver: yupResolver(schema),
  });

  const { email, password } = errors;

  const onSubmit = (data) => {
    value.setUser("accessToken");
    history.push(from);
    reset();
  };

  return (
    <div>
      <h3 className="font-medium text-md uppercase text-gray-800">Login</h3>
      <form onSubmit={handleSubmit(onSubmit)} className="my-7">
        <div className="form-col">
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
            btnText="LOGIN"
            Icon={FaSignInAlt}
            type="submit"
            btnWidth="w-32"
          />
        </div>
      </form>

      {setToggle && (
        <ToggleMode
          toogleArray={[
            { label: "CREATE ACCOUNT", value: "signup" },
            { label: "FORGET PASSWORD", value: "forgetpassword" },
          ]}
          setToggle={setToggle}
        />
      )}
    </div>
  );
};

export default SignIn;
