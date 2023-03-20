import React from "react";
import { render } from "react-dom";
import { createTheme } from "@mui/material/styles";
import Root from "./Root";

// use default theme
// const theme = createTheme();

// Or Create your Own theme:
const theme = createTheme({
  palette: {
    secondary: {
      main: "#E33E7F",
    },
  },
});
