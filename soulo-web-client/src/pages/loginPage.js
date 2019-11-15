/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import "./loginPage.css";
import TextInput from "../common/textInput";
import validate from "../common/validate";
import auth from "../services/auth";
import { NavLink } from "react-router-dom";

class LoginPage extends React.Component {
  constructor() {
    super();
    this.state = {
      formIsValid: false, //we will use this to track the overall form validity

      formControls: {
        email: {
          value: "",
          placeholder: "Email",
          valid: false,
          touched: false,
          validationRules: {
            isEmail: true
          }
        },
        password: {
          value: "",
          placeholder: "Password",
          valid: false,
          touched: false,
          validationRules: {
            isPassword: true
          }
        }
      }
    };
  }

  changeHandler = event => {
    const name = event.target.name;
    const value = event.target.value;

    const updatedControls = {
      ...this.state.formControls
    };
    const updatedFormElement = {
      ...updatedControls[name]
    };
    updatedFormElement.value = value;
    updatedFormElement.touched = true;
    updatedFormElement.valid = validate(
      value,
      updatedFormElement.validationRules
    );

    updatedControls[name] = updatedFormElement;

    let formIsValid = true;
    for (let inputIdentifier in updatedControls) {
      formIsValid = updatedControls[inputIdentifier].valid && formIsValid;
    }

    this.setState({
      formControls: updatedControls,
      formIsValid: formIsValid
    });
  };

  formSubmitHandler = e => {
    e.preventDefault();
    const formData = {};
    for (let formElementId in this.state.formControls) {
      formData[formElementId] = this.state.formControls[formElementId].value;
    }
    console.dir(formData);
    const { email, password } = formData;
    auth.authenticate(email, password).then(response => {
      console.log(response);
    });
  };

  render() {
    return (
      <div className="Container">
        <form onSubmit={this.formSubmitHandler}>
          <TextInput
            name="email"
            type={"email"}
            placeholder={this.state.formControls.email.placeholder}
            value={this.state.formControls.email.value}
            onChange={this.changeHandler}
            touched={this.state.formControls.email.touched}
            valid={this.state.formControls.email.value}
          />
          <TextInput
            name="password"
            type={"password"}
            placeholder={this.state.formControls.password.placeholder}
            value={this.state.formControls.password.value}
            onChange={this.changeHandler}
            touched={this.state.formControls.password.touched}
            valid={this.state.formControls.password.value}
          />

          <input
            type="submit"
            name="login"
            disabled={!this.state.formIsValid}
          />
        </form>
        <div>
          <p> Not a member? </p>
          <NavLink className="nav-link" exact to="/signup">
            signup
          </NavLink>
        </div>
      </div>
    );
  }
}

export default LoginPage;
