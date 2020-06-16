import React from "react";
import logo from "./assets/winc-logo.png";

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Winc Academy Logo" className="logo" />
      <h1 className="title">Student Dashboard</h1>
    </header>
  );
}

export default Header;
