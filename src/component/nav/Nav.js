import React, { useState, useEffect, useRef } from "react";
import th from "../../assets/trident-logo.png";
import mth from "../../assets/th.png";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import items from "./search_items";
import "./Nav.css";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Country from "../nav/country";
import Avataar from "../../assets/saurav.png";
import Sidebar from "./sidebar";

function Nav() {
  console.log("Nav Called");
  const [signin, setSignin] = useState(false);
  let user = JSON.parse(localStorage.getItem("user"));
  console.log("user:", user);
  useEffect(() => {
    if (user !== null) {
      setSignin(true);
      console.log(user);
    }
  }, []);
  const signout = () => {
    setSignin(false);
    localStorage.clear();
    alert("Logout Successfully!");
  };
  return (
    <div className="navbar">
      <div className="sidebar-nav">
        <Sidebar signin={signin} signout={signout} />
      </div>
      <div className="nav-logo">
        <Link to="/">
          <img src={th} alt="nav logo" className="nav-logo-image" width="30%" />
          <img
            src={mth}
            alt="nav logo"
            className="nav-logo-image-mob"
            width="30%"
          />
        </Link>
      </div>
      <div className="nav-searchbar">
        <ReactSearchAutocomplete
          items={items}
          placeholder="Search for destination"
          autoFocus
        />
      </div>
      <div className="nav-links">
        <div className="nav-country">
          <Country />
        </div>
        {signin ? (
          <>
            <div className="nav-avatar">
              <Link
                to="/myprofile"
                style={{ textDecoration: "none", color: "white" }}
              >
                <img
                  src={Avataar}
                  alt="Welcome avatar"
                  className="avatar-img"
                />
              </Link>
              <Link
                to="/myprofile"
                className="avatar-name"
                style={{ textDecoration: "none", color: "white" }}
              >
                Hello {user.firstname}
              </Link>
            </div>
            <div className="nav-signout">
              <Link to="/" style={{ textDecoration: "none" }}>
                <Button
                  variant="contained"
                  color="primary"
                  style={{
                    backgroundColor: "#1a83ff",
                    fontWeight: "600",
                    // boxShadow: " 0 2px 5px rgb(220,208,208",
                  }}
                  onClick={signout}
                >
                  Log Out
                </Button>
              </Link>
            </div>
          </>
        ) : (
          <>
            {" "}
            <div className="nav-login">
              <Link to="/login" style={{ textDecoration: "none" }}>
                <Button
                  variant="contained"
                  color="primary"
                  style={{
                    backgroundColor: "#1a83ff",
                    fontWeight: "700",
                    // boxShadow: " 0 2px 5px rgb(220,208,208",
                  }}
                >
                  Login
                </Button>
              </Link>
            </div>
            <div className="nav-signup">
              <Link to="/signup" style={{ textDecoration: "none" }}>
                <Button
                  variant="contained"
                  color="primary"
                  style={{
                    backgroundColor: "#1a83ff",
                    fontWeight: "600",
                    // boxShadow: " 0 2px 5px rgb(220,208,208",
                  }}
                >
                  Sign Up
                </Button>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Nav;
