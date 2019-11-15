/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import useForm from "react-hook-form";
import "./loginPage.css";

//I used a hook to save the user Form Validation imported from react-hook-form
//Data returns an Object. obj = {Username : "text", Password : "ptext"}
function loginPage(props) {
  const { register, handleSubmit, errors } = useForm(); // initialise the hook
  const onSubmit = data => {
    console.log(data);
  };

  return (
    <div className="background-image">
      <div className="loginContainer">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label for="fname">Username</label>
          <input className="userField" name="Username" ref={register} />
          <label for="fname">Password</label>
          <input
            className="userField"
            name="Password"
            type="password"
            ref={register({ required: true })}
          />
          {errors.Password && "Password is required."}
          <input type="submit" name="login" />
        </form>
      </div>
    </div>
  );
}

export default loginPage;
