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
        overflow: "hidden"
      }}
    >
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src={slide_1} alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={slide_2} alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={slide_3} alt="Third slide" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Carrousel;
