import React from "react";
import Slider from "react-slick";
import slide_1 from "../../resources/images/slide_1.jpg";
import slide_2 from "../../resources/images/slide_2.jpg";
import slide_3 from "../../resources/images/slide_3.jpg";

const Carrousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true
  };

  return (
    <div
      className="carrousel_wrapper "
      style={{
        height: `${window.innerHeight}px`,
        overflow: "hidden"
      }}
    >
      <Slider {...settings}>
        <div>
          <div
            className="carrousel_image"
            style={{
              background: `url(${slide_1})`,
              height: `${window.innerHeight}px`
            }}
          />
        </div>
        <div>
          <div
            className="carrousel_image"
            style={{
              background: `url(${slide_2})`,
              height: `${window.innerHeight}px`
            }}
          />
        </div>
        <div>
          <div
            className="carrousel_image"
            style={{
              background: `url(${slide_3})`,
              height: `${window.innerHeight}px`
            }}
          />
        </div>
      </Slider>
    </div>
  );
};
export default Carrousel;
