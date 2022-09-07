import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import LineBar from "./lineBar";

const styleMenu = {
  color: "#a3a3a3",
  fontWeight: "bold",
  fontVariantCaps: "normal",
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
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

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          TabIndicatorProps={{
            style: { background: "#fcd34d", paddingTop: 2 },
          }}
        >
          <Tab label="Temperature" {...a11yProps(0)} style={styleMenu} />
          <Tab label="Preciption" {...a11yProps(1)} style={styleMenu} />
          <Tab label="Wind" {...a11yProps(2)} style={styleMenu} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <LineBar />
      </TabPanel>
      <TabPanel value={value} index={1}>
        {/* Item Two */}
      </TabPanel>
      <TabPanel value={value} index={2}>
        {/* Item Three */}
      </TabPanel>
    </Box>
  );
}
