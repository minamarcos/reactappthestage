import React, { Component } from "react";
import MyBtn from "../Ui/Btn";
import Zoom from "react-reveal/Zoom";

export default class Pricing extends Component {
  state = {
    prices: [100, 150, 250],
    postions: ["Balcony", "Midel Row", "Front"],
    desc: [
      "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
      "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
      "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum"
    ],
    link: ["http://google.com", "http://yahoo.com", "http://msn.com"],
    delay: [500, 0, 500]
  };
  showBoxes = () =>
    this.state.prices.map((box, i) => (
      <Zoom delay={this.state.delay[i]} key={i}>
        <div className="pricing_item">
          <div className="pricing_inner_wrapper">
            <div className="pricing_title">
              <span>${this.state.prices[i]}</span>
              <span>{this.state.postions[i]}</span>
            </div>
            <div className="pricing_description">
              <span>{this.state.desc[i]}</span>
            </div>
            <div className="pricing_buttons">
              <MyBtn
                text="Book It"
                link={this.state.link[i]}
                bck="#ffa800"
                color="#ffffff"
              />
            </div>
          </div>
        </div>
      </Zoom>
    ));
  render() {
    return (
      <div className="bck_black">
        <div className="center_wrapper pricing_section">
          <h2>Pricing</h2>
          <div className="pricing_wrapper">{this.showBoxes()}</div>
        </div>
      </div>
    );
  }
}
