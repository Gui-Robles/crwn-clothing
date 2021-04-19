import React from "react";

import SignIn from "../../componentes/sign-in/sign-in.components";
import SignUp from "../../componentes/sign-up/sign-up.components";

import { SignInAndSignUpContainer } from "./sign-in-and-sign-up.styles";

const SignInAndSignUpPage = () => (
  <SignInAndSignUpContainer>
    <SignIn />
    <SignUp />
  </SignInAndSignUpContainer>
);

export default SignInAndSignUpPage;
