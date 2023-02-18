import React from "react";

import "./SideBar.css";
import NavbarLink from "./NavbarLink/NavbarLink";

// import { NavLink } from "react-router-dom";

import MainIcon from "../../images/icons/MainIcon.svg";
import MainIconBlue from "../../images/icons/MainIcon_blue.svg";

import UserIcon from "../../images/user.svg";
import EmployeesIcon from "../../images/icons/emp.svg";
import EventsIcon from "../../images/icons/EventsIcon.svg";
import NotesIcon from "../../images/icons/Notes.svg";
import Home from "../../images/icons/homepage.svg";

import { NavLink } from "react-router-dom";

const setActiveLink = ({ isActive }) => (isActive ? "active_link" : "");

const SideBar = () => {
  return (
    <div className="sideBar">
      {/* <div className="sideBar_item">
        {" "}
        <NavLink to="/home-page" className={setActiveLink}>
          <img src={MainIcon} />
          <div>Главная</div>
        </NavLink>
      </div> */}

      <NavLink to="/home-page">
        {({ isActive }) => (
          <div className={isActive ? "active_link" : ""}>
            {isActive ? <img src={MainIconBlue} /> : <img src={MainIcon} />}

            <span className={isActive ? "active_link" : ""}>Главная</span>
          </div>
        )}
      </NavLink>

      <NavLink to="/events">
        {({ isActive }) => (
          <div className={isActive ? "active_link" : ""}>
            {isActive ? <img src={MainIconBlue} /> : <img src={MainIcon} />}

            <span className={isActive ? "active_link" : ""}>Мероприятия</span>
          </div>
        )}
      </NavLink>

      <NavLink to="/organizations">
        {({ isActive }) => (
          <div className={isActive ? "active_link" : ""}>
            {isActive ? <img src={MainIconBlue} /> : <img src={MainIcon} />}

            <span className={isActive ? "active_link" : ""}>Организации</span>
          </div>
        )}
      </NavLink>

      {/* <NavbarLink
        url="/"
        title="Главная"
        // icon={
        //   <svg
        //     width="18"
        //     height="18"
        //     viewBox="0 0 18 18"
        //     fill="none"
        //     xmlns="http://www.w3.org/2000/svg"
        //   >
        //     <path
        //       d="M17.4288 7.90363L9.41951 0.170579C9.18619 -0.0568596 8.81404 -0.0568596 8.58072 0.170579L0.571694 7.90333C0.453785 8.01712 0.387207 8.17394 0.387207 8.33782C0.387207 8.67135 0.657597 8.94171 0.991092 8.94171H2.05544V17.3961C2.05544 17.7296 2.32579 18 2.65932 18H6.88652C7.22005 18 7.4904 17.7296 7.4904 17.3961V12.565H10.5098V17.3961C10.5098 17.7296 10.7802 18 11.1137 18H15.3409C15.6744 18 15.9448 17.7296 15.9448 17.3961V8.94171H17.0091C17.1729 8.94171 17.3295 8.87524 17.4433 8.75752C17.6751 8.5177 17.6686 8.13541 17.4288 7.90363ZM15.9448 8.33782C15.6113 8.33782 15.3409 8.60817 15.3409 8.94171V17.3961H11.1137V12.565C11.1137 12.2315 10.8434 11.9611 10.5098 11.9611H7.4904C7.15687 11.9611 6.88652 12.2315 6.88652 12.565V17.3961H2.65932V8.94171C2.65932 8.60817 2.38897 8.33782 2.05544 8.33782H0.991092L9.00012 0.605074L17.0122 8.33782H15.9448V8.33782Z"
        //       fill="currentColor"
        //     />
        //   </svg>
        // }
      /> */}

      {/* <NavbarLink
        title="Константин Константиновский"
        icon={<img src={UserIcon} />}
      ></NavbarLink> */}
      {/* <NavbarLink
          url="/"
          title="Главная"
          icon={<MainIcon />}
          className={setActiveLink}
        /> */}
      {/* <NavLink to="/profile" className={setActiveLink}>
          <div></div>
          Главная
        </NavLink> */}
      {/* <div className="sideBar_item">
        <NavLink to="/">Константин Константиновский</NavLink>
      </div>
      <div className="sideBar_item">
        <NavLink to="/events">Мероприятия</NavLink>
      </div>
      <div className="sideBar_item">
        <NavLink to="/">Сотрудники</NavLink>
      </div>
      <div className="sideBar_item">
        <NavLink to="/">Заметки</NavLink>
      </div>
      <div className="sideBar_item">
        <NavLink to="/">Статистика</NavLink>
      </div>{" "}
      <div className="sideBar_item">
        <NavLink to="/">Удобрения</NavLink>
      </div>
      <div className="sideBar_item">
        <NavLink to="/users">Погода</NavLink>
      </div>
      <div className="sideBar_item">
        <NavLink to="/organizations">Организации</NavLink>
      </div> */}
    </div>
  );
};

export default SideBar;
