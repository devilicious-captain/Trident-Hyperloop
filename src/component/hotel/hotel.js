import React, { useEffect } from "react";
import "../nav/pages/Hoteltype.css";
import details from "./cityhoteldetails";
import CardsHome from "../home/CardsHome";

function Hoteltype() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="hotel">
      <div className="hoteltype-head">
        <h1>Hotel in Navi Mumbai</h1>
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
                path={item.path}
                star={item.star}
                price={item.price}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Hoteltype;
