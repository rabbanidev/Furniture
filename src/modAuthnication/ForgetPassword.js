import React from "react";
import Layout from "../components/layout/Layout";
import ForgetPasswordFromHeader from "../components/layout/header/user/ForgetPassword";
import ToggleMode from "./ToggleMode";

const ForgetPassword = () => {
  return (
    <Layout>
      <div className="md:flex justify-center items-center">
        <div className="mt-16 md:w-2/3 xl:w-1/2">
          <ForgetPasswordFromHeader />
          <ToggleMode
            toogleArray={[
              { label: "Login", to: "/signin" },
              { label: "Create Account", to: "/signup" },
            ]}
          />
        </div>
      </div>
    </Layout>
  );
};

export default ForgetPassword;
