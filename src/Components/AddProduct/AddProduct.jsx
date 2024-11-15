import "./add.css";
import React, { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
const AddProduct = () => {
  // const [product, setProduct] = useState({
  //   productName: '',
  //   price: '',
  //   quantity: '',
  //   category: '',
  //   shipping: {
  //     width: '',
  //     height: '',
  //     shippingCharges: '',
  //     weight: ''
  //   }
  // });

  // const categories = ['Electronics', 'Books', 'Clothing', 'Home Appliances']; // Add more categories as needed

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   if (name.startsWith('shipping')) {
  //     setProduct((prevProduct) => ({
  //       ...prevProduct,
  //       shipping: {
  //         ...prevProduct.shipping,
  //         [name]: value
  //       }
  //     }));
  //   } else {
  //     setProduct((prevProduct) => ({
  //       ...prevProduct,
  //       [name]: value
  //     }));
  //   }
  // };

  // Handle the form submission, such as sending data to a server or storing it in a database.

  return (
    <>
      <div style={{ display: "flex", gap: "4%", padding: "20px" }}>
        <Box
          sx={{
            height: "580px",
            width: "48%",
            border: "1px solid #efefef",
            backgroundColor: "white",
            borderRadius: "8px",
            paddingLeft: "20px",
          }}
        >
          <h3>Basic Info</h3>
          <InputLabel>
            <span style={{ color: "red" }}>*</span>Product Name
          </InputLabel>
          <input
            type="text"
            className="product-input"
            placeholder="Product Name"
            name="Name"
          ></input>
          <InputLabel>
            <span style={{ color: "red" }}>*</span>Price
          </InputLabel>
          <input
            type="number"
            className="product-input"
            placeholder=" $ Price"
            name="Price"
          ></input>
          <InputLabel>
            <span style={{ color: "red" }}>*</span>Quantity
          </InputLabel>
          <input
            type="number"
            className="product-input"
            placeholder="Quantity"
            name="Quantity"
          ></input>
          <InputLabel>
            <span style={{ color: "red" }}>*</span>Category
          </InputLabel>
          <select className="category-dropdown" name="Category">
            <option selected value=""></option>
            <option value="Electronics">Electronics</option>
            <option value="Fashion">Fashion</option>
            <option value="Furniture">Furniture</option>
          </select>
          <h3>Media</h3>
          <input
            type="file"
            style={{ width: "50%", height: "175px" }}
            className="upload"
            name="myFile"
          ></input>
        </Box>

        <Box
          sx={{
            width: "48%",
            height: "580px",
            border: "1px solid #efefef",
            backgroundColor: "white",
            borderRadius: "8px",
            paddingLeft: "20px",
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
          <input
            type="number"
            className="product-input"
            placeholder=" $"
            name="Shipping"
          ></input>
        </Box>
      </div>
    </>
  );
};

export default AddProduct;
.