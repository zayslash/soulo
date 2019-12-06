import React from "react";
import "./Post.css";

function Post(props) {
  return (
    <div className="MainContainer">
      <div className="nickname"> {props.nickname}</div>
      <img className="avatar" alt="pic" src={props.avatar} />
      <img className="image" alt="imgHolder" src={props.image} />
      <div className="caption"> {props.caption}</div>
    </div>
  );
}

export default Post;
