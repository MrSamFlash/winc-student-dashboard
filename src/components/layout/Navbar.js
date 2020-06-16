import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";

function Navbar() {
  return (
    <nav className="nav">
      <Link className="linkNavbar" to="/">
        All students
      </Link>
      <Link className="linkNavbar" to="/Evelyn">
        Evelyn
      </Link>
      <Link className="linkNavbar" to="/Aranka">
        Aranka
      </Link>
      <Link className="linkNavbar" to="/Floris">
        Floris
      </Link>
      <Link className="linkNavbar" to="/Hector">
        Hector
      </Link>
      <Link className="linkNavbar" to="/Martina">
        Martina
      </Link>
      <Link className="linkNavbar" to="/Maurits">
        Maurits
      </Link>
      <Link className="linkNavbar" to="/Rahima">
        Rahima
      </Link>
      <Link className="linkNavbar" to="/Sandra">
        Sandra
      </Link>
      <Link className="linkNavbar" to="/Wietske">
        Wietske
      </Link>
      <Link className="linkNavbar" to="/Storm">
        Storm
      </Link>
    </nav>
  );
}

export default Navbar;
