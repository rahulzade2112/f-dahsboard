import { Box, InputLabel } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./edit.css";
// import "../../../Utility/Interceptors/ReqInterceptor";
// import axios from "axios";

export default function Edit() {
  // const removeDp = () => {
  //   axios.post("http://localhost:8080/removedp").then((res) => {
  //     console.log(res);
  //     localStorage.removeItem("token");
  //     localStorage.setItem("token", res.data.token);
  //     window.location.reload();
  //   });
  // };
  // console.log(props);
  
  return (
    <div>
      <Box
        sx={{
          width: "100%",
          height: "80vh",
          padding: "10px",
          border: "1px solid #efefef",
          backgroundColor: "white",
          borderRadius: "8px",
        }}
      >
        <div style={{ display: "flex" }}>
          <div className="display_picture">
            <img
              style={{ height: "100px", width: "100px" }}
              // src={props.state.avatar}
            />
          </div>
          <div style={{ marginTop: "20px" }}>
            <button className="action-img">Change Avtar</button>
            <button className="action-img uncolored" >
              Remove
            </button>
          </div>
        </div>

        <div className="form-container">
          <div className="fields-container">
            <InputLabel className="input-label">Name</InputLabel>
            <input type="text" className="edit-fields"></input>
            <InputLabel className="input-label">Username</InputLabel>
            <input type="text" className="edit-fields"></input>
          </div>

          <div className="fields-container">
            <InputLabel className="input-label">Email</InputLabel>
            <input type="text" className="edit-fields"></input>
            <InputLabel className="input-label">DOB</InputLabel>
            <input type="text" className="edit-fields"></input>
          </div>

          <div className="fields-container">
            <InputLabel className="input-label">Phone No.</InputLabel>
            <input type="text" className="edit-fields"></input>
            <InputLabel className="input-label"> City</InputLabel>
            <input type="text" className="edit-fields"></input>
          </div>

          <button className="action-img save">Save Changes</button>
        </div>
      </Box>
    </div>
  );
}
