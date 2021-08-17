import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  root: {
    width: "100%",
    marginTop: "20px",
    marginBottom: "50px",
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
      "& .MuiTableRow-root:hover": {
        background: "transparent",
        "& .MuiTableCell-body div": {
          background: theme.palette.primary.tableRowBackgroundHover,
        },
      },
      "& .MuiTableRow-root.Mui-selected, .MuiTableRow-root.Mui-selected:hover":
        {
          background: "transparent",
        },
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
          padding: "15px 20px",
          textAlign: "center",
          margin: "5px 0",
          height: "20px",
          display: "flex",
          alignItems: "center",
        },
      },
      "& .MuiTableCell-body:first-child": {
        maxWidth: `150px`,
        "& div": {
          textAlign: "left",
          borderRight: "none",
          borderTopLeftRadius: "25px",
          borderBottomLeftRadius: "25px",
          justifyContent: "flex-start",
          display: "block",
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
          justifyContent: "center",
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
  DUES: {
    background: theme.palette.error.light,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: theme.palette.common.white,
    fontWeight: "900",
    padding: "2px 0",
    borderRadius: "20px",
    width: "100%"
  },
  PAID: {
    background: theme.palette.success.light,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: theme.palette.common.white,
    fontWeight: "900",
    padding: "2px 0",
    borderRadius: "20px",
    width: "100%"
  },
  linkButton: {
    background: theme.palette.gradient.bottom,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: theme.palette.common.white,
    fontWeight: "900",
    padding: "4px 0",
    borderRadius: "20px",
    textDecoration: "none",
    width: "100%",
    "&:hover": {
      background: theme.palette.gradient.right,
    },
  },
}));
