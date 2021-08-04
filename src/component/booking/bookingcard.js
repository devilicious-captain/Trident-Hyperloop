import React from "react";
import { FaStar, FaMapMarkerAlt } from "react-icons/fa";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Star from "../trash/star";
import image from "../../assets/propertytype";

export default function Bookingcard() {
  return (
    <div className="containerblock">
      <Card className="booking-root">
        <CardMedia
          className="booking-cover"
          image={image.apartment}
          title="Live from space album cover"
        />
        <div className="booking-container">
          <div className="booking-details">
            <CardContent id="wish-details">
              <h4
                className="wishlist-details-title"
                // variant="h4"
                // style={{
                //   fontWeight: "600",
                //   fontFamily: "Bree Serif",
                //   textAlign: "left",
                //   color: "black",
                // }}
              >
                OYO Hotel Tridevi
              </h4>
              <div className="wishlist-star" style={{ textAlign: "left" }}>
                {[...Array(5)].map((stars, i) => {
                  const ratingValue = i + 1;
                  return (
                    <label style={{ textAlign: "left" }}>
                      <input type="radio" name="rating" value={ratingValue} />
                      <FaStar
                        className="star"
                        color={ratingValue < 5 ? "#ffc107" : "#e4e5e9"}
                        // size={20}
                      />
                    </label>
                  );
                })}
              </div>
              <h6 className="wishlist-details-subtitle">
                <FaMapMarkerAlt
                  style={{
                    margin: "auto 0",
                    justifyContent: "center",
                    textAlign: "center",
                  }}
                />
                Pune , 412207
              </h6>
              <div className="booking-rating">
                <span className="wishlist-rating-block">4.5</span>
                <span>76 Reviews</span>
              </div>
              <span id="booked">
                Booked on
                <span id="booked-date">20th January 2021</span>
              </span>

              <div className="booking-check">
                <div className="book-cardset">
                  <div className="booking-checkin">
                    <span className="check-head">Check In</span>
                    <div className="booking-datetime">
                      <span className="booked-day">26 JAnuary 2021</span>
                      <span className="booked-time">07:00</span>
                    </div>
                  </div>
                  <div className="booking-checkin">
                    <span className="check-head">Check Out</span>
                    <div className="booking-datetime">
                      <span className="booked-day">29 JAnuary 2021</span>
                      <span className="booked-time">17:00</span>
                    </div>
                  </div>
                </div>
                <div className="booking-review">
                  Review{" "}
                  <span
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Star />
                  </span>
                </div>
              </div>
            </CardContent>
          </div>

          <div className="booking-price">
            <div className="bookingprice">
              <span className="wishlist-bookingprice-caption">
                Price for 5 night:
              </span>
              <span id="book-price" style={{ color: "green" }}>
                Rs 5,800
              </span>
              <div className="bookings-discount">
                <span>Saved</span> <span>Rs 2000</span>
              </div>
              <span className="wishlist-term">*taxes and charges may vary</span>
              <Button id="bookbtn" variant="contained" color="primary">
                BOOK AGAIN
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
