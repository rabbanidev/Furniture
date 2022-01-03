import React, { useState } from "react";
import { IoPersonSharp } from "react-icons/io5";
import Modal from "../../../Modal";
import ForgetPassword from "./ForgetPassword";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const User = () => {
  const [open, setOpen] = useState(false);
  const [toggle, setToggle] = useState("signin");

  return (
    <div className="relative">
      <button
        className="px-2 py-1 relative flex justify-center items-center"
        onClick={() => setOpen(true)}
      >
        <IoPersonSharp size={25} />
      </button>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        modalPosition="w-10/12 min-h-96 absolute top-24 right-9 md:right-14 lg:w-6/12 lg:right-16 xl:w-5/12 xl:right-36 2xl:right-80"
      >
        {toggle === "signin" && <SignIn setToggle={setToggle} />}
        {toggle === "signup" && <SignUp setToggle={setToggle} />}
        {toggle === "forgetpassword" && (
          <ForgetPassword setToggle={setToggle} />
        )}
      </Modal>
    </div>
  );
};

export default User;
