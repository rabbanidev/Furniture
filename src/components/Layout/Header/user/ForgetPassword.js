import React from "react";
import { useForm } from "react-hook-form";
import { FaSignInAlt } from "react-icons/fa";
import PrimaryButton from "../../../button/PrimaryButton";
import Input from "../../../Input";
import ToggleMode from "./ToggleMode";

const ForgetPassword = ({ setToggle }) => {
  const { register } = useForm();
  return (
    <div>
      <h3 className="font-medium text-md uppercase text-gray-800">
        FORGET PASSWORD
      </h3>
      <p className="text-sm mt-5">
        Lost your password? Please enter your username or email address. You
        will receive a link to create a new password via email.
      </p>
      <form className="my-7">
        <div className="form-col">
          <Input
            name="email"
            type="email"
            placeholder="Email address*"
            register={register}
          />
          <PrimaryButton
            btnText="FORGET PASSWORD"
            Icon={FaSignInAlt}
            type="submit"
            btnWidth="w-56"
          />
        </div>
      </form>
      {setToggle && (
        <ToggleMode
          toogleArray={[
            { label: "LOGIN", value: "signin" },
            { label: "CREATE ACCOUNT", value: "signup" },
          ]}
          setToggle={setToggle}
        />
      )}
    </div>
  );
};

export default ForgetPassword;
