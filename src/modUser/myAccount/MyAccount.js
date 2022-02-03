import React from "react";
import { NavLink } from "react-router-dom";
import Error from "../../components/Error";
import Layout from "../../components/layout/Layout";
import { HashLoading } from "../../components/Loading";
import { useGetData } from "../../hooks/dataApi";
import Menubar from "../Menubar";
import PasswordForm from "./PasswordForm";
import UserForm from "./UserForm";

const MyAccount = () => {
  const {
    data: list,
    isLoading,
    isError,
    error,
  } = useGetData("userInfo", "/userinfo");

  if (isLoading)
    return (
      <Layout>
        <HashLoading />
      </Layout>
    );

  if (isError)
    return (
      <Layout>
        <Error message={error.message} />
      </Layout>
    );

  const role = list.data.role === process.env.REACT_APP_ROLE;

  return (
    <Layout>
      <div className="grid gap-4 lg:grid-cols-6">
        {role ? (
          <NavLink
            className="my-2 pr-5 py-1 lg:block"
            activeClassName="text-red-500"
            to="/user/my-account"
          >
            <span className="text-sm font-medium">My Profile</span>
          </NavLink>
        ) : (
          <Menubar />
        )}
        {/*  */}
        <div className="card w-full max-w-screen-xl lg:col-span-5">
          <div className="flex justify-between px-0 pb-2">
            <h1 className="text-2xl font-medium">My Profile</h1>
          </div>
          <UserForm
            defaultValues={{
              fullName: list.data.fullName,
              email: list.data.email,
            }}
          />
          <PasswordForm />
        </div>
      </div>
    </Layout>
  );
};

export default MyAccount;
