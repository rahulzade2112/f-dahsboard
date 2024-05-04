import React from "react";
import './d.css'
const Dashboard = () => {
  const arr=[25,5,4 ,2,4,2,4,2,4,2,4,2,4];

  return (<>
      {/* <div className="container-sm">100% wide until small breakpoint</div>
      <div className="container-md">100% wide until medium breakpoint</div>
      <div className="container-lg">100% wide until large breakpoint</div>
      <div className="container-xl">100% wide until extra large breakpoint</div>
      <div className="container-xxl">
        100% wide until extra extra large breakpoint
      </div> */}
      {/* <div
        className="cbt container-xl   text-success text-center p-2 border border-success"
      >gfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        */}
      {/* </div> */}


<div className="d-container">
{ arr.map((elem) => (

<div style={{width:"150px", height:"220px",marginLeft:"30px",marginTop:"30px", backgroundColor:"red"}} ></div>
    ))}</div>
    </>
  );
};

export default Dashboard;
