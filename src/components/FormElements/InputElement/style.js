import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  formControl: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "65%",
    margin: "0 auto",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
    "& .MuiInputLabel-formControl": {
      position: "static",
      transform: "none",
      marginRight: "20px",
      color: `${theme.palette.text.primary} !important`,
      fontFamily: "Poppins",
      whiteSpace: "nowrap",
      width: "120px",
      minWidth: "120px",
      [theme.breakpoints.down(375)]: {
        minWidth: "60px",
        fontSize: "12px",
      },
    },
    "& .MuiInput-root": {
      marginTop: 0,
      width: "100%",
      [theme.breakpoints.down("xs")]: {
        flexGrow: 1,
      },
      "& .MuiInputBase-input": {
        padding: "8px 16px",
        height: "25px",
        color: `${theme.palette.text.primary} !important`,
        fontFamily: "Poppins",
        letterSpacing: "0.02rem",
        background: "transparent !important",
        [theme.breakpoints.down(375)]: {
          fontSize: "12px",
        },
      },
    },
    "& .MuiInput-underline:before": {
      display: "none",
    },
    "& .MuiInput-underline:after": {
      display: "none",
    },
    "& .MuiInputBase-input": {
      border: `1px solid ${theme.palette.primary.border}`,
      borderRadius: "3px",
    },
    "& textarea": {
      marginTop: 0,
      padding: "8px 16px",
      minHeight: "25px !important",
      color: `${theme.palette.text.primary} !important`,
      fontFamily: "Poppins Medium",
      letterSpacing: "0.02rem",
      border: `1px solid ${theme.palette.primary.border}`,
      borderRadius: "3px",
      width: "100%",
      outline: "none !important",

      [theme.breakpoints.down("xs")]: {
        flexGrow: 1,
      },
    },
    "& .MuiFormHelperText-root": {
      color: theme.palette.error.main,
      position: "absolute",
      bottom: "-18px",
      right: 0,
      width: `calc(100% - 130px)`,
      margin: "0 auto",
      padding: 0,
      textAlign: "center",
      fontSize: "10px",
    },
  },
  tooltipIconButton: {
    position: "absolute",
    marginRight: "-42px",
    right: 0,
    padding: 0,

    borderRadius: "50%",
    color: "#fef0f0",
    background: theme.palette.gradient.left,
    [theme.breakpoints.down("xs")]: {
      width: "16px",
      height: "16px",
      marginRight: "-20px",
    },
  },
}));
