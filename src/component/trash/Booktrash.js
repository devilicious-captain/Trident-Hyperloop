import React, { useState, useEffect } from "react";
import "./Booktrash.css";
import { FaCheck, FaCertificate, FaStar } from "react-icons/fa";
import { Button } from "@material-ui/core";
import Carousel from "../carousal/crousel";
import details from "./Review";
import { TextField } from "@material-ui/core";
import Star from "./star";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Tick from "../../assets/tick.gif";
import { useHistory, useLocation } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    width: "50%",
    color: "black",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  paid: {
    backgroundColor: theme.palette.background.paper,
    // width: "20%",
    color: "black",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
}));

function Booktrash() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const history = useHistory();
  console.log("History", history);
  const location = useLocation();
  console.log("location: ", location);
  // useEffect(() => {
  const cost = location.state.data.price;
  // }, []);

  console.log(cost);
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");
  const [room, setRoom] = useState("");
  const classes = useStyles();
  const [show, setShow] = useState(true);

  const showcase = () => setShow(!show);

  const [open, setOpen] = useState(false);
  const [pay, setPay] = useState(false);

  const handlepay = () => {
    Date.parse(checkout) > Date.parse(checkin)
      ? setPay(true)
      : alert("Checkout should be after Checkin ");
  };

  const handlenotPay = () => {
    setPay(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const call = () => {
    handlenotPay();
    handleClose();
  };

  return (
    <div className="booktrash">
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper} id="booking-modal">
            <h1
              style={{
                color: " rgb(26, 131, 255)",
                textAlign: "center",
              }}
              id="modal-head"
            >
              BOOKING PROTAL
            </h1>
            <div className="side">
              <div className="underline" />

              <div className="modalCheck">
                <TextField
                  required
                  label="Check In"
                  type="date"
                  onChange={(e) => setCheckin(e.target.value)}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  autoFocus
                  style={{
                    color: "black",
                    width: "170px",
                    marginBottom: "20px",
                  }}
                />
                <TextField
                  required
                  label="Check Out"
                  type="date"
                  onChange={(e) => setCheckout(e.target.value)}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  style={{
                    color: "black",
                    width: "170px",
                  }}
                />
              </div>
              <div className="modalCheck">
                <TextField
                  required
                  label="Number of Adult(s)"
                  type="number"
                  placeholder="Number of Adult(s)"
                  defaultValue="0"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  style={{
                    color: "black",
                    width: "170px",
                    marginBottom: "20px",
                  }}
                />
                <TextField
                  required
                  label="Number of Room(s)"
                  type="number"
                  onChange={(e) => setRoom(e.target.value)}
                  defaultValue="0"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  style={{ color: "black", width: "170px" }}
                />
              </div>
              <div className="name">
                <TextField
                  required
                  label="Name of Guest"
                  type="text"
                  placeholder="Name of Guest"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  id="guest-name"
                  style={{ color: "black", marginBottom: "20px" }}
                />
              </div>
              <div className="modalCheck">
                <TextField
                  required
                  label="Phone Number"
                  type="number"
                  placeholder="Phone Number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  style={{
                    color: "black",
                    width: "170px",
                    marginBottom: "20px",
                  }}
                />
                <TextField
                  required
                  label="Email Id"
                  type="email"
                  placeholder="Email Id"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  style={{ color: "black", width: "170px" }}
                />
              </div>
              <div className="underline" />
            </div>
            <div className="submit">
              <Button
                variant="contained"
                color="primary"
                style={{
                  fontFamily: "Bree Serif",
                  fontSize: "18px",
                  borderRadius: "10px",
                  backgroundColor: "rgb(26, 131, 255)",
                }}
                onClick={handlepay}
              >
                Pay Rs{" "}
                {checkin && checkout && room
                  ? cost *
                    room *
                    Math.round(
                      (Date.parse(checkout) - Date.parse(checkin)) /
                        (1000 * 60 * 60 * 24) +
                        2
                    )
                  : cost}
              </Button>
            </div>
          </div>
        </Fade>
      </Modal>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={pay}
        // onClose={handlenotPay}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paid}>
            <div className="Paid-notify">
              <span style={{ color: "green" }}>SUCCESSFULLY</span>
              <span>
                Paid{" "}
                <span style={{ color: "black" }}>
                  Rs {/* {checkin && checkout? */}
                  {cost *
                    room *
                    Math.round(
                      (Date.parse(checkout) - Date.parse(checkin)) /
                        (1000 * 60 * 60 * 24) +
                        2
                    )}
                  {/* // : cost} */}
                </span>
              </span>
            </div>
            <span style={{ marginBottom: "10px" }}>
              to {location.state.data.title}
            </span>
            <div className="tick-notify">
              <img src={Tick} alt="ticking" />
            </div>
            <Button
              variant="contained"
              color="primary"
              onClick={call}
              style={{ backgroundColor: "blue" }}
            >
              Done
            </Button>
          </div>
        </Fade>
      </Modal>
      <div className="booktrash-container">
        {/* {console.log(props.location)} */}
        <div className="booktrash-title">
          <span className="title-title">{location.state.data.title}</span>
          <span className="title-sidetitle">Luxury Hotel</span>
          <div className="booktrash-patch">
            <span>
              <FaCheck />
              Free Wifi & free parking
            </span>{" "}
            <span>
              <FaCheck /> Free Cancellation
            </span>
            <span style={{ color: "#3E215D" }}>
              <FaCertificate style={{ color: "#3E215D" }} /> Price Gurantees
            </span>
          </div>
        </div>
        <div className="booktrash-price">
          <div className="booking-price">
            <span>Rs {location.state.data.price}</span>
            <div className="booking-discount">
              <span>Save</span>
              <span>Rs 2000</span>
            </div>
            <Button
              onClick={handleOpen}
              variant="contained"
              color="primary"
              style={{ borderRadius: "24px", width: "150px" }}
            >
              BOOK NOW
            </Button>
          </div>
        </div>
      </div>
      <div className="booktrash-key">
        <div className="booktrash-carousel">
          <Carousel image={location.state.data.image} />
        </div>
        <div className="booktrash-keypoints">
          <div className="booktrash-points">
            <div className="booktrash-main">
              <p style={{ textAlign: "center" }}>Main Highlights</p>
              <span>
                <FaCheck style={{ marginRight: "10px" }} />
                101 smoke-free guestrooms
              </span>
              <span>
                <FaCheck style={{ marginRight: "10px" }} />
                Daily Housekeepings
              </span>
              <span>
                <FaCheck style={{ marginRight: "10px" }} />
                Outdoor Pool
              </span>
              <span>
                <FaCheck style={{ marginRight: "10px" }} />
                Breakfast available
              </span>
            </div>
            <div className="booktrash-around">
              <p>What Surrounds it?</p>
              <li>Pandavleni Caves - 14 mins walk</li>
              <li>Kalaram Temple - 29 mins walk</li>
              <li>Godavari Falls - 31 mins walk</li>
              <li>Ram Kund - 40 mins walk</li>
            </div>
          </div>
          <div className="booktrash-pricetag">
            <span className="pricetag">
              Price : Rs {location.state.data.price}{" "}
              {/* <strike style={{ color: "red", fontSize: "30px" }}>
                Rs 7800
              </strike> */}
            </span>
            <div className="booking-discount" style={{ fontSize: "25px" }}>
              <span>Save</span>
              <span>Rs 2000</span>
            </div>
            <Button
              variant="contained"
              color="primary"
              style={{
                borderRadius: "24px",
                fontSize: "20px",
                width: "150px",
                marginRight: "10px",
              }}
              onClick={handleOpen}
            >
              BOOK NOW
            </Button>
            <Button
              variant="contained"
              color="primary"
              style={{ borderRadius: "24px", width: "150px" }}
            >
              Add to Wish
            </Button>
          </div>
        </div>
      </div>
      <div className="booktrash-rat">
        <div className="booktrash-description ">
          <h1>Description</h1>
          <span>
            A hotel is an establishment that provides paid lodging on a
            short-term basis. Facilities provided inside a hotel room may range
            from a modest-quality mattress in a small room to large suites with
            bigger, higher-quality beds, a dresser, a refrigerator and other
            kitchen facilities, upholstered chairs, a flat screen television,
            and en-suite bathrooms.{" "}
          </span>
          {show ? null : (
            <span>
              Small, lower-priced hotels may offer only the most basic guest
              services and facilities. Larger, higher-priced hotels may provide
              additional guest facilities such as a swimming pool, business
              centre (with computers, printers, and other office equipment),
              childcare, conference and event facilities, tennis or basketball
              courts, gymnasium, restaurants, day spa, and social function
              services.{" "}
            </span>
          )}
          <span onClick={showcase} className="show-click">
            {show ? "... show more" : "show less"}
          </span>
        </div>
        <div className="rating">
          <div className="star-rate">
            <h1>Rating</h1>
            {[...Array(5)].map((rating, i) => {
              const ratingValue = i + 1;
              return (
                <label>
                  {" "}
                  <input type="radio" name="rating" value={ratingValue} />
                  <FaStar
                    size={50}
                    color={
                      ratingValue < location.state.data.star
                        ? "#ffc107"
                        : "#e4e5e9"
                    }
                  />
                </label>
              );
            })}
            <h1>{location.state.data.star - 1} out of 5</h1>
          </div>

          <div className="star-progress">
            <div className="5-star">
              {[...Array(5)].map((stars) => {
                return <FaStar color={"#ffc107"} />;
              })}
              <progress
                style={{
                  height: "15px",
                  marginLeft: "10px",
                  backgroundColor: "#ffc107",
                }}
                value={90}
                max={100}
                min={0}
                strokeWidth={20}
              />
            </div>
            <div className="4-star">
              {[...Array(4)].map((stars) => {
                return <FaStar color={"#ffc107"} />;
              })}
              <progress
                style={{
                  height: "15px",
                  marginLeft: "25px",
                  backgroundColor: "#ffc107",
                }}
                value={60}
                max={100}
                min={0}
                strokeWidth={20}
              />
            </div>
            <div className="3-star">
              {[...Array(3)].map((stars) => {
                return <FaStar color={"#ffc107"} />;
              })}
              <progress
                style={{
                  height: "15px",
                  marginLeft: "40px",
                  backgroundColor: "#ffc107",
                }}
                value={40}
                max={100}
                min={0}
                strokeWidth={20}
              />
            </div>
            <div className="2-star">
              {[...Array(2)].map((stars) => {
                return <FaStar color={"#ffc107"} />;
              })}
              <progress
                style={{
                  height: "15px",
                  marginLeft: "55px",
                  backgroundColor: "#ffc107",
                }}
                value={30}
                max={100}
                min={0}
                strokeWidth={20}
              />
            </div>
            <div className="1-star">
              {[...Array(1)].map((stars) => {
                return <FaStar color={"#ffc107"} />;
              })}
              <progress
                style={{
                  height: "15px",
                  marginLeft: "70px",
                  backgroundColor: "#ffc107",
                }}
                value={10}
                max={100}
                min={0}
                strokeWidth={20}
              />
            </div>
          </div>
        </div>
      </div>
      <h2 style={{ textAlign: "left", marginLeft: "50px" }}>Reviews</h2>
      <div className="booktrash-end">
        {" "}
        <div className="reviews">
          {details.map((item) => {
            return (
              <div className="review-list">
                <div className="review-profile">
                  <span style={{ color: "grey", fontSize: "25px" }}>
                    {item.icon}
                  </span>
                  <span
                    style={{
                      marginLeft: "10px",
                      textAlign: "center",
                      color: "black",
                      fontWeight: "500",
                    }}
                  >
                    {item.name}
                  </span>
                </div>
                <div className="review-comment">{item.comment}</div>
              </div>
            );
          })}
        </div>
        <div className="review-form">
          Add your Views
          <div className="review-input">
            <TextField
              required
              label="Booking ID"
              id="standard-error-helper-text"
              type="number"
              placeholder="Booking ID"
              helperText="Enter 10 digits Booking ID"
              style={{ width: "300px" }}
            />
            <TextField
              required
              label="Pin Code"
              placeholder="Pin Code"
              id="standard-error-helper-text"
              type="number"
              helperText="Enter 6 digits Pin Code"
              style={{ width: "300px", marginTop: "10px" }}
            />
            <TextField
              required
              id="outlined-textarea"
              label="Your View"
              placeholder="Your Views"
              multiline
              style={{ width: "300px", marginTop: "10px" }}
            />
            <span
              style={{
                display: "flex",
                fontSize: "20px",
                marginTop: "20px",
                alignItems: "center",
              }}
            >
              Stars:
              <Star id="review-star-rat" style={{ margin: "20px" }} />
            </span>
            <Button
              variant="contained"
              color="primary"
              style={{
                borderRadius: "24px",
                width: "150px",
                marginTop: "30px",
              }}
            >
              Share
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Booktrash;
