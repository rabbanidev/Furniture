import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const signUpSchema = yup.object({
  otp: yup.string().required("OTP is required"),
  newPassword: yup.string().required("New Password is required").min(8).max(32),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("newPassword"), null], "Passwords Don't Match"),
});

const ResetPassword = () => {
  const { id } = useParams();
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signUpSchema),
  });
  const { otp, newPassword, confirmPassword } = errors;

  const onSubmit = (data) => {
    const resetInfo = { ...data, id };
  };

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
                  Want to reset password?
                </h3>
              </div>
            </div>
          </div>
          <div className="bg-white h-100 px-5 py-2 col-span-5 md:col-span-3">
            <div className="mt-24">
              <h1 className="pb-2 font-medium capitalize text-xl">
                Want to reset password?
              </h1>
              <form className="my-5" onSubmit={handleSubmit(onSubmit)}>
                <div className="my-3">
                  <label className="text-md">OTP</label>
                  <input
                    type="text"
                    className={`form-control ${
                      otp?.message
                        ? "input-border-danger"
                        : "input-border-primary"
                    }`}
                    placeholder="Your your otp"
                    {...register("otp")}
                  />
                  <p className="text-red-400">{otp?.message && otp?.message}</p>
                </div>
                <div className="my-3">
                  <label className="text-md">New password</label>
                  <input
                    type="password"
                    className={`form-control ${
                      newPassword?.message
                        ? "input-border-danger"
                        : "input-border-primary"
                    }`}
                    placeholder="New password"
                    {...register("newPassword")}
                  />
                  <p className="text-red-400">
                    {newPassword?.message && newPassword?.message}
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
