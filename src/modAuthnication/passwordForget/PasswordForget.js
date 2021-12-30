import React, { useState } from "react";
import * as yup from "yup";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const passwordForgetSchema = yup.object({
  phoneNumber: yup
    .string()
    .required("Phone number is required")
    .matches(phoneRegExp, "Phone number is not valid"),
});

const PasswordForget = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(passwordForgetSchema),
  });
  const { phoneNumber } = errors;

  const onSubmit = (data) => {};

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
                  Forget your password
                </h3>
              </div>
            </div>
          </div>
          <div className="bg-white h-100 px-5 py-7 flex items-center col-span-5 md:col-span-3">
            <div>
              <h1 className="pb-2 font-medium capitalize text-xl">
                Forgot password
              </h1>
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
                  <button
                    type="submit"
                    className={`btn-primary w-full ${
                      loading ? "cursor-not-allowed" : "cursor-pointer"
                    }`}
                    disabled={loading}
                  >
                    Forget Password
                  </button>
                </div>
              </form>
              <div>
                <h3 className="text-sm">
                  Did you remembered your password?
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

export default PasswordForget;
