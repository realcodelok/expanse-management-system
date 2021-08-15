import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  root: {
    width: "100%",
    marginTop: "20px",
  },
  paper: {
    width: "100%",
    marginBottom: theme.spacing(2),
  },
  tableBox: {
    padding: "20px",
  },
  table: {
    width: "100%",
    padding: theme.spacing(2),
    "& .MuiTableHead-root": {
      "& .MuiTableCell-head": {
        borderBottom: "none",
      },
    },
    "& .MuiTableBody-root": {
      "& .MuiTableRow-root": {},

      "& .MuiTableCell-body": {
        fontSize: "14px",
        fontFamily: "Poppins",
        textOverflow: "ellipsis",
        overflow: "hidden",
        whiteSpace: "nowrap",
        padding: 0,
        margin: 0,
        borderBottom: "none",

        "& div": {
          textOverflow: "ellipsis",
          overflow: "hidden",
          border: `1px solid ${theme.palette.primary.border}`,
          padding: "12px 20px",
          textAlign: "center",
          margin: "5px 0",
        },
      },
      "& .MuiTableCell-body:first-child": {
        maxWidth: `150px`,
        "& div": {
          textAlign: "left",
          borderRight: "none",
          borderTopLeftRadius: "25px",
          borderBottomLeftRadius: "25px",
        },
      },
      "& .MuiTableCell-body:last-child": {
        "& div": {
          borderLeft: "none",
          borderTopRightRadius: "25px",
          borderBottomRightRadius: "25px",
        },
      },
      "& .MuiTableCell-body:not(:first-child):not(:last-child)": {
        "& div": {
          borderRight: "none",
          borderLeft: "none",
        },
      },
    },
  },
  visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    top: 20,
    width: 1,
  },
}));
