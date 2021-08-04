import React from "react";
import "./Hoteltype.css";
import details from "../../home/details/hoteldetail";
import CardsHome from "../../home/CardsHome";

function Hoteltype() {
  return (
    <div className="hotel">
      <div className="hoteltype-head">
        <h1>City hotel</h1>
      </div>

      <div className="Cards-home">
        {" "}
        {details.map((item) => {
          // console.log("image: ", item.image);
          return (
            <div className="hoteltype-card">
              <CardsHome
                image={item.image}
                title={item.title}
                id={item.id}
                caption={item.caption}
                save={item.save}
                star={item.star}
                path={item.path}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Hoteltype;
