import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
// import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import country from "../../assets/country";
import "./Nav.css";
const options = [
  {
    id: 0,
    image: `${country.india}`,
    title: "INDIA",
  },
  {
    id: 1,
    image: `${country.america}`,
    title: "AMERICA",
  },
  {
    id: 2,
    image: `${country.australia}`,
    title: "Australia",
  },
  {
    id: 3,
    image: `${country.germany}`,
    title: "Germany",
  },
];

export default function SplitButton() {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  //   const handleClick = () => {
  //     console.info(`You clicked ${options[selectedIndex]}`);
  //   };
  //   const propertynames = Object.values(options);

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    console.log("index: ", index, event);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  return (
    <Grid container direction="column" alignItems="center">
      <Grid item xs={12}>
        <ButtonGroup ref={anchorRef} aria-label="split button">
          <Button
            size="small"
            style={{
              color: "white",
              // border: "2px solid grey",
              borderRadius: "13px",
              width: "135px",
              height: "50px",
            }}
            aria-controls={open ? "split-button-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-label="country name"
            aria-haspopup="menu"
            onClick={handleToggle}
          >
            <img
              src={options[selectedIndex].image}
              alt="try"
              style={{ width: "20px", padding: "3px" }}
            />
            {options[selectedIndex].title}
            {/* {console.log(`${title}`)} */}
            {/* {console.log(`you are on, ${typeof propertynames}`)} */}
          </Button>
          {/* </Button> {options.map((option) => {
            const { id, image, title } = option;
            return (
           
            );
          })} */}
          {/* {console.log(`you are on, ${options}`)}
            <Button onClick={handleClick} style={{ color: "white" }}></Button>
            <ArrowDropDownIcon /> */}
          {/* {console.log(`you are out of ${options}`)} */}
        </ButtonGroup>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom",
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList id="split-button-menu">
                    {options.map((option, index) => (
                      <MenuItem
                        key={option}
                        selected={index === selectedIndex}
                        onClick={(event) => handleMenuItemClick(event, index)}
                      >
                        <img
                          src={option.image}
                          alt={option.id}
                          style={{ width: "20px", padding: "3px" }}
                        />
                        {option.title}

                        {/* {console.log(`${typeof image}`)} */}
                        {/* /{console.log(`Title:${title}`)} */}
                      </MenuItem>
                    ))}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </Grid>
    </Grid>
  );
}
