import { createMuiTheme } from "@material-ui/core";
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#281AC8",
      border: "#F0F0F0",
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
    gradient: {
      right: `linear-gradient(to right, rgba(253, 116, 155, .8), rgba(40, 26, 200, .7))`,
      bottom: `linear-gradient(to bottom, rgba(253, 116, 155, .8), rgba(40, 26, 200, .7))`,
      left: `linear-gradient(to left, rgba(253, 116, 155, .8), rgba(40, 26, 200, .7))`,
      top: `linear-gradient(to top, rgba(253, 116, 155, .8), rgba(40, 26, 200, .7))`,
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
