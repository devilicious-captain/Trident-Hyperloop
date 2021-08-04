import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import "./CardsHome.css";
import { FaHeart, FaStar } from "react-icons/fa";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

function CardsHome(props) {
  const history = useHistory();
  // const [showfull, setShowfull] = useState(false);
  // const saved = props.save;
  const data = {
    id: props.id,
    title: props.title,
    caption: props.caption,
    star: props.star,
    image: props.image,
    price: props.price,
  };
  const [save, setSave] = useState(false);
  const saved = () => {
    setSave(!save);
  };
  const handleClick = () => {
    history.push(props.path, {
      data: data,
    });
    console.log(data);
  };
  return (
    <div className="Card-container">
      <Card className="card" key={data.id}>
        <CardMedia
          key={data.id}
          className="media"
          image={data.image}
          // style={{ height: "10rem" }}
        />
        <CardContent className="content">
          <div>
            <div
              className={"MuiTypography--heading"}
              style={{
                padding: "0px 5px",
                fontFamily: "Bree Serif",
                fontSize: "20px",
                fontWeight: "500",
              }}
            >
              {data.title}
            </div>
            <div
              className="MuiTypography--subheading"
              variant={"caption"}
              style={{
                padding: "2px",
                // fontFamily: "Lobster",
                color: "black",
                // fontWeight: "500",
                fontSize: "15px",
              }}
            >
              {[...Array(5)].map((rating, i) => {
                const ratingValue = i + 1;
                return (
                  <label>
                    {" "}
                    <input type="radio" name="rating" value={ratingValue} />
                    <FaStar
                      // size={20}
                      color={ratingValue < props.star ? "#ffc107" : "#e4e5e9"}
                    />
                  </label>
                );
              })}
              <br />
              {data.caption}
            </div>
          </div>
          <div className="card-button">
            <Button
              id="btn-viewdet"
              variant="contained"
              color="primary"
              className="card-view"
              style={{ margin: "0 10px 0 10px" }}
              onClick={handleClick}
            >
              View Details
            </Button>
            {/* </Link> */}
            <div className="card-wishlist">
              <FaHeart
                className={save ? "heart-active" : "heart"}
                onClick={() => saved()}
              />
            </div>
          </div>
          <Divider className="divider" light />
        </CardContent>
      </Card>
    </div>
    //  </Router>
  );
}

export default CardsHome;
