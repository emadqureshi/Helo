import React, { Component } from "react";
import "./Form.css";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {title: '', };
  }
  render() {
    return (
      <div className="Form">
        <h1>New Post</h1>
        <div>
          <p>Title:</p>
          <input />
        </div>
        <div>
          <img
            className="np-image"
            src={
              this.state.url
                ? this.state.url
                : `https://github.com/DevMountain/simulation-3/blob/master/assets/no_image.jpg?raw=true`
            }
          />
          <p>Image URL:</p>
          <input />
        </div>
        <div className="np-textarea">
          <p>Content:</p>
          <textarea />
        </div>
        <button className="submit-post">Post</button>
      </div>
    );
  }
}

export default Form;