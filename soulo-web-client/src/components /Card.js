import React from "react";
import "Card.css";

function Card(props) {
  return (
    <div className="Container">
      <div className="Cover">
        <img alt="imgHolder" src={props.image} />
        <div className="Title">{props.title}</div>
      </div>
      <div className="Content">
        <img alt="logo" src={props.logo} />
        <div className="Wrapper">
          <div className="Caption">{props.caption}</div>
          <div className="Subtitle">{props.subtitle}</div>
        </div>
      </div>
    </div>
  );
}

export default Card;
