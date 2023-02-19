import "./Search.css";
import FilterIcon from "../../images/icons/FilterIcon.svg";

const Search = () => {
  return (
    <div className="search">
      {" "}
      <input
        className="search_input"
        placeholder="Поиск организации по ИНН или ОГРН"
      ></input>
      <img src={FilterIcon} alt="filter" />
    </div>
  );
};
// Поиск организации по ИНН или ОГРН
export default Search;
