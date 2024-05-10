import React, { useState, useEffect } from "react";
import "./newuser.css"; // Ensure you have the corresponding CSS file for styling
import axios from "axios";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
// Dummy user data, replace with your actual API call

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const dummyUserData = [
  {
    id: 7,
    email: "michael.lawson@reqres.in",
    first_name: "Michael",
    last_name: "Lawson",
    follower: "30k",
    avatar: "https://reqres.in/img/faces/7-image.jpg",
  },
  {
    id: 8,
    email: "lindsay.ferguson@reqres.in",
    first_name: "Lindsay",
    last_name: "Ferguson",
    follower: "20k",

    avatar: "https://reqres.in/img/faces/8-image.jpg",
  },
  {
    id: 9,
    email: "tobias.funke@reqres.in",
    first_name: "Tobias",
    last_name: "Funke",
    follower: "30k",

    avatar: "https://reqres.in/img/faces/9-image.jpg",
  },
  {
    id: 10,
    email: "byron.fields@reqres.in",
    first_name: "Byron",
    last_name: "Fields",
    follower: "20k",
    avatar: "https://reqres.in/img/faces/10-image.jpg",
  },
  {
    id: 11,
    email: "george.edwards@reqres.in",
    first_name: "George",
    last_name: "Edwards",
    follower: "30k",

    avatar: "https://reqres.in/img/faces/11-image.jpg",
  },
  {
    id: 12,
    email: "rachel.howell@reqres.in",
    first_name: "Rachel",
    last_name: "Howell",
    follower: "20k",
    avatar: "https://reqres.in/img/faces/12-image.jpg",
  },
  // ... add more users as needed
];
const NewUser = () => {
  const [users, setUsers] = useState(dummyUserData);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    axios.get("https://reqres.in/api/users?page=2").then((res) => {
      // console.log(res.data.data);
      const dummyUserData = res.data.data;
    });
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === users.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Switches user every 5 seconds

    return () =>
      clearInterval(intervalId); /* Clean up the interval on unmount*/
  }, [users.length]);

  return (
    <div className="carousel-container">
      {users.map((user, index) => (
        <div
          id="carousel-content"
          key={user.id}
          style={{ borderRadius: "8px" }}
          // backgroundColor={user.colors}
          className={`carousel-item ${index === currentIndex ? "active" : ""}`}
        >
          <img
            style={{ width: "120px", height: "120px" }}
            src={user.avatar}
          ></img>
          <h3>
            {user.first_name}
            {" " + user.last_name}
          </h3>
          <p>{user.email}</p>
          <div
            style={{
              alignItems: "center",
              flexDirection: "row",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <div style={{ display: "flex" ,paddingTop:"5px"}}>
              <p style={{ fontSize: 17, paddingTop:"5px" }}>{"+" + user.follower}</p>
              <TrendingUpIcon style={{ fontSize: 30, color: "#414141" }} />
            </div>
            <span style={{ fontSize: "22px" }}>|</span>

            <Checkbox
              {...label}
              icon={<FavoriteBorder style={{ fontSize: 28 }} />}
              checkedIcon={<Favorite style={{ fontSize: 28, color: "red" }} />}
            />
          </div>
          <br />
          <button
            style={{
              backgroundColor: "#f37085",
              color: "#fff",
              width: "150px",
              height: "30px",
            }}
          >
            Follow +
          </button>
        </div>
      ))}
    </div>
  );
};

export default NewUser;
