import React from "react";
import DuesMembersListTable from "../../DuesMembersListTable";
import TabPanel from "../TabPanel";

export default function PayDuesTabPanel(props) {
  const { value, index } = props;
  return (
    <TabPanel value={value} index={index}>
      <DuesMembersListTable />
    </TabPanel>
  );
}
