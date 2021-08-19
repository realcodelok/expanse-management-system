import React from "react";
import { pageTitles } from "../../../utils/constant";
import UserForm from "../../UserForm";
import TabPanel from "../TabPanel";

export default function AddMembersTabPanel(props) {
  const { value, index } = props;
  const formProps = {
    pageTitle: pageTitles.addMembers,
    submitButtonText: "Add",
  };
  return (
    <TabPanel value={value} index={index}>
      <UserForm {...formProps} />
    </TabPanel>
  );
}
