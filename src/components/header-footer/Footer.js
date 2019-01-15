import React from "react";
import Fade from "react-reveal/Fade";
const Footer = () => {
  return (
    <footer className="bck_red">
      <Fade delay={800}>
        <div className="font_righteous footter_logo_venue">The Stage</div>
        <div className="footer_copyright">
          ThaStage 2019. All rights reserved.
        </div>
      </Fade>
    </footer>
  );
};

export default Footer;
