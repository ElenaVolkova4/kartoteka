// import React, { ReactNode } from "react";
import { Link } from "react-router-dom";

const NavbarLink = (props) => (
  <Link to={props.url} className="navbar_link">
    <span className="{styles.navbar_icon}">{props.icon}</span>
    <span>{props.title}</span>
  </Link>
);

export default NavbarLink;
