import React from "react";

import SignIn from "../../componentes/sign-in/sign-in.components";
import SignUp from "../../componentes/sign-up/sign-up.components";

import "./sign-in-and-sign-up.styles.scss";

const SignInAndSignUpPage = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndSignUpPage;
