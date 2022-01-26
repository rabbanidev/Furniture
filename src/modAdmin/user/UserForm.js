import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useHistory } from "react-router-dom";
import SaveButton from "../../components/button/SaveButton";
import Input from "../../components/Input";
import { usePostData } from "../../hooks/dataApi";

const envRole = process.env.REACT_APP_ROLE;

const UserForm = ({ defaultValues, action, btnText, path, returnPath }) => {
  const history = useHistory();
  const [submitting, setSubmitting] = useState(false);
  const { mutateAsync } = usePostData();
  const { register, handleSubmit } = useForm({
    defaultValues: defaultValues,
  });

  const onSubmit = async (formData) => {
    setSubmitting(true);
    try {
      const { status } = await mutateAsync({
        path: path,
        formData: formData,
      });
      if (status === 204) {
        toast.success("Update Successfully");
        history.push(returnPath);
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
      action();
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        name="fullName"
        type="text"
        label="Username"
        register={register}
        disabled={true}
      />
      <Input
        name="email"
        type="email"
        label="Email"
        register={register}
        disabled={true}
      />
      <select
        className="w-full h-10 px-3 my-3 capitalize bg-gray-200"
        {...register("role")}
      >
        <option className="capitalize">--Select--</option>
        <option className="capitalize" value={envRole}>
          {envRole}
        </option>
        <option className="capitalize" value="user">
          User
        </option>
      </select>
      <SaveButton btnText={btnText} disabled={submitting} />
    </form>
  );
};

export default UserForm;
