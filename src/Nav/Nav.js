import React from "react";
import { NavLink as Link } from "react-router-dom";
import "./Nav.css";

const Nav = (props, match) => {
  console.log(props);
  return (
    <div className="nav">
      <div className="action-navs">
        <img
          className="profile-pic"
          src={
            props.user
              ? props.user.profile_img
              : "https://github.com/DevMountain/simulation-3/blob/master/assets/no_image.jpg?raw=true"
          }
        />
        <Link className="nav-link" to="/dashboard">
          <img src="https://github.com/DevMountain/simulation-3/blob/master/assets/home_logo.png?raw=true" />
        </Link>
        <Link className="nav-link" to="/new">
          <img src="https://github.com/DevMountain/simulation-3/blob/master/assets/new_logo.png?raw=true" />
        </Link>
      </div>
      <Link className="nav-link logout" to="/">
        <img src="https://github.com/DevMountain/simulation-3/blob/master/assets/shut_down.png?raw=true" />
      </Link>
    </div>
  );
};

export default Nav;