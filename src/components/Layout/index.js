import { Box, Grid } from "@material-ui/core";
import React from "react";
import AppTabs from "../AppTabs";
import Header from "../Header";
import useStyles from "./style";

export default function Layout(props) {
  const classes = useStyles();
  return (
    <>
      <Header />
      <Box className={classes.headerOverloap} />
      <Grid container justify="center" direction="row">
        <Grid item lg={6} md={6} sm={8} xs={11}>
          <AppTabs />
          {props.children}
        </Grid>
      </Grid>
    </>
  );
}
