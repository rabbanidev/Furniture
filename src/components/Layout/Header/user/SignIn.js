import React from "react";
import { FaSignInAlt } from "react-icons/fa";
import Input from "../../../Input";

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
          <button
            className="w-32 py-2 px-4 text-gray-800 font-medium border border-gray-300 inline-flex items-center hover:bg-gray-800 hover:text-white"
            type="button"
          >
            <span className="pr-3"> SIGN IN</span>
            <FaSignInAlt />
          </button>
        </div>
      </form>
      <div className="flex gap-x-6">
        <h3
          className="font-medium text-sm uppercase text-gray-400 cursor-pointer"
          onClick={() => setToggle("signup")}
        >
          CREATE ACCOUNT
        </h3>
        <h3
          className="font-medium text-sm uppercase text-gray-400 cursor-pointer"
          onClick={() => setToggle("forgetpassword")}
        >
          FORGET PASSWORD
        </h3>
      </div>
    </div>
  );
};

export default SignIn;
