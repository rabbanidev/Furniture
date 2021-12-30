import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useGlobalContext } from "../../hooks/context";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const signInSchema = yup.object({
  phoneNumber: yup
    .string()
    .required("Phone number is required")
    .matches(phoneRegExp, "Phone number is not valid"),
  password: yup.string().required("Password is required").min(8).max(32),
});

const SignIn = () => {
  const history = useHistory();
  const location = useLocation();
  const value = useGlobalContext();
  const [loading, setLoading] = useState(false);

  let { from } = location.state || { from: { pathname: "/user/dashboard" } };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: { phoneNumber: "12345678", password: "12345678" },
    resolver: yupResolver(signInSchema),
  });
  const { phoneNumber, password } = errors;

  const onSubmit = () => {
    value.setUser("accessToken");
    // history.push(from);
    reset();
    // signIn(data, value.setUser, history, from, reset, setLoading);
  };

  return (
    <div className="bg-secondary w-screen h-screen flex justify-center items-center">
      <div className="mx-3 w-full md:w-9/12 lg:w-6/12">
        <div className="grid grid-cols-5">
          <div className="bg-primary px-5 py-7 hidden md:block col-span-2">
            <div className="h-full flex justify-center items-center">
              <div className="w-44">
                <img className="h-9" src="/images/logo.png" alt="sobhisab" />
                <img className="h-44" src="/images/secure.png" alt="secure" />
                <h3 className="capitalize inline-block text-md text-white font-bold lg:text-xl">
                  Sign in your account
                </h3>
              </div>
            </div>
          </div>
          <div className="bg-white h-100 px-5 py-7 flex items-center col-span-5 md:col-span-3">
            <div>
              <h1 className="pb-2 font-medium capitalize text-xl">
                Signin to your account
              </h1>
              <p className="text-sm text-gray-500">
                Signin to create, discover and connect with the global community
              </p>
              <form className="my-5" onSubmit={handleSubmit(onSubmit)}>
                <div className="my-4">
                  <label className="text-md">Phone Number</label>
                  <input
                    type="text"
                    className={`form-control ${
                      phoneNumber?.message
                        ? "input-border-danger"
                        : "input-border-primary"
                    }`}
                    placeholder="+8801xxxxxxxxx"
                    {...register("phoneNumber")}
                  />
                  <p className="text-red-400">
                    {phoneNumber?.message && phoneNumber?.message}
                  </p>
                </div>
                <div className="my-4">
                  <label className="text-md">Password</label>
                  <input
                    type="password"
                    className={`form-control ${
                      password?.message
                        ? "input-border-danger"
                        : "input-border-primary"
                    }`}
                    placeholder="Your password"
                    {...register("password")}
                  />
                  <p className="text-red-400">
                    {password?.message && password?.message}
                  </p>
                </div>
                <div className="my-4">
                  <button
                    type="submit"
                    className={`btn-primary w-full ${
                      loading ? "cursor-not-allowed" : "cursor-pointer"
                    }`}
                    disabled={loading}
                  >
                    Sign in
                  </button>
                </div>
              </form>
              <div>
                <h3>
                  <Link to="/forget-password" className="text-primary text-sm">
                    Forget password
                  </Link>
                </h3>
                <h3 className="text-sm">
                  Don't have an account?
                  <Link to="/register" className="text-primary pl-1">
                    Register here
                  </Link>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
