import React from "react";
import { FaSignInAlt } from "react-icons/fa";
import Input from "../../../Input";

const ForgetPassword = ({ setToggle }) => {
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
            register=""
          />
          <button
            className="w-56 py-2 px-4 text-gray-800 font-medium border border-gray-300 inline-flex items-center hover:bg-gray-800 hover:text-white"
            type="button"
          >
            <span className="pr-3">FORGET PASSWORD</span>
            <FaSignInAlt />
          </button>
        </div>
      </form>
      <div className="flex gap-x-6">
        <h3
          className="font-medium text-sm uppercase text-gray-400 cursor-pointer"
          onClick={() => setToggle("signin")}
        >
          LOGIN
        </h3>
        <h3
          className="font-medium text-sm uppercase text-gray-400 cursor-pointer"
          onClick={() => setToggle("signup")}
        >
          CREATE ACCOUNT
        </h3>
      </div>
    </div>
  );
};

export default ForgetPassword;
