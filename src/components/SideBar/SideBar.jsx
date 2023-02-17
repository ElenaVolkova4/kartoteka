import { NavLink } from "react-router-dom";
// import { NavbarLink } from "react-router-dom";

import MainIcon from "../../images/icons/MainIcon.svg";
import UserIcon from "../../images/user.svg";
import NavbarLink from "./NavbarLink";

import "./SideBar.scss";

//для выделения активных ссылок другим цветом
const setActiveLink = ({ isActive }) => (isActive ? "activeLink" : "");

const SideBar = () => {
  return (
    <div className="sideBar">
      <NavbarLink title="Главная" icon={<img src={MainIcon} />}></NavbarLink>
      <NavbarLink
        title="Константин Константиновский"
        icon={<img src={UserIcon} />}
      ></NavbarLink>
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
      <div className="sideBar_item">
        <NavLink to="/" className={setActiveLink}>
          Константин Константиновский
        </NavLink>
      </div>
      <div className="sideBar_item">
        <NavLink to="/events" className={setActiveLink}>
          Мероприятия
        </NavLink>
      </div>
      <div className="sideBar_item">
        <NavLink to="/" className={setActiveLink}>
          Сотрудники
        </NavLink>
      </div>
      <div className="sideBar_item">
        <NavLink to="/" className={setActiveLink}>
          Заметки
        </NavLink>
      </div>
      <div className="sideBar_item">
        <NavLink to="/" className={setActiveLink}>
          Статистика
        </NavLink>
      </div>{" "}
      <div className="sideBar_item">
        <NavLink to="/" className={setActiveLink}>
          Удобрения
        </NavLink>
      </div>
      <div className="sideBar_item">
        <NavLink to="/users" className={setActiveLink}>
          Погода
        </NavLink>
      </div>
      <div className="sideBar_item">
        <NavLink to="/organizations" className={setActiveLink}>
          Организации
        </NavLink>
      </div>
    </div>
  );
};

export default SideBar;
