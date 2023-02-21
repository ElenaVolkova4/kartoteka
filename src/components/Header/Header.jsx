import "./Header.css";
import AddBtn from "../../images/addBtn.png";
import SettingsBtn from "../../images/settingsBtn.png";

const Header = (props) => {
  return (
    <div className="header">
      <div className="header_column_first">
        {" "}
        <div className="header_title">{props.title}</div>{" "}
        <div className="header_status">{props.status}</div>
      </div>
      <div className="header_column_second">
        <div>{props.search}</div>
        <div>{props.button}</div>
        <img src={AddBtn} alt="add_button" />
        <img src={SettingsBtn} alt="seting_button" />
      </div>
    </div>
  );
};

export default Header;
