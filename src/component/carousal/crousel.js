import React from "react";
import Carousel from "react-material-ui-carousel";
// import glow from "../../assets/glowing.jpg";
import "./crousel.css";

function crousel(props) {
  const imagestyle = { width: "70%", display: "flex" };
  return (
    <div>
      <Carousel
        // autoPlay
        interval="5000"
        transitionTime="2000"
        infiniteLoop
        animation="fade"
        showThumbs={false}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img src={props.image} alt="level1" style={imagestyle} />
        </div>
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img src={props.image} style={imagestyle} alt="level2" />
        </div>
      </Carousel>
    </div>
  );
}

export default crousel;
