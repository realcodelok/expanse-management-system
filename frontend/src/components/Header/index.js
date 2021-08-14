import {
  AppBar,
  Avatar,
  Box,
  Grid,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React from "react";
import useStyles from "./style";

export default function Header(props) {
  const classes = useStyles();
  return (
    <AppBar position="fixed" className={classes.appbar}>
      <Toolbar disableGutters={true}>
        <Grid
          container
          //   spacing={5}
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Grid item lg={1} md={1} className={classes.hideOnSmallScreen}></Grid>
          <Grid item lg={2} md={2}>
            <Avatar variant="square" src="/assets/logo/logo.svg"></Avatar>
          </Grid>
          <Grid item lg={4} md={4} xs={1} className={classes.middleGrid}></Grid>
          <Grid item lg={4} md={4} xs={5}>
            <Box
              display="flex"
              justifyContent="flex-end"
              alignItems="center"
              color="primary"
            >
              <Typography variant="body1">Mukesh Kumar</Typography>
              <Avatar variant="circle" src="/assets/images/avatar.svg"></Avatar>
            </Box>
          </Grid>
          <Grid item lg={1} md={1} className={classes.hideOnSmallScreen}></Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
