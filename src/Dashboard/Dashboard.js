import React, { Component } from "react";
import { connect } from "react-redux";
import { getPosts } from "../../red/reducer";
import "./Dash.css";
import Post from "../Post/Post";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    {
        this.props.user[0] ? this.props.getPosts(this.props.user[0].id) : null;
    }
  }
  render() {
    let posts = this.props.posts.map((e, i) => {
      console.log(e);
      return (
        <Post
          key={i}
          title={e.title}
          img={e.img}
          content={e.content}
          id={e.post_id}
        />
      );
    });
    console.log(`here`, this.props);
    return (
      <div className="Dash">
        <div>
          <iframe
            className="audio"
            width="2.5%"
            height="100"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            
          />
        </div>
        <div className="search-posts-div">
          <input placeholder="Search by Title" />
          <div className="search-buttons">
            <button>Search</button>
            <button>MyPosts</button>
          </div>
        </div>
        {posts}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    posts: state.posts
  };
};

export default connect(mapStateToProps, { getPosts })(Dashboard);