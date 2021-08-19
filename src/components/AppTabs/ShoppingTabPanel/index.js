import React from "react";
import { pageTitles } from "../../../utils/constant";
import CustomForm from "../../CustomForm";
import TabPanel from "../TabPanel";

export default function ShoppingTabPanel(props) {
  const { value, index } = props;
  const formProps = {
    pageTitle: pageTitles.shopping,
    submitButtonText: "Shopping",
  };
  return (
    <TabPanel value={value} index={index}>
      <CustomForm {...formProps} />
    </TabPanel>
  );
}
