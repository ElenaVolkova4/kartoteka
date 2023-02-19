import Header from "../Header/Header";
import ButtonWhite from "../Buttons/ButtonWhite/ButtonWhite";

import "./Organizations.css";
import Search from "../Search/Search";
import Table from "./Table/Table";

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
      <div className="organizations_content">
        {" "}
        <Table />
      </div>
    </div>
  );
};

export default Organizations;
