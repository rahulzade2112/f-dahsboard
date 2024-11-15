import React, { useEffect, useState } from "react";
import { Box, Button, Divider, TextField } from "@mui/material";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import "./account.css";
import Edit from "./Edit Profile/Edit";
import Change from "./ChangePassword/Change";
import { isExpired, decodeToken } from "react-jwt";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function Account(props) {
  // console.log(props);
  const [value, setValue] = React.useState(0);
  var [decodedData, setFullData] = useState();
  // useEffect(() => {
  //   var token = localStorage.getItem("token");
  //   setFullData(decodeToken(token));
  // }, []);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <Box
        sx={{
          width: "100%",
          margin: "0 auto  ",
          marginTop: "20px",
          flexGrow: 1,
          bgcolor: "background.paper",
          height: "100vh",
        }}
      >
        <Tabs
          sx={{
            fontSize: "1rem",
          }}
          orientation="horizontol"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          style={{ borderRight: 1, borderColor: "divider" }}
        >
          <Tab
            variant="headline"
            style={{ fontSize: "15px" }}
            label="Edit Profile"
            {...a11yProps(0)}
          />
          <Tab
            style={{ fontSize: "15px" }}
            label="Change Password"
            {...a11yProps(1)}
          />
        </Tabs>
        <Divider />
        <TabPanel value={value} index={0} style={{ width: "97% " }}>
          <Edit />
        </TabPanel>
        <TabPanel value={value} index={1} style={{ width: "97% " }}>
          <Change />
        </TabPanel>
      </Box>
    </div>
  );
}
