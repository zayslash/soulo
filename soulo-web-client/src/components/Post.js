import React from "react";
import "./Post.css";

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false,
      playlist: []
    };
    this.play = this.play.bind(this);
  }

  play() {
    if (this.state.isPlaying) {
      this.setState({ isPlaying: false });
    } else {
      this.setState({ isPlaying: true });
    }
  }

  render() {
    return (
      <div className="postContainer">
        <div
          onClick={this.play}
          className="avatar"
          alt="pic"
          src={this.props.avatar}
        >
          <i
            className={
              this.state.isPlaying
                ? "fa fa-pause-circle postPlay"
                : "fa fa-play-circle postPlay"
            }
          ></i>
        </div>
        <img className="image" alt="imgHolder" src={this.props.image} />
        <div className="nickname"> {this.props.nickname}</div>
        <div className="caption"> {this.props.caption}</div>
      </div>
    );
  }
}

export default Post;
