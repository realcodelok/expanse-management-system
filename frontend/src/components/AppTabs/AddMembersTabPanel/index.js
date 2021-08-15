import React from "react";
import TabPanel from "../TabPanel";

export default function AddMembersTabPanel(props) {
  const { value, index } = props;
  return (
    <TabPanel value={value} index={index}>
      this is add memeber tab panel
    </TabPanel>
  );
}
