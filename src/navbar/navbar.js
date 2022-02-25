import React, { useState, useEffect } from "react";
import logo from "../Assets/Logo.png";
import "./navbar.css";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const path = useLocation().pathname;
  let navigate = useNavigate();

  const [navbarBg, setNavbar] = useState(false);
  const changeBackground = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 20) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  });

  return (
    <div
      className={`${path === "/transfer" || navbarBg ? "bgFix" : ""} navbar }`}
    >
      <div
        style={{ cursor: "pointer" }}
        onClick={() => navigate("/")}
        className="navbarImage"
      >
        <img src={logo} alt="logo" />
        <p>| Bridge </p>
      </div>
      <div className="navbarContent">
        <p style={{ cursor: "pointer" }}>Docs</p>
        <p style={{ cursor: "pointer" }}>Github</p>
        {path === "/transfer" && (
          <div
            style={{
              border: "1px solid",
              borderColor:
                "-moz-linear-gradient(85deg, rgba(59, 65, 85, 1) 8%, rgba(161, 77, 175, 1) 47%, rgba(76, 101, 150, 1) 74%, rgba(56, 27, 61, 1) 99%) -webkit-linear-gradient(85deg, rgba(59, 65, 85, 1) 8%, rgba(161, 77, 175, 1) 47%, rgba(76, 101, 150, 1) 74%, rgba(56, 27, 61, 1) 99%) -o-linear-gradient(85deg, rgba(59, 65, 85, 1) 8%, rgba(161, 77, 175, 1) 47%, rgba(76, 101, 150, 1) 74%, rgba(56, 27, 61, 1) 99%) progid:DXImageTransform.Microsoft.gradient( startColorstr='#381B3D', endColorstr='#3B4155', GradientType=0 ) -ms-linear-gradient(85deg, rgba(59, 65, 85, 1) 8%, rgba(161, 77, 175, 1) 47%, rgba(76, 101, 150, 1) 74%, rgba(56, 27, 61, 1) 99%) linear-gradient(85deg, rgba(59, 65, 85, 1) 8%, rgba(161, 77, 175, 1) 47%, rgba(76, 101, 150, 1) 74%, rgba(56, 27, 61, 1) 99%)",
              borderRadius: "9px",
              paddingLeft: "20px",
              paddingTop: "4px",
              height: "35px"
            }}
          >
            <p style={{ cursor: "pointer" }}>T1oi3u4oi23u4</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
