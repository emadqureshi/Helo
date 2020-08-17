import React, { Component } from "react";
import "../Dashboard/Dash.css";
import { NavLink as Link } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import { updatePost, deletePost } from "../../red/reducer";

class Post extends Component {
  constructor() {
    super();
    this.state = {
      isEditing: false,
      newcontent: ""
    };
    this.editSwitch = this.editSwitch.bind(this);
    this.handleContent = this.handleContent.bind(this);
  }
  editSwitch() {
    this.setState({ isEditing: !this.state.isEditing });
  }
  handleContent(input) {
    this.setState({ newcontent: input });
    console.log(this.state.newcontent);
  }
  editPost() {
    console.log(this.props.id);
    let { newcontent } = this.state;
    let { id } = this.props;
    axios
      .put(`/api/editpost/${this.props.id}`, { newcontent })
      .then(post => console.log(post))
      .catch(console.log());
  }
  render() {
    console.log(this.props);
    return (
      <div className="post-container">
        <div>
          <button onClick={this.editSwitch} className="edit-btn">
            Edit
          </button>
          <button onClick={() => this.props.deletePost(this.props.id)}>
            Delete Post
          </button>
        </div>
        <h1>{this.props.title}</h1>
        {this.props.img && <img src={this.props.img} />}
        {this.state.isEditing ? (
          <input onChange={e => this.handleContent(e.target.value)} />
        ) : (
          <p>{this.props.content}</p>
        )}
        <button
          onClick={() =>
            this.props.updatePost(this.state.newcontent, this.props.id)
          }
        >
          Save
        </button>
      </div>
    );
  }
}
const mapStateToProps = state => state;
export default connect(mapStateToProps, { updatePost, deletePost })(Post);