import React from "react";
import { FaSignInAlt } from "react-icons/fa";
import PrimaryButton from "../../../button/PrimaryButton";
import Input from "../../../Input";
import ToggleMode from "./ToggleMode";

const SignIn = ({ setToggle }) => {
  return (
    <div>
      <h3 className="font-medium text-md uppercase text-gray-800">Login</h3>
      <form className="my-7">
        <div className="form-col">
          <Input
            name="email"
            type="email"
            placeholder="Email address*"
            register=""
          />
          <Input
            name="password"
            type="password"
            placeholder="Password*"
            register=""
          />
          <PrimaryButton
            btnText="LOGIN"
            Icon={FaSignInAlt}
            type="submit"
            btnWidth="w-32"
          />
        </div>
      </form>
      <ToggleMode
        toogleArray={[
          { label: "CREATE ACCOUNT", value: "signup" },
          { label: "FORGET PASSWORD", value: "forgetpassword" },
        ]}
        setToggle={setToggle}
      />
    </div>
  );
};

export default SignIn;
