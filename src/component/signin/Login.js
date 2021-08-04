import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Links from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import { Link, useHistory } from "react-router-dom";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Med from "../../assets/th.png";
import user from "../admin";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link to="/" style={{ color: "inherit" }}>
        Trident Hyperloop
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    // marginTop: theme.spacing(8),
    height: "70%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const history = useHistory();
  // let logged = false;
  let log = false;

  const [login, setLogin] = useState({
    username: "",
    password: "",
  });

  const changeHandler = (e) => {
    setLogin((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(e.target.value);
  };

  const submit = (e) => {
    e.preventDefault();
    const { username, password } = login;
    if (username !== "" && password !== "") {
      user.map((item, index) => {
        console.log("item.email", item);
        if (username === item.email && password === item.password) {
          console.log("index:", index);
          localStorage.setItem("user", JSON.stringify(item));
          log = true;
        }
      });
      // console.log("login", login.logged);
    } else {
      alert("Username & password can't be empty");
    }
    if (log) {
      console.log("login:", log);
      history.push("/");
    } else {
      alert("Wrong Credential");
    }
  };

  console.log("login out ", log);

  return (
    <div className="login">
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <img src={Med} alt="med" className="login-logo" />
          {/* {console.log("user: ", user)} */}
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="username"
              type="email"
              autoComplete="email"
              autoFocus
              value={login.username}
              onChange={changeHandler}
              style={{ color: "black" }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={login.password}
              onChange={changeHandler}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Links href="#" variant="body2">
                  Forgot password?
                </Links>
              </Grid>
              <Grid item>
                <Link
                  to="./signup"
                  variant="body2"
                  style={{ color: "#3f51b5" }}
                >
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    </div>
  );
}
