import React from "react";
import TabPanel from "../TabPanel";

export default function DashboardTabPanel(props) {
  const { value, index } = props;
  return (
    <TabPanel value={value} index={index}>
      DashboardTabPanel
    </TabPanel>
  );
}
