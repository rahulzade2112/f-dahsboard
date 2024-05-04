import React from 'react'
import Box from "@mui/material/Box";
// import "./general.css";
import { InputLabel } from "@mui/material"
const ProductShipping = () => {
  return (
    <div style={{display:"flex",
    width:"90%",
    backgroundColor:"red",
    marginLeft:"auto",
    marginRight:"auto",       
     marginTop:"4%",
     borderRadius:"10px",

  }} >
  <div>
    <Box
      sx={{
        width: "100%",
        height: "70%",
        border: "1px solid #efefef",
        backgroundColor: "white",
        borderRadius: "8px",
        padding: "10px",
      }}
    >
      <h3>Shipping</h3>
      <InputLabel>
        <span style={{ color: "red" }}>*</span>Width:
      </InputLabel>
      <input
        type="number"
        className="product-input"
        placeholder="Width"
      ></input>
      <InputLabel>
        <span style={{ color: "red" }}>*</span>Height
      </InputLabel>
      <input
        type="number"
        className="product-input"
        placeholder="Height"
      ></input>
      <InputLabel>
        <span style={{ color: "red" }}>*</span>Weight
      </InputLabel>
      <input
        type="number"
        className="product-input"
        placeholder="Weight"
      ></input>
      <InputLabel>
        <span style={{ color: "red" }}>*</span>Shipping Fees
      </InputLabel>
      <input type="number" className="product-input" placeholder=" $"></input>
    </Box>
  </div>
  <div
        className="chart-container"
        style={{ width: "30%", height: "255px" ,border:"5px solid "}}
      >
        <em><b>Media</b></em>
        <input type="file" className="upload"></input>
      </div>
    </div>
  )
}

export default ProductShipping
