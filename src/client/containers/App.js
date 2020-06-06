import React from "react";
import NavBar from "../components/NavBar";
import AppRoute from "../routes/index";
// import style from "../styles/homepage.scss";
// import styles from "../styles/nav-bar.scss";
class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <NavBar />
        <section className="body-container">
          <AppRoute />
        </section>
        <section className="footer">&copy; 2019 Made by Vijay Mourya.</section>
      </>
    );
  }
}

export default App;
