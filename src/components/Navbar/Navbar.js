import React from "react";

const Navbar = props => (
  <nav>
    <ul>
      <li>Current Score: {props.currentScore}</li>

      <li>Top Score: {props.topScore}</li>

      <li>{props.message}</li>
    </ul>
  </nav>
);

export default Navbar;
