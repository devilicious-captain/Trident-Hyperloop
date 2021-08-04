import React from "react";
import Wishcard from "./Wishcard";
import "./Wishlist.css";
function Wishlist() {
  return (
    <div className="wishlist">
      <h1 id="wish-head">Wishlist Page</h1>
      <Wishcard />
    </div>
  );
}

export default Wishlist;
