import React from "react";
import Logo from "../../assets/trident-logo.png";
import "./footer.css";
import { Link } from "react-router-dom";

import { LinkedIn, Facebook, Instagram, Twitter } from "@material-ui/icons";
function Footer() {
  const usestyle = {
    textDecoration: "none!important",
    color: "white",
    padding: "5px",
  };
  return (
    <div className="footer-class">
      <div className="footer-container">
        <div className="footer-social-mobile">
          {" "}
          <h4>SUBSCRIBE</h4>
          <div className="footer-search">
            <input
              placeholder="Search"
              style={{
                width: "60%",
                height: "100%",
                marginRight: "2%",
              }}
            />
            <span
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100px",
                height: "100%",
                backgroundColor: "#f6521a",
                cursor: "pointer",
                borderRadius: "5px",
              }}
            >
              Send
            </span>
          </div>
          <div className="socialmedia">
            <a
              href="https://www.linkedin.com/in/sauravpandey-1012/"
              style={usestyle}
            >
              <LinkedIn
                className="linkedin"
                style={{ borderRadius: "30%", border: "1px solid gray" }}
              />
            </a>
            <a
              href="https://www.instagram.com/devilicious_captain/"
              style={usestyle}
            >
              <Instagram
                className="instagram"
                style={{ borderRadius: "30%", border: "1px solid gray" }}
              />
            </a>
            <a href="#" style={usestyle}>
              <Facebook
                className="facebook"
                style={{ borderRadius: "30%", border: "1px solid gray" }}
              />
            </a>

            <a href="#" style={usestyle}>
              <Twitter
                className="twitter"
                style={{ borderRadius: "30%", border: "1px solid gray" }}
              />
            </a>
          </div>
        </div>
        <div className="footer-aboutus">
          <h4>SITE MAP</h4>
          <div className="sublinks-container">
            <span>About us</span>
            <span>Services</span>
            <span>Bing</span>
            <span>Contact us</span>
          </div>
        </div>
        <div className="footer-contactus">
          <h4>PRODUCT</h4>
          <div className="sublinks-container">
            <span>Pricing</span>
            <span>Features</span>
            <span>Customers</span>
            <span>Feedback</span>
          </div>
        </div>
        <div className="footer-links">
          <h4>HELP</h4>

          <ul className="links">
            <li>Getting Started </li>
            <li>Network Status</li>
            <li>FAQs</li>
            <li>Referral Program </li>
          </ul>
        </div>
        <div className="footer-social">
          {" "}
          <h4>SUBSCRIBE</h4>
          <div className="footer-search">
            <input
              placeholder="Search"
              style={{
                width: "60%",
                height: "100%",
                marginRight: "2%",
              }}
            />
            <span
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100px",
                height: "100%",
                backgroundColor: "#f6521a",
                cursor: "pointer",
                borderRadius: "5px",
              }}
            >
              Send
            </span>
          </div>
          <div className="socialmedia">
            <a
              href="https://www.linkedin.com/in/sauravpandey-1012/"
              style={usestyle}
            >
              <LinkedIn
                className="linkedin"
                style={{ borderRadius: "30%", border: "1px solid gray" }}
              />
            </a>
            <a
              href="https://www.instagram.com/devilicious_captain/"
              style={usestyle}
            >
              <Instagram
                className="instagram"
                style={{ borderRadius: "30%", border: "1px solid gray" }}
              />
            </a>
            <a href="#" style={usestyle}>
              <Facebook
                className="facebook"
                style={{ borderRadius: "30%", border: "1px solid gray" }}
              />
            </a>

            <a href="#" style={usestyle}>
              <Twitter
                className="twitter"
                style={{ borderRadius: "30%", border: "1px solid gray" }}
              />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-end">
        <div className="copyright">
          <span>
            © {new Date().getFullYear()} All Rights Reserved{" "}
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "#f6521a",
              }}
            >
              Trident Hyperloop
            </Link>{" "}
          </span>
        </div>
        <img className="logo-image" src={Logo} alt="logo" />
      </div>
    </div>
  );
}

export default Footer;
