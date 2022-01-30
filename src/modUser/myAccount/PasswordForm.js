import React from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FiArrowRight } from "react-icons/fi";
import PrimaryButton from "../../components/button/PrimaryButton";
import { useForm } from "react-hook-form";
import Input from "../../components/Input";

const schema = yup.object({
  fullName: yup.string().required("Full Name is required"),
  password: yup.string().required("Please provide a valid password"),
  passwordMin: yup
    .string()
    .oneOf([yup.ref("password"), null])
    .min(8, "Error"),
  passwordLC: yup
    .string()
    .oneOf([yup.ref("password"), null])
    .matches(/[a-z]/, "Error"),
  passwordUC: yup
    .string()
    .oneOf([yup.ref("password"), null])
    .matches(/[A-Z]/, "Error"),
});

const PasswordForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <form className="my-7">
      <h5 className="mb-2 font-medium font-lg">Password Change</h5>
      <div className="form-col">
        <div className="grid md:grid-cols-2">
          <Input
            name="fullName"
            type="password"
            placeholder="Full Name *"
            register={register}
            passwordShow={true}
            // errorMessage={email?.message}
          />
        </div>
        <div className="grid md:grid-cols-2">
          <Input
            name="fullName"
            type="text"
            placeholder="Full Name *"
            register={register}
            // errorMessage={email?.message}
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
  );
};

export default PasswordForm;
