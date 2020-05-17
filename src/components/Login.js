import React, { useState } from "react";
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    display: "flex",
    justifyContent: "center",
  },
  paper: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    marginTop: "30%",
    background: "#212120",
    color: "white",
    border: "1px solid black",
    padding: "3%",
  },
  form: {
    textAlign: "center",
    width: "90%",
    padding: "2%",
    boxSizing: "border-box",
  },
  input: {
    marginBottom: "5%",
    width: "100%",
    background: "white",
    "&:focus": {
      borderColor: "black !important",
    },
  },
  inputColor: {
    color: "black",
  },
  submit: {
    width: "50%",
    borderColor: "white",
    color: "#1DB954",
    "&:hover": {
      borderColor: "#1DB954",
    },
  },
  floatingLabelFocusStyle: {
    color: "black",
  },
});

const Login = (props) => {
  const classes = useStyles();

  return (
    <Container maxWidth="sm" className={classes.container}>
      <Paper elevation={3} variant="outlined" className={classes.paper}>
        <Typography variant="h5">L O G I N</Typography>
        <form className={classes.form}>
          <TextField
            label="Username"
            className={classes.input}
            variant="filled"
            name="username"
            required
            InputProps={{
              className: classes.inputColor,
            }}
            InputLabelProps={{
              style: { color: "black" },
            }}
          />
          <TextField
            label="Password"
            className={classes.input}
            variant="filled"
            name="password"
            required
            type="password"
            InputProps={{
              className: classes.inputColor,
            }}
            InputLabelProps={{
              style: { color: "black" },
            }}
          />
          <Button
            type="submit"
            variant="outlined"
            color="primary"
            className={classes.submit}
          >
            Login
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default Login;
