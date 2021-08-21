import { lighten, makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
    theme.palette.type === "light"
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  title: {
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
}));
