import React from "react";
// import {Link} from 'react-router-dom'
import "./Header.css";
import log from "./../../assets/logo.png";
// import { Link } from "@mui/material";
const Header = () => {
  return (
    <div>
      <header>
        <div className="logo">
          <img src={log}></img>
        </div>
        <input
          type="text"
          className="inputheader"
          placeholder="🔍 Search"
        ></input>

        <div className="userdetails">
          <img className="notification"></img>
          <p className="username"></p>
        </div>
      </header>
    </div>
  );
};
export default Header;
