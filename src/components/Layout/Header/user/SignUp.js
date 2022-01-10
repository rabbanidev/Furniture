import React from "react";
import { useForm } from "react-hook-form";
import { FaSignInAlt } from "react-icons/fa";
import PrimaryButton from "../../../button/PrimaryButton";
import Input from "../../../Input";
import ToggleMode from "./ToggleMode";

const SignUp = ({ setToggle }) => {
  const { register } = useForm();

  return (
    <div>
      <h3 className="font-medium text-md uppercase text-gray-800">
        CREATE ACCOUNT
      </h3>
      <form className="my-7">
        <div className="form-col">
          <Input
            name="fullName"
            type="text"
            placeholder="Full Name **"
            register={register}
          />
          <Input
            name="email"
            type="email"
            placeholder="Email address*"
            register={register}
          />
          <Input
            name="password"
            type="password"
            placeholder="Password*"
            register={register}
          />
          <PrimaryButton
            btnText="SIGN UP"
            Icon={FaSignInAlt}
            type="submit"
            btnWidth="w-32"
          />
        </div>
      </form>
      {setToggle && (
        <ToggleMode
          toogleArray={[
            { label: "LOGIN", value: "signin" },
            { label: "FORGET PASSWORD", value: "forgetpassword" },
          ]}
          setToggle={setToggle}
        />
      )}
    </div>
  );
};

export default SignUp;
