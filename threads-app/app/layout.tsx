import React from "react";
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";
import "./globals.css"

const HeaderTop = () => {
  return (
    <div>
      <style>
        {`
          body {
            background-color: black;
            color: white;
            margin: 0; /* Remove default body margin */
          }
          .navbar {
            background-color: black;
            display: flex;
            justify-content: center; /* Center content horizontally */
            align-items: center;
            height: 4rem; /* Set a fixed height for the navbar */
            border-bottom: 1px solid white; /* Add a white border at the bottom */
          }
          .navbar-text {
            font-size: 15px;
          }
        `}
      </style>
      <div className="navbar">
        <div className="navbar-text">
          <b>CONFESSIONS</b>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;


