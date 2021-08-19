import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  root: {
  },
  cardContent: {
    display: "flex",
    alignItems: "center",
    padding: "24px",
  },
  left: {
    display: "flex",
    alignItems: "center",
    position: "relative",
    width: "100px",
    "& .MuiAvatar-root": {
      width: "100%",
      height: "auto",
      overflow: "unset",
    },
    "& .MuiTypography-body1": {
      position: "absolute",
      textAlign: "center",
      fontFamily: theme.typography.poppinsBold,
      fontSize: "12px",
      backgroundImage: `linear-gradient(60deg, #FC58B3, #FEAE68)`,
      "-webkit-background-clip": "text",
      "-moz-background-clip": "text",
      " background-clip": "text",
      color: "transparent",
      marginTop: "-14px",
      marginLeft: "-2px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
    },
  },
  right: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    marginLeft: "20px",
    position: "relative",
    "& .MuiTypography-h6": {
      fontSize: "18px",
      fontFamily: theme.typography.poppinsBold,
      marginBottom: "8px",
    },
    "& .MuiTypography-body1": {
      whiteSpace: "nowrap",
      marginRight: "20px",
      fontFamily: theme.typography.poppinsMedium,
      fontSize: "14px",
      color: theme.palette.success.main,
    },
    "& .MuiAvatar-root": {
      width: "43px",
      height: "auto",
      overflow: "unset",
      marginBottom: "3px",
    },
  },
}));
