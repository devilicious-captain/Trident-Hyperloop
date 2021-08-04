import React from "react";
import { FaStar, FaMapMarkerAlt, FaTimesCircle } from "react-icons/fa";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import image from "../../assets/propertytype";

export default function MediaControlCard() {
  return (
    <Card className="wishlist-root">
      <CardMedia
        className="wishlist-cover"
        image={image.apartment}
        title="hotel"
      />
      <div className="wishlist-container">
        <div className="wishlist-details">
          <CardContent id="wish-details">
            <h4
              // variant="h4"
              className="wishlist-details-title"
            >
              OYO Hotel Tridevi
            </h4>
            <div className="wishlist-star">
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
            <div className="wishlist-rating">
              <span className="wishlist-rating-block">4.5</span>
              <span>76 Reviews</span>
            </div>
          </CardContent>
        </div>
        <div className="booking-price">
          <div className="bookingprice">
            <span className="wishlist-bookingprice-caption">
              Price for 1 night:
            </span>
            <span style={{ color: "green" }}>Rs 5,800</span>
            <div className="wishlist-booking-discount" style={{ color: "red" }}>
              <span>Save</span> <span>Rs 2000</span>
            </div>
            <span className="wishlist-term">*taxes and charges may vary</span>
            <Button id="bookbtn" variant="contained" color="primary">
              BOOK NOW
            </Button>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <FaTimesCircle style={{ cursor: "pointer", margin: "5px" }} />
        </div>
      </div>
    </Card>
  );
}
