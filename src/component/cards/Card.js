import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="cardhead">
      <div className="caard">{props.children}</div>
    </div>
  );
};

export default Card;
