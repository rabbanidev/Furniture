import { lazy } from "react";

const SignIn = lazy(() => import("./signIn/SignIn"));
const SignUp = lazy(() => import("./signUp/SignUp"));
const PasswordForgot = lazy(() => import("./passwordForget/PasswordForget"));
const ResetPassword = lazy(() => import("./resetPassword/ResetPassword"));

export { SignIn, SignUp, PasswordForgot, ResetPassword };
