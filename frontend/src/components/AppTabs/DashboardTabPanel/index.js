import { Card, CardContent, Typography } from "@material-ui/core";
import React from "react";
import TabPanel from "../TabPanel";
import StaticsChart from "./StaticsChart";

export default function DashboardTabPanel(props) {
  const { value, index } = props;
  return (
    <TabPanel value={value} index={index}>
      <div className="h20"></div>
      <Card>
        <CardContent>
          <Typography variant="h6">Statistics</Typography>
          <StaticsChart />
        </CardContent>
      </Card>
    </TabPanel>
  );
}
