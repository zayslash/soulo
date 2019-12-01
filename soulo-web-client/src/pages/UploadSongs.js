import React, { Component } from "react";
import axios from "axios";
import { Progress } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class UploadSongs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null,
      loaded: 0
    };
  }

  checkMimeType = event => {
    //getting file object
    let files = event.target.files;
    //define message container
    let errors = [];
    // list allow mime type
    const types = [
      "audio/aac",
      "audio/mp3",
      "audio/oog",
      "audio/wav",
      "audio/wma"
    ];
    // loop access array
    for (let file of files) {
      // compare file type find doesn't match
      if (types.every(type => file.type !== type)) {
        console.log(file.type);
        // create error message and assign to container
        errors.push(`${file.type} is not a supported format\n`);
      }
    }
    for (let error of errors) {
      // if message not same old that mean has error
      // discard selected file
      toast.error(error);
      event.target.value = null;
    }
    return true;
  };

  maxSelectFile = event => {
    let files = event.target.files;
    if (files.length > 10) {
      const msg = "Only 10 songs can be uploaded at a time";
      event.target.value = null;
      toast.warn(msg);
      return false;
    }
    return true;
  };

  checkFileSize = event => {
    let files = event.target.files;
    let size = 12000000;
    let errors = [];
    for (let file of files) {
      if (file.size > size) {
        errors.push(`${file.type} is too large, please pick a smaller file\n`);
      }
    }
    for (let error of errors) {
      // if message not same old that mean has error
      // discard selected file
      toast.error(error);
      event.target.value = null;
    }
    return true;
  };

  onChangeHandler = event => {
    let files = event.target.files;
    if (
      this.maxSelectFile(event) &&
      this.checkMimeType(event) &&
      this.checkFileSize(event)
    ) {
      // if return true allow to setState
      this.setState({
        selectedFile: files,
        loaded: 0
      });
    }
  };

  onClickHandler = () => {
    const data = new FormData();
    for (let i = 0; i < this.state.selectedFile.length; i++) {
      data.append("file", this.state.selectedFile[i]);
    }
    axios
      .post("/api/upload/", data, {
        onUploadProgress: ProgressEvent => {
          this.setState({
            loaded: (ProgressEvent.loaded / ProgressEvent.total) * 100
          });
        }
      })
      .then(res => {
        // then print response status
        toast.success("upload success");
      })
      .catch(err => {
        // then print response status
        toast.error("upload fail");
      });
  };

  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="offset-md-3 col-md-6">
            <div class="form-group files">
              <label>Upload Your File </label>
              <input
                type="file"
                class="form-control"
                multiple
                onChange={this.onChangeHandler}
              />
            </div>
            <div class="form-group">
              <ToastContainer />
              <Progress max="100" color="success" value={this.state.loaded}>
                {Math.round(this.state.loaded, 2)}%
              </Progress>
            </div>

            <button
              type="button"
              class="btn btn-success btn-block"
              onClick={this.onClickHandler}
            >
              Upload
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default UploadSongs;
