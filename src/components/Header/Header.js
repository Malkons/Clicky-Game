import React from "react";

const Header = props => (
  <div>
    <h1>{props.children}</h1>
    <h2>{props.message}</h2>
  </div>
);

export default Header;
