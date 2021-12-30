import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useGlobalContext } from "../../hooks/context";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const signUpSchema = yup.object({
  fullName: yup.string().required("Name is requied").min(3).max(32),
  phoneNumber: yup
    .string()
    .required("Phone number is required")
    .matches(phoneRegExp, "Phone number is not valid"),
  password: yup.string().required("Password is required").min(8).max(32),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords Don't Match"),
});

const SignUp = () => {
  const history = useHistory();
  const value = useGlobalContext();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: "Golam Rabbani",
      phoneNumber: "01765891772",
      password: "12345678",
      confirmPassword: "12345678",
    },
    resolver: yupResolver(signUpSchema),
  });
  const { fullName, phoneNumber, password, confirmPassword } = errors;

  const onSubmit = (userInfo) => {};

  return (
    <div className="bg-secondary w-screen h-screen flex justify-center items-center ">
      <div className="mx-3 w-full md:w-9/12 lg:w-6/12">
        <div className="grid grid-cols-5">
          <div className="bg-primary px-5 py-7 hidden md:block col-span-2">
            <div className="h-full flex justify-center items-center">
              <div className="w-44">
                <img className="h-9" src="/images/logo.png" alt="sobhisab" />
                <img className="h-44" src="/images/secure.png" alt="secure" />
                <h3 className="capitalize inline-block text-md text-white font-bold lg:text-xl">
                  Create to your account
                </h3>
              </div>
            </div>
          </div>
          <div className="bg-white h-100 px-5 py-2 col-span-5 md:col-span-3">
            <div>
              <h1 className="pb-2 font-medium capitalize text-xl">
                Signup for free
              </h1>
              <p className="text-sm text-gray-500">
                It's free to signup and only takes a minute.
              </p>
              <form className="my-5" onSubmit={handleSubmit(onSubmit)}>
                <div className="my-3">
                  <label className="text-md">Name</label>
                  <input
                    type="text"
                    className={`form-control ${
                      fullName?.message
                        ? "input-border-danger"
                        : "input-border-primary"
                    }`}
                    placeholder="Your name"
                    {...register("fullName")}
                  />
                  <p className="text-red-400">
                    {fullName?.message && fullName?.message}
                  </p>
                </div>
                <div className="my-3">
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
                <div className="my-3">
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
                <div className="my-3">
                  <label className="text-md">Confirm password</label>
                  <input
                    type="password"
                    className={`form-control ${
                      confirmPassword?.message
                        ? "input-border-danger"
                        : "input-border-primary"
                    }`}
                    placeholder="Confirm password"
                    {...register("confirmPassword")}
                  />
                  <p className="text-red-400">
                    {confirmPassword?.message && confirmPassword?.message}
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
                    Register
                  </button>
                </div>
              </form>
              <div>
                <h3 className="text-sm">
                  Already have an account?
                  <Link to="/" className="text-primary pl-1">
                    Signin
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

export default SignUp;
