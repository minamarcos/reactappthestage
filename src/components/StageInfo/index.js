import React from "react";
import Zoom from "react-reveal/Zoom";
import icon_calendar from "../../resources/images/icons/calendar.png";
import icon_location from "../../resources/images/icons/location.png";

const StageInfo = () => {
  return (
    <div className="Highlights bck_black">
      <div className="container">
        <div className="center_wrapper row">
          <Zoom durtion="500">
            <div className="vn_item col-md-6 col-sm-12">
              <div className="vn_outer">
                <div className="vn_inner">
                  <div className="vn_icon_square bck_red" />
                  <div
                    className="vn_icon"
                    style={{
                      background: `url(${icon_calendar})`
                    }}
                  />

                  <div className="vn_title">Event Date & Time</div>
                  <div className="vn_desc">10 Oct 2017 @10:00 PM</div>
                </div>
              </div>
            </div>
          </Zoom>
          <Zoom durtion="500" delay="500">
            <div className="vn_item col-md-6 col-sm-12">
              <div className="vn_outer">
                <div className="vn_inner">
                  <div className="vn_icon_square bck_yellow" />

                  <div
                    className="vn_icon"
                    style={{
                      background: `url(${icon_location})`
                    }}
                  />
                  <div className="vn_title">Event Location</div>
                  <div className="vn_desc">los angeles STAPLES Center</div>
                </div>
              </div>
            </div>
          </Zoom>
        </div>
      </div>
    </div>
  );
};

export default StageInfo;
