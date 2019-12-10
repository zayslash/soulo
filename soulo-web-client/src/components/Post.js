import React from "react";
import "./Post.css";

function Post(props) {
  return (
    <div className="MainContainer">
      {/* <img className="avatar" alt="pic" src={props.avatar} /> */}
      <img className="image" alt="imgHolder" src={props.image} />
      <div className="nickname"> {props.nickname}</div>
      <div className="caption"> {props.caption}</div>
    </div>
  );
}

export default Post;
