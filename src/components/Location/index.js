import React from "react";

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.033277112892!2d-118.26944278478526!3d34.043017480608455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c7b85dea2a93%3A0x1ff47c3ceb7bb2d5!2sSTAPLES+Center!5e0!3m2!1sen!2sus!4v1547572686074"
        width="100%"
        height="450"
        title="locationmap"
        frameborder="0"
        allowfullscreen
      />
      <div className="location_tag">
        <div>Location</div>
      </div>
    </div>
  );
};

export default Location;
