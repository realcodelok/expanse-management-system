import { createMuiTheme } from "@material-ui/core";
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#281AC8",
    },
    secondary: {
      main: "#FD749B",
    },
    error: {
      main: "#F85D5D",
    },
    success: {
      main: "#5DF888",
    },
    text: {
      primary: "#858585",
      color: "#494949",
    },
  },
  typography: {
    fontFamily: "Poppins Medium",
    body1: {
      fontFamily: "Poppins",
    },
  },
});

export default theme;
