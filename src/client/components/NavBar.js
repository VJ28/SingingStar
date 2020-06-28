import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavBarSection = styled.section`
  box-shadow: 0px 0px 8px 2px lightslategrey;
  position: relative;
  z-index: 100;
`;
const NavBarUL = styled.ul`
  &.show {
    height: 250px;
  }
  position: absolute;
  z-index: 20;
  list-style: none;
  width: 100%;
  height: 0;
  overflow: hidden;
  transition: height 600ms ease-out;
  background-color: #3b1c0c;
`;

const NavBarLi = styled.li`
  width: 100%;
  padding: 15px 10px;
  border-bottom: 2px solid aquamarine;
  text-align: center;
  letter-spacing: 3px;
  > a {
    color: wheat;
  }
`;

const HeaderBar = styled.div`
  background-color: black;
  color: #fff;
`;

const NavBtn = styled.div`
  padding: 7px 10px;
  position: absolute;
`;
const HamburgerLine = styled.div`
  width: 35px;
  height: 5px;
  background-color: #fff;
  margin: 6px 0 6px 6px;
`;

const AppTitle = styled.div`
  text-align: center;
  padding: 15px;
  font-size: 20px;
  color: white;
`;

class NavBar extends React.Component {
  constructor() {
    super();
  }

  handleClick() {
    document.getElementById("nav-bar__ul").classList.toggle("show");
  }

  render() {
    return (
      <NavBarSection id="nav-bar">
        <HeaderBar onClick={this.handleClick} className="header-bar">
          <NavBtn className="nav-btn">
            <HamburgerLine className="hamburger-line"></HamburgerLine>
            <HamburgerLine className="hamburger-line"></HamburgerLine>
            <HamburgerLine className="hamburger-line"></HamburgerLine>
          </NavBtn>
          <AppTitle className="app_title">The Singing Star</AppTitle>
        </HeaderBar>
        <NavBarUL id="nav-bar__ul">
          <NavBarLi>
            <Link to="/" onClick={this.handleClick}>
              Home
            </Link>
          </NavBarLi>
          <NavBarLi>
            <Link to="/register/" onClick={this.handleClick}>
              Enter Contest
            </Link>
          </NavBarLi>
          <NavBarLi>
            <Link to="/winners/" onClick={this.handleClick}>
              Winners
            </Link>
          </NavBarLi>
        </NavBarUL>
      </NavBarSection>
    );
  }
}

export default NavBar;
