import React, { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Input from "../../components/Input";
import PrimaryButton from "../../components/button/PrimaryButton";
import { usePostData } from "../../hooks/dataApi";
import toast from "react-hot-toast";

const schema = yup.object({
  fullName: yup.string().required("Full Name is required"),
});

const UserForm = ({ defaultValues }) => {
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

  const { fullName } = errors;

  const onSubmit = async (formData) => {
    setSubmitting(true);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h5 className="mb-2 font-medium font-lg">User Information</h5>
      <div className="form-col">
        <div className="grid md:grid-cols-2">
          <Input
            name="fullName"
            type="text"
            placeholder="Full Name *"
            register={register}
            errorMessage={fullName?.message}
          />
        </div>
        <div className="grid md:grid-cols-2">
          <Input
            name="email"
            type="email"
            placeholder="Email address *"
            register={register}
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
  );
};

export default UserForm;
