import React from "react";

import { NavLink } from "react-router-dom";
import "./NavbarLink.scss";

const NavbarLink = (props) => (
  <NavLink
    to={props.url}
    className={({ isActive }) =>
      "navbar_link " + `${isActive ? "active_link" : ""}`
    }
  >
    return (
    <div className="navbar_link ">
      <div>{props.icon}</div>
      <span>{props.title}</span>
    </div>
    );
    {/* {({ isActive }) => {
      return (
        <div className={"navbar_link " + `${isActive ? "active_link" : ""}`}>
          <div>{props.icon}</div>
          <span>{props.title}</span>
        </div>
      );
    }} */}
  </NavLink>

  // <NavLink
  //   to={props.url}
  //   className={({ isActive }) =>
  //     "navbar_link " + `${isActive ? "active_link " : ""}`
  //   }
  // >
  //   {({ isActive }) => {
  //     return (
  //       <div className={"navbar_link " + `${isActive ? "active_link" : ""}`}>
  //         <div>{props.icon}</div>
  //         <span>{props.title}</span>
  //       </div>
  //     );
  //   }}

  //   <span className="">{props.icon}</span>
  //   <span>{props.title}</span>
  // </NavLink>
);

export default NavbarLink;
