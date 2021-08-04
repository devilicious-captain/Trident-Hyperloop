import React, { useEffect } from "react";
import "./Profile.css";
import { Button, TextField } from "@material-ui/core";
import { FaCamera, FaPencilAlt } from "react-icons/fa";
import profImage from "../../assets/saurav.png";
// import { fontSize } from "@material-ui/system";

function Profile() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  let user = JSON.parse(localStorage.getItem("user"));
  console.log("User in profile", user);
  return (
    <div className="myprofile">
      {/* <h1>My Profile</h1> <br /> */}
      <div className="cover-image">
        <img
          src="http://beingcovers.com/media/facebook-cover/Iridescent-Skies-facebook-covers-2705.jpeg"
          alt="cover"
          className="cover"
        />
        <button className="btn-cover">
          <FaCamera />
        </button>
      </div>
      <div className="profile-container">
        <div className="profile">
          {" "}
          <div>
            <img src={profImage} alt="avatar" className="avatar" />
          </div>
          <div className="profile-edit">
            {" "}
            <button className="btn-edit">
              <FaPencilAlt
                style={{
                  // color: "white",
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  color: "white",
                }}
              />
            </button>
          </div>
          {/* {console.log("name", user)}
          {console.log("name", user.lastname)} */}
          <div className="profile-intro">
            <span>
              {user.firstName} {user.lastName}
            </span>
            <div className="profile-mail">{user.email}</div>
          </div>
        </div>
      </div>
      <div className="edit-container">
        <div className="edit">
          <div className="edit-head">Profile Edit</div>
          <div className="underline" />

          <div className="edit-form">
            <div className="edit-name">
              <TextField
                //   id="outlined-basic"
                defaultValue={user.firstName}
                label="First Name*"
                variant="outlined"
                type="text"
                className="textfield"
                style={{ paddingBottom: "10px" }}
              />
              <TextField
                //   id="outlined-basic"
                defaultValue={user.lastName}
                label="Last Name*"
                variant="outlined"
                type="text"
                className="textfield"
                style={{ paddingBottom: "10px" }}
              />
            </div>
            <div className="edit-email">
              {" "}
              <TextField
                //   id="outlined-basic"
                defaultValue={user.email}
                label="Email*"
                variant="outlined"
                type="email"
                className="textfield"
                style={{ paddingBottom: "10px" }}
              />
              <TextField
                //   id="outlined-basic"
                label="Phone Number*"
                variant="outlined"
                type="number"
                className="textfield"
                style={{ paddingBottom: "10px" }}
              />
            </div>
            <div className="edit-password">
              {" "}
              <TextField
                defaultValue={user.password}
                //   id="outlined-basic"
                label="Password*"
                variant="outlined"
                type="password"
                className="textfield"
                style={{ paddingBottom: "10px" }}
              />
              <TextField
                //   id="outlined-basic"
                label="Confrm Password*"
                variant="outlined"
                type="password"
                className="textfield"
                style={{ paddingBottom: "10px" }}
              />
            </div>
            <div className="underline" />
            <div className="edit-save">
              <Button
                variant="contained"
                color="primary"
                style={{ borderRadius: "10px", backgroundColor: "#0a1aa1" }}
              >
                Save Details
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
