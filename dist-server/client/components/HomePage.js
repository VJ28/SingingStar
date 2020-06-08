"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const CustomLink = (0, _styledComponents.default)(_reactRouterDom.Link)`
  display: block;
  text-align: center;
  color: white;
  font-size: 20px;
  margin: auto
  width: 100px;
`;

class HomePage extends _react.default.Component {
  constructor() {
    super();
  }

  render() {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("section", {
      className: "section--intro"
    }, /*#__PURE__*/_react.default.createElement("h1", null, "Singing Star 2K2K!"), /*#__PURE__*/_react.default.createElement("p", {
      className: "description"
    }, "A platform to showcase your singing talent and win a smartphone worth \u20B915k.")), /*#__PURE__*/_react.default.createElement("section", {
      className: "section--aboutus"
    }, /*#__PURE__*/_react.default.createElement("h2", null, "About the Competition"), /*#__PURE__*/_react.default.createElement("p", {
      className: "description"
    }, "We are organizing Online Singing Competition for talented singers across Mumbai, India. The platform combines formal judging and popular choice to identify and boost the best talent to stardom.")), /*#__PURE__*/_react.default.createElement("section", {
      className: "section--why-participate"
    }, /*#__PURE__*/_react.default.createElement("h2", null, "Why participate?"), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("ul", null, /*#__PURE__*/_react.default.createElement("li", {
      className: "description"
    }, "Compete from anywhere online as per your convenience."), /*#__PURE__*/_react.default.createElement("li", {
      className: "description"
    }, "Chance to win a smartphone worth \u20B9", " ", /*#__PURE__*/_react.default.createElement("span", {
      style: {
        fontSize: "24px"
      }
    }, "15"), "k."), /*#__PURE__*/_react.default.createElement("li", {
      className: "description"
    }, "Chance to record a song @Studio."), /*#__PURE__*/_react.default.createElement("li", {
      className: "description"
    }, "Oppotunity to get featured on our youtube channel.")))), /*#__PURE__*/_react.default.createElement("section", {
      className: "section--submit-entry"
    }, /*#__PURE__*/_react.default.createElement("h2", null, "Submit your entry!"), /*#__PURE__*/_react.default.createElement(CustomLink, {
      to: "/register/",
      title: "registration link"
    }, "Click here!")));
  }

}
/*
var a = document.getElementsByClassName("html--template")[0].textContent.split("").map(obj => {if(obj != " " && obj != "\n") return `<span>${obj}</span>`; else return obj;})
var p = document.createElement("pre")
p.innerHTML = a.join("")
document.getElementsByClassName("html--template")[0].appendChild(p)
*/


var _default = HomePage;
exports.default = _default;