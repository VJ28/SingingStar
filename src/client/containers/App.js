import React from "react";
import NavBar from "../components/NavBar";
import AppRoute from "../routes/index";
class App extends React.Component {
  render() {
    return (
      <>
        <NavBar />
        <section className="body-container">
          <AppRoute />
        </section>
        <section className="footer">
          &copy; 2020 Made by{" "}
          <a href="mailto:vijaymourya28@gmail.com" style={{ color: "white" }}>
            Vijay Mourya
          </a>
          .
        </section>
      </>
    );
  }
}

export default App;
