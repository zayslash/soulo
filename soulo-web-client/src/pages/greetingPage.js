import React from "react";
import "./greetingPage.css";
import AuthButton from "../components /AuthButton";

function greetingPage() {
  return (
    <div className="MainContainer">
      <h1>Create your own radio Experience</h1>
      <p>
        Sign up and deploy to our mobile app where listeners can subscribe and
        tune in to your shows.
      </p>
      <div className="Title-text">
        <AuthButton />
      </div>
    </div>
  );
}

export default greetingPage;
