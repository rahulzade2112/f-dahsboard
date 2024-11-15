import React from "react";
import Stack from "@mui/material/Stack";
import { LineChart } from "@mui/x-charts/LineChart";
import "./y.css";
const data = [10, 300, 200, null, 189, 239, 349, 340, 340];
const xData = [
 0,2, 4,  6,  8,  10,  12,  14,  16,  18,  20,  22,
  24, 26, 28,  30,
];

const MonthlyDataChart = () => {
  return (
    <div>
      <div className="monthly-container">
        <Stack sx={{ width: "100%", color: "#fff", textAlign: "center" }}>
          <LineChart
            xAxis={[{ data: xData, scaleType: "point" }]}
            series={[{ data, connectNulls: true }]}
            height={320}
            margin={{ top: 25, bottom: 20 }}
            
          />
        </Stack>
      </div>
    </div>
  );
};

export default MonthlyDataChart;
