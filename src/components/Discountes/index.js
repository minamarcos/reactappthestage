import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import MyBtn from "../Ui/Btn.js";
class Discounts extends Component {
  state = {
    discountStart: 0,
    discountEnd: 50
  };
  loadingdiscount = () => {
    if (this.state.discountStart < this.state.discountEnd) {
      this.setState({
        discountStart: this.state.discountStart + 1
      });
    }
  };
  componentDidUpdate() {
    setTimeout(() => {
      this.loadingdiscount();
    }, 20);
  }
  render() {
    return (
      <div className="center_wrapper">
        <div className="discount_wrapper">
          <Fade onReveal={() => this.loadingdiscount()}>
            <div className="discount_porcentage">
              <span>{this.state.discountStart}%</span>
              <span>OFF</span>
            </div>
          </Fade>
          <Slide right>
            <div className="discount_description">
              <h4>Book your spot befor 20th Oct</h4>
              <p>asdfa asd sad sad asd asad asd sadas </p>
              <MyBtn
                link="http://google.com"
                text="Book your Seat"
                color="#ffffff"
                bck="#ffa800"
              />
            </div>
          </Slide>
        </div>
      </div>
    );
  }
}

export default Discounts;
