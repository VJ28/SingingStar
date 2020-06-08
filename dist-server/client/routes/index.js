"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _HomePage = _interopRequireDefault(require("../components/HomePage"));

var _Registration = _interopRequireDefault(require("../components/Registration"));

var _ContestantList = _interopRequireDefault(require("../components/ContestantList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class AppRoute extends _react.default.Component {
  render() {
    return /*#__PURE__*/_react.default.createElement(_reactRouterDom.Switch, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
      exact: true,
      path: "/",
      component: _HomePage.default
    }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
      exact: true,
      path: "/register",
      component: _Registration.default
    }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
      exact: true,
      path: "/contestant",
      component: _ContestantList.default
    }));
  }

}

var _default = AppRoute;
exports.default = _default;