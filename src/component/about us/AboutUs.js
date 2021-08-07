import React, { useEffect } from "react";
import "./aboutus.css";
import atithi from "../../assets/atithi.png";
import mypic from "../../assets/mypic1.png";
import { Link } from "react-router-dom";
import { LinkedIn, Facebook, Instagram, GitHub } from "@material-ui/icons";

function AboutUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="aboutus">
      <div className="aboutus-img">
        <div className="about-txt">
          <span>ABOUT TRIDENT HYPERLOOP</span>
        </div>
      </div>
      <span className="about-txt-desc">
        <strong>Atithi Devo Bhava</strong> means GUEST IS GOD.{" "}
      </span>{" "}
      <br />
      {/* <br /> */}
      <div className="TH-intro">
        <div style={{ textAlign: "left" }}>
          <p>
            Trident Hyperloop is a Web Application which offers a wide range of
            booking services to travellers. We provide a variety of options for
            booking services from hotel to apartments. We mainly focus on the
            user's facilities and their interests . This application can be used
            from any point of world. Just one click and our services will be
            ready to serve you. Our Aim is to serve you the finest choice where
            you would receive prodigious facilities.
          </p>
        </div>
        <div>
          <img src={atithi} alt="atithi" className="atithi" />
        </div>
      </div>
      <h1 className="About-me">About Me</h1>
      <br />
      <div className="aboutme">
        <div className="intro">
          <p>
            Saurav Kumar Pandey is currently a 3rd Year BTech student from G H
            Raisoni Institute of Engineering and Technology Pune. He has an
            aggregate score of 9.38 CGPA till 4th semester. From Technical point
            of view, he is a core C++ programmer and has a good knowledge about
            C and Python programming language. He has an excellent knowledge
            about React JS, Javascript and dev-tools like GitHub, netlify, etc.
            Other than these things, He loves to be on journey of exploring new
            places and capturing the memories and plotting them down into diary.
            He enjoys his pleasure time in listening music. He uses his major
            time in enhancing knowledge about technical stuffs. He is very
            enthusiastic person who is always passionate about learning from
            every opportunity. A loyal,hardworking and smart worker who is
            always dedicated to his work and very punctual. He is a Critical
            Thinker and is adaptive to every enviornment. He always keeps
            learning from life.
          </p>
          <div className="about-social">
            <a href="https://github.com/devilicious-captain">
              <GitHub id="GitHub-about" />
            </a>
            <a href="https://www.instagram.com/devilicious_captain/">
              <Instagram id="instagram-about" />
            </a>
            <a href="https://www.linkedin.com/in/sauravpandey-1012/">
              <LinkedIn id="linkedin-about" />
            </a>
          </div>
        </div>
        <div className="aboutme-pic">
          <img
            src={mypic}
            alt="about me "
            style={{
              width: "40%",
              borderRadius: "90%",
              border: "3px solid black",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
