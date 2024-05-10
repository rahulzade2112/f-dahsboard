import React from "react";
import "./d.css";
// import yr from "./../../assets/yr.png";
import Welcome from "../Welcome/Welcome";
import Social from "../Social-Account/Social";
import Productlinechart from "../ProductLineChart/Productlinechart";
import ComposedChart from "../ComposedChart/ComposedChart";
import MonthlyDataChart from "../YearDataChart/MonthlyDataChart";
import NewUser from "../Newuser/NewUser";
const Dashboard = () => {
  return (
    <>
      <div className="dcontainer">
        <div className="wlc-msg-container">

          <div>
            <Welcome />
          </div>

          <div className="social-content">
            <Social />
          </div>
        </div>

        <div className="wlc-msg-container">
          
          <div className="monthly-content">
            <MonthlyDataChart />
          </div>

          <div >
            <NewUser/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
