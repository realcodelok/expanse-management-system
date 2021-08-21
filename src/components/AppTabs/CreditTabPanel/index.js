import React from "react";
import { pageTitles } from "../../../utils/constant";
import CustomForm from "../../CustomForm";
import TabPanel from "../TabPanel";

export default function CreditTabPanel(props) {
  const { value, index } = props;
  const formProps = {
    pageTitle: pageTitles.credit,
    submitButtonText: "Credit",
  };
  return (
    <TabPanel value={value} index={index}>
      <CustomForm {...formProps} />
    </TabPanel>
  );
}
