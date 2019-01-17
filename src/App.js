import React, { Component } from "react";
import "./resources/css/styles.css";
import "./resources/css/styles.scss";
import { Element } from "react-scroll";
import Header from "./components/header-footer/Header";
import Featured from "./components/Featured/index";
import StageInfo from "./components/StageInfo/index";
import Discounts from "./components/Discountes/index";
import Pricing from "./components/Pricing/index";
import Location from "./components/Location/index";
import Footer from "./components/header-footer/Footer";

class App extends Component {
  render() {
    return (
      <div className="App" style={{ height: "1500px" }}>
        <Element name="top">
          <Header />
        </Element>
        <Element name="nfo">
          <Featured />
        </Element>
        <Element name="Highlights">
          <StageInfo />
        </Element>
        <Element name="">
          <Discounts />
        </Element>
        <Element name="Pricing">
          <Pricing />
        </Element>
        <Element name="Location">
          <Location />
        </Element>
        <Footer />
      </div>
    );
  }
}

export default App;
