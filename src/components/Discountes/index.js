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
      <div className="container discountsSection">
        <div className="row">
          <Fade onReveal={() => this.loadingdiscount()}>
            <div className="discount_porcentage text-center col-md-4 col-xs-12">
              <span>{this.state.discountStart}%</span>
              <span>OFF</span>
            </div>
          </Fade>

          <Slide right>
            <div className="discount_description col-md-8 col-xs-12">
              <h4>Book your spot befor 20th Oct</h4>
              <p>
                This present moment is perfect simply due to the fact you are
                experiencing it. This is your world. There are no mistakes. You
                can fix anything that happens. Trees live in your fan brush, but
                you have to scare them out. In your world you have total and
                absolute power.
              </p>
              <MyBtn
                link="http://google.com"
                text="Book your Seat"
                color="#ffffff"
                bck="#c3073f"
              />
            </div>
          </Slide>
        </div>
      </div>
    );
  }
}

export default Discounts;
