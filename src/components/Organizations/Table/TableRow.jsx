import React, { useState, useMemo } from "react";
import "./TableRow.css";
import EditIcon from "../../../images/icons_org/EditIcon.svg";
// import ButtonEdit from './Buttons/Button_edit';
// import ButtonDelete from './Buttons/Button_delete';
// import ButtonSave from './Buttons/Button_save';
// import ButtonCancel from './Buttons/Button_cancel';
// import classnames from 'classnames';

//условия валидации полей input
const englishFormat = /^[a-zA-Z-\s]+$/; //поле english должно содержать только слова англ буквами, включая дефис (можно прописывать отдельно и заглавные и строчные)
const russianFormat = /^[а-яё-\s]+$/i; //поле english должно содержать только слова русскими буквами, включая дефис (а можно использовать флаг /i)

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

      {/* <td>
        {editMode ? (
          <input
            className={`inputTableRow ${classNameInputTranscription}`}
            value={rowData.transcription}
            name="transcription"
            onChange={handleChange}
          />
        ) : (
          rowData.transcription
        )}
      </td>
      <td>
        {editMode ? (
          <input
            className={`inputTableRow ${classNameInputRussian}`}
            value={rowData.russian}
            name="russian"
            onChange={handleChange}
          />
        ) : (
          rowData.russian
        )}
      </td>

      {editMode ? (
        <td className="tableRow_actions">
          <ButtonSave
            onClick={handleClickSave}
            // disabled={isRowInValid} //надо закомментить это, чтобы срабатывал alert
          />
          <ButtonCancel onClick={handleClick} />
        </td>
      ) : (
        <td className="tableRow_actions">
          <ButtonEdit onClick={handleClick} />
          <ButtonDelete onClick={() => deleteWord(props.id)} />
        </td>
      )} */}
    </tr>
  );
};

export default TableRow;
