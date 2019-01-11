import React, { Component } from "react";
import "./resources/styles.css";
import Header from "./components/header-footer/Header";
import Featured from "./components/Featured/index";
import Footer from "./components/header-footer/Footer";

class App extends Component {
  render() {
    return (
      <div
        className="App"
        style={{ height: "1500px", background: "cornflowerblue" }}
      >
        <Header />
        <Featured />
        body <Footer />{" "}
      </div>
    );
  }
}

export default App;
