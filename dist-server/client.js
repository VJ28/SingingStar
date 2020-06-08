"use strict";

var _react = _interopRequireDefault(require("react"));

var _homepage = _interopRequireDefault(require("./client/styles/homepage.scss"));

var _component = require("@loadable/component");

var _reactDom = require("react-dom");

var _reactRouterDom = require("react-router-dom");

var _App = _interopRequireDefault(require("./client/containers/App"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _component.loadableReady)(() => {
  (0, _reactDom.hydrate)( /*#__PURE__*/_react.default.createElement(_reactRouterDom.BrowserRouter, null, /*#__PURE__*/_react.default.createElement(_App.default, null)), document.getElementById("root"));
});