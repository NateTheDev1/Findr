import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import LocationSearchingIcon from "@material-ui/icons/LocationSearching";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  appBar: {
    height: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "black",
  },
});

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h5">
          findr <LocationSearchingIcon />
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
