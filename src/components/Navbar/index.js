

import React from "react";

// import topscore and yourscore here
// in line 16 and 17, it should've worked but it doesn't not sure why, any feedback is appreciated
  function Navbar(props) {
    return (
      <nav className="navbar navbar-light bg-light">
      <h1 className="navbar-brand mb-0 h1">Clicky Game</h1>


      
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <span className="navbar-text">Click an image to begin!       . <span className="sr-only">(current)</span></span>
            <span className="navbar-text">   Score: {props.yourScore}<span className="sr-only">(current)</span></span>
            <span className="navbar-text">| Top Score: {props.totalScore}  <span className="sr-only">(current)</span></span>
          </li>         
        </ul>

      </nav>
    )
  }

  export default Navbar;