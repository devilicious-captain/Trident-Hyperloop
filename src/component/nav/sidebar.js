import React, { useState, useEffect, useRef } from "react";
import "./Nav.css";
import {
  FaBars,
  FaAngleLeft,
  FaHome,
  FaCalendarWeek,
  FaHeart,
  FaStrava,
  FaMapMarker,
  FaWpexplorer,
  FaShoePrints,
  FaExclamationCircle,
  FaSignOutAlt,
  FaSignInAlt,
} from "react-icons/fa";

import th from "../../assets/trident-logo.png";
import { Link } from "react-router-dom";
import Avataar from "../../assets/saurav.png";

function useOutsideAlerter(ref, setSidebar) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setSidebar(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}

function Sidebar(props) {
  const user = JSON.parse(localStorage.getItem("user"));
  const [sidebar, setSidebar] = useState(false);
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, setSidebar);
  console.log("signin", props.signin);
  return (
    <>
      {sidebar ? (
        <div className="sidebar active" ref={wrapperRef}>
          <nav className="side-nav">
            {props.signin ? (
              <ul
                className="side-container"
                onClick={() => setSidebar(!sidebar)}
              >
                <li className="sidebar-links">
                  <FaAngleLeft />
                </li>
                <Link to="/myprofile" style={{ textDecoration: "none" }}>
                  <li className="side-det-avatar">
                    <img
                      src={Avataar}
                      alt="sidebar-avatar"
                      style={{ display: "flex", width: "70px", margin: "20px" }}
                    />
                    <div
                      style={{
                        marginTop: "20px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <span style={{ fontSize: "22px", color: "white" }}>
                        Hello {user.firstName}
                      </span>
                      <span style={{ color: "lightgray", fontSize: "12px" }}>
                        {user.email}
                      </span>
                    </div>
                  </li>
                </Link>
                <li className="side-det">
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <span style={{ padding: "0 1em 0 10px" }}>
                      <FaHome />
                    </span>
                    <span>Home</span>
                  </Link>
                </li>
                <li className="side-det">
                  <Link
                    to="/mybooking"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <span style={{ padding: "0 1em 0 10px" }}>
                      <FaCalendarWeek />
                    </span>
                    <span>My Bookings</span>
                  </Link>
                </li>
                <li className="side-det">
                  <Link
                    to="/wishlist"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <span style={{ padding: "0 1em 0 10px" }}>
                      <FaHeart />
                    </span>
                    <span>My Wishlist</span>
                  </Link>
                </li>{" "}
                <li className="side-det">
                  <Link
                    to="/hoteltype"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <span style={{ padding: "0 1em 0 10px" }}>
                      <FaStrava />
                    </span>
                    <span>Hotel type</span>
                  </Link>
                </li>
                <li className="side-det">
                  <Link
                    to="/city-hotel"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <span style={{ padding: "0 1em 0 10px" }}>
                      <FaMapMarker />
                    </span>
                    <span>City Hotel</span>
                  </Link>
                </li>
                <li className="side-det">
                  <Link
                    to="/explore"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <span style={{ padding: "0 1em 0 10px" }}>
                      <FaWpexplorer />
                    </span>
                    <span>Explore India</span>
                  </Link>
                </li>
                <li className="side-det">
                  <Link
                    to="/nxt-trip"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <span style={{ padding: "0 1em 0 10px" }}>
                      <FaShoePrints />
                    </span>
                    <span>Cuisine for Next Trip</span>
                  </Link>
                </li>
                <li className="side-det">
                  <Link
                    to="/aboutus"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <span style={{ padding: "0 1em 0 10px" }}>
                      <FaExclamationCircle />
                    </span>
                    <span>About Us</span>
                  </Link>
                </li>
                <li className="side-det">
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "white" }}
                    onClick={props.signout}
                  >
                    <span style={{ padding: "0 1em 0 10px" }}>
                      <FaSignOutAlt />
                    </span>
                    <span>Sign Out</span>
                  </Link>
                </li>
                <li style={{ fontSize: "12px", color: "white" }}>
                  Copyright @ Trident HyperLoop
                </li>
                <li
                  style={{
                    width: "250px",
                    display: "flex",
                    padding: "20px 20px",
                    justifyContent: "center",
                  }}
                >
                  <img src={th} alt="Logo" width="90%" />
                </li>
              </ul>
            ) : (
              <ul
                className="side-container"
                onClick={() => setSidebar(!sidebar)}
              >
                <li className="sidebar-links">
                  <FaAngleLeft />
                </li>

                <li className="side-det">
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <span style={{ padding: "0 1em 0 10px" }}>
                      <FaHome />
                    </span>
                    <span>Home</span>
                  </Link>
                </li>

                <li className="side-det">
                  <Link
                    to="/hoteltype"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <span style={{ padding: "0 1em 0 10px" }}>
                      <FaStrava />
                    </span>
                    <span>Hotel type</span>
                  </Link>
                </li>
                <li className="side-det">
                  <Link
                    to="/city-hotel"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <span style={{ padding: "0 1em 0 10px" }}>
                      <FaMapMarker />
                    </span>
                    <span>City Hotel</span>
                  </Link>
                </li>
                <li className="side-det">
                  <Link
                    to="/explore"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <span style={{ padding: "0 1em 0 10px" }}>
                      <FaWpexplorer />
                    </span>
                    <span>Explore India</span>
                  </Link>
                </li>
                <li className="side-det">
                  <Link
                    to="/nxt-trip"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <span style={{ padding: "0 1em 0 10px" }}>
                      <FaShoePrints />
                    </span>
                    <span>Cuisine for Next Trip</span>
                  </Link>
                </li>
                <li className="side-det">
                  <Link
                    to="/aboutus"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <span style={{ padding: "0 1em 0 10px" }}>
                      <FaExclamationCircle />
                    </span>
                    <span>About Us</span>
                  </Link>
                </li>
                <li className="side-det">
                  <Link
                    to="/login"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <span style={{ padding: "0 1em 0 10px" }}>
                      <FaSignInAlt />
                    </span>
                    <span>Login</span>
                  </Link>
                </li>
                <li style={{ fontSize: "12px", color: "white" }}>
                  Copyright @ Trident HyperLoop
                </li>
                <li
                  style={{
                    width: "250px",
                    display: "flex",
                    padding: "20px 20px",
                    justifyContent: "center",
                  }}
                >
                  <img src={th} alt="Logo" width="90%" />
                </li>
              </ul>
            )}
          </nav>
        </div>
      ) : null}
      <div className="hamburger">
        <Link to="#">
          <FaBars
            onClick={() => setSidebar(!sidebar)}
            style={{
              fontSize: "25px",
              cursor: "pointer",
            }}
          />
        </Link>
      </div>
    </>
  );
}

export default Sidebar;
