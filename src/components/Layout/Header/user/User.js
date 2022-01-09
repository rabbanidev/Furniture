import React, { useState } from "react";
import { FiLogIn } from "react-icons/fi";
import { IoPersonSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { userData } from "../../../../data/header";
import { useGlobalContext } from "../../../../hooks/context";
import Modal from "../../../Modal";
import ForgetPassword from "./ForgetPassword";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const User = () => {
  const value = useGlobalContext();
  const [open, setOpen] = useState(false);
  const [toggle, setToggle] = useState("signin");
  const { user, signOut } = value;

  return (
    <div className="relative">
      {!user ? (
        <>
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
        </>
      ) : (
        <div className="relative group">
          <img
            src="https://image.flaticon.com/icons/png/512/149/149071.png"
            className="w-8 h-8 rounded cursor-pointer"
            alt=""
          />
          <ul className="user-dropdown">
            {userData.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.to}
                  className="py-2 px-9 flex gap-x-3 items-center text-sm font-normal"
                >
                  <item.Icon size={20} />
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <button
                className="py-2 px-9 flex gap-x-3 items-center text-sm font-normal"
                onClick={signOut}
              >
                <FiLogIn size={20} />
                Logout
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default User;
