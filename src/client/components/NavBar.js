import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  constructor() {
    super();
  }

  handleClick() {
    document.getElementById("nav-bar__ul").classList.toggle("show");
  }

  render() {
    return (
      <>
        <section id="nav-bar">
          <div onClick={this.handleClick} className="header-bar">
            <div className="nav-btn">
              <div className="hamburger-line"></div>
              <div className="hamburger-line"></div>
              <div className="hamburger-line"></div>
            </div>
            <div className="app_title">The Singing Star</div>
          </div>
          <ul id="nav-bar__ul">
            <li>
              <Link to="/" onClick={this.handleClick}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/register/" onClick={this.handleClick}>
                Enter Contest
              </Link>
            </li>
          </ul>
        </section>
      </>
    );
  }
}

export default NavBar;
