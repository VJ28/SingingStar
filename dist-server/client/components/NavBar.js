"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const NavBarSection = _styledComponents.default.section`
  box-shadow: 0px 0px 8px 2px lightslategrey;
  position: relative;
  z-index: 100;
`;
const NavBarUL = _styledComponents.default.ul`
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
const NavBarLi = _styledComponents.default.li`
  width: 100%;
  padding: 15px 10px;
  border-bottom: 2px solid aquamarine;
  text-align: center;
  letter-spacing: 3px;
  > a {
    color: wheat;
  }
`;
const HeaderBar = _styledComponents.default.div`
  background-color: black;
  color: #fff;
`;
const NavBtn = _styledComponents.default.div`
  padding: 7px 10px;
  position: absolute;
`;
const HamburgerLine = _styledComponents.default.div`
  width: 35px;
  height: 5px;
  background-color: #fff;
  margin: 6px 0 6px 6px;
`;
const AppTitle = _styledComponents.default.div`
  text-align: center;
  padding: 15px;
  font-size: 20px;
  color: white;
`;

class NavBar extends _react.default.Component {
  constructor() {
    super();
  }

  handleClick() {
    document.getElementById("nav-bar__ul").classList.toggle("show");
  }

  render() {
    return /*#__PURE__*/_react.default.createElement(NavBarSection, {
      id: "nav-bar"
    }, /*#__PURE__*/_react.default.createElement(HeaderBar, {
      onClick: this.handleClick,
      className: "header-bar"
    }, /*#__PURE__*/_react.default.createElement(NavBtn, {
      className: "nav-btn"
    }, /*#__PURE__*/_react.default.createElement(HamburgerLine, {
      className: "hamburger-line"
    }), /*#__PURE__*/_react.default.createElement(HamburgerLine, {
      className: "hamburger-line"
    }), /*#__PURE__*/_react.default.createElement(HamburgerLine, {
      className: "hamburger-line"
    })), /*#__PURE__*/_react.default.createElement(AppTitle, {
      className: "app_title"
    }, "The Singing Star")), /*#__PURE__*/_react.default.createElement(NavBarUL, {
      id: "nav-bar__ul"
    }, /*#__PURE__*/_react.default.createElement(NavBarLi, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
      to: "/",
      onClick: this.handleClick
    }, "Home")), /*#__PURE__*/_react.default.createElement(NavBarLi, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
      to: "/register/",
      onClick: this.handleClick
    }, "Enter Contest"))));
  }

}

var _default = NavBar;
exports.default = _default;