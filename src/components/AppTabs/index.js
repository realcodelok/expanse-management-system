import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import useStyles from "./style";
import { Avatar } from "@material-ui/core";
import DashboardTabPanel from "./DashboardTabPanel";
import { tabNames } from "../../utils/constant";
import CreditTabPanel from "./CreditTabPanel";
import DebitTabPanel from "./DebitTabPanel";
import ShoppingTabPanel from "./ShoppingTabPanel";
import AddMembersTabPanel from "./AddMembersTabPanel";
import PayDuesTabPanel from "./PayDuesTabPanel";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const tabsList = [
  {
    name: tabNames.dashboard,
    icon: <Avatar variant="square" src="/assets/images/dashboard.svg"></Avatar>,
  },
  {
    name: tabNames.credit,
    icon: <Avatar variant="square" src="/assets/images/credit.svg"></Avatar>,
  },
  {
    name: tabNames.debit,
    icon: <Avatar variant="square" src="/assets/images/debit.svg"></Avatar>,
  },
  {
    name: tabNames.payDues,
    icon: <Avatar variant="square" src="/assets/images/dues.svg"></Avatar>,
  },
  {
    name: tabNames.shopping,
    icon: <Avatar variant="square" src="/assets/images/shopping.svg"></Avatar>,
  },
  {
    name: tabNames.addMembers,
    icon: <Avatar variant="square" src="/assets/images/addMember.svg"></Avatar>,
  },
];

export default function AppTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabPanels = [
    <DashboardTabPanel index={0} value={value} />,
    <CreditTabPanel index={1} value={value} />,
    <DebitTabPanel index={2} value={value} />,
    <PayDuesTabPanel index={3} value={value} />,
    <ShoppingTabPanel index={4} value={value} />,
    <AddMembersTabPanel index={5} value={value} />,
  ];

  const renderTabPanel = () => {
    return tabPanels.map((tabPanel, index) => (
      <div key={index}>{tabPanel}</div>
    ));
  };

  const renderTabs = () => {
    return tabsList.map((tab, index) => {
      return (
        <Tab
          label={tab.name}
          {...a11yProps(index)}
          icon={tab.icon}
          key={index}
        />
      );
    });
  };
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbar}>
        <Tabs value={value} onChange={handleChange} aria-label="App tabs">
          {renderTabs()}
        </Tabs>
      </AppBar>
      {renderTabPanel()}
    </div>
  );
}
