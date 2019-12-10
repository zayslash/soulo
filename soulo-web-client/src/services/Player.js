import React, { Component } from "react";
import songlist from "../songs";
import "./playerStyle/_global.scss";
import "./playerStyle/main.scss";
import "./playerStyle/_variables.scss";
import "./playerStyle/_player.scss";

// import "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";

class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      currentTitle: "",
      currentArtist: "",
      currentImage: "",
      isplaying: false,
      progressbar: 0,
      volumebar: 100,
      volumeup: true,
      currentTime: "00:00",
      totalTime: "00:00",
      loop: false,
      shuffle: false
    };

    this.history = [];
    this.player = new Audio();
    this.startPlayer = this.startPlayer.bind(this);
    this.PlayOrPause = this.PlayOrPause.bind(this);
    this.playNext = this.playNext.bind(this);
    this.playPrev = this.playPrev.bind(this);
    this.onBarClick = this.onBarClick.bind(this);
    this.onVolumeClick = this.onVolumeClick.bind(this);
    this.toggleVolume = this.toggleVolume.bind(this);
    this.toggleLoop = this.toggleLoop.bind(this);
    this.toggleShuffle = this.toggleShuffle.bind(this);
  }

  startPlayer() {
    const currentSong = songlist[this.state.currentIndex];
    this.player.src = currentSong.src;
    this.player.load();
    this.setState({
      currentTitle: currentSong.title,
      currentArtist: currentSong.artistname,
      currentImage: currentSong.image,
      isplaying: true
    });
    this.player.play();
  }

  PlayOrPause() {
    if (this.player.paused) {
      this.player.play();
      this.setState({ isplaying: true });
    } else {
      this.player.pause();
      this.setState({ isplaying: false });
    }
  }

  playNext() {
    if (this.state.shuffle) {
      this.history.push(this.state.currentIndex);
      this.setState(
        { currentIndex: Math.floor(Math.random() * songlist.length) },
        function() {
          this.startPlayer();
        }
      );
    } else {
      if (this.state.currentIndex === songlist.length - 1) {
        this.player.pause();
        this.setState({ isplaying: false });
      } else {
        this.history.push(this.state.currentIndex);
        this.setState(
          { currentIndex: this.state.currentIndex + 1 },
          function() {
            this.startPlayer();
          }
        );
      }
    }
  }

  playPrev() {
    if (this.history[this.history.length - 1] >= 0) {
      this.setState({ currentIndex: this.history.pop() }, function() {
        this.startPlayer();
      });
    } else {
      this.player.pause();
      this.setState({ isplaying: false });
    }
  }

  convertTime(seconds) {
    let min = Math.floor(seconds / 60);
    let sec = seconds % 60;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
    this.setState({ currentTime: min + ":" + sec });
  }

  totalTime(seconds) {
    let min = Math.floor(seconds / 60);
    let sec = seconds % 60;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
    this.setState({ totalTime: min + ":" + sec });
  }

  onBarClick(e) {
    const offsetX = e.nativeEvent.offsetX;
    const offsetWidth = e.nativeEvent.target.offsetWidth;
    const percent = offsetX / offsetWidth;
    this.player.currentTime = percent * this.player.duration;
  }

  onVolumeClick(e) {
    const offsetX = e.nativeEvent.offsetX;
    const offsetWidth = e.nativeEvent.target.offsetWidth;
    this.player.volume = offsetX / offsetWidth;
  }

  toggleLoop() {
    this.setState({ loop: !this.state.loop }, function() {
      this.player.loop = this.state.loop;
    });
  }

  toggleShuffle() {
    this.setState({ shuffle: !this.state.shuffle });
  }

  toggleVolume() {
    this.setState({ volumeup: !this.state.volumeup }, function() {
      if (!this.state.volumeup) {
        this.player.volume = 0;
      } else {
        this.player.volume = 1;
      }
    });
  }

  componentDidMount() {
    const that = this;
    this.startPlayer();
    this.player.addEventListener(
      "volumechange",
      function() {
        that.setState({ volumebar: this.volume * 100 });
      },
      false
    );
    this.player.addEventListener("timeupdate", function() {
      let position = this.currentTime / this.duration;
      that.setState({ progressbar: position * 100 });
      that.convertTime(Math.round(this.currentTime));
      that.totalTime(Math.round(this.duration));
      if (this.ended) {
        that.playNext();
      }
    });
  }

  render() {
    return (
      <div id="player">
        <div className="now-playing">
          <img src={this.state.currentImage} alt={this.state.currentTitle} />
          <div className="meta">
            <span className="title">{this.state.currentTitle}</span>
            <span className="artist-name">{this.state.currentArtist}</span>
          </div>
        </div>

        <div className="middle-part">
          <div className="controls">
            <button
              className={
                this.state.shuffle
                  ? "no-style shuffle active"
                  : "no-style shuffle"
              }
              onClick={this.toggleShuffle}
            >
              <i className="fa fa-random"></i>
            </button>
            <button className="no-style" onClick={this.playPrev}>
              <i className="fa fa-step-backward"></i>
            </button>
            <button className="no-style play" onClick={this.PlayOrPause}>
              <i
                className={
                  this.state.isplaying
                    ? "far fa-pause-circle"
                    : "far fa-play-circle"
                }
              ></i>
            </button>
            <button className="no-style" onClick={this.playNext}>
              <i className="fa fa-step-forward"></i>
            </button>
            <button
              className={
                this.state.loop ? "no-style loop active" : "no-style loop"
              }
              onClick={this.toggleLoop}
            >
              <i className="fa fa-sync-alt"></i>
            </button>
          </div>
          <div className="progress">
            <div className="progress-time">{this.state.currentTime}</div>
            <div className="bar" onClick={this.onBarClick}>
              {this.state.progressbar > 0 && (
                <div style={{ width: this.state.progressbar + "%" }}></div>
              )}
            </div>
            <div className="progress-time">{this.state.totalTime}</div>
          </div>
        </div>

        <div className="volume-bar">
          <button className="no-style" onClick={this.toggleVolume}>
            <i
              className={
                this.state.volumeup ? "fa fa-volume-up" : "fa fa-volume-off"
              }
            ></i>
          </button>
          <div className="fill" onClick={this.onVolumeClick}>
            <div style={{ width: this.state.volumebar + "%" }}></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Player;
