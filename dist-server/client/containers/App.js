"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _NavBar = _interopRequireDefault(require("../components/NavBar"));

var _index = _interopRequireDefault(require("../routes/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import style from "../styles/homepage.scss";
// import styles from "../styles/nav-bar.scss";
class App extends _react.default.Component {
  constructor() {
    super();
  }

  render() {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_NavBar.default, null), /*#__PURE__*/_react.default.createElement("section", {
      className: "body-container"
    }, /*#__PURE__*/_react.default.createElement(_index.default, null)), /*#__PURE__*/_react.default.createElement("section", {
      className: "footer"
    }, "\xA9 2019 Made by Vijay Mourya."));
  }

}

var _default = App;
exports.default = _default;