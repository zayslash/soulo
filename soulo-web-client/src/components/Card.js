import React from "react";
import "./card.css";

function Card(props) {
  return (
    <div className="Cont">
      <div className="Cover">
        <img className="Image" alt="imgHolder" src={props.image} />
      </div>
      <div className="Content">
        <div className="Wrapper">
          <div className="Title"> {props.title} </div>
          <div className="Caption">{props.caption}</div>
          <div className="Subtitle">{props.subtitle}</div>
        </div>
      </div>
    </div>
  );
}

export default Card;
