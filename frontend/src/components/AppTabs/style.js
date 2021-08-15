import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "30px",
  },
  appbar: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.text.primary,
    fontFamily: "Poppins Bold",
    boxShadow: "0px 1px 4px #c9c9c9",
    "& .MuiTabs-flexContainer": {
      height: "64px",
    },
    "& .MuiTab-wrapper": {
      fontSize: "12px",
      [theme.breakpoints.down("xs")]: {
        fontSize: "8px",
        fontWeight: "600",
      },
      [theme.breakpoints.down(375)]: {
        fontSize: "6px",
      },
    },
    "& .MuiTab-root": {
      minWidth: `calc(100% / 6)`,
      margin: 0,
      padding: 0,
      "& .MuiAvatar-root": {
        width: "24px",
        height: "auto",
        [theme.breakpoints.down("xs")]: {
          width: "20px",
        },
        [theme.breakpoints.down(375)]: {
          width: "14px",
        },
      },
    },
    "& .MuiTabs-indicator": {
      background: theme.palette.gradient.left,
    },
  },
}));
