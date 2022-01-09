import { lazy } from "react";

const SignIn = lazy(() => import("./SignIn"));
const SignUp = lazy(() => import("./SignUp"));
const ForgetPassword = lazy(() => import("./ForgetPassword"));

export { SignIn, SignUp, ForgetPassword };
