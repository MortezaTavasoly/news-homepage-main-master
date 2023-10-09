import logo from "../assets/images/logo.svg";
import menuIcon from "../assets/images/icon-menu.svg";
import closeIcon from "../assets/images/icon-menu-close.svg";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import { useState } from "react";
const menu = document.querySelector(".links-mobile");

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => {
    if (showMenu) {
      setShowMenu(false);
      menu.style.display = "none";
    } else {
      setShowMenu(true);
      menu.style.display = "flex";
    }
  };
  const handleClose = () => {
    if (showMenu) {
      setShowMenu(false);
      menu.style.display = "none";
    } else {
      setShowMenu(true);
      menu.style.display = "flex";
    }
  };
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>

      <div className="links">
        <NavLink to="">Home</NavLink>
        <NavLink to="">New</NavLink>
        <NavLink to="">Popular</NavLink>
        <NavLink to="">Trending</NavLink>
        <NavLink to="">Categories</NavLink>
      </div>
      <div className="menu">
        <img src={menuIcon} alt="menu-icon" onClick={handleMenu} />
        <div className="links-mobile">
          <img src={closeIcon} alt="close-icon" onClick={handleClose} />
          <NavLink to="">Home</NavLink>
          <NavLink to="">New</NavLink>
          <NavLink to="">Popular</NavLink>
          <NavLink to="">Trending</NavLink>
          <NavLink to="">Categories</NavLink>
        </div>
      </div>
    </div>
  );
}
