import React from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import "./sign-up.styles.scss";

const SignUp = ({ props }) => (
  <div className="sign-up">
    <h2>Create an Account</h2>
    <span>Sign up with Google or by email</span>
    <form>
      <FormInput name="email" />
      <FormInput name="password" />
      <div className="buttons">
        <CustomButton type="submit"> Sign Up </CustomButton>
        <CustomButton type="submit"> Sign Up With Google </CustomButton>
      </div>
    </form>
  </div>
);

export default SignUp;
