import React from "react";
import styled from "styled-components";

let Input = styled.input`
  padding: 8px 12px;
  letter-spacing: 1px;
  margin-top: 4px;
`;
let ErrorBox = styled.div`
  min-height: 16px;
  font-size: 12px;
  color: red;
`;

let InputWrapper = styled.div`
  padding-bottom: 4px;
  padding-top: 4px;
`;

let H3 = styled.h3`
  font-family: cursive, sans-serif;
  margin-bottom: 16px;
`;

let Label = styled.label`
  display: inline-block;
  width: 90px;
`;

let FormWrapper = styled.div`
  margin-top: 20px;
  margin-left: 20px;
`;

let Submit = styled.div`
  padding: 8px 12px;
  border: 1px solid black;
  border-radius: 3px;
  width: 80px;
  text-align: center;
  margin-top: 12px;
`;

let Notice = styled.div`
  font-size: 13px;
  color: red;
  padding: 4px;
  font-weight: 700;
`;

let WaitScreen = styled.div`
  position: absolute;
  top: 0px;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  font-size: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

class Registration extends React.Component {
  state = {
    selectedFile: null,
    nameError: "",
    emailError: "",
    contactError: "",
    cityError: "",
  };

  validateFile = (file) => {
    let pattern = /(.*).(mp3|wav|aiff|acc|ogg)/gi;
    let audioValidationMsg = !pattern.test(file.name)
      ? "File format is not correct. Please upload proper audio file format (mp3, wav, aiff, acc, ogg). "
      : "";
    let fileSizeInMB = file.size / 1000000;
    let fileSizeValidationMsg =
      fileSizeInMB > 6
        ? " File too large. File size should be less than or equal to 6MB."
        : "";
    let errorMsgs = {
      hasError: !!audioValidationMsg || !!fileSizeValidationMsg,
      fileError: `${audioValidationMsg}${fileSizeValidationMsg}`,
    };
    return errorMsgs;
  };

  UNSAFE_componentWillMount() {
    if (typeof document !== "undefined")
      document.body.style.backgroundImage = "linear-gradient(#94BEB7, #37B9E9)";
  }

  UNSAFE_componentWillUnmount() {
    if (typeof document !== "undefined")
      document.body.style.backgroundImage = null;
  }

  onChangeHandler = (event) => {
    const file = event.target.files[0];
    let errorMsgs = this.validateFile(file);
    if (errorMsgs.hasError) {
      event.preventDefault();
      this.setState({ fileError: errorMsgs.fileError });
    } else {
      this.setState({
        selectedFile: file,
      });
    }
  };

  getFieldValues = () => {
    let name = document.querySelector("input[name=name]").value;
    let email = document.querySelector("input[name=email]").value;
    let contact = document.querySelector("input[name=contact]").value;
    let city = document.querySelector("input[name=city]").value;
    return { name, email, contact, city };
  };

  validateInput = () => {
    let { name, email, contact, city } = this.getFieldValues();
    let hasError;
    let errorMsgs = {
      nameError: "",
      emailError: "",
      contactError: "",
      cityError: "",
      fileError: "",
    };
    !name &&
      ((errorMsgs.nameError = "Please enter your name"), (hasError = true));
    !email &&
      ((errorMsgs.emailError = "Please enter your email"), (hasError = true));
    !contact &&
      ((errorMsgs.contactError = "Please enter your contact"),
      (hasError = true));
    !city &&
      ((errorMsgs.cityError = "Please enter your city"), (hasError = true));
    !this.state.selectedFile &&
      ((errorMsgs.fileError =
        "Please upload file (with proper audio extension i.e. mp3, wav, aiff, acc, ogg and file size <= 6MB)"),
      (hasError = true));
    return { errorMsgs, hasError };
  };
  onClickHandler = () => {
    let validationResult = this.validateInput();
    if (validationResult.hasError)
      this.setState({ ...validationResult.errorMsgs });
    else {
      let { name, email, contact, city } = this.getFieldValues();
      let reader = new FileReader();
      reader.onloadend = (e) => {
        let resultFile = e.target.result;
        const data = new FormData();
        data.append("file", resultFile);
        data.append("name", name);
        data.append("email", email);
        data.append("contact", contact);
        data.append("city", city);
        this.setState({
          showWaitScreen: true,
        });
        fetch(`/upload/?originalFileName=${this.state.selectedFile.name}`, {
          method: "POST",
          cache: "no-cache",
          credentials: "same-origin",
          redirect: "follow",
          referrer: "no-referrer",
          body: data,
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error(`${response.status}: ${response.statusText}`);
            }
            alert(
              "Thank you, your application has been submitted. Best of luck!"
            );
            window.location.href = "/";
          })
          .catch(() => {
            alert("Error occured. Please try again later!");
            this.setState({
              showWaitScreen: false,
            });
          });
      };
      reader.readAsBinaryString(this.state.selectedFile);
    }
  };
  render() {
    let {
      nameError,
      emailError,
      contactError,
      cityError,
      fileError,
      showWaitScreen,
    } = this.state;
    return (
      <>
        <Notice>
          Contest will be live till July 10th, 2020. Winners will be announced
          on July 12th, 2020.
        </Notice>
        <FormWrapper>
          <H3>Please submit your entry here!</H3>
          <InputWrapper>
            <Label htmlFor="name">Name: &nbsp;</Label>
            <Input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
            />
            <ErrorBox>{!!nameError ? nameError : null}</ErrorBox>
          </InputWrapper>
          <InputWrapper>
            <Label htmlFor="email">Email: &nbsp;</Label>
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
            />

            <ErrorBox>{!!emailError ? emailError : null}</ErrorBox>
          </InputWrapper>
          <InputWrapper>
            <Label htmlFor="contact">Contact: &nbsp;</Label>
            <Input
              id="contact"
              type="text"
              name="contact"
              placeholder="Enter your contact number"
            />

            <ErrorBox>{!!contactError ? contactError : null}</ErrorBox>
          </InputWrapper>
          <InputWrapper>
            <Label htmlFor="city">City: &nbsp;</Label>
            <Input
              id="city"
              type="text"
              name="city"
              placeholder="Enter your City"
            />
            <ErrorBox>{!!cityError ? cityError : null}</ErrorBox>
          </InputWrapper>
          <InputWrapper>
            <Label htmlFor="file">Upload Audio file: &nbsp;</Label>
            <div>
              <input
                type="file"
                name="file"
                id="file"
                onChange={this.onChangeHandler}
              />
            </div>
            <ErrorBox>{!!fileError ? fileError : null}</ErrorBox>
          </InputWrapper>
          <Submit onClick={this.onClickHandler}>Submit</Submit>
        </FormWrapper>
        {!showWaitScreen && <WaitScreen>Please Wait...</WaitScreen>}
      </>
    );
  }
}

export default Registration;
