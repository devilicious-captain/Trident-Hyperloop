import React from "react";
import "./App.css";
// import { useEffect } from "react";
import Nav from "./component/nav/Nav";
import Home from "./component/home/Home";
import Login from "./component/signin/Login";
import SignUp from "./component/signup/Signup";
import Footer from "./component/footer/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Booking from "./component/booking/Booking";
import Wishlist from "./component/wishlist/Wishlist";
import Booktrash from "./component/trash/Booktrash";
import Profile from "./component/profile/Profile";
import AboutUs from "./component/about us/AboutUs";
import Hoteltype from "./component/nav/pages/Hoteltype";
import Cityhotel from "./component/nav/pages/Cityhotel";
import Cuisine from "./component/nav/pages/Cuisine";
import ExploreIndia from "./component/nav/pages/ExploreIndia";
import Hotel from "./component/hotel/hotel";
import { useEffect } from "react";

function App() {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <Nav />
            <Home />
            <Footer />
          </Route>
          <Route path="/mybooking">
            <Nav />
            <Booking />
            <Footer />
          </Route>
          <Route path="/booking">
            <Nav />
            <Booktrash />
            <Footer />
          </Route>
          <Route path="/aboutus">
            <Nav />
            <AboutUs />
            <Footer />
          </Route>
          <Route path="/wishlist">
            <Nav />
            <Wishlist />
            <Footer />
          </Route>
          <Route path="/myprofile">
            <Nav />
            <Profile />
            <Footer />
          </Route>
          <Route path="/hoteltype">
            <Nav />
            <Hoteltype />
            <Footer />
          </Route>
          <Route path="/city-hotel">
            <Nav />
            <Cityhotel />
            <Footer />
          </Route>
          <Route path="/explore">
            <Nav />
            <ExploreIndia />
            <Footer />
          </Route>
          <Route path="/nxt-trip">
            <Nav />
            <Cuisine />
            <Footer />
          </Route>
          <Route path="/hotel">
            <Nav />
            <Hotel />
            <Footer />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
