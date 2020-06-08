"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const UL = _styledComponents.default.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  margin-bottom: 30px;
`;
const Li = _styledComponents.default.li`
  border: 1px solid gray;
  margin-bottom: 8px !important;
  margin-top: 8px !important;
  width: 95%;
  @media (min-width: 768px) {
    max-width: 320px;
  }
  margin: 0 auto;
`;
const HeadingBlock = _styledComponents.default.div`
  font-size: 18px;
  font-weight: bold;
  padding: 8px;
  font-family: sans-serif;
  background-color: cadetblue;
`;
const FloatRight = _styledComponents.default.div`
  font-size: 16px;
  float: right;
  color: antiquewhite;
`;
const InfoBlock = _styledComponents.default.div`
  padding: 8px;
  background: aliceblue;
  border-bottom: 1px solid gainsboro;
`;
const Audio = _styledComponents.default.audio`
  height: 40px;
`;
const Label = _styledComponents.default.label`
  font-style: oblique;
  font-weight: 500;
`;

class ContestantList extends _react.default.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      contestantList: [],
      isFetching: true
    });

    _defineProperty(this, "shortList", event => {
      let contact = event.target.dataset.contact;
      debugger;
      alert(contact);
    });
  }

  componentDidMount() {
    fetch("/getAll").then(res => res.json()).then(result => {
      this.setState({
        contestantList: result,
        isFetching: false
      });
    });
  }

  render() {
    return this.state.contestantList.length ? /*#__PURE__*/_react.default.createElement(UL, null, this.state.contestantList.map((contestant, index) => /*#__PURE__*/_react.default.createElement(Li, {
      key: index + 1
    }, /*#__PURE__*/_react.default.createElement(HeadingBlock, null, contestant.name, /*#__PURE__*/_react.default.createElement(FloatRight, null, contestant.city)), /*#__PURE__*/_react.default.createElement(InfoBlock, {
      key: "contact" + index
    }, /*#__PURE__*/_react.default.createElement(Label, null, "Contact:"), " ", /*#__PURE__*/_react.default.createElement("a", {
      href: `tel:${contestant.contact}`
    }, contestant.contact)), /*#__PURE__*/_react.default.createElement(InfoBlock, {
      key: "email" + index
    }, /*#__PURE__*/_react.default.createElement(Label, null, "Email:"), " ", contestant.email), /*#__PURE__*/_react.default.createElement(InfoBlock, {
      key: "audio" + index
    }, /*#__PURE__*/_react.default.createElement(Audio, {
      controls: true
    }, /*#__PURE__*/_react.default.createElement("source", {
      src: contestant.filename,
      type: "audio/mp3"
    })))))) : this.state.isFetching ? "Please wait... Fetching contestant list." : "No Contestant Found";
  }

}

var _default = ContestantList;
exports.default = _default;