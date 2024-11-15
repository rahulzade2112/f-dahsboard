import React from "react";
import "./d.css";
import Welcome from './../Welcome/Welcome';
import Social from './../Social-Account/Social';
import MonthlyDataChart from './../AllChart/YearDataChart/MonthlyDataChart';
import NewUser from './../Newuser/NewUser';
import Productlinechart from "../AllChart/ProductLineChart/Productlinechart";
import ChartCard from './../AllChart/ChartCard/ChartCard';
import Composedchart from "./../AllChart/ComposedChart/ComposedChart";
import PieChart  from './../AllChart/PieChart/PieChart';

const Dashboard = () => {
  return (
    <>
      <div className="dcontainer">
        <div className="wlc-msg-container">
          <div>
            <Welcome/>
          </div>

          <div className="social-content">
            <Social/>
          </div>
        </div>

        <div className="wlc-msg-container">
          <div className="monthly-content">
            <MonthlyDataChart/>
          </div>
          <div>
            <NewUser />
          </div>
        </div>

        <div className="wlc-msg-container">
          <div className="monthly-content">
            <Productlinechart />
          </div>
          <div>
            <ChartCard />
          </div>
         
        </div>
        <div className="wlc-msg-container">
          <div>
            <PieChart />
          </div> 
          <div><Composedchart/>
            </div>
</div>

      </div>
    </>
  );
};

export default Dashboard;
