import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  root: {
    width: "100%",
    marginTop: "20px",
    "& .MuiCardContent-root": {
      padding: "25px",
    },
    "& .MuiTypography-h5": {
      textAlign: "center",
      width: "fit-content",
      marginLeft: "auto",
      marginRight: "auto",
      paddingBottom: "1px",
      borderBottom: `2px solid ${theme.palette.text.primary}`,
      marginBottom: "40px",
      color: theme.palette.text.primary,
      fontFamily: "Poppins Bold",
      fontSize: "20px",
    },
  },
  cardActions: {
    justifyContent: "center",
    padding: 0,
    margin: "40px 0",
    "& .MuiButton-root": {
      background: theme.palette.gradient.bottom,
      height: "44px",
      width: "150px",
      borderRadius: "25px",
      textTransform: "capitalize",
    },
  },
}));
