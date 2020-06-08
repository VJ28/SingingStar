"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

let Input = _styledComponents.default.input`
  padding: 8px 12px;
  letter-spacing: 1px;
  margin-top
`;
let ErrorBox = _styledComponents.default.div`
  min-height: 16px;
  font-size: 12px;
  color: red;
`;
let InputWrapper = _styledComponents.default.div`
  padding-bottom: 4px;
  padding-top: 4px;
`;
let H3 = _styledComponents.default.h3`
  font-family: cursive, sans-serif;
  margin-bottom: 16px;
`;
let Label = _styledComponents.default.label`
  display: inline-block;
  width: 90px;
`;
let FormWrapper = _styledComponents.default.div`
  margin-top: 20px;
  margin-left: 20px;
`;
let Submit = _styledComponents.default.div`
  padding: 8px 12px;
  border: 1px solid teal;
  border-radius: 3px;
  color: teal;
  width: 80px;
  text-align: center;
  margin-top: 12px;
`;

class Registration extends _react.default.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      selectedFile: null,
      nameError: "",
      emailError: "",
      contactError: "",
      cityError: ""
    });

    _defineProperty(this, "validateFile", file => {
      let pattern = /(.*).(mp3|wav|aiff|acc|ogg)/gi;
      let audioValidationMsg = !pattern.test(file.name) ? "File format is not correct. Please upload proper audio file format (mp3, wav, aiff, acc, ogg). " : "";
      let fileSizeInMB = file.size / 1000000;
      let fileSizeValidationMsg = fileSizeInMB > 6 ? " File too large. File size should be less than or equal to 6MB." : "";
      let errorMsgs = {
        hasError: !!audioValidationMsg || !!fileSizeValidationMsg,
        fileError: `${audioValidationMsg}${fileSizeValidationMsg}`
      };
      return errorMsgs;
    });

    _defineProperty(this, "onChangeHandler", event => {
      const file = event.target.files[0];
      let errorMsgs = this.validateFile(file);

      if (errorMsgs.hasError) {
        event.preventDefault();
        this.setState({
          fileError: errorMsgs.fileError
        });
      } else {
        this.setState({
          selectedFile: file
        });
      }
    });

    _defineProperty(this, "getFieldValues", () => {
      let name = document.querySelector("input[name=name]").value;
      let email = document.querySelector("input[name=email]").value;
      let contact = document.querySelector("input[name=contact]").value;
      let city = document.querySelector("input[name=city]").value;
      return {
        name,
        email,
        contact,
        city
      };
    });

    _defineProperty(this, "validateInput", () => {
      let {
        name,
        email,
        contact,
        city
      } = this.getFieldValues();
      let hasError;
      let errorMsgs = {
        nameError: "",
        emailError: "",
        contactError: "",
        cityError: "",
        fileError: ""
      };
      !name && (errorMsgs.nameError = "Please enter your name", hasError = true);
      !email && (errorMsgs.emailError = "Please enter your email", hasError = true);
      !contact && (errorMsgs.contactError = "Please enter your contact", hasError = true);
      !city && (errorMsgs.cityError = "Please enter your city", hasError = true);
      !this.state.selectedFile && (errorMsgs.fileError = "Please upload file (with proper audio extension i.e. mp3, wav, aiff, acc, ogg and file size <= 6MB)", hasError = true);
      return {
        errorMsgs,
        hasError
      };
    });

    _defineProperty(this, "onClickHandler", () => {
      let validationResult = this.validateInput();
      if (validationResult.hasError) this.setState({ ...validationResult.errorMsgs
      });else {
        let {
          name,
          email,
          contact,
          city
        } = this.getFieldValues();
        let reader = new FileReader();

        reader.onloadend = e => {
          let resultFile = e.target.result;
          const data = new FormData();
          data.append("file", resultFile);
          data.append("name", name);
          data.append("email", email);
          data.append("contact", contact);
          data.append("city", city);
          fetch(`/upload/?originalFileName=${this.state.selectedFile.name}`, {
            method: "POST",
            cache: "no-cache",
            credentials: "same-origin",
            redirect: "follow",
            referrer: "no-referrer",
            body: data
          }).then(response => {
            if (!response.ok) {
              throw new Error(`${response.status}: ${response.statusText}`);
            }

            alert("Thank you, your application has been submitted. Best of luck!");
            window.location.href = "/";
          });
        };

        reader.readAsBinaryString(this.state.selectedFile);
      }
    });
  }

  render() {
    let {
      nameError,
      emailError,
      contactError,
      cityError,
      fileError
    } = this.state;
    return /*#__PURE__*/_react.default.createElement(FormWrapper, null, /*#__PURE__*/_react.default.createElement(H3, null, "Please submit your entry here!"), /*#__PURE__*/_react.default.createElement(InputWrapper, null, /*#__PURE__*/_react.default.createElement(Label, {
      htmlFor: "name"
    }, "Name: \xA0"), /*#__PURE__*/_react.default.createElement(Input, {
      type: "text",
      name: "name",
      id: "name",
      placeholder: "Enter your name"
    }), /*#__PURE__*/_react.default.createElement(ErrorBox, null, !!nameError ? nameError : null)), /*#__PURE__*/_react.default.createElement(InputWrapper, null, /*#__PURE__*/_react.default.createElement(Label, {
      htmlFor: "email"
    }, "Email: \xA0"), /*#__PURE__*/_react.default.createElement(Input, {
      type: "email",
      id: "email",
      name: "email",
      placeholder: "Enter your email"
    }), /*#__PURE__*/_react.default.createElement(ErrorBox, null, !!emailError ? emailError : null)), /*#__PURE__*/_react.default.createElement(InputWrapper, null, /*#__PURE__*/_react.default.createElement(Label, {
      htmlFor: "contact"
    }, "Contact: \xA0"), /*#__PURE__*/_react.default.createElement(Input, {
      id: "contact",
      type: "text",
      name: "contact",
      placeholder: "Enter your contact number"
    }), /*#__PURE__*/_react.default.createElement(ErrorBox, null, !!contactError ? contactError : null)), /*#__PURE__*/_react.default.createElement(InputWrapper, null, /*#__PURE__*/_react.default.createElement(Label, {
      htmlFor: "city"
    }, "City: \xA0"), /*#__PURE__*/_react.default.createElement(Input, {
      id: "city",
      type: "text",
      name: "city",
      placeholder: "Enter your City"
    }), /*#__PURE__*/_react.default.createElement(ErrorBox, null, !!cityError ? cityError : null)), /*#__PURE__*/_react.default.createElement(InputWrapper, null, /*#__PURE__*/_react.default.createElement(Label, {
      htmlFor: "file"
    }, "Upload Audio file: \xA0"), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("input", {
      type: "file",
      name: "file",
      id: "file",
      onChange: this.onChangeHandler
    })), /*#__PURE__*/_react.default.createElement(ErrorBox, null, !!fileError ? fileError : null)), /*#__PURE__*/_react.default.createElement(Submit, {
      onClick: this.onClickHandler
    }, "Submit"));
  }

}

var _default = Registration;
exports.default = _default;