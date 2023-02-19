import "./TableRow.css";
import EditIcon from "../../../images/icons_org/EditIcon.svg";

const TableRow = (props) => {
  return (
    <tr className="table_row">
      <td>
        {props.icon}&nbsp; {props.name}
      </td>
      <td>{props.inn}</td>
      <td>{props.director}</td>
      <td>{props.address}</td>
      <td>
        <img src={EditIcon} alt="edit" />
      </td>
    </tr>
  );
};

export default TableRow;
