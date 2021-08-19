import { Toolbar, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import { pageTitles } from "../../../utils/constant";
import useStyles from "./style";

export default function EnhancedTableToolbar(props) {
  const classes = useStyles();

  return (
    <Toolbar className={classes.root}>
      <Typography
        className={classes.title}
        variant="h6"
        id="tableTitle"
        component="div"
      >
        {pageTitles.payDues}
      </Typography>
    </Toolbar>
  );
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};
