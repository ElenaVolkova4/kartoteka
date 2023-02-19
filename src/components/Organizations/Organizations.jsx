import Header from "../Header/Header";
import ButtonWhite from "../Buttons/ButtonWhite/ButtonWhite";

import "./Organizations.css";
import Search from "../Search/Search";

const Organizations = () => {
  return (
    <div
    // className=''
    >
      <Header
        title="Организации"
        search=<Search />
        button=<ButtonWhite title="Найти" />
      />
    </div>
  );
};

export default Organizations;
