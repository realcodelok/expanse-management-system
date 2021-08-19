import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import React from "react";
import TabPanel from "../TabPanel";
import CustomCard from "./CustomCard";
import StaticsChart from "./StaticsChart";
import useStyles from "./style";

export default function DashboardTabPanel(props) {
  const classes = useStyles();

  const { value, index } = props;
  return (
    <TabPanel value={value} index={index}>
      <div className="h20"></div>

      <Grid container spacing={1}>
        <Grid item lg={6} md={6} sm={6} xs={12}>
          <CustomCard price="4500" title="Total Expenses" percentage="21.5" />
        </Grid>
        <Grid item lg={6} md={6} sm={6} xs={12}>
          <CustomCard
            price="412.50"
            title="Current Balance"
            percentage="25.6"
          />
        </Grid>
      </Grid>
      <div className="h20"></div>
      <Card>
        <CardContent className={classes.root}>
          <Typography variant="h6">Statistics</Typography>
          <StaticsChart />
        </CardContent>
      </Card>
    </TabPanel>
  );
}
