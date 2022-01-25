import React from "react";
// import { Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const linkStyles = {
    display: "inline-block",
    width: "50px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "blue",
    TextDecoration: "none",
    color: "white",
  };

  function NavBar() {
      return (
          <div>
            <NavLink
          to="/"
          exact
          style={linkStyles}
          activeStyle={{
            background:"darkblue",
          }}
          >
            Home
          </NavLink>
          <NavLink
          to="/dice"
          exact
          style={linkStyles}
          activeStyle={{
            background:"darkblue",
          }}
          >
            Dice
          </NavLink>
          </div>
      )
  }


export default NavBar;