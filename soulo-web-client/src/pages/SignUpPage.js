/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import "./loginPage.css";
import TextInput from "../common/textInput";
import validate from "../common/validate";
import auth from "../services/auth";
import { NavLink, Redirect } from "react-router-dom";

class SignUpPage extends React.Component {
  constructor() {
    super();
    this.state = {
      userId: null,
      formIsValid: false, //we will use this to track the overall form validity

      formControls: {
        first_name: {
          value: "",
          placeholder: "First Name",
          valid: false,
          touched: false,
          validationRules: {
            minLength: 3,
            isRequired: true
          }
        },
        last_name: {
          value: "",
          placeholder: "Last Name",
          valid: false,
          touched: false,
          validationRules: {
            minLength: 3,
            isRequired: true
          }
        },
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
    auth.signup(formData).then(user => {
      this.setState({ userId: user.id });
    });
  };

  render() {
    if (auth.isAuthenticated) {
      return (
        <Redirect
          to={{
            pathname: "/home",
            id: this.state.userId
          }}
        />
      );
    }
    return (
      <div
        className="Container"
        style={{
          width: "120vw",
          height: "120vh",
          position: "fixed",
          top: "-10vh",
          // bottom: "60vh",
          left: "-10vw",
          zIndex: -1
        }}
      >
        <div className="logcard signupl">
          <h1>Sign up</h1>
          <form onSubmit={this.formSubmitHandler}>
            <TextInput
              name="first_name"
              type={"text"}
              placeholder={this.state.formControls.first_name.placeholder}
              value={this.state.formControls.first_name.value}
              onChange={this.changeHandler}
              touched={this.state.formControls.first_name.touched}
              valid={this.state.formControls.first_name.value}
            />
            <TextInput
              name="last_name"
              type={"text"}
              placeholder={this.state.formControls.last_name.placeholder}
              value={this.state.formControls.last_name.value}
              onChange={this.changeHandler}
              touched={this.state.formControls.last_name.touched}
              valid={this.state.formControls.last_name.value}
            />
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
            <p>
              Already a member?
              <NavLink className="nav-link" exact to="/login">
                login
              </NavLink>
            </p>
          </div>
        </div>
        <video className="background_video" autoPlay loop muted>
          <source src="/soulection.mp4" type="video/mp4" />
          <source
            src="https://player.vimeo.com/video/239482445"
            type="video/ogg"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  }
}

export default SignUpPage;
