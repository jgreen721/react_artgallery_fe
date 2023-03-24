import React from "react";

const Section = () => {
  return (
    <div className="location-section">
      <h3 className="section-location-h3 uppercase">Our Location </h3>
      <div className="location-column">
        <h4 style={{"--i":".5s"}} className="tan uppercase slide-in">99 King Street</h4>
        <div className="address-div">
          <p className="location-p slide-in" style={{"--i":".75s"}}>Newport</p>
          <p className="location-p slide-in" style={{"--i":"1s"}}>RI 02840</p>
          <p className="location-p slide-in" style={{"--i":"1.25s"}}>United States of America</p>
        </div>
        <p style={{"--i":"1.5s"}} className="location-blurb rise-up">
          Our newly opened gallery is located near the Edward King House on 99
          King Street, the Modern Art Gallery is free to all visitors and open
          seven days a week from 8am to 9pm.
        </p>
      </div>
    </div>
  );
};

export default Section;
