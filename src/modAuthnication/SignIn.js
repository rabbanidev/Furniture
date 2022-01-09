import React from "react";
import Layout from "../components/layout/Layout";
import SignInFromHeader from "../components/layout/header/user/SignIn";
import ToggleMode from "./ToggleMode";

const SignIn = () => {
  return (
    <Layout>
      <div className="md:flex justify-center items-center">
        <div className="mt-16 md:w-2/3 xl:w-1/2">
          <SignInFromHeader />
          <ToggleMode
            toogleArray={[
              { label: "Create Account", to: "/signup" },
              { label: "Forget Password", to: "/forget-password" },
            ]}
          />
        </div>
      </div>
    </Layout>
  );
};

export default SignIn;
