import React from "react";
import Card from "./Card";
import { Link } from "react-router-dom";

function User({ id }) {
  return (
    <Link to={"/profile/" + id}>
      <Card
        title="Rayona"
        image={require("../assets/test.JPG")}
        caption="NoNa"
        subtitle="live"
      />
    </Link>
  );
}

export default User;
