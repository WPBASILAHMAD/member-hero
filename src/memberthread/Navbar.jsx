import * as React from "react";
//import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import RegistrationForm from "./RegistrationForm";
import LoginForm from "./LoginForm";
import ResetPassword from "./ResetPassword";
import OverviewProfile from "./Profile";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box sx={{ bgcolor: "background.paper" }}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="WPR Registration" {...a11yProps(0)} />
          <Tab label="WPR Login" {...a11yProps(1)} />
          <Tab label="WPR Profile" {...a11yProps(2)} />
          <Tab label="WPR Password Reset" {...a11yProps(3)} />
        </Tabs>
      </AppBar>

      <TabPanel value={value} index={0} dir={theme.direction}>
        <RegistrationForm />
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
        <LoginForm />
      </TabPanel>
      <TabPanel value={value} index={2} dir={theme.direction}>
        <OverviewProfile />
      </TabPanel>
      <TabPanel value={value} index={3} dir={theme.direction}>
        <ResetPassword />
      </TabPanel>
    </Box>
  );
}
