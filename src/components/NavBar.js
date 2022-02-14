import React from "react";
import { Navbar } from "react-bootstrap";


  function NavBar() {
      return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/">Home</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <a className="nav-link" href="/dice">Dice</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/adventurers">Adventurers</a>
              </li>
             </ul>
          </div>
        </nav>
          
      )
  }


export default NavBar;