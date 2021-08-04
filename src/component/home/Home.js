import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import CardsHome from "./CardsHome";
import "./home.css";
import details from "./details/CardsHomedet";
import hoteldetails from "./details/hoteldetail";
import exploredetails from "./details/exploredetails";
import nxttripdetails from "./details/nxttripdetails";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="home">
      <span
        className="home-title"
        style={{
          margin: "30px",
          fontFamily: "Bree Serif",
          fontSize: "22px",
          fontWeight: "400",
          display: "flex",
          color: "black",
        }}
      >
        Browse by Property Type
      </span>
      <div className="underline" />
      <div className="Card-home">
        {details.map((item) => {
          // console.log("image: ", item.image);
          return (
            <CardsHome
              image={item.image}
              title={item.title}
              id={item.id}
              caption={item.caption}
              path={item.path}
              star={item.star}
            />
          );
        })}
      </div>{" "}
      <div
        style={{
          // border: "1px solid black",
          textAlign: "right",
          fontSize: "15px",
          color: "black",
          paddingTop: "5px",
        }}
      >
        <Link
          to="/hoteltype"
          style={{
            textDecoration: "none",
            color: "black",
            // backgroundColor: "gray",
            // borderRadius: "18px",
            padding: "5px",
          }}
        >
          View all
        </Link>
      </div>
      {/* <span
        style={{ textAlign: "right", width: "100%", border: "1px solid black" }}
      >
       
      </span> */}
      <div className="underline" />
      <span
        className="home-title"
        style={{
          margin: "30px",
          fontFamily: "Bree Serif",
          fontSize: "22px",
          fontWeight: "400",
          display: "flex",
          color: "black",
        }}
      >
        City with Hotels
      </span>
      <div className="underline" />
      <div className="Card-home">
        {hoteldetails.map((item) => {
          return (
            <CardsHome
              image={item.image}
              title={item.title}
              id={item.id}
              caption={item.caption}
              path={item.path}
              star={item.star}
            />
          );
        })}
      </div>
      <div
        style={{
          // border: "1px solid black",
          textAlign: "right",
          fontSize: "15px",
          color: "black",
          paddingTop: "5px",
        }}
      >
        <Link
          to="/city-hotel"
          style={{
            textDecoration: "none",
            color: "black",
            // backgroundColor: "gray",
            // borderRadius: "18px",
            padding: "5px",
          }}
        >
          View all
        </Link>
      </div>
      <div className="underline" />
      <span
        className="home-title"
        style={{
          margin: "30px",
          fontFamily: "Bree Serif",
          fontSize: "22px",
          fontWeight: "400",
          display: "flex",
          color: "black",
        }}
      >
        Let's Explore India
      </span>
      <div className="underline" />
      <div className="Card-home">
        {exploredetails.map((item) => {
          return (
            <CardsHome
              image={item.image}
              title={item.title}
              id={item.id}
              caption={item.caption}
              path={item.path}
              star={item.star}
            />
          );
        })}
      </div>
      <div
        style={{
          // border: "1px solid black",
          textAlign: "right",
          fontSize: "15px",
          color: "black",
          paddingTop: "5px",
        }}
      >
        <Link
          to="/explore"
          style={{
            textDecoration: "none",
            color: "black",
            // backgroundColor: "gray",
            // borderRadius: "18px",
            padding: "5px",
          }}
        >
          View all
        </Link>
      </div>
      <div className="underline" />
      <span
        className="home-title"
        style={{
          margin: "30px",
          fontFamily: "Bree Serif",
          fontSize: "22px",
          fontWeight: "400",
          display: "flex",
          color: "black",
        }}
      >
        Cuisine for Next trip
      </span>
      <div className="underline" />
      <div className="Card-home">
        {nxttripdetails.map((item) => {
          return (
            <CardsHome
              image={item.image}
              title={item.title}
              id={item.id}
              caption={item.caption}
              path={item.path}
              star={item.star}
            />
          );
        })}
      </div>
      <div
        style={{
          // border: "1px solid black",
          textAlign: "right",
          fontSize: "15px",
          color: "black",
          paddingTop: "5px",
        }}
      >
        <Link
          to="/nxt-trip"
          style={{
            textDecoration: "none",
            color: "black",
            // backgroundColor: "gray",
            // borderRadius: "18px",
            padding: "5px",
          }}
        >
          View all
        </Link>
      </div>
      <div className="underline" />
    </div>
  );
}
export default Home;
