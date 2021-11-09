import React, { Component } from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import "./sign-up.styles.scss";

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-up">
        <h2>Create an Account</h2>
        <span>Sign up with Google or by email</span>

        <form onSubmit={this.handleSubmit}>

          <FormInput 
          name="email"
          onChange={this.handleChange} />
          <FormInput 
          name="password" 
          onChange={this.handleChange} />
          
          <div className="buttons">
            <CustomButton type="submit" > Sign Up </CustomButton>
            <CustomButton type="submit"> Sign Up With Google </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;
