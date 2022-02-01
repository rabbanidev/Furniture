import React from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FiArrowRight, FiEye } from "react-icons/fi";
import PrimaryButton from "../../components/button/PrimaryButton";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { FaEyeSlash } from "react-icons/fa";
import { usePostData } from "../../hooks/dataApi";
import toast from "react-hot-toast";

const schema = yup.object({
  oldPassword: yup
    .string()
    .required("Old password is required")
    .min(8, "Old password must be at least 8 characters")
    .max(16, "Old password must be at most 16 characters"),
  newPassword: yup
    .string()
    .required("New password is required")
    .min(8, "New password must be at least 8 characters")
    .max(16, "New password must be at most 16 characters"),
  confirmPassword: yup
    .string()
    .required("Confirm password is required")
    .oneOf([yup.ref("newPassword"), null], "Passwords does n't match"),
});

const PasswordForm = () => {
  const { mutateAsync } = usePostData();
  const [submitting, setSubmitting] = useState(false);
  const [toggle, setToggle] = useState(false);
  const passwordType = toggle ? "text" : "password";
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { oldPassword, newPassword, confirmPassword } = errors;

  const onSubmit = async (formData) => {
    try {
      const { status } = await mutateAsync({
        path: "/user/update-password",
        formData: formData,
      });
      if (status === 204) {
        toast.success("Password change successfully.");
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
    <form className="my-7" onSubmit={handleSubmit(onSubmit)}>
      <h5 className="mb-2 font-medium font-lg">Password Change</h5>
      <div className="form-col">
        <div className="grid md:grid-cols-2">
          <div className="form-row">
            <input
              type={passwordType}
              className="form-control"
              placeholder="Old Password *"
              {...register("oldPassword")}
            />
            <p className="text-red-400 text-sm">{oldPassword?.message}</p>
            <span
              className="px-2 py-2 absolute top-0.5 right-0 cursor-pointer"
              onClick={() => setToggle(!toggle)}
            >
              {toggle ? <FiEye /> : <FaEyeSlash />}
            </span>
          </div>
        </div>
        <div className="grid md:grid-cols-2">
          <div className="form-row">
            <input
              type={passwordType}
              className="form-control"
              placeholder="New Password *"
              {...register("newPassword")}
            />
            <p className="text-red-400 text-sm">{newPassword?.message}</p>
          </div>
        </div>
        <div className="grid md:grid-cols-2">
          <div className="form-row">
            <input
              type={passwordType}
              className="form-control"
              placeholder="Confirm Password *"
              {...register("confirmPassword")}
            />
            <p className="text-red-400 text-sm">{confirmPassword?.message}</p>
          </div>
        </div>
        <PrimaryButton
          btnText="UPDATE"
          Icon={FiArrowRight}
          type="submit"
          btnWidth="w-24"
          disabled={submitting}
        />
      </div>
    </form>
  );
};

export default PasswordForm;
