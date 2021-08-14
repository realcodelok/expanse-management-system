import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  appbar: {
    background: theme.palette.common.white,
    boxShadow: "0px 1px 4px #c9c9c9",

    "& .MuiAvatar-square": {
      width: "auto",
      height: "100%",
      [theme.breakpoints.down(375)]: {
        width: "160px",
      },
    },
    "& .MuiTypography-body1": {
      color: theme.palette.text.color,
      fontSize: "16px",
      padding: 0,
      whiteSpace: "nowrap",
      marginRight: "10px",
      textOverflow: "ellipsis",
      overflow: "hidden",
      fontFamily: "Poppins Medium",
      [theme.breakpoints.down("xs")]: {
        fontSize: "12px",
        fontWeight: "600",
      },
      [theme.breakpoints.down(375)]: {
        fontSize: "10px",
      },
    },
    "& .MuiGrid-grid-xs-5": {
      [theme.breakpoints.down("xs")]: {
        padding: "0 10px",
      },
      [theme.breakpoints.down(375)]: {
        padding: "0px",
      },
    },
  },
  hideOnSmallScreen: {
    [theme.breakpoints.down("xs")]: {
      maxWidth: "0px",
    },
  },
  middleGrid: {
    [theme.breakpoints.down("xs")]: {
      maxWidth: "0px",
    },
  },
}));
